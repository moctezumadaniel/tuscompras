import { combineReducers } from "redux"
import { MainMenuReducer } from "./MainMenu"

const rootReducer = combineReducers({
    MainMenu:MainMenuReducer,
})

export default rootReducer