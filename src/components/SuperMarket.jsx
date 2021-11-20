import React from 'react';
import SuperMarketTemplate from './SuperMarketTemplate';
import ShopItemList from './ShopItemList';
import BasketItemList from './BasketItemList';
import TotalPrice from "./Total";

const SuperMarket = () => {
    return (
        <SuperMarketTemplate
            items={<ShopItemList />}
            basket={<BasketItemList />}
            total={<TotalPrice />}
        />
    );
};

export default SuperMarket;
