import React from 'react';
import PropTypes from 'prop-types';
import { TiMinus } from 'react-icons/ti';
import { TiPlus } from 'react-icons/ti';

const QuantityControl = props => {
    const { decrease, increase, quantity } = props
    return (
        <div className={'wrap-quantity'}>
            <span className={'minus-btn'} onClick={decrease}>
                <TiMinus size={10} />
            </span>
            <span className={'quantity-label'}>{quantity}</span>
            <span className={'plus-btn'} onClick={increase}>
                <TiPlus size={10} />
            </span>
        </div>
    );
};

QuantityControl.propTypes = {
    quantity: PropTypes.number.isRequired,
    decrease: PropTypes.func.isRequired,
    increase: PropTypes.func.isRequired,
};

export default QuantityControl;