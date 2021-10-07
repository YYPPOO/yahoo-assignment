const ratings = [4.5, 2.5, 3, 4, 1.5, 2, 5];
const prices = [790, 90, 190, 290, 390, 490, 590];
const discounts = [100, 50, 30, 0, 90, 0, 250];
const images = [
  ['image1', 'image2', 'image3', 'image4', 'image5'],
  ['image6', 'image7', 'image8'],
  ['image9', 'image10'],
  ['image11', 'image12', 'image13'],
  ['image14'],
  ['image15', 'image16', 'image17', 'image18', 'image19'],
  ['image20', 'image21', 'image22'],
]

const createProduct = index => ({
  id: index.toString(),
  name: `Orren Ellis Chana ${index || '3'}-Light LED Kitchen Island Dome Pendant`,
  rating: ratings[index],
  price: prices[index],
  discount: discounts[index],
  images: images[index].map(item => ({
    id: item,
    description: item,
    url: `${process.env.PUBLIC_URL}/images/${item}.jpg`,
  })),
});

const initProducts = ratings.map((item, index) => createProduct(index));

export default initProducts;