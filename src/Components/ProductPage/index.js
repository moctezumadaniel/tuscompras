import styles from './ProductPage.module.css'
const titles = {
    buy:'Comprar',
    contact:'Contactar',
    openComments:'Ver todos los comentarios',
    comments:'comentarios',

    //TEMPORALES
    shortDescription:'Descripcion del producto-descripcion corta del producto',
    amounth:45300.89,
    review:'10/10',
    noComments:11520,
    featuredComment:'Comentario destacado por parte del vendedor',
    fullDescription:
    'Descripcion completa del producto Descripcion completa del producto Descripcion completa del producto Descripcion completa del producto Descripcion completa del productoDescripcion completa del productoDescripcion completa del productoDescripcion completa del productoDescripcion completa del productoDescripcion completa del productoDescripcion completa del productoDescripcion completa del productoDescripcion completa del productoDescripcion completa del productoDescripcion completa del productoDescripcion completa del productoDescripcion completa del productoDescripcion completa del productoDescripcion completa del productoDescripcion completa del productoDescripcion completa del productoDescripcion completa del productoDescripcion completa del productoDescripcion completa del producto',

}
function ProductPage(){
    return (
        <div className={styles.FullContainer}>
            <div className={styles.LeftContainer}>
                <MainDetails/>
                <CommentsSummary/>
            </div>
            
            <FullDescription/>
        </div>
    )
}

export default ProductPage

function MainDetails(){
    //Images, short description, price, buy and contact button
    return(
        <div className={styles.MainDetails}>

            <div className={styles.Images}>
                <img/>
            </div>

            <div className={styles.Buttons}>
                <button className={styles.Buy}>
                    {titles.buy}
                </button>
                <button className={styles.Contact}>
                    {titles.contact}
                </button>
            </div>

            <div className={styles.ShortDescription}>
                {titles.shortDescription}
            </div>

            <div className={styles.Amounth}>
                {titles.amounth}
            </div>
        </div>
    )
}

function CommentsSummary(){
    return(
        <div className={styles.CommentsContainer}>
            <div className={styles.CommentsSummary}>
                <div className={styles.CommentsHeader}>
                    <span className={styles.Review}>
                        {titles.review}
                    </span>

                    <span className={styles.NoComments}>
                        {`${titles.noComments} ${titles.comments}`}
                    </span>
                </div>

                <div className={styles.FeaturedComment}>
                    {titles.featuredComment}
                </div>

                <div className={styles.OpenCommentsContainer}>
                    <a className={styles.OpenComments}>
                        {titles.openComments}
                    </a>
                </div>
            </div>
        </div>
    )
}

function FullDescription(){
    return (
        <div className={styles.CompleteDescriptionContainer}>
            <div className={styles.CompleteDescription}>
                {titles.fullDescription}
                
            </div>
        </div>
    )
}