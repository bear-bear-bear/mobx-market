import { createContext } from "react";
import generateCounter from "./counter";
import generateMarket from "./market";

const rootStore = {
    counter: generateCounter(this),
    market: generateMarket(this),
};

Object.values(rootStore).forEach((store) => {
    if ('init' in store) {
        store.init();
    }
});

export default rootStore;

export const StoreContext = createContext(rootStore);

export const StoreProvider = ({ children }) => {
    return <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>;
}
