const Pool = require('pg').Pool;



const pool = new Pool({
    host : 'ec2-184-73-198-174.compute-1.amazonaws.com',
    user : 'ikfsthjsptywdy',
    password : '7779a004417c37e70b19073e18a3ea7e4784daf2a97d035b3b872ad60c410d06',
    database : 'da00f87mn7n49f',
    port : 5432,
    ssl : {
        rejectUnauthorized : false
    }

})


module.exports = pool;