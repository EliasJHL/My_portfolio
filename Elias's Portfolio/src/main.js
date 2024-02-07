import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
let cursor = document.querySelector('#cursor');
let body = document.querySelector('body');
document.addEventListener('mousemove', (e) => {
    cursor.style.top = (e.pageY - 10) + 'px';
    cursor.style.left = (e.pageX - 10) + 'px';
})