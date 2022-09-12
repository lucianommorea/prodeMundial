import { combineReducers } from "redux";
import users from "./users";
import user from "./user"
import games from "./games";
import game from "./game"
import team from "./team"
import teams from "./teams"


export default combineReducers({
    users,
    user,
    game,
    games, 
    team, 
    teams
});