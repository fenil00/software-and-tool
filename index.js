const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname,'/views'));
app.set('view engine', 'ejs');

app.get("/",(req,res)=> {
    res.render("home");
});

app.listen(8000, () => {
    console.log("On port 8000!");
});