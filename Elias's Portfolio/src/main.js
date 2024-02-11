import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
let cursor = document.querySelector('#cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.top = (e.pageY - window.scrollY - 10) + 'px';
    cursor.style.left = (e.pageX - window.scrollX - 10) + 'px';
});
