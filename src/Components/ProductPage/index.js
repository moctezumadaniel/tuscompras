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
        <div>
            <div>
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
        <div>

            <div>
                <img/>
            </div>

            <div>
                <button>
                    {titles.buy}
                </button>
                <button>
                    {titles.contact}
                </button>
            </div>

            <div>

            </div>
        </div>
    )
}

function CommentsSummary(){
    return(
        <div>
            <div>
                <span>
                    {titles.review}
                </span>

                <span>
                    {`${titles.noComments} ${comments}`}
                </span>
            </div>

            <div>
                {titles.featuredComment}
            </div>

            <div>
                <a>{titles.openComments}</a>
            </div>
        </div>
    )
}

function FullDescription(){
    return (
        <div>
            <div>
                {titles.fullDescription}
            </div>
        </div>
    )
}