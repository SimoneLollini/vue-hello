
const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Welcome to Vue.js',
            image_src: 'https://picsum.photos/400/500'
        }
    }
}).mount('#app')
