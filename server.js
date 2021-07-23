const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = 8000;

require("./server/routes/User.routes")(app);
require("./server/routes/Score.routes")(app);
require("./server/config/mongoose.config");

app.listen(port, () => console.log(`Connected to port: ${port}`));
