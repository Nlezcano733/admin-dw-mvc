"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const express_handlebars_1 = require("express-handlebars");
const handlebars_1 = __importDefault(require("handlebars"));
const allow_prototype_access_1 = require("@handlebars/allow-prototype-access");
const method_override_1 = __importDefault(require("method-override"));
const helpers_1 = __importDefault(require("./src/lib/helpers"));
require("dotenv").config();
// Routes import
const products_1 = __importDefault(require("./src/routes/products"));
const _productRoutes_1 = __importDefault(require("./src/api/routes/_productRoutes"));
// Initializations
const app = (0, express_1.default)();
require('./src/database');
// Settings
app.set("port", process.env.PORT || 4000);
app.set("views", "./src/view");
//setting engine
const hbs = (0, express_handlebars_1.engine)({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path_1.default.join(app.get("views"), "layout"),
    partialsDir: [
        path_1.default.join(app.get("views"), "partials"),
        path_1.default.join(app.get("views"), "partials/inputs"),
        path_1.default.join(app.get("views"), "partials/buttons")
    ],
    helpers: {
        log: helpers_1.default.log,
        parseString: helpers_1.default.parseString,
        toLowerCase: helpers_1.default.toLowerCase,
        prepareImg: helpers_1.default.prepareImg,
        slice: helpers_1.default.slice,
        posibleUndefined: helpers_1.default.posibleUndefined,
        modal: helpers_1.default.modal
    },
    handlebars: (0, allow_prototype_access_1.allowInsecurePrototypeAccess)(handlebars_1.default)
});
app.engine("hbs", hbs);
app.set("view engine", "hbs");
app.use(express_1.default.static('public'));
// Middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, method_override_1.default)());
// Routes
app.get('/', (req, res) => res.render("index"));
app.get('/orders', (req, res) => res.render('orders'));
app.use('/products', products_1.default);
app.use('/api/products', _productRoutes_1.default);
// Statics files
// Start
app.listen(app.get("port"), () => {
    console.log("Sever on port", app.get("port"));
});
//# sourceMappingURL=app.js.map