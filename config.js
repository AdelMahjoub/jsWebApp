///@ts-check
'use strict';

const parsed = require('dotenv').config().parsed;

module.exports = {
    port: parsed?.PORT || 3030,
    env: parsed?.NODE_ENV || 'production'
}