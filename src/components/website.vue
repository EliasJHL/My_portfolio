<template>
  <div id="presentation">
    <p>
      Passionate about Full Stack Development. Scroll down to learn more.
    </p>
    <button class="resume-btn" onclick="window.open('./CV_Elias_HAJJAR.pdf', '_blank')">
      <span>my resume</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Website'
}
</script>

<style>
#presentation {
  font-family: Lilita One, cursive;
  text-align: center;
  margin: 40px auto;
  width: 50%;
  color: #ebecf3;
  margin-bottom: -60px
}

.resume-btn {
  padding-top: 20px;
  font-size: 18px;
  color: #e1e1e1;
  font-family: inherit;
  font-weight: 1000;
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
  text-transform: uppercase;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;
}

.resume-btn:focus,
.resume-btn:hover {
  color: #fff;
}

.resume-btn:focus:after,
.resume-btn:hover:after {
  width: 100%;
  left: 0;
}

.resume-btn:after {
  content: "";
  pointer-events: none;
  bottom: -2px;
  left: 50%;
  position: absolute;
  width: 0%;
  height: 2px;
  background-color: #fff;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: width, left;
}
</style>