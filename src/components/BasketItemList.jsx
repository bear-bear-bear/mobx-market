import React, {useCallback} from 'react';
import BasketItem from './BasketItem';
import useStore from "../hooks/useStore";
import {useObserver} from "mobx-react";

const BasketItemList = () => {
    const { market } = useStore();

    const onTakeItem = useCallback((name) => {
        market.take(name);
    }, [market]);

    return useObserver(() => (
        <div>
            {market.selectdItems.map(({ name, price, count }) => (
                <BasketItem
                    name={name}
                    price={price}
                    count={count}
                    key={name}
                    onTake={onTakeItem}
                />
            ))}
            <hr />
            <p style={{ float: 'right' }}>
                <b>총합:</b> {market.total}원
            </p>
        </div>
    ))
};

export default BasketItemList;
