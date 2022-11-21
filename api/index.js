//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { populateGames } = require('./src/controllers/gamesControllers.js');
const { populateTeams } = require('./src/controllers/teamsControllers.js');
const { putUserChampion, putUserSecond, putUserThird, putUserBestPlayer } = require('./src/controllers/userControllers.js');
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
    await putUserSecond("google-oauth2|112846913444083067920", "Inglaterra"); //joaco
    await putUserBestPlayer("google-oauth2|112846913444083067920", "Messi"); //joaco
    await putUserChampion("google-oauth2|100839931877560686273", "Brasil") //manu
    await putUserSecond("google-oauth2|100839931877560686273", "Francia") //manu
    await putUserThird("google-oauth2|100839931877560686273", "Argentina") //manu
    await putUserChampion("google-oauth2|117925862186927959268", "Argentina") //mica m
    await putUserSecond("google-oauth2|102464354659192285279", "Inglaterra"); //agu b
    await putUserChampion("auth0|637a2cae9b9c4feffbf6ddbc", "Argentina") //leo
    await putUserSecond("auth0|637a2cae9b9c4feffbf6ddbc", "Inglaterra") //leo
    await putUserThird("auth0|637a2cae9b9c4feffbf6ddbc", "Brasil") //leo
    await putUserBestPlayer("auth0|637a2cae9b9c4feffbf6ddbc", "Messi"); //leo
    await putUserThird("google-oauth2|112059618905832159120", "Brasil") //yajaira
    await putUserBestPlayer("google-oauth2|112059618905832159120", "Messi"); //yajaira
    await putUserBestPlayer("auth0|6376b8cc32de0084d4edcf6e", "Lewandowski"); //nacho c
    await putUserChampion("auth0|637a302ac0f8aabff64a5a46", "Argentina") //maga
    await putUserSecond("auth0|637a302ac0f8aabff64a5a46", "Francia") //maga
    await putUserThird("auth0|637a302ac0f8aabff64a5a46", "Brasil") //maga
    await putUserBestPlayer("auth0|637a302ac0f8aabff64a5a46", "Messi"); //maga
    await putUserChampion("auth0|637a2be437595e4c995674af", "Argentina") //nestor
    await putUserSecond("auth0|637a2be437595e4c995674af", "Belgica") //nestor
    await putUserThird("auth0|637a2be437595e4c995674af", "Brasil") //nestor
    await putUserBestPlayer("auth0|637a2be437595e4c995674af", "Messi"); //nestor
    await putUserChampion("google-oauth2|113235571860404907654", "Argentina") //blas b
    await putUserThird("google-oauth2|103062773572419589423", "Brasil") //mica l
    await putUserChampion("google-oauth2|108291660713821019132", "Argentina") //sofi p
    await putUserBestPlayer("google-oauth2|106307466001353733048", "Messi"); //juan b
    await putUserChampion("auth0|63756f0ea8b2c2ec60b2eb01", "Argentina") //alexis
    await putUserSecond("auth0|63756f0ea8b2c2ec60b2eb01", "Francia") //alexis
    await putUserThird("auth0|63756f0ea8b2c2ec60b2eb01", "Brasil") //alexis
    await putUserBestPlayer("auth0|63756f0ea8b2c2ec60b2eb01", "Messi"); //alexis
    await putUserChampion("google-oauth2|105429461518880619446", "Argentina") //martin u
    await putUserSecond("google-oauth2|105429461518880619446", "Brasil") //martin u
    await putUserThird("google-oauth2|105429461518880619446", "España") //martin u
    await putUserBestPlayer("google-oauth2|105429461518880619446", "Messi"); //martin u
    await putUserChampion("google-oauth2|107871195702048147770", "Brasil") //fabio u
    await putUserSecond("google-oauth2|107871195702048147770", "Inglaterra") //fabio u
    await putUserThird("google-oauth2|107871195702048147770", "Argentina") //fabio u
    await putUserBestPlayer("google-oauth2|107871195702048147770", "Messi"); //fabio u
    await putUserChampion("auth0|637a2f508d21b4f604c91765", "Brasil") //osvaldo
    await putUserSecond("auth0|637a2f508d21b4f604c91765", "Argentina") //osvaldo
    await putUserThird("auth0|637a2f508d21b4f604c91765", "Alemania") //osvaldo
    await putUserBestPlayer("auth0|637a2f508d21b4f604c91765", "Neymar"); //osvaldo
    await putUserChampion("google-oauth2|108628269814971866538", "Brasil") //walter
    await putUserSecond("google-oauth2|108628269814971866538", "Alemania") //walter
    await putUserThird("google-oauth2|103589163769268766096", "Paises Bajos") //nico p
    await putUserChampion("auth0|637a1c62c0f8aabff64a5a11", "Argentina") //jony
    await putUserSecond("auth0|637a1c62c0f8aabff64a5a11", "Brasil") //jony
    await putUserThird("auth0|637a1c62c0f8aabff64a5a11", "Uruguay") //jony
    await putUserBestPlayer("auth0|637a1c62c0f8aabff64a5a11", "Messi"); //jony
    await putUserChampion("google-oauth2|106780859355299492065", "Argentina") //mary b
    await putUserSecond("google-oauth2|106780859355299492065", "Brasil") //mary b
    await putUserThird("google-oauth2|106780859355299492065", "Alemania") //mary b
    await putUserBestPlayer("google-oauth2|106780859355299492065", "Messi"); //mary b

  });
});
