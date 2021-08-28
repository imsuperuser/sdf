// import fetch from "cross-fetch";
// import express from 'express';
// import path from 'path';

const express = require("express");
const path = require("path");
const fetch = require('cross-fetch');
const cors = require('cors');

const app = express();
app.use(cors());
// Serve static files from the React app
// app.use(express.static(path.join(__dirname, "client/build")));



// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/client/build/index.html"));
// });

app.get('/search/:name',async(req,res)=>{
    const name = req.params.name;
     const response = await fetch(`https://superheroapi.com/api/1579438955593639/search/${name}`);
     
     response.json().then((response) => {
       res.send(response);
     });

})

app.get("/search/:id/biography", async (req, res) => {
  const id = req.params.id;
  const response = await fetch(
    `https://superheroapi.com/api/1579438955593639/${id}/biography`
  );

  response.json().then((response) => {
    res.send(response);
  });
});

app.get("/search/:id/connections", async (req, res) => {
  const id = req.params.id;
  const response = await fetch(
    `https://superheroapi.com/api/1579438955593639/${id}/connections`
  );

  response.json().then((response) => {
    res.send(response);
  });
});

if(process.env.NODE_ENV==="production"){
  app.use(express.static('client/build'));

  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  });
}
const port = process.env.PORT || 5000;
app.listen(port);

console.log(`listening on ${port}`);
