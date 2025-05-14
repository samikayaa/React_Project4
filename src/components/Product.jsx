import './Product.css';
import styled from 'styled-components';
/*
 Products.css içindeki stik kurallarını styled componentler için kullanabilirsin.
 styled-component projeye yüklünmiş durumda. 
 Bu sayfada kullanmaya başlayabilirsin.
 Temiz kod için işi biten kod satırlarını, fonksiyonları silmeyi unutma!
*/
export default function Product(props) {

  const { product } = props;

  const ProductCard = styled.div;
  const Category = styled.h2;
  const Image = styled.img;
  const PriceTag = styled.p;


  function getClassName() {
    return `price-tag ${product.category === 'electronics' ? 'sales' : null}`;
  }
  return (
    <div className="product-card">
      <h2>{product.category}</h2>
      <img src={product.image} />
      <p className={getClassName()}>{product.price}$</p>
      <h3>{product.title}</h3>
      <p className="description">{product.description}</p>
    </div>
  );
}
