import { makeAutoObservable } from 'mobx';

class CounterStore {
    number = 1;

    constructor(rootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this);
    }

    increase () {
        this.number++;
    };

    decrease () {
        if (this.number === 1) return;
        this.number--;
    };
}

export default CounterStore;
