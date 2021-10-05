import { useCallback } from 'react';
import styles from './WishlistModal.module.scss';

const WishlistItem = ({ product }) => {
  const image = product.images && product.images.length && product.images[0];
  return (
    <li className={styles.itemWrap}>
      {
        image
          ? <div className={styles.image} style={{ backgroundImage: `url(${image.url})` }}></div>
          : null
      }
      <div className={styles.name}>{product.name}</div>
    </li>
  )
}

const WishlistModal = ({ products = [], showModal, closeModal }) => {

  const handleCloseModal = useCallback(() => {
    if (typeof closeModal === 'function') closeModal();
  }, [closeModal]);

  return (
    <div className={showModal ? '' : styles.hideWrap}>
      <div className={styles.mask} onClick={handleCloseModal} />
      <div className={styles.container}>
        <header>
          <span>Wishlist</span>
          <button onClick={handleCloseModal}>X</button>
        </header>
        {
          products.length
            ? <ul>
              {
                products.map(item => <WishlistItem key={item.id} product={item} />)
              }
            </ul>
            : 'No item in wishlist.'
        }
      </div>
    </div>
  )
}

export default WishlistModal;