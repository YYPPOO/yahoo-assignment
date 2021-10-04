import { useState } from 'react';

import initProducts from './mockData';
import ItemCell from './components/ItemCell';
import styles from './App.module.scss';

function App() {
  const [products, setProducts] = useState(initProducts);

  return (
    <div className={styles.page}>
      <div className={styles.itemWrap}>
        {
          products.map(item => <ItemCell key={item.id} product={item} />)
        }
      </div>
    </div>
  );
}

export default App;
