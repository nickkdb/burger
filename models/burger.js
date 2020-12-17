let orm= require("../config/orm");

let burger = {
    all: (next) => {
        orm.selectAll("burgers", (res) => {
            next(res);
        });
    },
    create: (cols, vals, next) => {
        orm.insertOne("burgers", cols, vals, (res) => {
            next(res);
        });
    },
    update: (val, condition, next) => {
        orm.updateOne("burgers", val, condition, (res) => {
            next(res);
        });
    }
}

module.exports = burger;