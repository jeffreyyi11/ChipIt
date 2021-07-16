const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = 8000;

require("./server/routes/User.routes")(app);
require("./server/routes/Score.routes")(app);
require("./server/config/mongoose.config");

app.listen(port, () => console.log(`Connected to port: ${port}`));
