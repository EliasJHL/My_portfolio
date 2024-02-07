<script setup>
import HelloWorld from './components/Introducation.vue'
import Menu from './components/Slidebar.vue'
import Buttons from './components/Social.vue'
import Content from './components/website.vue'
import Cards from './components/content.vue'
</script>

<template>
  <!---<div id="cursor"></div>--->
  <div id="Intrduction">
    <div id="Menu">
      <Menu />
    </div>
    <div id="pp">
      <img src="./assets/pp.png" alt="photo"/>
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
  <hr>
  <div id="ProjectsCards">
    <Cards />
  </div>
</template>

<style>
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

#pp img{
  width: 35px;
  height: 35px;
  border-radius: 20%;
  position: fixed;
  display: flex;
  margin-left: -59px;
  margin-top: -40px;
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
  box-shadow: 0 0 50px rgba(255, 255, 255, 1), 0 0 60px rgba(255, 255, 255, 1), 0 0 70px rgba(222, 222, 222, 1), 0 0 80px rgba(255, 255, 255, 1), 0 0 100px rgba(255, 255, 255, 1), 0 0 110px rgba(255, 255, 255, 1);
}
</style>