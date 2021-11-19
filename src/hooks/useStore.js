import { useContext } from "react";
import { StoreContext } from "../stores";

export default function useStore () {
    const context = useContext(StoreContext);
    if (context === undefined) {
        throw new Error("useRootStore must be used within RootStoreProvider");
    }

    return context;
};
