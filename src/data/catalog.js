import serumImg from '../assets/products/serum.jpg';
import vitaminCImg from '../assets/products/vitamin-c.jpg';
import shampooImg from '../assets/products/shampoo.jpg';
import bodyOilImg from '../assets/products/body-oil.jpg';
import capsulesImg from '../assets/products/capsules.jpg';
import tonerImg from '../assets/products/toner.jpg';
import hairMaskImg from '../assets/products/hair-mask.jpg';
import bodyWashImg from '../assets/products/body-wash.jpg';

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'skincare', label: 'Skincare' },
  { id: 'hair', label: 'Hair' },
  { id: 'body', label: 'Body' },
  { id: 'wellness', label: 'Wellness' },
  { id: 'makeup', label: 'Makeup' },
  { id: 'fragrance', label: 'Fragrance' },
  { id: 'tools', label: 'Tools' },
  { id: 'bestsellers', label: 'Best sellers' },
  { id: 'new', label: 'New' },
];

export const products = [
  {
    id: 1,
    name: 'Night Repair Serum',
    categories: ['skincare', 'bestsellers'],
    price: 429,
    image: serumImg,
    blurb: 'Overnight recovery with peptides.',
  },
  {
    id: 2,
    name: 'Vitamin C Glow Drops',
    categories: ['skincare', 'bestsellers', 'new'],
    price: 349,
    image: vitaminCImg,
    blurb: 'Brightens dull morning skin.',
  },
  {
    id: 3,
    name: 'Silk Soft Shampoo',
    categories: ['hair'],
    price: 259,
    image: shampooImg,
    blurb: 'Gentle cleanse for daily use.',
  },
  {
    id: 4,
    name: 'Botanical Body Oil',
    categories: ['body', 'fragrance'],
    price: 299,
    image: bodyOilImg,
    blurb: 'Lightweight moisture that lasts.',
  },
  {
    id: 5,
    name: 'Calm Focus Capsules',
    categories: ['wellness', 'bestsellers'],
    price: 389,
    image: capsulesImg,
    blurb: 'Daily support for busy weeks.',
  },
  {
    id: 6,
    name: 'Hydra Mist Toner',
    categories: ['skincare', 'new'],
    price: 219,
    image: tonerImg,
    blurb: 'Instant refresh between steps.',
  },
  {
    id: 7,
    name: 'Repair Hair Mask',
    categories: ['hair', 'bestsellers'],
    price: 319,
    image: hairMaskImg,
    blurb: 'Weekly treatment for soft ends.',
  },
  {
    id: 8,
    name: 'Citrus Body Wash',
    categories: ['body', 'fragrance'],
    price: 189,
    image: bodyWashImg,
    blurb: 'Clean scent, clean rinse.',
  },
  {
    id: 9,
    name: 'Soft Glow Lip Oil',
    categories: ['makeup', 'new', 'bestsellers'],
    price: 249,
    image: vitaminCImg,
    blurb: 'Sheer tint with a hydrated finish.',
  },
  {
    id: 10,
    name: 'Skin Prep Primer Mist',
    categories: ['makeup', 'skincare'],
    price: 279,
    image: tonerImg,
    blurb: 'Sets makeup and refreshes skin.',
  },
  {
    id: 11,
    name: 'Cedar Citrus Cologne',
    categories: ['fragrance', 'new'],
    price: 459,
    image: bodyWashImg,
    blurb: 'Light daytime scent with citrus lift.',
  },
  {
    id: 12,
    name: 'Scalp Massage Comb',
    categories: ['tools', 'hair'],
    price: 149,
    image: shampooImg,
    blurb: 'Stimulates scalp before wash day.',
  },
  {
    id: 13,
    name: 'Jade Facial Roller',
    categories: ['tools', 'skincare', 'new'],
    price: 199,
    image: serumImg,
    blurb: 'Cool massage for morning puffiness.',
  },
  {
    id: 14,
    name: 'Evening Wind Down Oil',
    categories: ['wellness', 'body', 'fragrance'],
    price: 329,
    image: bodyOilImg,
    blurb: 'Calming blend for night rituals.',
  },
  {
    id: 15,
    name: 'Color Lock Conditioner',
    categories: ['hair', 'new'],
    price: 239,
    image: hairMaskImg,
    blurb: 'Keeps color soft and shiny.',
  },
  {
    id: 16,
    name: 'Daily Multivitamin Pack',
    categories: ['wellness'],
    price: 359,
    image: capsulesImg,
    blurb: 'Simple daily support in one pack.',
  },
];

export const benefits = [
  {
    id: 'price',
    title: 'Incredible prices',
    text: 'Health, beauty, and personal care picks without the markup.',
  },
  {
    id: 'pickup',
    title: 'Free pickup points',
    text: 'Choose a nearby Groop point across Mexico City at checkout.',
  },
  {
    id: 'pay',
    title: 'Pay on delivery',
    text: 'Confirm by WhatsApp and pick the payment method that fits you.',
  },
];

export const pickupPoints = [
  {
    id: 'roma-norte',
    label: 'Roma Norte',
    address: 'Av. Álvaro Obregón 188, Roma Norte, CDMX',
  },
  {
    id: 'condesa',
    label: 'Condesa',
    address: 'Av. Michoacán 30, Condesa, CDMX',
  },
  {
    id: 'polanco',
    label: 'Polanco',
    address: 'Av. Presidente Masaryk 111, Polanco, CDMX',
  },
  {
    id: 'coyoacan',
    label: 'Coyoacán',
    address: 'Av. México 25, Coyoacán, CDMX',
  },
];

export const DELIVERY_FEE = 79;
