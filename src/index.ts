import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './utils/config';

import indexRoutes from './routes/index.routes';
import customerRoutes from './routes/customer.routes';
import orderRoutes from './routes/order.routes';


class Server {
    public app: Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    };

    config(){
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
       
    };

    routes(): void {
        this.app.use('/api', indexRoutes);
        this.app.use('/api', customerRoutes);
        this.app.use('/api', orderRoutes);
    };

    start(): void{
        const port = this.app.get('port');
        this.app.listen(port, () => {
            console.log(`Server is running on PORT ${port}`);     
            console.log(`${config.database.database}`)  
        });
    };
};

const server = new Server();
server.start();