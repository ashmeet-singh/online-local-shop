var ItemsContainerRendering = {
    data() {
        return {
            items: [
                { label: 'Smart Watch - ₹100', imgSrc: 'images/watch.jpg' },
                { label: 'Sunglass - ₹200', imgSrc: 'images/sunglass.jpg' }
            ]
        }
    }
}

Vue.createApp(ItemsContainerRendering).mount('#ItemsContainer');
