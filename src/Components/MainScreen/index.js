import MainMenu from "../MainMenu"
import Navbar from "../Navbar"
import ProductPreview from "../ProductPreview"

export default function MainScreen (){
    return(
        <div>
            <Navbar/>
            <MainMenu/>
            <ProductPreview 
            title="ejemplo largo de la descripcion de un producto"
            price="50000"
            review="10/10"/>

            
        </div>
    )
}