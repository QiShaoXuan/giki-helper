const program = require("commander");

const commanders = {
  publish: require("./publish/index")
};

module.exports = () => {
  program
    .version(
      `${require("../package.json").name} ${require("../package.json").version}`
    )
    .usage("giki <command>");

  Object.values(commanders).forEach(commander => commander());

  if (process.argv.length <= 2) {
    program.outputHelp();
  }

  program.parse(process.argv);
};
