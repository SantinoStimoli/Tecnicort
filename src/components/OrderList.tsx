import numberFormat from '../services/numberFormat'
import { Order } from '../interfaces/interfaces'

interface Props {
    order: Order
    deleteOrder: any
    index: number
}

const OrderList = ({ order, deleteOrder, index }: Props) => {
    return (
        <div key={index} className='order'>
            <span className={'flex items-center justify-between pb-2'}>Pedido: <i onClick={() => deleteOrder(index)} className='bx bx-x bx-md red' /></span>
            <section className='list-section'>
                <span>Cortina {order.productHeight}m x {order.productWidth}m</span>
                <span> Tiras: {order.stripWidth === 'No definido' && order.stripThickness === 'No definido' ? order.stripWidth : `${order.stripWidth}mm x ${order.stripThickness}`}, {order.stripColor}</span>
                <span> Precio: {numberFormat(order.price)}</span>
            </section>
        </div>
    )
}

export default OrderList