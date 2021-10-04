const product = {
  title: 'Orren Ellis Chana 3-Light LED Kitchen Island Dome Pendant',
  rating: 4.5,
  price: 790,
  discount: 100,
  images: [
    {
      url: '',
      description: '',
    },
    {
      url: '',
      description: '',
    },
    {
      url: '',
      description: '',
    },
  ],
  ifFollowed: false,
};

const productQuantity = 7;

const initProducts = Array.from({ length: productQuantity }, (item, index) => ({ ...product, id: index }))

export default initProducts;