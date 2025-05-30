let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || imagen
const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antifake, antiTiktok, antiYoutube, antiTelegram, modoadmin, antiFacebook, antiInstagram, antiTwitter, antiDiscord, antiTwitch, antiThreads, delete: del } = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let socialMediaConfig = ''
const socialMedia = [{ name: 'Tiktok', value: antiTiktok },
{ name: 'Youtube', value: antiYoutube },
{ name: 'Telegram', value: antiTelegram },
{ name: 'Fb', value: antiFacebook },
{ name: 'Ig', value: antiInstagram },
{ name: 'Twitter (x)', value: antiTwitter },
{ name: 'Discord', value: antiDiscord },
{ name: 'Twitch', value: antiTwitch },
{ name: 'Threads', value: antiThreads }
]

const activeSocialMedia = socialMedia.filter(sm => sm.value)
if (activeSocialMedia.length > 0) {
socialMediaConfig = activeSocialMedia.map(sm => `• Anti ${sm.name}: ✅`).join('\n')
}

let primaryBotMention = '';
let chat = global.db.data.chats[m.chat];
if (chat.primaryBot) {
const allBots = [conn, ...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED)];
const selectedBot = allBots.find(bot => bot.user.jid === chat.primaryBot);
if (selectedBot) {
primaryBotMention = `@${chat.primaryBot.split('@')[0]}`;
} else {
primaryBotMention = `@${chat.primaryBot.split('@')[0]}`;
}}

let text = `『 ＩＮＦＯ ＤＥ ＧＲＵＰＯ 』

*• ID :* 
${groupMetadata.id}

*• Nombre :* 
${groupMetadata.subject}

*• Miembros :*
${participants.length}

*• Creador del grupo :*
@${owner.split('@')[0]}

*• Admins :*
${listAdmin} 

*• 𝙲𝙾𝙽𝙵𝙸𝙶𝚄𝚁𝙰𝙽𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 :*
*• Bot : ${modoadmin ? 'Apagado 📴' : `${primaryBotMention ? `Online (${primaryBotMention})` : 'Online'} ✅`} 
• Bienvenida: ${welcome ? '✅' : '❌'}
• AntiLink: ${antiLink ? '✅' : '❌'}
• AntiFake: ${antifake ? '✅' : '❌'}
• Event: ${detect ? '✅' : '❌'}
• Anti eliminar: ${del ? '✅' : '❌'} ${socialMediaConfig ? '\n' + socialMediaConfig : ''}`.trim()
conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogp']
handler.tags = ['group']
handler.command = ['infogrupo', 'groupinfo', 'infogp'] 
handler.group = true
handler.register = true

export default handler