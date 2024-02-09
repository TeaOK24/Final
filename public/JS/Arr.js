const express = require('express')
const app = express()
const mysql2 = require('mysql2/promise')
const Sequelize = require('sequelize');
const db = require('./db/db');
const Russian_cuisine =db.russian_cuisine;


async function t02(){
    const result = await Russian_cuisine.findAll();
    return res.json(result);
}

t02()
