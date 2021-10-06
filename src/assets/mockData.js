const ratings = [4.5, 2.5, 3, 4, 1.5, 2, 5];
const prices = [790, 90, 190, 290, 390, 490, 590];
const discounts = [100, 50, 30, 0, 90, 0, 250];

const createProduct = index => ({
  id: index.toString(),
  name: `Orren Ellis Chana ${index || '3'}-Light LED Kitchen Island Dome Pendant`,
  rating: ratings[index],
  price: prices[index],
  discount: discounts[index],
  images: [
    {
      id: 'image1',
      url: `${process.env.PUBLIC_URL}/images/image1.jpg`,
      description: 'image1',
    },
    {
      id: 'image2',
      url: `${process.env.PUBLIC_URL}/images/image2.jpg`,
      description: 'image2',
    },
    {
      id: 'image3',
      url: `${process.env.PUBLIC_URL}/images/image3.jpg`,
      description: 'image3',
    },
    {
      id: 'image4',
      url: `${process.env.PUBLIC_URL}/images/image4.jpg`,
      description: 'image4',
    },
    {
      id: 'image5',
      url: `${process.env.PUBLIC_URL}/images/image5.jpg`,
      description: 'image5',
    },
  ],
});

const initProducts = ratings.map((item, index) => createProduct(index));

export default initProducts;