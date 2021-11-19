import { observable } from 'mobx';

const counter = observable({
    rootStore: null,
    number: 1,

    increase () {
        this.number++;
    },

    decrease () {
        if (this.number === 1) return;
        this.number--;
    },
});

export default counter;
