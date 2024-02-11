<template>
  <p class="title">My Projects.</p>
  <div class="selectdiv">
    <select v-model="selectedSection" class="selector1">
      <option value="academic">Academic</option>
      <option value="professional">Personal</option>
    </select>
  </div>
  <div v-if="selectedSection === 'academic'">
    <div id="Cards">
      <div class="project">
        <h1>Sokoban</h1>
        <img class="sokoban-image" src="@/assets/sokoban.png" alt="sokoban-img">
        <h3 class="description-discord-bot">As part of a project at Epitech, we recreated the famous game Sokoban in the
          Linux terminal using NCurses.<br><br><br></h3>
        <p class="languages">C, NCurses, UNIX</p>
      </div>
      <div class="project">
        <h1>My_hunter</h1>
        <img class="hunter-image" src="@/assets/hunter.png" alt="hunter-img">
        <h3 class="description-discord-bot">As part of a project at Epitech, we recreated the famous game Duck Hunt in C
          using a graphical & audio library</h3>
        <p class="languages">C, CSFML</p>
      </div>
      <div class="project">
        <h1>my_printf</h1>
        <img class="sokoban-image" src="@/assets/sokoban.png" alt="sokoban-img">
        <h3 class="description-discord-bot">As part of a project at Epitech, we recreated the famous game Sokoban in the
          Linux terminal using NCurses.<br><br><br></h3>
        <p class="languages">C, NCurses, UNIX</p>
      </div>
      <div class="project">
        <h1>my_ls</h1>
        <img class="ls-image" src="@/assets/ls.png" alt="ls-img">
        <h3 class="description-discord-bot" style="padding-top: 15px">We recreated the some of the UNIX commands to see how they works, for this project have recreated the 'ls' command in C.<br><br><br></h3>
        <p class="languages">C, UNIX, C functions</p>
      </div>
    </div>
  </div>
  <div v-else-if="selectedSection === 'professional'">
    <div id="Cards">
      <div class="project">
        <h1>Discord Bot</h1>
        <img class="bot-img" alt="Atlanta" src="@/assets/atlantaVR.png">
        <h3 class="description-discord-bot">Discord bot created for a community server, he's connected to a Database to
          stock the events.<br>I've create a website to add, edit, delete & view all of events<br><br></h3>
        <p class="languages">Python, NodeJs, MySQL, HTML, CSS</p>
      </div>
      <div class="project">
        <h1>Minecraft Server</h1>
        <img class="ptero-img" alt="MC" src="@/assets/ptero.png"/>
        <h3 class="description-discord-bot">I've created a Minecraft server and managed the synchronization of all
          servers.<br>We were two developers on this project. It started in 2020 and ended in 2022</h3>
        <p class="languages">Panel Pterodactyl, Ubuntu Server, Java, HTML, CSS, SpigotMC</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects_Cards',
  data() {
    return {
      selectedSection: 'academic'
    };
  }
}
</script>

<style>
.description-discord-bot {
  max-width: 90%;
}

.ptero-img {
  max-width: 90%;
}

.sokoban-image {
  max-width: 90%;
}

.hunter-image {
  max-width: 60%;
}

.ls-image {
  max-width: 95%;
}

.selectdiv {
  padding-bottom: 40px;
}

.selector1 {
  font-family: Ubuntu, serif;
  color: #ebecf3;
  border-radius: 5px;
  border: 1px solid #3C1C78;
  background-color: rgba(22, 1, 62, 0.52);
  width: 40%;
  height: 30px;
}

.selector1:hover {
  border: 2px solid #4e3975;
}

.languages {
  font-family: Ubuntu, serif;
  max-width: 90%;
  font-weight: bold;
  color: #4f4f4f;
}

.project:hover .languages {
  background-image: linear-gradient(147deg, #FFE53B, #FF2525);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}

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
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0.1rem 0.2rem #00000033,
  0 0.1rem 0.2rem #0000004d,
  0 0.2rem 1.5rem #00000066;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.bot-img {
  max-width: 90%;
}

#Cards div h1 {
  font-family: Ubuntu, serif;
  color: #ebecf3;
  text-align: center;
}

#Cards div:hover {
  //box-shadow: 0 0 15px 1px rgba(255, 255, 255, 0.5);
}

#Cards {
  gap: 20px;
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
  .selector1 {
    width: 80%;
  }
}
</style>