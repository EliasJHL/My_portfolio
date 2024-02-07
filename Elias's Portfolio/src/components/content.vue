<template>
  <p class="title">My Projects.</p>
  <div id="Cards">
    <div class="project">
      <h1>my_printf</h1>
    </div>
    <div class="project">
      <h1>my_ls</h1>
    </div>
    <div class="project">
      <h1>sokoban</h1>
    </div>
    <div class="project">
      <h1>my_navy</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects_Cards'
}
</script>

<style>
.title {
  font-family: Ubuntu, serif;
  color: #ebecf3;
  font-size: 40px;
  font-weight: bold;
}

.project {
  position: relative;
  background: #343434;
  overflow: hidden;
  margin: 10px;
  border-radius: 8px;
  width: 25%;
  min-width: auto;
  max-width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow:
      0 0.1rem 0.2rem #00000033,
      0 0.1rem 0.2rem #0000004d,
      0 0.2rem 1.5rem #00000066;
}

#Cards div h1 {
  font-family: Ubuntu, serif;
  color: #ebecf3;
  text-align: center;
}

#Cards div:hover {
  background: #2a2a2a;
  transform: scale(0.98);
  box-shadow: 0 0 30px 1px rgba(255, 255, 255, 0.5);
}

#Cards {
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  animation: loop 2s linear infinite;
  flex-wrap: wrap;
}

@media (max-width: 600px) {
  #Cards div {
    width: 100%;
  }
}
</style>