import { combineReducers } from "redux";
import { CustomerChatsReducer } from "./CustomerChats";
import { CustomersReturnsFiltersReducer } from "./CustomerReturnsFilters";
import { MainMenuReducer } from "./MainMenu";
import { NavbarReducer } from "./Navbar";
import { ProductSettingsReducer } from "./ProductSettings";
import { ProductFiltersReducer } from "./ProductFilters";
import { PurchasesFiltersReducer } from "./PurchasesFilters";
import { ReturnsFiltersReducer } from "./ReturnsFilters";
import { SalesFiltersReducer } from "./SalesFilters";
import { SellerChatsReducer } from "./SellersChats";
import { LoginReducer } from "./Login";
import { SignupReducer } from "./Signup";

const rootReducer = combineReducers({
  MainMenu: MainMenuReducer,
  ProductFilters: ProductFiltersReducer,
  SalesFilters: SalesFiltersReducer,
  PurchasesFilters: PurchasesFiltersReducer,
  ReturnsFilters: ReturnsFiltersReducer,
  CustomersReturnsFilters: CustomersReturnsFiltersReducer,
  CustomerChats: CustomerChatsReducer,
  SellerChats: SellerChatsReducer,
  Navbar: NavbarReducer,
  ProductSettings: ProductSettingsReducer,
  Login: LoginReducer,
  Signup: SignupReducer,
});

export default rootReducer;
