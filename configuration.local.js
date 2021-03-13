module.exports = (require) => {
  const killTheNewsletter = require(".").default;
  const { webApplication, emailApplication } = killTheNewsletter(__dirname);

  webApplication.listen(new URL(webApplication.get("url")).port, () => {
    console.log(`Web server started at ${webApplication.get("url")}`);
  });

  emailApplication.listen(new URL(webApplication.get("email")).port, () => {
    console.log(`Email server started at port ${webApplication.get("email")}`);
  });
};
