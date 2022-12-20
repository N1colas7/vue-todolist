const {
    createApp
} = Vue;

const list = [
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
];
console.log(list);

createApp ({
    data() {
        return {
           
        }
    }
}).mount('#app')