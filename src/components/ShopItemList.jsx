import React, {useCallback} from 'react';
import ShopItem from './ShopItem';
import useStore from '../hooks/useStore';
import {observer} from "mobx-react";

const items = [
    {
        name: '생수',
        price: 850,
    },
    {
        name: '신라면',
        price: 900,
    },
    {
        name: '포카칩',
        price: 1500,
    },
    {
        name: '새우깡',
        price: 1000,
    },
];

const ShopItemList = () => {
    const { market } = useStore();
    const onPutItem = useCallback((name, price) => {
        market.put(name, price);
    }, [market]);

    return (
        <div>
            {items.map((item) => (
                <ShopItem {...item} key={item.name} onPut={onPutItem} />
            ))}
        </div>
    );
};

export default observer(ShopItemList);
