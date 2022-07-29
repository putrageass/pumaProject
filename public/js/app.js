const opp = Vue.createApp({
    data() {
        return {
            Puya: 'Duar Duar',
            vueLinko: 'https://www.google.com'
        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Dih';
            } else {
                return 'Lah';
            }
        }
    }
});

opp.mount('#user-goal');