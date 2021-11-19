import { autorun, observable } from "mobx";

const generateMarket = (rootStore) => observable({
    rootStore,
    selectdItems: [],

    init() {
        autorun(() => console.log('총합:', this.total))
    },

    findItem(name) {
        return this.selectdItems.find((item) => item.name === name);
    },

    put(name, price) {
        const existingItem = this.findItem(name);
        if (!existingItem) {
            this.selectdItems.push({
                name,
                price,
                count: 1,
            });
            return;
        }
        existingItem.count++;
    },

    take(name) {
        const itemToTake = this.findItem(name);
        if (!itemToTake) {
            return;
        }

        itemToTake.count--;
        if (itemToTake.count === 0) {
            this.selectdItems.remove(itemToTake);
        }
    },

    get total() {
        return this.selectdItems.reduce((acc, { price, count }) => {
            return acc + (price * count);
        }, 0);
    },
});

export default generateMarket;
