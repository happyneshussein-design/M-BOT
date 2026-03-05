/*

  !- Credits By PRIME XUU
  https://wa.me/6283821190464
  
*/

require('./settings');
const fs = require('fs');
const pino = require('pino');
const path = require('path');
const axios = require('axios');
const chalk = require('chalk');
const readline = require('readline');
const FileType = require('file-type');
const { exec } = require('child_process');
const { say } = require('cfonts')
const { Boom } = require('@hapi/boom');
const { verifyPassword, verifyPhoneNumber, connectPhoneNumber, terkentod } = require('./source/pass');

const { default: WAConnection, generateWAMessageFromContent, 
prepareWAMessageMedia, useMultiFileAuthState, Browsers, DisconnectReason, makeInMemoryStore, makeCacheableSignalKeyStore, fetchLatestWaWebVersion, proto, PHONENUMBER_MCC, getAggregateVotesInPollMessage } = require('@whiskeysockets/baileys');

const pairingCode = true
const url = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

let Keren = `\n\n╭━━━┳━╮╭━┳━━━┳━╮╱╭┳━━┳━━━╮\n┃╭━╮┣╮╰╯╭┫╭━╮┃┃╰╮┃┣┫┣┫╭━╮┃\n┃┃╱┃┃╰╮╭╯┃┃╱┃┃╭╮╰╯┃┃┃┃┃╱╰╯\n┃╰━╯┃╭╯╰╮┃┃╱┃┃┃╰╮┃┃┃┃┃┃╱╭╮\n┃╭━╮┣╯╭╮╰┫╰━╯┃┃╱┃┃┣┫┣┫╰━╯┃\n╰╯╱╰┻━╯╰━┻━━━┻╯╱╰━┻━━┻━━━╯\n\nʙᴏᴛ ɴᴀᴍᴇ : ᴀxᴏɴɪᴄ\nᴅᴇᴠᴇʟᴏᴘᴇʀ : xuu Яyuici\nᴠᴇʀsɪᴏɴ : ᴠ12\n=============================\n`
const DataBase = require('./source/database');
const { randomToken } = require('./library/scraper');
const database = new DataBase();
(async () => {
const loadData = await database.read()
if (loadData && Object.keys(loadData).length === 0) {
global.db = {
users: {},
groups: {},
database: {},
settings : {}, 
...(loadData || {}),
}
await database.write(global.db)
} else {
global.db = loadData
}
setInterval(async () => {
if (global.db) await database.write(global.db)
}, 3500)
})()

const { MessagesUpsert, Solving } = require('./source/message')
const { isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./library/function');
const { welcomeBanner, promoteBanner } = require("./library/welcome.js")

async function startingBot() {
//await verifyPassword()
const store = await makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState('session');
	
const Xuu = await WAConnection({
version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
browser: ['Ubuntu', 'Safari', '18.1'],
printQRInTerminal: !pairingCode, 
logger: pino({ level: "silent" }),
auth: state,
generateHighQualityLinkPreview: true,     
getMessage: async (key) => {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
/*return {
conversation: 'AXONIC 9.0 By XUUDev'
}*/}})

  if (pairingCode && !Xuu.authState.creds.registered) {
  console.log(chalk.red(Keren))
    const isVerified = await verifyPhoneNumber() //jngn di hps biar g error
    if (isVerified) {
      await connectPhoneNumber(Xuu)
    } else {
      console.log(chalk.red.bold('Gagal memverifikasi nomor, hentikan proses...'))
      return
    }
  }
	
Xuu.ev.on('creds.update', await saveCreds)

Xuu.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect, receivedPendingNotifications } = update
    if (connection === 'close') {
        const reason = new Boom(lastDisconnect?.error)?.output.statusCode
        if (reason === DisconnectReason.connectionLost) {
            console.log('Connection to Server Lost, Attempting to Reconnect...');
            startingBot()
        } else if (reason === DisconnectReason.connectionClosed) {
            console.log('Connection closed, Attempting to Reconnect...');
            startingBot()
        } else if (reason === DisconnectReason.restartRequired) {
            console.log('Restart Required...');
            startingBot()
        } else if (reason === DisconnectReason.timedOut) {
            console.log('Connection Timed Out, Attempting to Reconnect...');
            startingBot()
        } else if (reason === DisconnectReason.badSession) {
            console.log('Delete Session and Scan again...');
            startingBot()
        } else if (reason === DisconnectReason.connectionReplaced) {
            console.log('Close current Session first...');
            startingBot()
        } else if (reason === DisconnectReason.loggedOut) {
            console.log('Scan again and Run...');
            exec('rm -rf ./session/*')
            process.exit(1)
        } else if (reason === DisconnectReason.Multidevicemismatch) {
            console.log('Scan again...');
            exec('rm -rf ./session/*')
            process.exit(0)
        } else {		
            Xuu.end(`Unknown DisconnectReason : ${reason}|${connection}`)
        }
    }
    if (connection == 'open') {
        terkentod(Xuu)
        Xuu.sendMessage(Xuu.user.id.split(":")[0] + "@s.whatsapp.net", {
            text: `${`*#- AXONIC Botz Version V12* AKTIF`.toString()}`
        })
        console.log(`${chalk.blue.bold('🤖 Bot Name  :')} ${chalk.cyan.bold('Axonic Botz')}
${chalk.blue.bold('👤 Developer   :')} ${chalk.green.bold('Primexuu')}
${chalk.blue.bold('✅ Status    :')} ${chalk.yellow.bold('On')}`)
        randomToken(Xuu)
        
        // Auto join channels
        setTimeout(async () => {
            const channels = [
                "120363406324565188@newsletter",
                "120363425762235882@newsletter",
                "120363420619530273@newsletter",
                "120363350314602601@newsletter",
                "120363422694111157@newsletter"
            ]
            
            for (const channelId of channels) {
                try {
                    await Xuu.newsletterFollow(channelId)
                    await new Promise(resolve => setTimeout(resolve, 1500))
                } catch (err) {
                    console.log(chalk.red(`✗ Failed to join channel: ${channelId} - ${err.message}`))
                }
            }
        }, 5000)
        
    } else if (receivedPendingNotifications == 'true') {
        console.log('Please wait About 1 Minute...')
    }
})

await store.bind(Xuu.ev)	
await Solving(Xuu, store)
	
Xuu.ev.on('messages.upsert', async (message) => {
await MessagesUpsert(Xuu, message, store);
})

Xuu.ev.on('contacts.update', (update) => {
for (let contact of update) {
let id = 
Xuu.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}})
	
Xuu.ev.on('group-participants.update', async (update) => {
const { id, author, participants, action } = update
try {
const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: { "extendedTextMessage": {"text": "[ 𝗚𝗿𝗼𝘂𝗽 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 ]"}}}

if (global.db.groups[id] && global.db.groups[id].welcome == true) {
const metadata = await Xuu.groupMetadata(id)
let teks
for(let n of participants) {
let profile;
try {
profile = await Xuu.profilePictureUrl(n, 'image');
} catch {
profile = 'https://telegra.ph/file/95670d63378f7f4210f03.png';
}
if (action == 'add') {
teks = author.split("").length < 1 ? `@${n.split('@')[0]} join via *link group*` : author !== n ? `@${author.split("@")[0]} telah *menambahkan* @${n.split('@')[0]} kedalam grup` : ``
let img = await welcomeBanner(profile, n.split("@")[0], metadata.subject, "welcome")
await Xuu.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "W E L C O M E 👋", 
body: "", 
sourceUrl: global.linkGrup, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
} else if (action == 'remove') {
teks = author == n ? `@${n.split('@')[0]} telah *keluar* dari grup` : author !== n ? `@${author.split("@")[0]} telah *mengeluarkan* @${n.split('@')[0]} dari grup` : ""
let img = await welcomeBanner(profile, n.split("@")[0], metadata.subject, "remove")
await Xuu.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "G O O D B Y E 👋", 
body: "", 
sourceUrl: global.linkGrup, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
} else if (action == 'promote') {
teks = author == n ? `@${n.split('@')[0]} telah *menjadi admin* grup ` : author !== n ? `@${author.split("@")[0]} telah *menjadikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
let img = await promoteBanner(profile, n.split("@")[0], "promote")
await Xuu.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "P R O M O T E 📍", 
body: "", 
sourceUrl: global.linkGrup, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
} else if (action == 'demote') {
teks = author == n ? `@${n.split('@')[0]} telah *berhenti* menjadi *admin*` : author !== n ? `@${author.split("@")[0]} telah *menghentikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
let img = await promoteBanner(profile, n.split("@")[0], "demote")
await Xuu.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "D E M O T E 📍", 
body: "", 
sourceUrl: global.linkGrup, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
}}}
} catch (e) {
}
})

return Xuu

}


startingBot()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});