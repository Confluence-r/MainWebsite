import Image from 'next/image';

export default function OurWork() {
	return (
	<>

<header class="header">
  <a href="./" class="logo"><Image src="/logo.png" width="150px" height="50%"/></a>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">
    <li><a href="#work">Our Work</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#careers">Careers</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</header>

<br/><br/><br/><br/>
<div class="Container">
<h1>Our Work</h1>

<div class="resp-cont">
<div class="image-wrapper"><img src="/1.png" alt="Avatar" class="image"/></div>
<div class="button-wrapper">
<br/>
<i class="fas fa-quote-left"></i>
       The talented team at Confluence- r, understood the brief given at the first instant and have created a top class web site by sharing innovative ideas and visuals and hand holding us through the whole process. A very professional and talented organization – Viral Shah, Partner
       <i class="fas fa-quote-right"></i>
       <br/><br/><br/><br/>
<a class="button">Review</a><br/><br/><br/><br/>
<a class="button">How we do it?</a>
</div>
</div>
</div>
<br/><br/><br/><br/>

<footer>
  <p>All rights reserved. Confluence-r 2021</p>
</footer>
	</>

)}