<script setup>
import HelloWorld from './components/Introducation.vue'
import Menu from './components/Slidebar.vue'
import Buttons from './components/Social.vue'
</script>

<template>
  <div id="Intrduction">
    <div id="Menu">
      <Menu />
    </div>
    <div id="hello">
      <HelloWorld msg="Hello !"/>
    </div>
    <div id="button">
      <Buttons />
    </div>
  </div>
</template>

<style>
#Intrduction {
  text-align: center;
}

#hello {
  margin-top: 10vh;
  margin-left: auto;
}

#Menu {
  margin-top: 0;
}

@media screen and (max-width: 760px) {
  #Intrduction {
    text-align: center;
  }

  #hello {
    margin-top: 10vh;
    margin-left: auto;
  }

  #Menu {
    margin-top: 0;
  }

}
</style>