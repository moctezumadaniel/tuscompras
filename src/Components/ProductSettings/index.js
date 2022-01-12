import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProductSettingsImage } from "../../redux/actions/productSettings";
import styles from "./ProductSettings.module.css";
const titles = {
  newProduct: "Nuevo producto",
  editProduct: "Editar Producto",
  shortDescription: "Descripción corta del producto",
  images: "Imágenes",
  delete: "Eliminar",
  change: "Cambiar",
  addImage: "Agregar Imágen",
  completeDescription: "Descripción completa del producto",
  saveProduct: "Guardar producto",
};
function ProductSettings() {
  return (
    <div className={styles.ProductSettingsContainer}>
      <div className={styles.MainTitle}>{titles.newProduct}</div>

      <div className={styles.DescriptionsContainer}>
        <textarea
          placeholder={titles.shortDescription}
          className={styles.ShortDescription}
        />
      </div>

      <ProductImages />

      <div className={styles.DescriptionsContainer}>
        <textarea
          placeholder={titles.completeDescription}
          className={styles.CompleteDescription}
        />
      </div>

      <div className={styles.SaveProductContainer}>
        <button className={styles.SaveProduct}>{titles.saveProduct}</button>
      </div>
    </div>
  );
}
export default ProductSettings;

function ProductImages() {
  const images = useSelector((state) => state.ProductSettings.image);
  const dispatch = useDispatch();

  function addImage(event) {
    if (!event.target.files || !event.target.files[0]) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      dispatch(addProductSettingsImage(e.target.result));
      console.log("imagen añadida");
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  return (
    <div>
      <div className={styles.MainTitle}>{titles.images}</div>
      <div className={styles.ListOfImages}>
        {images !== null && (
          <div className={styles.ImageContainer}>
            <div className={styles.Image}>
              <img alt="" src={images} width="100" />
            </div>

            <div className={styles.ImageButtons}>
              <button className={styles.DeleteImage}>{titles.delete}</button>
              <button className={styles.ChangeImage}>{titles.change}</button>
            </div>
          </div>
        )}

        <div className={styles.ImageContainer}>
          <label className={styles.AddImage} for="addImage">
            {titles.addImage}
            <input
              id="addImage"
              type="file"
              onChange={addImage}
              accept="image/jpg, image/jpeg"
              className={styles.AddImageHiden}
            ></input>
          </label>
        </div>
      </div>
    </div>
  );
}
