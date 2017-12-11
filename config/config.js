module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./db.approval.sqlite"
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:"
  }
};