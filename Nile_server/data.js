import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234567'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
    {
      name: 'Walid',
      email: 'wjamjoumr@example.com',
      password: bcrypt.hashSync('12345'),
      isAdmin: true,
    },
  ],
  products: [
    {
     // _id: "1",
      name: "Samsung Galaxy S10+",
      slug: "galaxy-s10+",
      category: "Mobile phones",
      image: "/images/gs10+.jpg", // 680px x 830 px
      price: 1320,
      countInStock: 13,
      brand: " Samsung",
      rating: 4.5,
      numReviews: 10,
      description: "high quality phone 128 GB",
    },
    {
     // _id: "2",
      name: "Samsung Galaxy S20",
      slug: "galaxy-s20",
      category: "Mobile phones",
      image: "/images/gs20.jpg",
      price: 1649,
      countInStock: 0,
      brand: " Samsung",
      rating: 2.7,
      numReviews: 23,
      description: "high quality phone 8GB RAM",
    },
    {
      //_id: "3",
      name: "Samsung Galaxy S20 ultra",
      slug: "galaxy-s20 ultra",
      category: "Mobile phones",
      image: "/images/gs20-ultra.jpg",
      price: 2103,
      countInStock: 14,
      brand: " Samsung",
      rating: 4.8,
      numReviews: 33,
      description: "high quality phone 12GB RAM",
    },
    {
      //_id: "4",
      name: "Samsung Galaxy S21 Ultra",
      slug: "galaxy-s21 ultra",
      category: "Mobile phones",
      image: "/images/gs21-ultra.jpg",
      price: 3399,
      countInStock: 21,
      brand: " Samsung",
      rating: 4.8,
      numReviews: 17,
      description: "high quality phone 256GB + 12GB RAM",
    },
  ],
};
export default data;
