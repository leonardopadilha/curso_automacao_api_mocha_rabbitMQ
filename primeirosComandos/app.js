import express from 'express';
const app = express();

app.get('/hello',  (req, res) => {
    res.status(200).json({message: "Olá, Nodejs com express na nova pasta"})
});

app.listen(3000)

module.exports = app;