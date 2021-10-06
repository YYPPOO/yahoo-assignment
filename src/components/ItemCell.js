import { useCallback, useState } from 'react';

import Star from './icons/Star';
import Heart from './icons/Heart';
import Percentage from './Percentage';
import styles from './ItemCell.module.scss';

const ratingArray = [1, 2, 3, 4, 5];

const ItemCell = ({ product, isFollowed, toggleFollowItem }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleFollowItem = useCallback(() => {
    if (typeof toggleFollowItem === 'function') toggleFollowItem(product.id);
  }, [toggleFollowItem, product]);

  const imageQuantity = product.images ? product.images.length : 0;

  const goNextImage = useCallback(() => {
    setImageIndex(state => {
      state++;
      if (state >= imageQuantity) state = 0;
      return state;
    })
  }, [imageQuantity]);

  const goPreviousImage = useCallback(() => {
    setImageIndex(state => {
      state--;
      if (state < 0) state = imageQuantity - 1;
      return state;
    });
  }, [imageQuantity])

  const rating = Math.floor(product.rating);
  const hasHalfRating = !(rating === product.rating);

  return <section className={styles.itemCell}>
    <div className={styles.imageView}>
      {
        imageQuantity
          ? <div
            className={styles.imageWrap}
            style={{
              width: `${100 * imageQuantity}%`,
              transform: `translateX(-${100 * imageIndex / imageQuantity}%)`
            }}
          >
            {
              product.images.map(item => (
                <img
                  key={item.id}
                  className={styles.image}
                  src={item.url}
                  alt={item.description}
                />
              ))
            }
          </div>
          : <div className={styles.imagePlaceholder}>No image available.</div>
      }
      {
        imageQuantity > 1
          ? <>
            <button className={styles.nextButton} onClick={goNextImage}>{'>'}</button>
            <button className={styles.previousButton} onClick={goPreviousImage}>{'<'}</button>
          </>
          : null
      }
      {
        product.discount
          ? <div className={styles.discountTag}>
            <Percentage ratio={product.discount / product.price} />
            Off
          </div>
          : null
      }
    </div>
    <div className={styles.contentWrap}>
      {
        imageQuantity
          ? <div className={styles.imageIndicator}>
            {
              product.images.map((item, index) => (
                <div key={item.id} className={index === imageIndex ? styles.currentIndicator : ''} />
              ))
            }
          </div>
          : null
      }
      <header title={product.name}>
        {product.name}
      </header>
      <div className={styles.priceWrap}>
        {
          product.discount
            ? <span>
              <strong>${product.price - product.discount}</strong>
              <del>${product.price}</del>
            </span>
            : <span><strong>${product.price}</strong></span>
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