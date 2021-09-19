import styles from './ProductSettings.module.css'
const titles = {
    newProduct:"Nuevo producto",
    editProduct:"Editar Producto",
    shortDescription:"Descripción corta del producto",
    images:"Imágenes",
    delete:"Eliminar",
    change:"Cambiar",
    addImage:"Agregar Imágen",
    completeDescription:"Descripción completa del producto"
}
function ProductSettings(){
    return(
        <div className={styles.ProductSettingsContainer}>
            <div className={styles.MainTitle}>
                {titles.newProduct}
            </div>

            <div className={styles.DescriptionsContainer}>
                <textarea placeholder={titles.shortDescription}
                className={styles.ShortDescription}/>
            </div>

            <ProductImages/>

            <div className={styles.DescriptionsContainer}>
                <textarea placeholder={titles.completeDescription}
                className={styles.CompleteDescription}/>
            </div>
            
        </div>
    )
}
export default ProductSettings

function ProductImages(){
    return (
        <div>
            <div className={styles.MainTitle}>
                {titles.images}
            </div>
            <div className={styles.ListOfImages}>
                <div className={styles.ImageContainer}>
                    <div className={styles.Image}>
                        <img/>
                    </div>
                    
                    <div className={styles.ImageButtons}>
                        <button className={styles.DeleteImage}>
                            {titles.delete}
                        </button>
                        <button className={styles.ChangeImage}>
                            {titles.change}
                        </button>
                    </div>
                </div>

                <div className={styles.ImageContainer}>
                    <div className={styles.Image}>
                        <img/>
                    </div>
                    
                    <div className={styles.ImageButtons}>
                        <button className={styles.AddImage}>
                            {titles.addImage}
                        </button>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}