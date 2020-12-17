let orm= require("../config/orm");

let burger = {
    all: (next) => {
        orm.selectAll("burgers", (res) => {
            next(res);
        });
    },
    create: (cols, vals, next) => {
        orm.insertOne("burgers", )
    }
}

module.exports = burger;