import  express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import translateRouter from './routes/translate';
import config from './config/config';
import http from 'http';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use('/translate', translateRouter);
const port =  process.env.PORT || config.port || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
