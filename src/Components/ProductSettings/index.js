import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addProductSettingsImage,
  deleteProductSettingsImage,
} from "../../redux/actions/productSettings";
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
  const images = useSelector((state) => state.ProductSettings.images);
  const dispatch = useDispatch();

  function addImage(event) {
    if (!event.target.files || !event.target.files[0]) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      dispatch(addProductSettingsImage(e.target.result));
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  function deleteImage(index) {
    dispatch(deleteProductSettingsImage(index));
  }

  return (
    <div>
      <div className={styles.MainTitle}>{titles.images}</div>
      <div className={styles.ListOfImages}>
        {images.length > 0 &&
          images.map((item) => (
            <div className={styles.ImageContainer} key={item.id}>
              <div className={styles.Image}>
                <img alt="" src={item.image} width="100" />
              </div>

              <div className={styles.ImageButtons}>
                <button
                  className={styles.DeleteImage}
                  onClick={() => deleteImage(item.id)}
                >
                  {titles.delete}
                </button>
                <button className={styles.ChangeImage}>{titles.change}</button>
              </div>
            </div>
          ))}

        <div className={styles.AddImageContainer}>
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
