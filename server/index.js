const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let compression = require('compression');
const helmet = require('helmet');
let EventEmitter = require('events');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(compression({ filter: shouldCompress }));

console.log(`Hello Node.js v${process.versions.node}!`);
