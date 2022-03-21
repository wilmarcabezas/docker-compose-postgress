require('dotenv').config();
const {pool} =  require('./database');

const getUsers = async () => {
    try {
        const res = await pool.query('select * from users');                
        return res.rows;
    } catch (e) {
        return({error:'Info error: '+e});
    }
};
getUsers();
module.exports={getUsers,};