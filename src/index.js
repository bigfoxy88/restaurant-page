import renderHome from "./home.js";
import renderMenu from "./menu.js";
import renderAbout from "./about.js";
import './style.css'
import Icon from './icon.jpg'

  
const content=document.getElementById('content');

const home=document.getElementById('home');
const menu=document.getElementById('menu');
const about =document.getElementById('about');
const myIcon=new Image();
myIcon.src=Icon
content.appendChild(myIcon)
home.onclick=renderHome;
menu.onclick=renderMenu;
about.onclick=renderAbout;



renderHome()