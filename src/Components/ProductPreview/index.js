import styles from "./ProductPreview.module.css";
function ProductPreview({ title, review, price }) {
  return (
    <a href="/producto" className={styles.ProductLink}>
      <div className={styles.ProductContainer}>
        <img src="logo512.png" alt="" className={styles.Image} />

        <div className={styles.DescriptionContainer}>
          <span className={styles.TitleContainer}>{title}</span>

          <div className={styles.ReviewPriceContainer}>
            <span className={styles.Review}>{review}</span>
            <span className={styles.Price}>{price}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ProductPreview;
