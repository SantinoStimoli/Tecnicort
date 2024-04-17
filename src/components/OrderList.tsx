import numberFormat from '../services/numberFormat'
import { Order } from '../interfaces/interfaces'
import tableFormat from '../services/tableFormat'

interface Props {
  order: Order
  deleteOrder: any
  index: number
}

const OrderList = ({ order, deleteOrder, index }: Props) => {
  return (
    <div key={index} className='order'>
      <span className={'flex items-center justify-between pb-2'}>
        Pedido:{' '}
        <i onClick={() => deleteOrder(index)} className='bx bx-x bx-md red' />
      </span>
      <section className='list-section gap-2'>
        <span>Cantidad: {order.quantity}</span>
        <span>
          Cortina: {order.productHeight}m x {order.productWidth}m
        </span>
        <span>
          Tiras:{' '}
          {order.stripWidth == 'No definido' ||
          order.stripThickness == 'No definido'
            ? 'No definido'
            : `${tableFormat(order.stripWidth)} x ${tableFormat(
                order.stripThickness
              )}`}
          {order.stripColor !== 'No definido' && `, ${order.stripColor}`}
        </span>
        {order.quantity != 1 && (
          <span> Subtotal: {numberFormat(order.subtotal)}</span>
        )}
        <span> Total: {numberFormat(order.total)}</span>
      </section>
    </div>
  )
}

export default OrderList
