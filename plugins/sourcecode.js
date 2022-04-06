let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Source code')).buffer(), `
Sc Ori (Enc) : http://github.com/LynnXzy/scbotz-v1

Sc Recode (No Enc) : Chat + Minta Sama Owner Ngab, Gemratis Kok:v
`.trim(), 'DanzBot', 'Makasih Bg🥀', 'Thanks')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
