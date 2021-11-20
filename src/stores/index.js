import { createContext } from "react";
import CounterStore from "./Counter";
import MarketStore from "./Market";

class RootStore {
    constructor () {
        this.counter = new CounterStore(this);
        this.market = new MarketStore(this);
    }
}
export const rootStore = new RootStore();

export const StoreContext = createContext(rootStore);

export const StoreProvider = ({ children }) => {
    return <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>;
}
