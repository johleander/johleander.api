"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.METHODS = void 0;
var axios_1 = __importDefault(require("axios"));
var METHODS;
(function (METHODS) {
    METHODS["GET"] = "GET";
    METHODS["POST"] = "POST";
})(METHODS = exports.METHODS || (exports.METHODS = {}));
;
var APIManager = /** @class */ (function () {
    function APIManager() {
    }
    APIManager.request = function (options) {
        try {
            return axios_1.default.request(options);
        }
        catch (error) {
            console.error(error);
        }
    };
    return APIManager;
}());
exports.default = APIManager;
