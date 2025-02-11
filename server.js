///@ts-check
'use strict';

const path = require('path');
const http = require('http');
const express = require('express');

const config = require('./config');

const app = express();
const server = http.createServer(app);

app.set('views', path.join(__dirname, 'views'));
app.set('view options', { rmWhitespace: true, cache: config.env == 'production' });
app.set('view engine', 'ejs');
app.set('trust proxy', 1);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules', 'bootstrap')));
app.use('/bootstrap-icons', express.static(path.join(__dirname, 'node_modules', 'bootstrap-icons')));
app.use('/tabulator-tables', express.static(path.join(__dirname, 'node_modules', 'tabulator-tables')));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules', 'jquery')));

app.get('/', async (req, res, next) => {
    res.render('index');
});

server.listen(config.port, () => console.log(`SREVER RUNNING:\nPORT: ${config.port}\nENV: ${config.env}`));