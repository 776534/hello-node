const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("我是首頁");
})
app.get("/member", (req, res) => {
    res.send("我是會員頁");
})

app.listen(3002, () => {
    console.log("Server is listen at port 3002");
})