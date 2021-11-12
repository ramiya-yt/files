// -----------------------------------------------------------------------------------------------------------------------------
//  ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ----
// -----------------------------------------------------------------------------------------------------------------------------

const fs = require('fs');
if (fs.existsSync('ramiya.env')) require('dotenv').hatzu({ path: './ramiya.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
// -----------------------------------------------------------------------------------------------------------------------------
//  ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ----
// -----------------------------------------------------------------------------------------------------------------------------

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);
// -----------------------------------------------------------------------------------------------------------------------------
//           API උස්සන්න ද ආවෙ, ලැජ්ජා වෙයන් තනියම හදාගන්න බැරි එක ගැන. Owner ට ගරු කරලා Apikey මාරු කරලා ගනින් උස්සනවා නම් !
// -----------------------------------------------------------------------------------------------------------------------------
module.exports = {
  VERSION: 'v1.0.0',
  BOT: '🦹‍♂️ *AZURE v1.0*',
//----------------------------------------------------|-SITES-|-------------------------
  SITE1: 'https://api.dapuhy.ga/api/', 
  SITE2: 'https://api.dapuhy.ga/api/',
  SITE3: 'https://zenzapi.xyz/api/downloader/',
  SITE4: 'https://api-senku.herokuapp.com/api/',
  SITE5: 'https://api.chipa.xyz/api/',
  SITE6: 'https://api.zeks.me/api/',
  SITE7: 'https://rei-api.herokuapp.com/api/',
  SITE8: 'https://bx-hunter.herokuapp.com/api/',
  SITE9: 'https://hardianto-chan.herokuapp.com/api/',
  SITE10: 'https://zenzapi.xyz/api/',
//---------------------------------------------------|-SUB-URL-|-----------------------
  FBS2: 'snapsave?url',
  YTX1: 'ytmp4v2?url',
  YTX2: 'ytplaymp4v2?query',
  S10XMP3Q: 'playmp3?query=',
//-------------------------------------------------------------------------------------
//     Owner ට ගරු කරලා Apikey මාරු කරලා ගනින් උස්සනවා නම් ! පහල APIKEY උස්සන්න එපා
//-------------------------------------------------------------------------------------
  S1API: 'OSuDZukzPWE49ro',
  S2API: 'azure01',
  S3API: 'azure1',
  S4API: 'SenkuApi',
  S5API: '2NU5TC8GIGZNPL5NU357KJZF',  
  S6API: 'azurebot1',
  S7API: '0',
  S8API: 'Ikyy69',
  S9API: 'hardianto',
//-------------------------------------------------------------------------
  ADMIN: process.env.ADMIN === undefined ?'RAMIYA' : process.env.ADMIN,
  ADMIN1: process.env.ADMIN1 === undefined ?'RAMIYA' : process.env.ADMIN1,
    
// -----------------------------------------------------------------------------------------------------------------------------
//  ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ---- AZURE BOT ----
// -----------------------------------------------------------------------------------------------------------------------------
 };
