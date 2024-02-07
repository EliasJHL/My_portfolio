<template>
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
#Cards {
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  animation: loop 2s linear infinite;
  flex-wrap: wrap;
}

#Cards div {
  position: relative;
  background: #1a1a1a;
  transition: all .2s;
  margin: 10px;
  border-radius: 8px;
  width: 25%;
  min-width: 150px;
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
  background: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  transform: scale(0.98);
  box-shadow: 0 0 30px 1px rgba(0, 255, 117, 0.30);
}

@media (max-width: 600px) {
  #Cards div {
    width: 100%;
  }
}
</style>