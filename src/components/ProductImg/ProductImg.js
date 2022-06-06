import styles from "./ProductImg.module.scss";
import PropTypes from "prop-types";

const ProductImg = (props) => {
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        alt={props.title}
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.currentColor}.jpg`}
      />
    </div>
  );
};

ProductImg.propTypes = {
  name: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
};

export default ProductImg;
