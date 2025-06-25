//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU9YN1V5Z0JTSm83ODl0bFV6M1NSNTFsR3ZlZXhSbERldkhxZTU1U1UzND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmR4VmFrdnJnUnlkM0pQL0JIVXBQYzlmNUxjamlwYUJqRXROVzFPbDZIWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlT25EdDB2UitmdVdMQjhodGlXNnRtTU1sSXdhbzlseE9iM3Z6WklLUW1NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0bEFIbmh5Um9rMkN1OGNnNTZvN1dLb2tWNXVUZGdKOHJ4T0NMZUtDNVJZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVQYUgrSWpRMmxNUXhDaGdYMDNKVGdRQ3J3Wkk2cm9VRFluMUdicmFLRlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBwczlFTXdCbEpzTjFSejNuRC9DYWt0bnI3clFsd0pvY001eU81N3oxRjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0gvUkZzb2ViV3dvZ0NQSDgvUElaQzVTVFlxNENSNUZCbStwRDVqZ3RWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieE9YKzFveXhsZWJGZEJLd1RXMXM3WHREeXNCRnZWRFlyTzk4dkJ0Sk1sMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpUNVQ4alNUNUJKWTlOSktuQkpCK1B3Zk9RTXNzZVBwRFVkNDlxbUYvUCtEVDlIRDV1VDJKUTc3NGsybHdZZjc5bEh6TWhhOXdNQzk2MlZpL1FQQkRnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMzLCJhZHZTZWNyZXRLZXkiOiIrYmJ4STUyM29Lb05VZzk1UERMSzRXTEVlSk5HOVN5U3QwbFRieTBtM2FnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzQyOTczMjY1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJBNDYwRUIyOTJEQjQ2QjhFOTU2QkMxQ0E3Mjc1QUY3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTA3NjM2ODR9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzQyOTczMjY1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkNBMTU3NDA2Qjk2OTc5REFBMDk0ODRDMjkwMDZGM0Q2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTA3NjM2ODR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkJVWmlJYTZOUXp1U1RnNWV0NWU1NWciLCJwaG9uZUlkIjoiMTNmZWQ0ZTQtNDkyYi00ZWZhLTkyYjUtMjIyNWFjMjQ5OGZhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndZYXlyc3dXR2lTSFZiZjBtOXl1MWsyZys5bz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuZU9ER3RHaHlvSTVnT3c5ZlVUcXVrSVYzTUE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR1hEU0hZVjEiLCJtZSI6eyJpZCI6Ijk0NzQyOTczMjY1OjE5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkRpbnVrYSBmaWxtIiwibGlkIjoiMjA1MDI5NTQxNzEyMTA0OjE5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTzJzd3VRRUVKS1I2c0lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiS1ZGYWttamx6VkkvUWl0cTNXRStpY3pIbzV1RkJQZmwzVmNGQ3V6b1Zqcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiR05OS3QzZWN5WkxTTlJhWnBXNkJ1enNnSjhHT0xnS1BGT1lrQWRWbElSc1hTZU94VXByUGwrSEs2MTdlL3J5b1N6SG5xb09aUjMzc0VQWVh0dUlxREE9PSIsImRldmljZVNpZ25hdHVyZSI6IlZsUFFsUjFOZWZaR1FQWHhnalNkUnk1dCtPYTlHaDRkMTFENitDcFdVWGxmQWpYajJJV3owS29ob3lSaVdib0VvWmdJRzdacVRWRENqRkk3cDJmcUJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDI5NzMyNjU6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU2xSV3BKbzVjMVNQMElyYXQxaFBvbk14Nk9iaFFUMzVkMVhCUXJzNkZZNyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwNzYzNjgwLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUc2bCJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94742973265",
  PASSWORD: 
    process.env.PASSWORD || "dinuka12**",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
}; 
