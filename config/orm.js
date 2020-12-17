var connection= require("./connection");

let orm = {
    
    selectAll: (table, next) => {
        let query= `SELECT * FROM ${table};`;
        connection.query(query, (err, res) => {
            if (err) throw err;
            next(res);
        });
    },
    insertOne: (table, cols, vals, next) => {
        let query= `INSERT INTO ${table} (${cols}) VALUES (${vals})`;
        connection.query(query, (err, res) => {
            if (err) throw err;
            next(res);
        })
    },
    updateOne: function() {

    },
    deleteOne: function() {

    }
};

module.exports = orm;

