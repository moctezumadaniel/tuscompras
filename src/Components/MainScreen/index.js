import ListOfProducts from "../ListOfProducts"
import MainMenu from "../MainMenu"
import Navbar from "../Navbar"
import ProductPreview from "../ProductPreview"

export default function MainScreen (){
    return(
        <div>
            <Navbar/>
            <MainMenu/>
            <ListOfProducts/>

            
        </div>
    )
}