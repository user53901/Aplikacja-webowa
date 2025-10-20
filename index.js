const express = require('express');

const app = express();
const PORT = 8080;

app.get("/",(req, res)=>{
    res.send("Mój pierwszy program")
})

app.get("/hello/:name", (req, res)=>{
    res.send('Cześć, ${req.params.name}!');
})

app.get("/szukaj", (req,res)=>{
    const name = req.query.name;
    const age = req.query.age;
    const sex = req.query.sex;

    res.send(`Cześć, szukam osoby o imieniu ${name}, wieku ${age} i płci ${sex}`)
})

app.listen(PORT,(error)=>{
    if(!error){
        console.log("serwer działa na pocie: " +PORT)
    }
    else{
        console.log("port nie działa: ", error)
    }
})