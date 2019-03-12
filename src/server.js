import "./env";
import {GraphQLServer} from 'graphql-yoga';
import logger from 'morgan'
import schema from './schema';
import "./passport"
import {authenticateJwt} from "./passport";
import {prisma} from '../generated/prisma-client'

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({schema, context:{prisma}});
server.express.use(logger('dev'));
server.express.use(authenticateJwt);

server.start({port:PORT}, ()=>console.log('server running on port',PORT));