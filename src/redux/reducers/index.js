import { combineReducers } from "redux"
import { CustomerChatsReducer } from "./CustomerChats"
import { CustomersReturnsFiltersReducer } from "./CustomerReturnsFilters"
import { MainMenuReducer } from "./MainMenu"
import { NavbarReducer } from "./Navbar"
import { ProductFiltersReducer } from "./ProductFilters"
import { PurchasesFiltersReducer } from "./PurchasesFilters"
import { ReturnsFiltersReducer } from "./ReturnsFilters"
import { SalesFiltersReducer } from "./SalesFilters"
import { SellerChatsReducer } from "./SellersChats"

const rootReducer = combineReducers({
    MainMenu:MainMenuReducer,
    ProductFilters:ProductFiltersReducer,
    SalesFilters:SalesFiltersReducer,
    PurchasesFilters:PurchasesFiltersReducer,
    ReturnsFilters:ReturnsFiltersReducer,
    CustomersReturnsFilters:CustomersReturnsFiltersReducer,
    CustomerChats:CustomerChatsReducer,
    SellerChats:SellerChatsReducer,
    Navbar:NavbarReducer,

})

export default rootReducer