const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'skincare(man)' },
    { name: 'skincare(woman)' },
    { name: 'skincare(children)' },
    { name: 'skincare(infant)' },
    { name: 'pet care' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Honey baby soap',
      description:
        'Soap made of milk and honey for soft skin',
      image: 'baby1.jpg',
      category: categories[3]._id,
      price: 3.00,
      quantity: 100
    },
    {
      name: 'mild baby soap',
      description:
        'a lightly scented soap',
      image: 'baby2.jpg',
      category: categories[3]._id,
      price: 1.50,
      quantity: 200
    },
    {
      name: 'oatmilk soap',
      category: categories[2]._id,
      description:
        'soap made out of oatmilk for eczema prone skin',
      image: 'children1.jpg',
      price: 3.99,
      quantity: 100
    },
    {
      name: 'Calendula flower soap',
      category: categories[2]._id,
      description:
        'Soap to maintain soft skin ',
      image: 'children2.jpg',
      price: 2.00,
      quantity: 30
    },
    {
      name: 'aloe-vera soap',
      category: categories[0]._id,
      description:
        'promote bright and healthy skin',
      image: 'men1.jpg',
      price: 2.50,
      quantity: 100
    },
    {
      name: 'shea butter soap',
      category: categories[0]._id,
      description:
        'Promotes glowy skin',
      image: 'men2.jpg',
      price: 3.00,
      quantity: 60
    },
    {
      name: 'olive castile soap',
      category: categories[0]._id,
      description:
        'a light fragrance free soap for very sensitive skin',
      image: 'men3.jpg',
      price: 4.50,
      quantity: 60
    },
    {
      name: 'turmeric soap',
      category: categories[1]._id,
      description:
        'turmeric soap to fight blemishes',
      image: 'women1.jpg',
      price: 5.00,
      quantity: 40
    },
    {
      name: 'butterfly pea soap',
      category: categories[1]._id,
      description: 'soap gently exfoliates skin to reveal a healthy and softer skin ',
      image: 'women2.jpg',
      price: 3.50,
      quantity: 90
    },
    {
      name: 'lemon herbal soap',
      category: categories[1]._id,
      description:
        'lemon essential oil and orange leaves soap ',
      image: 'women3.jpg',
      price: 2.99,
      quantity: 60
    },
    {
      name: 'pet liquid Shampoo',
      category: categories[4]._id,
      description:
        'made of sage and star anise to ward off bugs',
      image: 'pet1,jpg',
      price: 1.99,
      quantity: 85
    },
    {
      name: 'dog shampoo bars',
      category: categories[4]._id,
      description:
        'made of coconut oil to keep coat shiny',
      image: 'pet2.jpg',
      price: 3.00,
      quantity: 70
    },
    {
      name: 'spring flowers shampoo',
      category: categories[4]._id,
      description:
        'keeps your pet clean and freshly scented',
      image: 'pet3.jpg',
      price: 4.50,
      quantity: 50
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Bruno',
    lastName: 'Calderon',
    email: 'bce_moar_2000@gmail.com',
    password: 'bruno192000',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Walter',
    lastName: 'White',
    email: 'WW2007@yahoo.com',
    password: 'lospolloshermanos01'
  });

  console.log('users seeded');

  process.exit();
});