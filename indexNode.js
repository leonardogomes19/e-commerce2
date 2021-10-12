const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
//const bcrypt = require('bcrypt');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'eshop_informatica',
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
    const login = req.body.login;
    const password = req.body.password;

    db.query("SELECT * FROM cadastros WHERE login = ?", [login],
    (err, result) => {
        if (err) {
            res.send(err);
        }
        if(result.length == 0){
            db.query("INSERT INTO cadastros (login, password) VALUES (?, ?)",
             [login, password], (err, resultado) => {
                    if(err){
                        res.send(err);
                    }

                    res.send({msg: "Cadastrado com sucesso!"})
                }
            );
        } else {
            res.send({ msg: "Usuário já cadastrado!" });
        }
        
    });
});

app.post("/login", (req, res) => {
    const login = req.body.login;
    const password = req.body.password;

    db.query("SELECT * FROM cadastros WHERE login = ? AND password = ?", [login, password], (err, result) => {
         if(err){
             res.send(err);
         }
         if(result.length > 0){
                    res.send({msg: "Usuário logado com sucesso!"});
                 } else {
                    res.send({msg: "Conta não encontrada!"});
                 }
             });
         }
    )

app.listen(3001, () => {
    console.log("Rodando na porta 3001");
});