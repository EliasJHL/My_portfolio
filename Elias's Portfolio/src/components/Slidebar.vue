<template>
  <div class="zone">
    <div class="hello">
      <button>About.</button>
      <button>Projects</button>
      <button>Contact</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slidebar'
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

.hello button:hover {
  color: crimson;
  text-shadow: 0 0 10px rgba(173, 0, 0, 0.85);
}

.zone {
  position: fixed;
  height: 100vh;
  width: 70px;
  top: 0;
  left: 0;
  background-color: #080808;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
