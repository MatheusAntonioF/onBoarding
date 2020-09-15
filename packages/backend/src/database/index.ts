import { createConnection } from 'typeorm';

import dbConfig from '../config/database';

createConnection(dbConfig);
