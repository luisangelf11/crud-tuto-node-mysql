import {createPool} from 'mysql2/promise';

const pool = createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'angel123',
    database: 'Prueba01'
});

export default pool;