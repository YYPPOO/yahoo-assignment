import { useCallback, useState } from 'react';

import initProducts from './assets/mockData';
import ItemCell from './components/ItemCell';
import WishlistModal from './components/WishlistModal';
import styles from './App.module.scss';

function App() {
  const [products, setProducts] = useState(initProducts);
  const [showWishlist, setShowWishlist] = useState(false);

  const followedProducts = products.filter(item => item.isFollowed);
  const closeWishlistModal = useCallback(() => setShowWishlist(false), []);

  return (
    <div className={styles.page}>
      <div className={styles.itemWrap}>
        {
          products.map(item => <ItemCell key={item.id} product={item} />)
        }
      </div>
      <footer className={styles.footer}>
        {followedProducts.length} products in Wishlist
      </footer>
      <WishlistModal
        products={followedProducts} 
        showModal={showWishlist}
        closeModal={closeWishlistModal}
      />
    </div>
  );
}

export default App;
