import beginnerImage from '../assets/beginner.jpg';
import intermediateImage from '../assets/intermediate.jpg';
import advancedImage from '../assets/advanced.jpg';

const courses = [
  {
    id: 1,
    name: 'Beginner Chess Course',
    description: 'An introductory course for beginners to learn the basics of chess.',
    price: 30,
    image: beginnerImage,
    reviews: [
      { id: 1, text: 'Great course for beginners!', reviewer: 'Alice' },
      { id: 2, text: 'Really helped me understand the basics.', reviewer: 'Bob' }
    ]
  },
  {
    id: 2,
    name: 'Intermediate Chess Course',
    description: 'An intermediate course to build on basic skills and learn advanced strategies.',
    price: 50,
    image: intermediateImage,
    reviews: [
      { id: 1, text: 'Challenging but worth it.', reviewer: 'Charlie' },
      { id: 2, text: 'Learned a lot of new strategies.', reviewer: 'Dave' }
    ]
  },
  {
    id: 3,
    name: 'Advanced Chess Course',
    description: 'An advanced course for experienced players to master high-level tactics and strategies.',
    price: 70,
    image: advancedImage,
    reviews: [
      { id: 1, text: 'Perfect for advanced players.', reviewer: 'Eve' },
      { id: 2, text: 'Advanced techniques explained well.', reviewer: 'Frank' }
    ]
  }
];

export default courses;
