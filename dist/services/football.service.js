"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FootballService = void 0;
var endpoints_1 = require("../apis/API-Football/endpoints");
var endpoints_2 = require("../apis/FPL/endpoints");
var FootballService = /** @class */ (function () {
    function FootballService() {
        /* FANTASY PREMIER LEAGUE */
        this.getFPLGeneralInfo = function () {
            return endpoints_2.general();
        };
        this.getFPLFixtures = function () {
            return endpoints_2.fixtures();
        };
        this.getFPLUserBasic = function () {
            return endpoints_2.user_basic();
        };
        this.getFPLUserHistory = function () {
            return endpoints_2.user_history();
        };
        /* API-FOOTBALL */
        this.getTeams = function () {
            return endpoints_1.teams();
        };
        this.getFixtures = function () {
            return endpoints_1.fixtures();
        };
        this.getLineups = function (fixtureId) {
            return endpoints_1.lineups(fixtureId);
        };
    }
    return FootballService;
}());
exports.FootballService = FootballService;
