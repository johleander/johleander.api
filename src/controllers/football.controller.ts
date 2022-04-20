import { Router, Response, Request } from "express";
import { FootballService } from "../services/football.service";
export class FootballController {
    public router: Router;
    private footballService: FootballService;

    constructor() {
        this.router = Router(); 
        this.routes(); 
        this.footballService = new FootballService();
    }

    private getTeams = async (req: Request, res: Response) => {
        return res.json((await this.footballService.getTeams()).data);
    }

    private getFixtures= async (req: Request, res: Response) => {
        return res.json((await this.footballService.getFixtures()).data);
    }

    private getLineups= async (req: Request, res: Response) => {
        return res.json((await this.footballService.getLineups(req.query.fixtureId as string)).data);
    }

    private getFPLFixtures= async (req: Request, res: Response) => {
        return res.json((await this.footballService.getFPLFixtures()).data);

    }

    private getFPLGeneralInfo = async (req: Request, res: Response) => {
        return res.json((await this.footballService.getFPLGeneralInfo()).data);

    }

    private getFPLUserBasic = async (req: Request, res: Response) => {
        return res.json((await this.footballService.getFPLUserBasic()).data);

    }

    private getFPLUserHistory = async (req: Request, res: Response) => {
        return res.json((await this.footballService.getFPLUserHistory()).data);

    }

    public routes() {
        this.router.get("/teams", this.getTeams);
        this.router.get("/fixtures", this.getFixtures);
        this.router.get("/lineups", this.getLineups);
        this.router.get("/fplfixtures", this.getFPLFixtures);
        this.router.get("/fplgeneral", this.getFPLGeneralInfo);
        this.router.get("/fpluserbasic", this.getFPLUserBasic);
        this.router.get("/fpluserhistory", this.getFPLUserHistory);
    }
}