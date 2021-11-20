import React, {useCallback} from 'react';
import BasketItem from './BasketItem';
import useStore from "../hooks/useStore";
import { observer } from "mobx-react";

const BasketItemList = () => {
    const { market } = useStore();

    const onTakeItem = useCallback((name) => {
        market.take(name);
    }, [market]);

    return (
        <div>
            {market.selectdItems.map((item) => (
                <BasketItem
                    item={item}
                    key={item.name}
                    onTake={onTakeItem}
                />
            ))}
        </div>
    );
};

export default observer(BasketItemList);
