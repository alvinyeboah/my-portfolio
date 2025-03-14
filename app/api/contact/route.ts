// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // Parse the form data
    const formData = await req.json();
    const { name, email, message } = formData;

    // Validate the form data
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format the message to send to Telegram
    const telegramMessage = `
📨 New Contact Form Submission
---------------------------
👤 Name: ${name}
📧 Email: ${email}
💬 Message: ${message}
---------------------------
Sent on: ${new Date().toLocaleString()}
`;

    // Get environment variables
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const authorizedIds = process.env.AUTHORIZED_TELEGRAM_IDS?.split(',') || [];

    // Check if environment variables are set
    if (!botToken || authorizedIds.length === 0) {
      console.error('Telegram bot token or authorized IDs not configured');
      return NextResponse.json(
        { success: false, message: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Send the message to each authorized Telegram ID
    const sendPromises = authorizedIds.map(async (chatId) => {
      const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
      const response = await fetch(telegramApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: 'HTML',
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`Telegram API error: ${error}`);
      }
      
      return response.json();
    });

    // Wait for all messages to be sent
    await Promise.all(sendPromises);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
}