import styles from './PurchasePreview.module.css'

function PurchasePreview ({title, review, price}){
    const titles = {
        return:'Devolver',
        communicate:'Contactarme'
    }
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

        <div className={styles.ProductOptions}>
               <button className={styles.OptionButton}>
                   {titles.return}
               </button>
               <button className={styles.OptionButton}>
                   {titles.communicate}
                </button>
        </div>

        </div>
    )
}

export default PurchasePreview