import styles from './ProductPreview.module.css'
function ProductPreview ({title, review, price}){
    
    return(
        <div className={styles.ProductContainer}>
           <img
           src="logo512.png"
           width="300px"/>

           <div className={styles.DescriptionContainer}>
               <span className={styles.TitleContainer}>
                        {title}  
               </span>

                <div className={styles.ReviewPriceContainer}>
                    <span className={styles.Review}>
                        {review}
                    </span>
                    <span className={styles.Price}>
                        {price}
                    </span>
                </div>

           </div>

        </div>
    )
}

export default ProductPreview