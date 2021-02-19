
import xphonepromax from '../imgs/xppromax.png';
import xphonepro from '../imgs/xppro.png';
import gphone from '../imgs/gphone.png';
import aphonemax from '../imgs/phone1.png';
import aphone from '../imgs/phone2.png';
import aphonemini from '../imgs/phone3.png';
import litephonemax from '../imgs/lite.png';
import litephone from '../imgs/lite21mini.png';
import litephonemini from '../imgs/litemini.png';
import earpods from '../images/earpods.png';
import headphone from '../images/headphone.png';
import monitor from '../images/monitor.png';
import keyboard from '../images/keyboard.jpg';
import mouse from '../images/mouse.jpg';
import powerbank from '../images/powerbank.jpg';
import soundbar from '../images/soundbar.jpg';


export const phones = [
  {id:1,series:"Pro Series",model:"Pro 21 Max",description:"The most flagship model, the fastest the biggest and modern Phone. XPhone Pro 21 Max has everything what you need to do most advanced tasks.",img: xphonepromax,cpu:"12-cores X-Brain",ram:"16GB",storage:"1TB",camera:"108MPx",size:"6,9",battery:"6000 mAh",price:"1500"},
  {id:2,series:"Pro Series",model:"Pro 21",description:"Good size",img: xphonepro,cpu:"12-cores X-Brain",ram:"12GB",storage:"1TB",camera:"108MPx",size:"6,0",battery:"5000 mAh",price:"1200"},
  {id:3,series:"Pro Series",model:"Pro 21 Mini",description:"Most powerful in small size. You can everything what you need in compact sizes",img: xphonepro,cpu:"10-cores X-Brain",ram:"12GB",storage:"512GB",camera:"108Mpx",size:"5,0",battery:"4500mAh",price:"1000"},
  {id:4,series:"A Series",model:"A 21 Max",description:"",img: aphonemax,cpu:"8-cores X-Brain",ram:"8GB",storage:"512GB",camera:"64MPx",size:"6,5",battery:"5000mAh",price:"1000"},
  {id:5,series:"A Series",model:"A 21",description:"",img: aphone,cpu:"8-cores X-Brain",ram:"8GB",storage:"256GB",camera:"64MPx",size:"6,0",battery:"4500mAh",price:"800"},
  {id:6,series:"A Series",model:"A 21 Mini",description: "",img: aphonemini,cpu:"6-cores X-Brain",ram:"8GB",storage:"256GB",camera:"64MPx",size:"5,0",battery:"3500mAh",price:"600"},
  {id:7,series:"Game Series",model:"G21 Max",description:"",img: gphone,cpu:"12-cores X-BrainG",ram:"12GB",storage:"512GB",camera:"64MPx",size:"7,5",battery:"6000mAh",price:"1200"},
  {id:8,series:"Game Series",model:"G21 Pro",description:"",img: gphone,cpu:"10-cores X-BrainG",ram:"12GB",storage:"512GB",camera:"64MPx",size:"7,0",battery:"6000mAh",price:"1000"},
  {id:9,series:"Game Series",model:"G21",description:"",img: gphone,cpu:"8-cores X-BrainG",ram:"8GB",storage:"256GB",camera:"64MPx",size:"7,0",battery:"5500mAh",price:"800"},
  {id:10,series:"Lite Series",model:"Lite 21 Max",description:"",img: litephonemax,cpu:"6-cores X-Brain",ram:"6GB",storage:"256GB",camera:"32MPx",size:"6,5",battery:"3500mAh",price:"600"},
  {id:11,series:"Lite Series",model:"Lite 21",description:"",img: litephone,cpu:"6-cores X-Brain",ram:"6GB",storage:"128GB",camera:"32MPx",size:"6,0",battery:"3000mAh",price:"500"},
  {id:12,series:"Lite Series",model:"Lite 21 Mini",description:"",img: litephonemini,cpu:"6-cores X-Brain",ram:"4GB",storage:"128GB",camera:"32MPx",size:"5,0",battery:"3000mAh",price:"400"}
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