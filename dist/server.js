"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var football_controller_1 = require("./controllers/football.controller");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.configuration();
        this.footballController = new football_controller_1.FootballController();
        this.routes();
    }
    Server.prototype.configuration = function () {
        this.app.set("port", process.env.PORT || 3001);
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    };
    Server.prototype.routes = function () {
        this.app.use("/api/football/", this.footballController.router);
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get("port"), function () {
            console.log("Server is listening to " + _this.app.get("port") + " port.");
        });
    };
    return Server;
}());
var server = new Server();
server.start();
