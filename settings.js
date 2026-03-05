/*

  !- Credits By xuu Яyuici
  https://wa.me/6283821190464
  
*/

const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

//~~~~~~~~ [Settings Bot] ~~~~~~~~~//
global.owner = '62895393336779'
global.versi = "V12"
global.namaOwner = "Saurus"
global.packname = 'ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ'
global.botname = 'ᴀxᴏɴɪᴄ ᴠ12'
global.botname2 = 'AXONIC'

//~~~~~~~~~~~ [Settings Link] ~~~~~~~~~~//
global.linkOwner = "https://wa.me/62895393336779"
global.linkWebsite = "saurushosting.my.id"
global.linkGrup = "https://chat.whatsapp.com/LjAkXBBvObr8Zh5ejrGY3L?mode=gi_t"

//~~~~~~~~~~~ Settings Jeda ~~~~~~~~~~//
global.delayJpm = 10000
global.delayPushkontak = 10000

//~~~~~~~~ [Settings Saluran] ~~~~~~~~//
global.linkSaluran = "https://whatsapp.com/channel/0029VbBloUfFXUuTiSvrzs2e"
global.idSaluran = "120363418964199743@newsletter" // KALO GAADA YG INI JGN DIGANTI
global.namaSaluran = "saurus all information"

//~~~~~~~ [Settings Orderkuota] ~~~~~~~//
global.pinH2H = ""
global.passwordH2H = ""
global.merchantIdOrderKuota = ""
global.apiOrderKuota = ""
global.qrisOrderKuota = ""

//~~~~~~~~ [Settings Apikey] ~~~~~~~~~//
global.apiDigitalOcean = "-"
global.apiSimpleBot = "primexuu"

//~~~~~~~ [Settings Payment] ~~~~~~~~//
global.dana = "-"
global.ovo = "-"
global.gopay = "0"

//~~~~~~~~ [Ivent Settings] ~~~~~~~~//
global.owneroff = false
global.owneron = true
global.anticall = false
global.welcome = true
global.autopromosi = false
global.autoreadsw = false

//~~~~~~~~~~~ Manage Vercell ~~~~~~~~~~//
global.vercelToken = "" //Your Vercel Token

//~~~~~~~~~~~ Manage GitHub ~~~~~~~~~~//
global.githubToken = "" //Your GitHub Token
global.githubUsername = "" //Your GitHub Username


//~~~~~~~~ [Settings Image] ~~~~~~~~//
global.image = {
menu: "https://files.catbox.moe/f34pfk.jpg",
menu2: "https://files.catbox.moe/rimvp2.jpg",
menu3: "https://files.catbox.moe/sn4qqq.jpg",
reply: "https://files.catbox.moe/d0tkqd.jpg", 
logo: "https://files.catbox.moe/rimvp2.jpg", 
qris: "https://files.catbox.moe/ddn1z8.jpg"
}

//~~~ [settings panel & buy panel ~~~//
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = ""
global.apikey = "" //ptla
global.capikey = "" //ptlc

// ==== [ CloudFlare ] ==== \\
global.apitoken_cloudflare = "GNDV7FkVit99BJEQc-IEGzPlKq8NWFxXjbme3X_V"
global.accountid_cloudflare = "31654f03dc93c0d06643e6f158eff24d"
global.email_cloudflare = ""

//~~~~ [Settings Api Subdomain] ~~~~//
global.subdomain = {
"serverku.biz.id": {
"zone": "4e4feaba70b41ed78295d2dcc090dd3a", 
"apitoken": "d6kmqwlvi0qwCyMxoGuc3EBAYRYvbulhjhR9T0I7"
}, 
"privatserver.my.id": {
"zone": "699bb9eb65046a886399c91daacb1968", 
"apitoken": "fnl7ixlJ-Y-7zxJ7EUGEXitfmfLiPGW985iXobdu"
}, 
"panelwebsite.biz.id": {
"zone": "2d6aab40136299392d66eed44a7b1122", 
"apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}, 
"mypanelstore.web.id": {
"zone": "c61c442d70392500611499c5af816532", 
"apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}, 
"pteroserver.us.kg": {
"zone": "f693559a94aebc553a68c27a3ffe3b55", 
"apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}, 
"digitalserver.us.kg": {
"zone": "df13e6e4faa4de9edaeb8e1f05cf1a36", 
"apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}, 
"shopserver.us.kg": {
"zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
"apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}
}

//~~~~~~ Settings Message ~~~~~~//
global.mess = {
	owner: "*[ Error403 ]*\nFitur ini hanya untuk owner bot!",
	admin: "*[ Error403 ]*\nFitur ini hanya untuk admin grup!",
	botAdmin: "*[ Error403 ]*\nFitur ini hanya untuk ketika bot menjadi admin!",
	group: "*[ Error403 ]*\nFitur ini hanya untuk dalam grup!",
	private: "*[ Error403 ]*\nFitur ini hanya untuk dalam private chat!",
	prem: "*[ Error403 ]*\nFitur ini hanya untuk user premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})