import express, { Express } from "express";
import path from "path";
import { create } from "express-handlebars";
import methodOverride from "method-override";
require("dotenv").config();

// Routes import

// Initializations
const app: Express = express();

// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "src/view"));

const hbs = create({
  extname: ".hbs",
  defaultLayout: "main",
  layoutsDir: path.join(app.get("views"), "layout"),
  partialsDir: path.join(app.get("views"), "layout/components"),
  helpers: require("./src/lib/helpers"),
});

app.use(express.static("public"));
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride());

// Routes
app.get("/", (req, res) => {
  res.render("index", { title: "Prueba" });
});

// Statics files

// Start
app.listen(app.get("port"), () => {
  console.log("Sever on port", app.get("port"));
});
