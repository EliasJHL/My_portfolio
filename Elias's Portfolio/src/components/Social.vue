<template>
  <div class="Buttons">
    <button type="button" onclick="window.location.href='https://github.com/EliasJHL'">
      <img src="./../assets/github.png" alt="GitHub">
    </button>
    <button type="button" onclick="window.location.href='https://github.com/EliasJHL'">
      <img src="./../assets/linkedin.png" alt="Linkedin">
    </button>
  </div>
</template>

<script>
export default {
  name: 'Buttons_social'
}
</script>

<style>
.Buttons {
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 15px;
}

.Buttons button {
  background-color: transparent;
  border: none;
  display: flex;
  margin-right: 15px;
  margin-top: 15px;
}

.Buttons button img {
  border: none;
  width: 30px;
  transition: filter 0.3s ease-in-out;
}

.Buttons button:hover img {
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.85));
}
</style>
