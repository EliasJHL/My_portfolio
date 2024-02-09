<template>
  <p class="title">My Projects.</p>
  <div id="Cards">
    <div class="project">
      <h1>Discord Bot</h1>
      <img class="bot-img" alt="Atlanta" src="@/assets/atlantaVR.png">
      <h3 class="description-discord-bot">Discord bot created for a community server, he's connected to a Database to stock the events, it have a website to add / edit / delete / view all of events</h3>
    </div>
    <div class="project">
      <h1>Minecraft Server</h1>
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
  border-radius: 8px;
  width: 50%;
  margin: 5px;
  min-width: auto;
  max-width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow:
      0 0.1rem 0.2rem #00000033,
      0 0.1rem 0.2rem #0000004d,
      0 0.2rem 1.5rem #00000066;
  cursor: pointer;
}

.bot-img {
  width: 240px;
}

#Cards div h1 {
  font-family: Ubuntu, serif;
  color: #ebecf3;
  text-align: center;
}

#Cards div:hover {
  box-shadow: 0 0 15px 1px rgba(255, 255, 255, 0.5);
}

#Cards {
  justify-content: center;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  display: flex;
  animation: loop 2s linear infinite;
  flex-wrap: wrap;
}

.description-discord-bot {
  font-family: Ubuntu, serif;
  color: #ebecf3;
}

@media (max-width: 600px) {
  #Cards div {
    width: 100%;
  }
}
</style>