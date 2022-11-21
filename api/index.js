const server = require('./src/app.js');
const { populateGames } = require('./src/controllers/gamesControllers.js');
const { populateTeams } = require('./src/controllers/teamsControllers.js');
const { createWC } = require('./src/controllers/worldcupControllers.js');
const { conn } = require('./src/db.js');


// Syncing all the models at once.
// conn.sync({ force: false }).then(() => {
  conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT, async () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    // await createWC();
    // await populateTeams();
    // setTimeout(populateGames, 1000)

  });
});
