let handler = async (m, { conn, args, usedPrefix, command }) => {
const user = global.db.data.users[m.sender];
let targetUser = m.mentionedJid[0] || args[0]; 
if (!targetUser) return m.reply("⚠️ Debes etiquetar a la persona con la que deseas divorciarte.");
if (!user.marry || user.marry !== targetUser) return m.reply("⚠️ No estás casado con esta persona para poder divorciarte.");

global.db.data.users[user.marry] = global.db.data.users[user.marry] || {}; 
global.db.data.users[user.marry].marry = null;
global.db.data.users[m.sender].marry = null; 
conn.reply(m.chat, `@${m.sender.split('@')[0]} (${global.db.data.users[m.sender].name}) se Divorcio de @${targetUser.split('@')[0]} (${global.db.data.users[targetUser].name}) ahora están separados 😔\n\nEspero Vuelvan.`, m, { mentions: [m.sender, targetUser] });
};
handler.help = ['divorce <@tag>'];
handler.tags = ['econ'];
handler.command = ['divorce'];
handler.register = true;

export default handler;
