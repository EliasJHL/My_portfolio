<template>
  <div class="hello">
    <span class="custom-size">Hey, I'm Elias</span>
    <span class="slogan">First year EPITECH student</span>
  </div>
</template>

<script>
export default {
  name: 'Introduction'
}
</script>

<style>
.hello {
  font-family: Ubuntu, serif;
  color: #ebecf3;
}

.custom-size {
  font-size: 60px;
  font-weight: bold;
}

.slogan {
  font-family: Ubuntu, serif;
  color: #ebecf3;
  margin-top: 15px;
  position: relative;
  display: inline-block;
  overflow: hidden;
  width: auto;
  white-space: nowrap;
  height: 1.25em;
  font-size: 1em;
  line-height: 1.5em;
  border-right: .125em solid #e0e0e0;
  box-sizing: content-box;
  animation-name: typing, blink-start, blink-end;
  animation-duration: 5s, 1s, 1s;
  animation-timing-function: steps(27, end), linear, linear;
  animation-delay: 0s, 1s, 2s;
  animation-iteration-count: 1, 1, infinite;
  animation-direction: normal;
  animation-fill-mode: forwards;
}

@keyframes typing {
  from { width: 0; }
  to   { width: 22ch; }
}

@keyframes blink-start {
  from, to { border-color: #e0e0e0; }
  50% { border-color: transparent; }
}

@keyframes blink-end {
  from, to { border-color: #e0e0e0; }
  50% { border-color: transparent; }
}

@media (max-width: 600px) {
  .custom-size {
    font-size: 40px;
    font-weight: bold;
  }
}
</style>