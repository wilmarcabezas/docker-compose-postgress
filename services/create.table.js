const {pool} =  require('./database');

const queryTable = `
CREATE TABLE IF NOT EXISTS users (
    username text NOT NULL,
    password text NOT NULL,
    enabled integer NOT NULL DEFAULT '1',
    PRIMARY KEY (username)
  );
`;

const queryInsert = `
INSERT INTO users (username, password, enabled)
VALUES ('johndoe@gmail.com', '123', 1)
`;


function insertTable() {
    pool.query(queryInsert, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Data insert successful');
        pool.end();
    });
}

function createTable() {
    pool.query(queryTable, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Table is successfully created');
        pool.end();
    });
}

module.exports={createTable,insertTable, }