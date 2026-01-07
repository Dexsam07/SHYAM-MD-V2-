// 🚀 SHYAM-MD V2 - THE LEGENDARY EDITION
// 👨‍💻 Developed By: DEX-SHYAM
// 🔗 GitHub: https://github.com/Dexsam07
// 📱 WhatsApp: https://wa.me/917384287404

const fs = require('fs');
const chalk = require('chalk');
require('dotenv').config();

// ==========================================
// 👑 OWNER & BOT CONFIGURATION
// ==========================================
global.SESSION_ID = process.env.SESSION_ID || ""; // Put Session ID here
global.owner = ["917384287404"]; // Add Multiple Owners here
global.ownernumber = process.env.OWNER_NUMBER || '917384287404';
global.ownername = process.env.OWNER_NAME || 'Dex Shyam Chaudhari';
global.botname = process.env.BOT_NAME || 'SHYAM-MD V2';

// ==========================================
// 🎨 UI & THEME SETTINGS (Ultra Design)
// ==========================================
global.themeemoji = '⚡';
global.wm = "⚡ SHYAM-MD V2 ⚡";
global.packname = 'Made By';
global.author = 'DEX-SHYAM ⚡';
global.prefa = ['.']; // Default Prefix
global.typemenu = 'v1'; // v1, v2, v3, v4
global.menuimg = "https://files.catbox.moe/ia1yfk.png"; // Your Logo

// ==========================================
// 🤖 AUTOMATION & LOGIC (Legendary Features)
// ==========================================
global.autoTyping = false;                // Auto Type (Fake Online)
global.autoRecord = false;                // Auto Record (Fake Voice)
global.available = true;                  // Always Online
global.autoread = false;                  // Auto Read All Messages
global.autoswview = true;                 // Auto View Status (Legendary)
global.autolike = true;                   // Auto React to Status
global.autobio = true;                    // Auto Dynamic Bio
global.anticall = true;                   // Anti Call System
global.antidelete = true;                 // Resend Deleted Messages
global.welcome = true;                    // Group Welcome & Left Message

// ==========================================
// 🛡️ SECURITY & ANTI-LINK
// ==========================================
global.antilink = true;                   // Global Anti-Link
global.antilinkkick = true;               // Kick Link Senders
global.antibad = true;                    // Delete Bad Words

// ==========================================
// 💬 CUSTOM REPLY MESSAGES (Professional)
// ==========================================
global.mess = {
    success: '✅ *Success! Action Completed.*',
    admin: '🛡️ *Access Denied!* This feature is only for Group Admins.',
    botAdmin: '🤖 *Error!* Please make the bot an Admin first.',
    owner: '👑 *VIP Feature!* This is only for my Master (Dex Shyam).',
    group: '👨‍👩‍👧‍👦 *Group Only!* Use this command in a group chat.',
    private: '👤 *Private Only!* This command is for Direct Messages.',
    wait: '⏳ *Processing...* SHYAM-MD is working on it.',
    error: '❌ *System Failure!* Please report this to Dex Shyam.',
    premium: '⭐ *Premium Only!* Upgrade your plan to use this.',
    endLimit: '📉 *Limit Reached!* Your daily limit has expired.',
}

// ==========================================
// 📊 LIMITS & ECONOMY
// ==========================================
global.limitawal = {
    premium: "Infinity",
    free: 20
};

// ==========================================
// 🖼️ MEDIA LOADER LOGIC
// ==========================================
let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`[UPDATE] settings.js updated successfully!`));
    delete require.cache[file];
    require(file);
});

// 🚀 SHYAM-MD V2 - THE LEGEND LIVES ON
