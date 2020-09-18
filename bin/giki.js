#!/usr/bin/env node

const commanders = require("../commanders/index.js");
const figlet = require("figlet");

async function runCommanders() {
  try {
    console.log(figlet.textSync("GIKI-HELPER"));

  } catch (e) {}
  commanders();
}

runCommanders();
