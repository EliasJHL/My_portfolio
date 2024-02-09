<template>
  <div class="contact-message">
    <h1 class="title-contact">Contact Me.</h1>
    <p>Hey, send me an email if you want to connect! Additionally, you can find me on LinkedIn , shoot a message if you have to!</p>
    <div class="mail">
      <h2>HEliasJosue@protonmail.com</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact'
}
</script>

<style>
.mail {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #008dff;
}

.contact-message {
  margin-left: 70px;
  text-align: center;
  font-family: Ubuntu, serif;
  color: white;
}

@media (max-width: 400px) {
  .mail h2{
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #008dff;
  }
}
</style>