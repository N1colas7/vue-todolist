const {
    createApp
} = Vue;

createApp ({
    data() {
        return {
            newTask : '',
            list : [
                {
                    text : 'Fare la spesa',
                    done : 'true',
                },
                {
                    text : 'Fare benzina',
                    false : 'false',
                },
                {
                    text : 'Portare fuori il cane',
                    done : 'true',
                },
                {
                    text : 'Fare gli esercizi',
                    false : 'false',
                },
                {
                    text : 'Preparare il pranzo',
                    done : 'true',
                }
            ]
        }
    },
    methods: {
        addTask(){
        let object = {
            text : this.newTask,
            done : false,
            edit : false
        }
    
        this.list.push(object);
        this.newTask = '';
    },    
        removeTask(index)
        {
            this.list.splice(index, 1);
        }
    },
}).mount('#app')