import imgXphoneOne from '../images/xphone2.jpg';
import APhoneMini from '../images/aphonemini.png';
import APhoneMax from '../images/aphonemax.jpg';
import XPhoneMini from '../images/xphonemini.png';
import earpods from '../images/earpods.png';
import headphone from '../images/headphone.png';
import monitor from '../images/monitor.png';
import keyboard from '../images/keyboard.jpg';
import mouse from '../images/mouse.jpg';
import powerbank from '../images/powerbank.jpg';
import soundbar from '../images/soundbar.jpg';


export const phones = [
  {
    id: 1,
    series: 'Pro Series',
    model: 'Pro 21 Max',
    img: imgXphoneOne,
    cpu: '12-cores X-Brain',
    ram: '16GB',
    storage: '1TB',
    camera: '108MP',
    size: '6,9 inch',
    battery: '6000 mAh',
    price: 1500
  },
  {
    id: 2,
    series: 'Pro Series',
    model: 'Pro 21',
    img: imgXphoneOne,
    cpu: '8-cores X-Brain',
    ram: '12GB',
    storage: '512GB',
    camera: '108MP',
    size: '6,3 inch',
    battery: '5000 mAh',
    price: 1250
  },
  {
    id: 3,
    series: 'Pro Series',
    model: 'Pro 21 Mini',
    img: XPhoneMini,
    cpu: '8-cores X-Brain',
    ram: '8GB',
    storage: '512GB',
    camera: '64MP',
    size: '5,5 inch',
    battery: '4500 mAh',
    price: 1000
  },
  {
    id: 4,
    series: 'A Series',
    model: 'A 21 Max',
    img: APhoneMax,
    cpu: '8-cores X-Brain',
    ram: '8GB',
    storage: '256GB',
    camera: '108MP',
    size: '6,7 inch',
    battery: '5000 mAh',
    price: 1000
  },
  {
    id: 5,
    series: 'A Series',
    model: 'A 21',
    img: imgXphoneOne,
    cpu: '8-cores X-Brain',
    ram: '8GB',
    storage: '128GB',
    camera: '108MP',
    size: '6,3 inch',
    battery: '4000 mAh',
    price: 800
  },
  {
    id: 6,
    series: 'A Series',
    model: 'A 21 Mini',
    img: APhoneMini,
    cpu: '6-cores X-Brain',
    ram: '6GB',
    storage: '128GB',
    camera: '64MP',
    size: '5,5 inch',
    battery: '3500 mAh',
    price: 600
  },
]

export const xbooks = [
  {
    name: 'XBook Pro Max',
    cpu: '16-cores X-Brain Pro',
    ram: 'up to 64 GB',
    storage: 'up to 2TB',
    size: '16 inch',
    battery: '12000 mAh',
    price: ' from 2000$'
  },
  {
    name: 'XBook Pro',
    cpu: '16-cores X-Brain Pro',
    ram: 'up to 32 GB',
    storage: 'up to 1TB',
    size: '13 inch',
    battery: '10000 mAh',
    price: 'from 1500$'
  },
  {
    name: 'XBook ',
    cpu: '12-cores X-Brain Pro',
    ram: 'up to 32 GB',
    storage: 'up to 1TB',
    size: '15 inch',
    battery: '10000 mAh',
    price: 'from 1250$'
  },
  {
    name: 'XBook Mini',
    cpu: '12-cores X-Brain Pro',
    ram: 'up to 16 GB',
    storage: 'up to 512GB',
    size: '13 inch',
    battery: '8000 mAh',
    price: 'from 800$'
  },
]

export const watches = [
  {
    name: 'XWatch Gold',
    desc: 'Smartwatch for demanding customers. XWatch Gold is ideal if you want a business smartwatch with georgeus look, the most advanced health track and outstanding battery life up to one month without charging.',
    battery: 'up to 30 days',
    storage: '64GB',
    size: '1,5 inch',
    gps: true,
    healthcare: true,
    fitness: '100 sports',
    esim: true,
    water: true,
    price: '550$'
  },
  {
    name: 'XWatch Pro',
    desc: 'Pro Model is both for sport activity and for daily use. Thanks esim integrated you can forget about your smartphone. XWatch Pro has impossible long battery life and 64GB storage for your music and files.  ',
    battery: 'up to 25 days',
    storage: '64GB',
    size: '1,5 inch',
    gps: true,
    healthcare: true,
    fitness: '100 sports',
    esim: true,
    water: true,
    price: '450$'
  },
  {
    name: 'XWatch Lite',
    desc: 'XWatch Lite is made for the less demanding. Awesome look but if you do not need esim and water resistant this option is for you. XWatch Life has 16GB storage and you can forget about charging for 2 weeks.',
    battery: 'up to 14 days',
    storage: '16GB',
    size: '1,5 inch',
    gps: true,
    healthcare: true,
    fitness: '50 sports',
    esim: false,
    water: false,
    price: '250$'
  },
  {
    name: 'XBand Pro',
    desc: 'The best option for active person and who wants to use for sport training and daily tasks. XBand Pro is a sport smartband with amazing features and also you can add your esim and forget about phone durning your fitness time',
    battery: 'up to 30 days',
    storage: '32GB',
    size: '1,1 inch',
    gps: true,
    healthcare: true,
    fitness: '100 sports',
    esim: true,
    water: true,
    price: '300$'
  },
  {
    name: 'XBand Lite',
    desc: 'The cheapest version for active person who wants to track their fitness activity and progress. XBand Lite has 8GB storage for your favourite music to listen durning your training.',
    battery: 'up to 20 days',
    storage: '8GB',
    size: '1,0 inch',
    gps: false,
    healthcare: true,
    fitness: '50 sports',
    esim: false,
    water: false,
    price: '100$'
  },
]

export const accessories = [
  {
    name: 'Keyboard',
    img: keyboard
  },
  {
    name: 'Earpods',
    img: earpods,
  },
  {
    name: 'Mouse',
    img: mouse,
  },
  {
    name: 'Headphones',
    img: headphone,
  },
  {
    name: 'Powerbank',
    img: powerbank
  },
  {
    name: 'Soundbars',
    img: soundbar
  },
  {
    name: 'Monitor',
    img: monitor
  },
]