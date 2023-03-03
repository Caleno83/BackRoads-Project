import tourOne from './images/tour-1.jpeg'
import tourTwo from './images/tour-3.jpeg'
import tourThree from './images/tour-4.jpeg'
import tourFour from './images/tour-5.jpeg'

export const pageLinks = [
  {
    id: 1,
    href: '#home',
    text: 'home',
  },
  {
    id: 2,
    href: '#about',
    text: 'about',
  },
  {
    id: 3,
    href: '#services',
    text: 'services',
  },
  {
    id: 4,
    href: '#tours',
    text: 'tours',
  },
]

export const socialLink = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
]

export const tours = [
  {
    id: 1,
    image:  tourOne ,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    location: 'china',
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    image:  tourTwo ,
    date: 'october 1th, 2020',
    title: 'best of java',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    location: 'indonesia',
    duration: 11,
    price: 14000,
  },
  {
    id: 3,
    image:  tourThree ,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    location:'hong kong',
    duration: 5,
    price: 5000,
  },
  {
    id: 4,
    image:  tourFour ,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    location: 'kenya',
    duration: 12,
    price: 20000,
  },
]
