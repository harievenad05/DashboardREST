
import * as dotenv from 'dotenv';

class Config {
    public appID: string;
    public database: any;
    constructor(){
      dotenv.config();
      this.appID = process.env.APP_ID as string;
      this.databaseConfig()
    };

    databaseConfig(): void {
        this.database = {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT,
      };
    };

}

const config = new Config();
export default config;
