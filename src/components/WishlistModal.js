import { useCallback } from 'react';
import styles from './WishlistModal.module.scss';

const WishlistItem = ({ product }) => {
  const image = product.images && product.images.length && product.images[0];
  return (
    <li className={styles.itemWrap}>
      {
        image
          ? <img
            className={styles.image}
            src={image.url}
            alt={image.description}
          />
          : null
      }
      <div className={styles.name} title={product.name}>{product.name}</div>
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
          <button onClick={handleCloseModal}>
            <img src={`${process.env.PUBLIC_URL}/icons/close.png`} alt="close" />
          </button>
        </header>
        {
          products.length
            ? <ul>
              {
                products.map(item => <WishlistItem key={item.id} product={item} />)
              }
            </ul>
            : <small>No item in wishlist.</small>
        }
      </div>
    </div>
  )
}

export default WishlistModal;