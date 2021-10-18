

import { AxiosRequestConfig } from "axios";
import APIManager, {METHODS} from "../APIManager";


const BASE_URL = "https://api-football-v1.p.rapidapi.com/v3";


function getOptions(endpoint:string): AxiosRequestConfig {
  return   {
    method: METHODS.GET,
    url: endpoint,
    headers: {
      'x-rapidapi-key': process.env.RAPID_API_KEY,
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
    }
  }
}

export const fixtures = () => {

  const FIXTURES_ENDPOINT = `${BASE_URL}/fixtures`;

  let options = getOptions(FIXTURES_ENDPOINT);
  options.params = {league: '39', season: '2021'};

  return APIManager.request(options);
} 

export const lineups = (fixtureId: string) => {
      
  const LINEUPS_ENDPOINT = `${BASE_URL}/fixtures/lineups`;

  let options = getOptions(LINEUPS_ENDPOINT);
  options.params = {fixture: fixtureId};

  return APIManager.request(options);
} 

export const teams = () => {

  const TEAMS_ENDPOINT = `${BASE_URL}/teams`;

  let options = getOptions(TEAMS_ENDPOINT);
  options.params = {league: '39', season: '2021'};

  return APIManager.request(options);
} 