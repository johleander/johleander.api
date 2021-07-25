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

    private getFixtures= async (req: Request, res: Response) => {
        res.json((await this.footballService.getFixtures()).data);
    }

    private getFPLFixtures= async (req: Request, res: Response) => {
        res.json((await this.footballService.getFPLFixtures()).data);

    }

    private getFPLGeneralInfo = async (req: Request, res: Response) => {
        res.json((await this.footballService.getFPLGeneralInfo()).data);

    }

    private getFPLUserBasic = async (req: Request, res: Response) => {
        res.json((await this.footballService.getFPLUserBasic()).data);

    }

    private getFPLUserHistory = async (req: Request, res: Response) => {
        res.json((await this.footballService.getFPLUserHistory()).data);

    }

    public routes() {
        this.router.get("/fixtures", this.getFixtures);
        this.router.get("/fplfixtures", this.getFPLFixtures);
        this.router.get("/fplgeneral", this.getFPLGeneralInfo);
        this.router.get("/fpluserbasic", this.getFPLUserBasic);
        this.router.get("/fpluserhistory", this.getFPLUserHistory);
    }
}