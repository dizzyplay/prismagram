import {GraphQLServer} from 'graphql-yoga';
import logger from 'morgan'
import schema from './schema';
import passport from "passport"
import "./passport"
import "./env";


const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({schema});
server.express.use(logger('dev'));
server.express.use(passport.authenticate("jwt"));

server.start({port:PORT}, ()=>console.log('server running on port',PORT));