const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Drinks' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books & Comics' },
    { name: 'Cloths' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: '',
      description:
        '',
      image: '',
      category: categories[0]._id,
      price: 1.99,
      quantity: 100
    },
    {
      name: '',
      description:
        '',
      image: '',
      category: categories[0]._id,
      price: 1.99,
      quantity: 200
    },
    {
      name: '',
      category: categories[1]._id,
      description:
        '',
      image: '',
      price: 4.99,
      quantity: 30
    },
    {
      name: '',
      category: categories[1]._id,
      description:
        '',
      image: '',
      price: 2.00,
      quantity: 30
    },
    {
      name: '',
      category: categories[1]._id,
      description:
        '',
      image: '',
      price: 3.50,
      quantity: 100
    },
    {
      name: '',
      category: categories[2]._id,
      description:
        '',
      image: '',
      price: 399.99,
      quantity: 45
    },
    {
      name: '',
      category: categories[2]._id,
      description:
        '',
      image: '',
      price: 1599.99,
      quantity: 50
    },
    {
      name: '',
      category: categories[2]._id,
      description:
        '',
      image: '',
      price: 699.99,
      quantity: 100
    },
    {
      name: '',
      category: categories[3]._id,
      description: '',
      image: '',
      price: 1.99,
      quantity: 100
    },
    {
      name: '',
      category: categories[3]._id,
      description:
        '',
      image: '',
      price: 2.99,
      quantity: 60
    },
    {
      name: '',
      category: categories[3]._id,
      description:
        '',
      image: '',
      price: 2.99,
      quantity: 60
    },
    {
      name: '',
      category: categories[4]._id,
      description:
        '',
      image: '',
      price: 9.99,
      quantity: 300
    },
    {
      name: '',
      category: categories[4]._id,
      description:
        '',
      image: '',
      price: 9.99,
      quantity: 300
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Bruno',
    lastName: 'Walderon',
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