<template>
  <div class="zone">
    <div class="hello">
      <button class="clickable1" @click="scrollToAbout">About.</button>
      <button class="clickable2" @click="scrollToProject">Projects</button>
      <button class="clickable3" @click="scrollToContact">Contact</button>
    </div>
  </div>
</template>

<script>
export default {
  name:'Slidebar',
  methods: {
    scrollToAbout() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    scrollToContact() {
      window.scrollTo({
        top: 5000,
        behavior: 'smooth'
      });
    },
    scrollToProject() {
      window.scrollTo({
        top: 750,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style>
.hello {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hello button {
  width: 90px;
  height: 30px;
  margin-bottom: 20px;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(255, 255, 255, 0);
  font-family: Ubuntu, serif;
  font-size: 20px;
  color: #ebecf3;
  transform: rotate(-90deg);
  margin-top: 90px;
  transition: text-shadow 0.3s ease-in-out, color 0.3s ease-in-out;
}

.hello button {
  cursor: pointer;
}

.clickable1:hover {
  background-image: linear-gradient(43deg, #4158D0, #C850C0, #FFCC70);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  text-shadow: 0 0 15px rgba(173, 0, 0, 0.99);
}

.clickable2:hover {
  background-image: linear-gradient(147deg, #FFE53B, #FF2525);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  text-shadow: 0 0 15px rgba(173, 0, 0, 0.99);
}

.clickable3:hover {
  background-image: linear-gradient(132deg, #008dff, #00fdf6);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  text-shadow: 0 0 15px rgba(173, 0, 0, 0.99);
}

.zone {
  position: fixed;
  height: 100%;
  max-height: 100%;
  width: 70px;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #080808;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
