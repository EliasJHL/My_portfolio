<template>
  <div class="contact-message">
    <h1 class="title-contact">Contact Me.</h1>
    <p>Hey, send me an email if you want to connect! Additionally, you can find me on LinkedIn , shoot a message if you have to!</p>
  </div>
  <div class="contact-link">
    <h1>Contact Form</h1>
    <form accept-charset="UTF-8" action="https://www.formbackend.com/f/599bb81b582c83b2" method="POST">
      <div class="form-fields">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
      </div>

      <div class="form-fields">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
      </div>

      <div class="form-fields">
        <label for="message">Message</label>
        <textarea id="message" name="message" required></textarea>
      </div>

      <button type="submit">Send message</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'contact'
}
</script>

<style>
.contact-link {
  border-style: ridge;
  border-width: 2px;
  border-color: #081ca8;
  border-radius: 10px;
  margin: 5% auto;
  background-color: rgba(0, 29, 134, 0.35);
  width: 50%;
  transform: translateX(30px);
}

.contact-link h1 {
}

input[type="text"], input[type="email"], textarea {
  display: block;
  margin: 0 auto;
  width: 90%;
  border: 1px solid #ccc;
  font-size: 1rem;
  padding: 6px 10px;
  border-radius: 4px;
  max-width: 90%;
}

label {
  margin-left: 3%;
  margin-top: 25px;
  font-family: Ubuntu ,serif;
  color: #ebecf3;
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 0.9rem;
}

h1 {
  font-family: Ubuntu, serif;
  color: #ebecf3;
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

button[type="submit"] {
  display: block;
  margin: 50px auto;
  max-width: 50%;
  background-color: rgb(67 56 202);
  color: white;
  font-size: 0.8rem;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  width: 200px;
  font-weight: 800;
}

.mail {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #008dff;
}

.contact-message {
  margin-left: 70px;
  max-width: 95%;
  text-align: center;
  font-family: Ubuntu, serif;
  color: white;
}

@media (max-width: 600px) {
  .mail h2{
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #008dff;
  }
  .contact-link {
    border-style: ridge;
    border-width: 2px;
    border-color: #081ca8;
    border-radius: 10px;
    margin: 5% auto;
    background-color: rgba(0, 29, 134, 0.35);
    width: 80%;
    transform: translateX(30px);
  }
}
</style>