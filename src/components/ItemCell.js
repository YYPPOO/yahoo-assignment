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
        {product.name}
      </header>
      <div className={styles.priceWrap}>
        {
          product.discount
            ? <span>
              <del>${product.price}</del>
              <strong>${product.price - product.discount}</strong>
            </span>
            : <span>{product.price}</span>
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