<template>
  <div class="about-all">
    <p class="project-title">About Me.</p>
    <div id="Text">
      <p class="description">Hey there! I'm a passionate web developer with a versatile skill set, specializing primarily in full-stack development. I possess a deep understanding of both front-end and back-end development and am constantly refining my abilities while seeking opportunities for growth in both domains.
        Currently, I am actively seeking full-stack opportunities that encompass both front-end and back-end development. If you're interested, I'd be thrilled to connect and discuss potential collaborations. I am currently working on several projects that emphasize specific tech stacks and frameworks, allowing me to further enhance my expertise.
        In my personal life, I enjoy collecting various figures, spending time watching shows, and creating UI/UX designs, and working out.
        Feel free to reach out if you would like to explore the potential of working together!</p>
    </div>
    <div class="badges">
      <div class="python">
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Python</title><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/></svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style>
.about-all {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.project-title {
  font-family: Ubuntu, serif;
  color: #ebecf3;
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  margin-left: 70px;
}

#Text {
  width: 45%;
  margin-left: 70px;
  text-align: center;
  color: #ebecf3;
  font-family: Ubuntu, serif;
}
</style>
