const { name } = require("./package.json");

module.exports = {
  apps: [
    {
      name,
      script: "npx",
      args: ["next", "dev"],
    },
  ],
};
