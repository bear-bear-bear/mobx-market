import React from 'react';
import useStore from '../hooks/useStore';

const TotalPrice = () => {
    const { market } = useStore();

    return (
        <div>
            <hr />
            <p style={{ float: 'right' }}>
                <b>총합:</b> {market.total}원
            </p>
        </div>
    );
}

export default TotalPrice;
