import * as dotenv from 'dotenv'
import express from "express";
import ejs from "ejs";

dotenv.config()

const app = express();
const port = process.env.PORT

app.set('views', './views');
app.set('view engine', 'ejs')

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render("index")
});

app.listen (port, () =>
 console.log (`App listening on ${port}`)
);
