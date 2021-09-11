import { combineReducers } from "redux"
import { MainMenuReducer } from "./MainMenu"
import { ProductFiltersReducer } from "./ProductFilters"
import { PurchasesFiltersReducer } from "./PurchasesFilters"
import { SalesFiltersReducer } from "./SalesFilters"

const rootReducer = combineReducers({
    MainMenu:MainMenuReducer,
    ProductFilters:ProductFiltersReducer,
    SalesFilters:SalesFiltersReducer,
    PurchasesFilters:PurchasesFiltersReducer,

})

export default rootReducer