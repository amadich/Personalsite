const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.static('public'))


app.listen(PORT, () => {console.log(`We Listening PORT -> ${PORT}`);})