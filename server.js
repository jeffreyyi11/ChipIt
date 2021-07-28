const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const port = 8000;

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require("./server/routes/User.routes")(app);
require("./server/routes/Score.routes")(app);
require("./server/config/mongoose.config");
require('dotenv').config();

app.listen(port, () => console.log(`Connected to port: ${port}`));
