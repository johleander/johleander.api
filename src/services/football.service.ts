import { AxiosResponse } from "axios";
import {fixtures,teams, lineups} from "../apis/API-Football/endpoints";
import {general,fixtures as fpl_fixtures, user_history, user_basic} from "../apis/FPL/endpoints";

export class FootballService {


    constructor() {
    
    }

    /* FANTASY PREMIER LEAGUE */
    public getFPLGeneralInfo = () => {
      return general();
   }

   public getFPLFixtures = () => {
        return fpl_fixtures();
     }
   
   public getFPLUserBasic = () => {
      return  user_basic();
   }

   public getFPLUserHistory= () => {
      return  user_history();
   }


 

/* API-FOOTBALL */
   public getTeams =  () => {
      return teams();
}  
   public getFixtures =  () => {
      return fixtures();
   }
   public getLineups =  (fixtureId: string) => {
      return lineups(fixtureId);
   }
    
   
}   