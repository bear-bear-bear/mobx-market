import { createContext } from "react";
import counter from "./counter";
import market from "./market";

const rootStore = {
    counter,
    market,

    generateRoot() {
        Object.values(this).forEach((store) => {
            store.rootStore = this;
        });
    },
};

rootStore.generateRoot();
export default rootStore;

export const StoreContext = createContext(rootStore);

export const StoreProvider = ({ children }) => {
    return <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>;
}
