import React from 'react';
import PropTypes from 'prop-types';
import { TiMinus } from 'react-icons/ti';
import { TiPlus } from 'react-icons/ti';

const QuantityControl = props => {
    return (
        <div className={'wrap-quantity'}>
            <span className={'minus-btn'} onClick={() => alert('Prueba')}>
                <TiMinus size={10} />
            </span>
            <span className={'quantity-label'}>4</span>
            <span className={'plus-btn'}>
                <TiPlus size={10} />
            </span>
        </div>
    );
};

QuantityControl.propTypes = {
    
};

export default QuantityControl;