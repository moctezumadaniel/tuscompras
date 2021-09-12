import { combineReducers } from "redux"
import { MainMenuReducer } from "./MainMenu"
import { ProductFiltersReducer } from "./ProductFilters"
import { PurchasesFiltersReducer } from "./PurchasesFilters"
import { ReturnsFiltersReducer } from "./ReturnsFilters"
import { SalesFiltersReducer } from "./SalesFilters"

const rootReducer = combineReducers({
    MainMenu:MainMenuReducer,
    ProductFilters:ProductFiltersReducer,
    SalesFilters:SalesFiltersReducer,
    PurchasesFilters:PurchasesFiltersReducer,
    ReturnsFilters:ReturnsFiltersReducer,

})

export default rootReducer