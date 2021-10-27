const fs = require('fs');
if (fs.existsSync('ramiya.env')) require('dotenv').hatzu({ path: './ramiya.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
  VERSION: 'v1.0.0',
  BOT: '🦹‍♂️ *AZURE v1.0*',
  SITE1: 'https://api.dapuhy.ga/api/', 
  FBS2: 'snapsave?url',
  YTS1: 'ytmp4v2?url',
  YTS2: 'ytplaymp4v2?query',
  S1API: 'OSuDZukzPWE49ro',
  S2API: 'azure01',
  S3API: 'azure02',
    
  ADMIN: process.env.ADMIN === undefined ?'RAMIYA' : process.env.ADMIN,
  ADMIN1: process.env.ADMIN1 === undefined ?'RAMIYA' : process.env.ADMIN1,
 };
