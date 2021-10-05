const product = {
  name: 'Orren Ellis Chana 3-Light LED Kitchen Island Dome Pendant',
  rating: 4.5,
  price: 790,
  discount: 100,
  images: [
    {
      url: `${process.env.PUBLIC_URL}/images/image1.jpg`,
      description: 'image1',
    },
    {
      url: `${process.env.PUBLIC_URL}/images/image2.jpg`,
      description: 'image2',
    },
    {
      url: `${process.env.PUBLIC_URL}/images/image3.jpg`,
      description: 'image3',
    },
    {
      url: `${process.env.PUBLIC_URL}/images/image4.jpg`,
      description: 'image4',
    },
    {
      url: `${process.env.PUBLIC_URL}/images/image5.jpg`,
      description: 'image5',
    },
  ],
  isFollowed: false,
};

const productQuantity = 7;

const initProducts = Array.from({ length: productQuantity }, (item, index) => ({ ...product, id: index }))

export default initProducts;