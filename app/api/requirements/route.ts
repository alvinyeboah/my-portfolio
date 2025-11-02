// app/api/requirements/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // Parse the form data
    const formData = await req.json();

    const {
      fullName,
      email,
      whatsapp,
      rolePosition,
      companyName,
      tagline,
      businessDescription,
      targetAudience,
      mainGoals,
      currentWebsite,
      googleDriveLink,
      likesDislikes,
      admiredWebsites,
      dislikedWebsites,
      contentAssets,
      brandColors,
      fontPreferences,
      lookFeel,
      visualAssets,
      avoidElements,
      pages,
      customPage,
      contentProvision,
      homepageSections,
      coreFeatures,
      customFunctionality,
      productFiltering,
      automatedEmails,
      domainName,
      domainRegistrar,
      hostingProvider,
      analytics,
      primaryKeywords,
      competitors,
      targetRegions,
      performanceExpectations,
      ongoingMaintenance,
      targetLaunch,
      importantDeadlines,
      contentAvailability
    } = formData;

    // Format the message to send to Telegram
    const telegramMessage = `
🚀 New Website Requirements Submission
═══════════════════════════════════════

📋 CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Name: ${fullName || 'Not provided'}
📧 Email: ${email || 'Not provided'}
📱 WhatsApp: ${whatsapp || 'Not provided'}
💼 Role: ${rolePosition || 'Not provided'}

🏢 BUSINESS OVERVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏷️ Company: ${companyName || 'Not provided'}
💭 Tagline: ${tagline || 'Not provided'}
📝 Description: ${businessDescription || 'Not provided'}
🎯 Target Audience: ${targetAudience || 'Not provided'}
🎯 Main Goals: ${mainGoals || 'Not provided'}
🌐 Current Website: ${currentWebsite || 'Not provided'}
📁 Google Drive: ${googleDriveLink || 'Not provided'}
💭 Current Site Likes/Dislikes: ${likesDislikes || 'Not provided'}
⭐ Admired Websites: ${admiredWebsites || 'Not provided'}
🚫 Disliked Websites: ${dislikedWebsites || 'Not provided'}

🎨 BRANDING & DESIGN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎨 Brand Colors: ${brandColors || 'Not provided'}
🔤 Fonts: ${fontPreferences || 'Not provided'}
💫 Look & Feel: ${lookFeel || 'Not provided'}
🖼️ Visual Assets: ${visualAssets || 'Not provided'}
📦 Available Content: ${Array.isArray(contentAssets) ? contentAssets.join(', ') : 'Not provided'}
🚫 Avoid Elements: ${avoidElements || 'Not provided'}

📄 PAGES & CONTENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📑 Pages Needed: ${Array.isArray(pages) ? pages.join(', ') : 'Not provided'}
📝 Custom Pages: ${customPage || 'None specified'}
✍️ Content: ${contentProvision || 'Not provided'}
🏠 Homepage Features: ${homepageSections || 'Not provided'}

⚙️ FEATURES & FUNCTIONALITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ Core Features: ${Array.isArray(coreFeatures) ? coreFeatures.join(', ') : 'Not provided'}
🔧 Custom Features: ${customFunctionality || 'Not provided'}
🔍 Product Filtering: ${productFiltering || 'Not provided'}
📧 Automated Emails: ${automatedEmails || 'Not provided'}

💻 TECHNICAL DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌐 Domain: ${domainName || 'Not provided'}
🏪 Registrar: ${domainRegistrar || 'Not provided'}
🖥️ Hosting: ${hostingProvider || 'Not provided'}
📊 Analytics: ${analytics || 'Not provided'}
🔑 SEO Keywords: ${primaryKeywords || 'Not provided'}

📅 TIMELINE & SUPPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 Launch Date: ${targetLaunch || 'Not provided'}
⏰ Deadlines: ${importantDeadlines || 'Not provided'}
📦 Content Ready: ${contentAvailability || 'Not provided'}
🛠️ Ongoing Support: ${ongoingMaintenance || 'Not provided'}

═══════════════════════════════════════
📅 Submitted: ${new Date().toLocaleString()}
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
      { success: true, message: 'Requirements submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending requirements to Telegram:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit requirements' },
      { status: 500 }
    );
  }
}