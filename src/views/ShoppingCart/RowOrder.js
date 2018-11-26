import React, { PureComponent } from 'react';
import { MdCancel } from 'react-icons/md';
import QuantityControl from './../../components/QuantityControl';
import { Link } from 'react-router-dom';
import { moneyFormat } from './../../config/helpers';

class RowOrder extends PureComponent {

    constructor(props) {
        super(props)
    }

    _increase = () => {
        const { addProduct, data } = this.props
        addProduct({ product: data._id, data, quantity: 1 })
    }

    _decrease = () => {
        const { addProduct, data, quantity } = this.props
        if (quantity > 0)
            addProduct({ product: data._id, data, quantity: -1})
    }

    render() {
        const { data: { name, _id, price }, quantity, removeProduct } = this.props
        return (
            <tr>
                <td>
                    <Link to={`/products/${_id}`}>{name}</Link>
                </td>
                <td>
                    <QuantityControl
                        quantity={quantity}
                        decrease={this._decrease}
                        increase={this._increase}
                    />
                </td>
                <td>{ moneyFormat(price, 0, '$') }</td>
                <td>{ moneyFormat((price * quantity), 0, '$') }</td>
                <td className={'text-center'}>
                    <MdCancel color={'#999'} size={20} onClick={() => removeProduct(this.props.data)}/>
                </td>
            </tr>
        );
    }
}

export default RowOrder;