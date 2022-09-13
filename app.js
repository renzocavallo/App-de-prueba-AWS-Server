const express = require('express');

const app = express();

app.use(express.static(__dirname + "/frontend/build"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/frontend/build", "index.html"))
});

const PORT = process.env.PORT || 1000;
app.listen(PORT);