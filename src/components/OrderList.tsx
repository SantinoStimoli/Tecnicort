import React, { useState } from 'react'
import numberFormat from '../services/numberFormat'
import { Order } from '../interfaces/interfaces'

interface Props {
    order: Order
    deleteOrder: any
    index: number
}

const OrderList = ({ order, deleteOrder, index }: Props) => {
    const [info, setInfo] = useState(true)
    //! onMouseEnter={() => setInfo(true)} onMouseLeave={() => setInfo(false)}

    return (
        <div key={index} className='order'>
            <span className={'flex items-center justify-between pb-2  ' + (info && ' border-b ')}>Pedido de {order.client}: <i onClick={() => deleteOrder(index)} className='bx bx-x bx-md red' /></span>
            {info && <section className='list-section'>
                <span>Cortina {order.productHeight}m x {order.productWidth}m</span>
                <span> Tiras {order.stripWidth}mm x {order.stripThickness}mm, {order.stripColor}</span>
                <span> Precio: {numberFormat(order.price)}</span>
            </section>}
        </div>
    )
}

export default OrderList