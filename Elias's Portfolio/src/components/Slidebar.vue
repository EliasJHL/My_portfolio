<template>
  <div class="zone">
    <div class="hello">
      <h2>About.</h2>
      <h2>Project</h2>
      <h2>Contact</h2>
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

.hello h2 {
  font-family: Ubuntu, serif;
  color: #ebecf3;
  transform: rotate(-90deg);
  margin-top: 80px;
  transition: text-shadow 0.3s ease-in-out, color 0.3s ease-in-out;
}

.hello h2:hover {
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
