"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_history = exports.user_basic = exports.fixtures = exports.general = void 0;
var axios_1 = __importDefault(require("axios"));
var APIManager_1 = __importStar(require("../APIManager"));
var BASE_URL = "https://fantasy.premierleague.com/api";
var MY_FPL_MANAGER_ID = 1282663;
function getOptions(endpoint) {
    //Apparently FPL API does not like the default axios user agent. 
    axios_1.default.defaults.headers.common['User-Agent'] = 'PostmanRuntime/7.26.2';
    return {
        method: APIManager_1.METHODS.GET,
        url: endpoint
    };
}
var general = function () {
    var ENDPOINT = BASE_URL + "/bootstrap-static/";
    var OPTIONS = getOptions(ENDPOINT);
    return APIManager_1.default.request(OPTIONS);
};
exports.general = general;
var fixtures = function () {
    var ENDPOINT = BASE_URL + "/fixtures/";
    var OPTIONS = getOptions(ENDPOINT);
    return APIManager_1.default.request(OPTIONS);
};
exports.fixtures = fixtures;
var user_basic = function () {
    var ENDPOINT = BASE_URL + "/entry/" + MY_FPL_MANAGER_ID + "/";
    var OPTIONS = getOptions(ENDPOINT);
    return APIManager_1.default.request(OPTIONS);
};
exports.user_basic = user_basic;
var user_history = function () {
    var ENDPOINT = BASE_URL + "/entry/" + MY_FPL_MANAGER_ID + "/history/";
    var OPTIONS = getOptions(ENDPOINT);
    return APIManager_1.default.request(OPTIONS);
};
exports.user_history = user_history;
