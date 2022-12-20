const {
    createApp
} = Vue;
createApp ({
    data() {
        return {
            list : [
                {
                    text : 'Fare la spesa',
                    done : 'true',
                },
                {
                    text : 'Fare benzina',
                    done : 'false',
                },
                {
                    text : 'Portare fuori il cane',
                    done : 'true',
                },
                {
                    text : 'Fare gli esercizi',
                    done : 'false',
                },
                {
                    text : 'Preparare il pranzo',
                    done : 'true',
                }
            ]
        }
    }
}).mount('#app')