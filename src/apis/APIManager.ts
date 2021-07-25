
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";


export enum METHODS {
    GET = "GET",
    POST = "POST"
};

export default class APIManager {

    constructor() {

    }

    public static request(options : AxiosRequestConfig) {
        try {
            return axios.request(options);
        }
        catch(error) {
            console.error(error);
        }
    }
}