const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_17_11_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAzMixcbiAgICAgICAgOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDM5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDU0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAzNCxcbiAgICAgICAgODUsXG4gICAgICAgIDcxLFxuICAgICAgICA2NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTExLFxuICAgICAgICAzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwLFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDgyLFxuICAgICAgICA2MixcbiAgICAgICAgMjUzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDkwLFxuICAgICAgICA1NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYyLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM1LFxuICAgICAgICA2NyxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQyLFxuICAgICAgICA2OSxcbiAgICAgICAgODIsXG4gICAgICAgIDU4LFxuICAgICAgICA4MixcbiAgICAgICAgNDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA0LFxuICAgICAgICA0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDc4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE4LFxuICAgICAgICA5NyxcbiAgICAgICAgODYsXG4gICAgICAgIDcsXG4gICAgICAgIDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNixcbiAgICAgICAgNjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODYsXG4gICAgICAgIDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA4NyxcbiAgICAgICAgMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI2LFxuICAgICAgICA3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk5LFxuICAgICAgICA0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgODUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxODMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDksXG4gICAgICAgIDQxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwib3lVNFdUcXZBdjVLNFBneXR6V2pkY1hhQkpNMTE3aFI5ekswcW9jZnRKUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiT0lGTFd2MFlSM0dpZGN1SVhvdm1HQVwiLFxuICBcInBob25lSWRcIjogXCJkMDcwMjE4Zi1mM2E4LTQyOTAtOTUyZi00MzM1OTcyMTEyMmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc5LFxuICAgICAgMTYyLFxuICAgICAgMTkxLFxuICAgICAgMTg2LFxuICAgICAgMjUyLFxuICAgICAgMTQyLFxuICAgICAgMjMwLFxuICAgICAgMjE3LFxuICAgICAgNDMsXG4gICAgICAxOCxcbiAgICAgIDE2NSxcbiAgICAgIDgxLFxuICAgICAgOTMsXG4gICAgICAxMjgsXG4gICAgICAxOTEsXG4gICAgICAxNjEsXG4gICAgICAyMjcsXG4gICAgICA0MyxcbiAgICAgIDIyMixcbiAgICAgIDExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMSxcbiAgICAgIDIyLFxuICAgICAgODcsXG4gICAgICAxNixcbiAgICAgIDEwMyxcbiAgICAgIDE2NSxcbiAgICAgIDIwMCxcbiAgICAgIDM1LFxuICAgICAgMTg3LFxuICAgICAgMjIyLFxuICAgICAgNyxcbiAgICAgIDEsXG4gICAgICA0NSxcbiAgICAgIDIxNSxcbiAgICAgIDIxNixcbiAgICAgIDE0MyxcbiAgICAgIDEzNixcbiAgICAgIDI4LFxuICAgICAgMixcbiAgICAgIDIxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUUUo5Q0VBRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDA5MDY4NzU3OjQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2KfYqNmGINiz2YjYp9iq24xcIixcbiAgICBcImxpZFwiOiBcIjM3NTM4MDY0NTE5MTc5OjQxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tiRjY4SUdFUHFCekxrR0dBc2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiemRCbVhNZFNkdFdVOTNUZ2drSkdodWlBakpIT1pybmVOdTF5RVptTTZIbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWNWxRWXMvQkNBWW9MR3puR0xJckkvQmtDN3cxYW12a3FMWUw3czU4QVdKdEpPQ2FmeklFVzErdE0vNFp5YXlveWk3OWM1TWIzcVl2Nk9mMzNueGlEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvNTN6Zi96ZEVOQ1FuNWt4bkgwTXRkN3NSY25ndnAvRitPcUFSR204V1I3dG1ZWlpqdmpENzhLTHhxcHMwVlNLcVd5QnpGM0d1VnkrbkR1M2YzV1VBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MDkwNjg3NTc6NDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEzOTU4Mzhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-1e1c86aa-c402-410c-a426-68a6a9175e65",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "swati519",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
