import { useCallback, useState } from 'react';

import Star from './icons/Star';
import Heart from './icons/Heart';
import styles from './ItemCell.module.scss';

const ratingArray = [1, 2, 3, 4, 5];

const ItemCell = ({ product, isFollowed, toggleFollowItem }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleFollowItem = useCallback(() => {
    if (typeof toggleFollowItem === 'function') toggleFollowItem(product.id);
  }, [toggleFollowItem, product]);

  const handleNavigate = useCallback(event => {
    event.preventDefault();
  }, []);

  const currentImage = product.images[imageIndex];
  console.log('currentImage: ', currentImage);
  const rating = Math.floor(product.rating);
  const hasHalfRating = !(rating === product.rating);

  return <section className={styles.itemCell}>
    <div className={styles.imageWrap}>
      <div className={styles.image} style={{ backgroundImage: `url(${currentImage.url})` }}></div>
    </div>
    <div className={styles.contentWrap}>
      <header>
        <a href="/" title={product.name} onClick={handleNavigate}>
          {product.name}
        </a>
      </header>
      <div className={styles.priceWrap}>
        {
          product.discount
            ? <span>
              <strong>${product.price - product.discount}</strong>
              <del>${product.price}</del>
            </span>
            : <span><strong>{product.price}</strong></span>
        }
      </div>
      <div className={styles.rating}>
        {
          ratingArray.map(item => {
            return item <= rating
              ? <Star key={item} />
              : null
          })
        }
        {
          hasHalfRating ? <Star isHalf /> : null
        }
      </div>
      <footer>
        <button onClick={handleFollowItem}>
          <Heart isActived={isFollowed} />
        </button>
      </footer>
    </div>
  </section>
}

export default ItemCell;