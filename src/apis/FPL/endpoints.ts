
import axios, { AxiosRequestConfig } from "axios";
import APIManager, {METHODS} from "../APIManager";
const BASE_URL = "https://fantasy.premierleague.com/api";
const MY_FPL_MANAGER_ID = 1282663;


function getOptions(endpoint:string): AxiosRequestConfig {

  //Apparently FPL API does not like the default axios user agent. 
  axios.defaults.headers.common['User-Agent'] = 'PostmanRuntime/7.26.2';
  return   {
    method: METHODS.GET,
    url: endpoint
  };
}


export const general = () => {

  const ENDPOINT = `${BASE_URL}/bootstrap-static/`;
  const OPTIONS = getOptions(ENDPOINT);

  return APIManager.request(OPTIONS);
} 

export const fixtures = () => {

  const ENDPOINT = `${BASE_URL}/fixtures/`;
  const OPTIONS = getOptions(ENDPOINT);

  return APIManager.request(OPTIONS);
} 

export const user_basic = () => {

  const ENDPOINT = `${BASE_URL}/entry/${MY_FPL_MANAGER_ID}/`;
  const OPTIONS = getOptions(ENDPOINT);

  return APIManager.request(OPTIONS);
} 

export const user_history= () => {

  const ENDPOINT = `${BASE_URL}/entry/${MY_FPL_MANAGER_ID}/history/`;
  const OPTIONS = getOptions(ENDPOINT);

  return APIManager.request(OPTIONS);
} 