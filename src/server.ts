
import express, {Request, Response} from "express"; 
import {FootballController} from "./controllers/football.controller";

class Server {
    private app: express.Application; 
    private footballController: FootballController; 


    constructor() {
        this.app = express(); 
        this.configuration(); 
        this.footballController = new FootballController();
        this.routes(); 
    }

    public configuration() {
        this.app.set("port", process.env.PORT || 3001); 

        this.app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header(
              "Access-Control-Allow-Headers",
              "Origin, X-Requested-With, Content-Type, Accept"
            );
            next();
          });
    }

    public routes() {
        this.app.use(`/api/football/`, this.footballController.router);
    }

    public start() {
        this.app.listen(this.app.get("port"), () => {   
            console.log(`Server is listening to ${this.app.get("port")} port.`);
        })
    }
}

const server = new Server(); 
server.start();