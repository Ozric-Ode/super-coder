const mysql=require('mysql2/promise');
module.exports={
    async connectToDb(){
        const pool= await mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DB_NAME,
            password:process.env.DB_PASSWORD,
            waitForConnections: true,
            connectionLimit: 10,
          });
          return pool;
    },
    
  async disconnectFromDb(pool) {
    try {
      let res = await pool.end();
    } catch(err) {
      console.error('Error in destructor:');
    }
  }

}
