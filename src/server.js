import {GraphQLServer} from 'graphql-yoga';
import logger from 'morgan'
import schema from './schema';
import dotenv from "dotenv";
import path from "path";
import {sendSecretMail} from "./utils";

dotenv.config({path:path.resolve(__dirname,'.env')});
sendSecretMail("vovoboss@gmail.com","test code")

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({schema});
server.express.use(logger('dev'))

server.start({port:PORT}, ()=>console.log('server running on port',PORT))