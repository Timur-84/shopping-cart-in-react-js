import ButtonDelete from "../ButtonDelete/ButtonDelete";
import Count from "../Count/Count";
import "./style.scss";
import priceFormatter from "../../utils/priceFormatter";

const Product = ({
  product,
  deleteProduct,
  increase,
  decrease,
  changeValue,
}) => {
  const { img, title, priceTotal, count, id } = product;

  return (
    <section className="product">
      <div className="product__img">
        <img src={`./img/products/${img}`} alt={img} />
      </div>
      <div className="product__title">{title}</div>
      <div className="product__count">
        <Count
          count={count}
          increase={increase}
          id={id}
          decrease={decrease}
          changeValue={changeValue}
        />
      </div>
      <div className="product__price">{priceFormatter(priceTotal)} руб.</div>
      <div className="product__controls">
        <ButtonDelete deleteProduct={deleteProduct} id={id} />
      </div>
    </section>
  );
};

export default Product;
