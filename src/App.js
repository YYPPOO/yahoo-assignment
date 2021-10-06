import { useCallback, useState } from 'react';

import initProducts from './assets/mockData';
import ItemCell from './components/ItemCell';
import WishlistModal from './components/WishlistModal';
import styles from './App.module.scss';

function App() {
  const products = initProducts;
  const [followedId, setFollowedId] = useState([]);
  const [showWishlist, setShowWishlist] = useState(false);

  const toggleFollowItem = useCallback(id => {
    setFollowedId(state => {
      return state.includes(id)
        ? state.filter(item => item !== id)
        : state.concat(id)
    });
  }, []);

  const followedProducts = products.filter(item => followedId.includes(item.id));
  const openWishlistModal = useCallback(() => setShowWishlist(true), []);
  const closeWishlistModal = useCallback(() => setShowWishlist(false), []);

  return (
    <div className={styles.page}>
      <div className={styles.itemWrap}>
        {
          products.map(item => (
            <ItemCell
              key={item.id}
              product={item}
              isFollowed={followedId.includes(item.id)}
              toggleFollowItem={toggleFollowItem}
            />
          ))
        }
      </div>
      <footer className={styles.footer} onClick={openWishlistModal}>
        {followedId.length} products in Wishlist
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
