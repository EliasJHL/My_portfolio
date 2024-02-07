<template>
  <div class="Button-link">
    <button type="button" onclick="window.location.href='https://linkedin.com/in/elias-j-'">
      <img src="../assets/linkedin.png" alt="LinkedIn">
    </button>
  </div>
  <div class="Button-git">
    <button type="button" onclick="window.location.href='https://github.com/EliasJHL'">
      <img src="../assets/github.png" alt="GitHub">
    </button>
  </div>
</template>

<script>
export default {
  name: 'Buttons_social'
}
</script>

<style>
.Button-git {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 30px;
  margin: 15px;
}

.Button-git button {
  background-color: transparent;
  border: none;
  display: flex;
}

.Button-git button img {
  border: none;
  width: 30px;
  transition: filter 0.3s ease-in-out;
  cursor: pointer;
}

.Button-git button:hover img {
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1)) drop-shadow(0 0 20px rgba(255, 255, 255, 1));
}

.Button-link {
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 15px;
}

.Button-link button {
  background-color: transparent;
  border: none;
  display: flex;
  margin-right: 15px;
  margin-bottom: 40px;
}

.Button-link button img {
  border: none;
  width: 30px;
  transition: filter 0.3s ease-in-out;
  cursor: pointer;
}

.Button-link button:hover img {
  filter: drop-shadow(0 0 10px rgb(0, 143, 255)) drop-shadow(0 0 20px rgb(0, 143, 255));
}
</style>
