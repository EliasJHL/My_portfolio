<script setup>
import HelloWorld from './components/Introducation.vue'
import Menu from './components/Slidebar.vue'
import Buttons from './components/Social.vue'
import Content from './components/website.vue'
import Cards from './components/content.vue'
import About from './components/about.vue'
import Contact from './components/contact.vue'
</script>

<template>
  <div id="cursor"></div>
  <div class="video">
    <video id="video-bg" preload="auto" autoplay playsinline muted loop poster>
    <source src="https://wyld.studio/wp-content/uploads/2023/09/code-kueste.mp4" type="video/mp4">
  </video>
  </div>
  <div id="Intrduction">
    <div id="Menu">
      <Menu />
    </div>
    <div id="pp">
      <img src="./assets/pp.png" alt="photo" onclick="window.scrollTo({top: 0, behavior: 'smooth'});"/>
    </div>
    <div id="hello">
      <HelloWorld msg="Hello !"/>
    </div>
    <div id="button">
      <Buttons />
    </div>
  </div>
  <div id="website">
    <Content />
  </div>
  <hr class="intr-line">
  <div id="about">
    <About ref="about"/>
  </div>
  <hr>
  <div id="ProjectsCards">
    <Cards />
  </div>
  <hr>
  <div id="contact-form">
    <Contact/>
  </div>
</template>

<style>
.intr-line {
  margin-top: 350px;
}

#video-bg {
  opacity:0.45;
  mix-blend-mode:inherit;
}

#Intrduction {
  text-align: center;
  margin-left: 70px;
}

#ProjectsCards {
  text-align: center;
  margin-left: 70px;
}

#website {
  text-align: center;
  margin-left: 70px;
}

#hello {
  margin-top: 10vh;
  margin-left: auto;
}

#Menu {
  margin-top: 0;
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: auto;
  z-index: -1;
  background-color: #000000;
  filter: blur(8px);
}

.video video {
  min-height: 750px;
  object-fit: cover;
  width: 147%;
  max-width: 100%;
  height: 100%;
  max-height: 760px;
}

#pp img{
  width: 35px;
  height: 35px;
  border-radius: 20%;
  position: fixed;
  display: flex;
  margin-left: -59px;
  margin-top: -40px;
  cursor: pointer;
}

hr {
  height: 2px;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  margin-top: 20px;
}

#cursor {
  border-radius: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  position: fixed;
  width: 20px;
  height: 20px;
  opacity: 1;
  z-index: -1;
  box-shadow: 0 0 50px rgba(255, 255, 255, 1), 0 0 60px rgba(255, 255, 255, 1), 0 0 70px rgba(222, 222, 222, 1), 0 0 80px rgba(255, 255, 255, 1), 0 0 100px rgba(255, 255, 255, 1), 0 0 110px rgba(255, 255, 255, 1);
}
</style>