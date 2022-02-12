const express = require('express');

const PORT = 3001;
const HOST = '0.0.0.0';

const app = express();

const cors = require('cors');
app.use(cors());

const session = require('express-session');
    app.use(
        session({
            secret: 'secret string',
            resave: false,
            saveUninitialized: false,
            cookie: {}
        })
    );

    app.get('/', function(req, res){
        if(!req.session.pageCountByCurrentUserOrAnyNameYouWant)
            req.session.pageCountByCurrentUserOrAnyNameYouWant = 0;
        req.session.pageCountByCurrentUserOrAnyNameYouWant++;
        res.send({
            pageCount: req.session.pageCountByCurrentUserOrAnyNameYouWant
        });
    });  

    app.listen(PORT, HOST);
    console.log(`Running on http://${HOST}:${PORT}`);


