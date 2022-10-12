import { combineReducers } from "redux";
import users from "./users";
import user from "./user";
import games from "./games";
import game from "./game";
import team from "./team";
import teams from "./teams";
import worldcup from "./worldcup";
import topfive from "./topfive";
import pages from "./pages";
import totalPages from "./totalPages";
import userProfile from "./userProfile";
import usersNoAdmin from "./usersNoAdmin";
import admins from "./admins";
import dark from "./dark";

export default combineReducers({
    users,
    topfive,
    user,
    game,
    games, 
    team, 
    teams,
    worldcup,
    pages,
    totalPages,
    userProfile,
    usersNoAdmin,
    admins,
    dark
});