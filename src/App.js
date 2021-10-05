import { useState } from 'react';

import initProducts from './assets/mockData';
import ItemCell from './components/ItemCell';
import styles from './App.module.scss';

function App() {
  const [products, setProducts] = useState(initProducts);

  const followedProducts = products.filter(item => item.isFollowed);

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
    </div>
  );
}

export default App;
