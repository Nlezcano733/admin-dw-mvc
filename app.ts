import express, { Express } from "express";
import path from "path";
import { engine } from "express-handlebars";
import methodOverride from "method-override";
require("dotenv").config();
// const games = require("./src/_data/data.json");

// Routes import
import products from "./src/routes/products";
import { productController } from "./src/controller/productsController";

// Initializations
const app: Express = express();
require('./src/database');

// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", "./src/view");

const hbs = engine({
  extname: ".hbs",
  defaultLayout: "main",
  layoutsDir: path.join(app.get("views"), "layout"),
  partialsDir: [path.join(app.get("views"), "partials")],
  helpers: require("./src/lib/helpers"),
});

// const hbs = create({ extname: ".hbs" });

// app.engine(".hbs", hbs.call);
app.engine("hbs", hbs);
app.set("view engine", "hbs");
app.use(express.static("public"));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride());

// Routes
app.get('/', (req, res) => res.render("index"));
app.post('/product/add', (req, res) => productController.save(req, res));
app.use('/products', products);

// Statics files

// Start
app.listen(app.get("port"), () => {
  console.log("Sever on port", app.get("port"));
});
