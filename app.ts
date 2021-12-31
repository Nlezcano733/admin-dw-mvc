import express, { Express } from "express";
import path from "path";
import { engine } from "express-handlebars";
import Handlebars from "handlebars";
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access";
import methodOverride from "method-override";
import Helpers from './src/lib/helpers';
require("dotenv").config();

// Routes import
import products from "./src/routes/products";
import _productRoutes from "./src/api/routes/_productRoutes";

// Initializations
const app: Express = express();
require('./src/database');

// Settings
app.set("port", process.env.PORT || 4000);
app.set("views", "./src/view");

//setting engine
const hbs = engine({
  extname: ".hbs",
  defaultLayout: "main",
  layoutsDir: path.join(app.get("views"), "layout"),
  partialsDir: [
    path.join(app.get("views"), "partials"),
    path.join(app.get("views"), "partials/inputs"),
    path.join(app.get("views"), "partials/buttons")
  ],
  helpers: {
    toLowerCase: Helpers.toLowerCase,
    prepareImg: Helpers.prepareImg
  },
  handlebars: allowInsecurePrototypeAccess(Handlebars)
});

app.engine("hbs", hbs);
app.set("view engine", "hbs");
app.use(express.static('public'));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride());

// Routes
app.get('/', (req, res) => res.render("index"));
app.use('/products', products);
app.use('/api/products', _productRoutes);

// Statics files

// Start
app.listen(app.get("port"), () => {
  console.log("Sever on port", app.get("port"));
});
