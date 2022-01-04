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
Object.defineProperty(exports, "__esModule", { value: true });
exports.teams = exports.lineups = exports.fixtures = void 0;
var APIManager_1 = __importStar(require("../APIManager"));
var BASE_URL = "https://api-football-v1.p.rapidapi.com/v3";
function getOptions(endpoint) {
    return {
        method: APIManager_1.METHODS.GET,
        url: endpoint,
        headers: {
            'x-rapidapi-key': process.env.RAPID_API_KEY,
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
        }
    };
}
var fixtures = function () {
    var FIXTURES_ENDPOINT = BASE_URL + "/fixtures";
    var options = getOptions(FIXTURES_ENDPOINT);
    options.params = { league: '39', season: '2021' };
    return APIManager_1.default.request(options);
};
exports.fixtures = fixtures;
var lineups = function (fixtureId) {
    var LINEUPS_ENDPOINT = BASE_URL + "/fixtures/lineups";
    var options = getOptions(LINEUPS_ENDPOINT);
    options.params = { fixture: fixtureId };
    return APIManager_1.default.request(options);
};
exports.lineups = lineups;
var teams = function () {
    var TEAMS_ENDPOINT = BASE_URL + "/teams";
    var options = getOptions(TEAMS_ENDPOINT);
    options.params = { league: '39', season: '2021' };
    return APIManager_1.default.request(options);
};
exports.teams = teams;
