let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭═════════════════
║╭──❉ [ GRUB BOT ] ❉──
║│➸ *𝐆𝐑𝐎𝐔𝐏 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋¹*
║│➸ https://chat.whatsapp.com/KuW6Ojk8b3NF8GIpt9v4EL
║│➸ *𝐆𝐑𝐎𝐔𝐏 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋²*
║│➸ https://chat.whatsapp.com/EmCBNEjwdOcHzRlGCXKoxK
║╰───────────────
╰══════════════════

`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'GRUB SIRAD')).buffer(), ext, 'LynXzy💌', 'SIAP BANG🗿', 'AUTO JOIN', 'Donasi', '.donasi', m)

}
handler.help = ['gcbot']
handler.tags = ['main']
handler.command = /^(gcbot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
