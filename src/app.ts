import express from 'express'
import routes from './routes'
import mongoose from 'mongoose'
import * as fs from 'fs'

class App {
    public express: express.Application

    public constructor() {
        this.express = express()

        this.middleware()
        this.routes()
        // this.database()
    }

    public middleware(): void {
        this.express.use((req, res, next) => {
          next();
        });

        this.express.use(express.json());
      }
    public routes(): void {
        this.express.use(routes)
    }
    // private async database(){
    // const data = fs.readFileSync('db.json');
    // const jsonData = JSON.parse(data.toString());
    // const authKey = jsonData.auth;
    //     try{
    //         mongoose.set("strictQuery", true)
    //         await mongoose.connect(authKey)
    //         console.log("Success connecting database")
    //     }catch(e){
    //         console.log(e)
    //     }
    // }
}

export default new App().express
