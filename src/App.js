import { useCallback, useEffect, useState } from 'react';

import initProducts from './assets/mockData';
import ItemCell from './components/ItemCell';
import WishlistModal from './components/WishlistModal';
import styles from './App.module.scss';

function App() {
  const products = initProducts;
  const [followedIds, setFollowedIds] = useState([]);
  const [showWishlist, setShowWishlist] = useState(false);

  const toggleFollowItem = useCallback(id => {
    setFollowedIds(state => {
      return state.includes(id)
        ? state.filter(item => item !== id)
        : state.concat(id)
    });
  }, []);

  const followedProducts = products.filter(item => followedIds.includes(item.id));
  const openWishlistModal = useCallback(() => setShowWishlist(true), []);
  const closeWishlistModal = useCallback(() => setShowWishlist(false), []);

  useEffect(() => {
    if (localStorage.followedIds) {
      setFollowedIds(JSON.parse(localStorage.getItem('followedIds')));
    }
  }, []);
  
  useEffect(() => {
    const followedIdsString = JSON.stringify(followedIds);
    if (localStorage.getItem('followedIds') !== followedIdsString) {
      localStorage.setItem('followedIds', followedIdsString);
    }
  }, [followedIds]);

  return (
    <div className={styles.page}>
      <div className={styles.itemWrap}>
        {
          products.map(item => (
            <ItemCell
              key={item.id}
              product={item}
              isFollowed={followedIds.includes(item.id)}
              toggleFollowItem={toggleFollowItem}
            />
          ))
        }
      </div>
      <footer className={styles.footer} onClick={openWishlistModal}>
        {followedIds.length} products in Wishlist
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
