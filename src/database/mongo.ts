import { MongoClient as Mongo, Db } from "mongodb";
import { config } from 'dotenv'

export const MongoClient = {

  
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,

 

  async connect(): Promise<void> {

    config()
    
    const url = process.env.MONGODB_URL || "mongodb+srv://27017";
    const username = process.env.MONGODB_USERNAME;
    const password = process.env.MONGODB_PASSWORD;

    console.log(process.env.MONGODB_URL)

    const client = new Mongo(url, {auth: {username, password}});
    const db = client.db("users-db")

    this.client = client;
    this.db = db;

    console.log("connected to mongodb!")
  },
};
