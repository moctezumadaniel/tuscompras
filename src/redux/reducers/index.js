import { combineReducers } from "redux"
import { MainMenuReducer } from "./MainMenu"
import { ProductFiltersReducer } from "./ProductFilters"

const rootReducer = combineReducers({
    MainMenu:MainMenuReducer,
    ProductFilters:ProductFiltersReducer,

})

export default rootReducer