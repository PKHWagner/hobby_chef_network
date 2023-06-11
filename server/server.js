const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

require('dotenv').config();
require('./config/mongoose.config');
require('./routes/user.routes')(app);
require('./routes/recipe.routes')(app);

const port = 8000;



app.listen(port, () => console.log(`Listening on port: ${port}`));