import numberFormat from '../services/numberFormat'
import { Order } from '../interfaces/interfaces'
import TotalPrice from './TotalPrice'
import tableFormat from '../services/tableFormat'
import { useEffect, useState } from 'react'

interface Props {
  orders: Array<Order>
  shipment: number
}

const Table = ({ orders, shipment }: Props) => {
  const [totalPrice, setTotalPrice] = useState(getTotal())

  function getTotal () {
    let total: number = 0
    orders.forEach(order => {
      total = total + order.total
      return total
    })
    return total
  }

  useEffect(() => {
    setTotalPrice(getTotal() + shipment)
  }, [shipment])

  return (
    <div className='flex flex-col gap-2 justify-between h-full py-10 w-full px-10'>
      <div className='flex flex-col gap-3'>
        <table>
          <thead>
            <th>Cantidad</th>
            <th>Ancho</th>
            <th>Alto</th>
            <th>Tira</th>
            <th>Color</th>
            <th>Subtotal</th>
            <th>Total</th>
          </thead>
          <tbody>
            {orders.map((order, index) => {
              return (
                <tr key={index}>
                  <td>{order.quantity}</td>
                  <td>{order.productWidth}m</td>
                  <td>{order.productHeight}m</td>
                  <td>
                    {order.stripWidth == 'No definido' ||
                    order.stripThickness == 'No definido'
                      ? 'No definido'
                      : `${tableFormat(order.stripWidth)} x ${tableFormat(
                          order.stripThickness
                        )}`}
                  </td>
                  <td>{order.stripColor}</td>
                  <td>{numberFormat(order.subtotal)}</td>
                  <td>{numberFormat(order.total)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

        {shipment !== 0 && (
          <div className='w-full flex justify-end'>
            <table className='w-[300px]'>
              <tbody className='border border-red-500'>
                <tr>
                  <td>Extras:</td>
                  <td>{numberFormat(shipment)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <TotalPrice totalPrice={totalPrice} />
    </div>
  )
}

export default Table
