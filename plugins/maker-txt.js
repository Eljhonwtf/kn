let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''

if (command == 'txt' || command == 'escribir') {
if (!teks) throw `⚠️ 𝙌𝙐𝙀 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙊? 𝙐𝙎𝘼𝙍 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝙇𝘼 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝙁𝙊𝙍𝙈𝘼\n\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊: *${usedPrefix + command}* Hola LoliBot`;
let img = `${global.APIs.fgmods.url}/maker/txt?text=${encodeURIComponent(teks)}&apikey=${global.APIs.fgmods.key}`;
conn.sendFile(m.chat, img, 'img.png', `✍🏻 𝙀𝙎𝙏𝘼 𝙇𝙄𝙎𝙏𝙊!!\n${wm}`, m, null, fake);
}
    
if (command == 'brat') {    
if (!teks) throw `⚠️ Ingresar en texto\nEj: *${usedPrefix + command}* case "hola":\nm.reply("que onda")\nbreak`
let res = `${global.APIs.fgmods.url}/maker/carbon?text=${teks}&apikey=${global.APIs.fgmods.key}`
}
}
handler.help = ['txt', 'brat']
handler.tags = ['game']
handler.command = ['txt', 'escribir', 'brat']
handler.limit = 1
handler.register = true 
export default handler
  
