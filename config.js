/* Copyright (C) 2021 AZURE RAMIYA.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
AZURE RAMIYA
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);
module.exports = {
    VERSION: 'v8.0.0',
    EMOJI_COMMAND: process.env.EMOJI_COMMAND === undefined ? '🛡️' : process.env.EMOJI_COMMAND,
    EMOJI_DESCRIPTION: process.env.EMOJI_DESCRIPTION === undefined ? '⚙️' : process.env.EMOJI_DESCRIPTION,
    EMOJI_EXAMPLE: process.env.EMOJI_EXAMPLE === undefined ? '💬' : process.env.EMOJI_EXAMPLE,
    EMOJI_WARNING: process.env.EMOJI_WARNING === undefined ? '⚠️' : process.env.EMOJI_WARNING,
    PANEL_COMMAND: process.env.PANEL_COMMAND === undefined ? 'azure' : process.env.PANEL_COMMAND,
    TIME_ZONE: process.env.TIME_ZONE === undefined ? 'Asia/Colombo' : process.env.TIME_ZONE,
    BRANCH: 'main',
    HTTPS: process.env.HTTPS === undefined ? 'https://' : process.env.HTTPS,
    SUP_HEROKU: process.env.SUP_HEROKU === undefined ? 'herokuapp.com/' : process.env.SUP_HEROKU,
    HLOCK: process.env.HLOCK === undefined ? 'hadi-api.' : process.env.HLOCK,
    ENCRYPTION: process.env.ENCRYPTION === undefined ? 'api/' : process.env.EYENCRYPTION,
    TOXIC_P: process.env.TOXIC_P === undefined ? 'photoxy/' : process.env.TOXIC_P,
    TOXIC_T: process.env.TOXIC_T === undefined ? 'textpro/' : process.env.TOXIC_T,
    TOXIC_E: process.env.TOXIC_E === undefined ? 'ephoto/' : process.env.TOXIC_E,
    HCLOCK: process.env.HCLOCK === undefined ? 'h4ck3rs404-api.' : process.env.HCLOCK,
    DECODE: process.env.DECODE === undefined ? 'h4ck3rs404' : process.env.DECODE,
    HP: process.env.HP === undefined ? 'https://' : process.env.HP,
    HK: process.env.HK === undefined ? 'h4ck3rs404-api.' : process.env.HK,
    SUP: process.env.SUP === undefined ? 'herokuapp.com/' : process.env.SUP,
    PE: process.env.PE === undefined ? 'ephoto/' : process.env.PE,
    TNU: process.env.TNU === undefined ? 'api/' : process.env.TNU,
    SCRAPE: process.env.SCRAPE === undefined ? 'single-developers.' : process.env.SCRAPE,
    QR: process.env.QR === undefined ? 'logohq?' : process.env.QR,
    h: process.env.b === undefined ? '' : process.env.h,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './whatsasena.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    VIDAPI: 'azure1',
    ZRUN: "zenzapi",
    BAPIKEY: 'Ikyy69',
    SUPPORT: "9",
    SUPPORT2: "9",
    SUPPORT3: "9",
    SUPPORT4: "9"
};
