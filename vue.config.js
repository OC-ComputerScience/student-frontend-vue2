console.log(process.env.NODE_ENV);
module.exports = {
  publicPath:
    process.env.NODE_ENV === "development"
      ? "/"
      : "/studentapp/student-frontend-vue2/dist/",
};
