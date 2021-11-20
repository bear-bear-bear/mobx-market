import { createContext } from "react";
import CounterStore from "./Counter";
import MarketStore from "./Market";

export class RootStore {
    constructor () {
        this.counter = new CounterStore(this);
        this.market = new MarketStore(this);
    }
}

const rootStore = new RootStore();
export const StoreContext = createContext(rootStore);

export const StoreProvider = ({ children }) => {
    return <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>;
}
