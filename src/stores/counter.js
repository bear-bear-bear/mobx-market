import { observable } from 'mobx';

const generateCounter = (rootStore) => observable({
    rootStore,
    number: 1,

    increase () {
        this.number++;
    },

    decrease () {
        this.number--;
    },
});

export default generateCounter;
