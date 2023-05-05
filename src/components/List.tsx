import React from 'react'
import { Order } from '../interfaces/interfaces'
import OrderList from './OrderList'

interface Props {
    orders: Array<Order>
    refreshPage: any
    deleteOrder: any
}

const List = ({ orders, refreshPage, deleteOrder }: Props) => {

    return (
        <section className='modal-bg' >
            <article className='modal'>
                <h1>Ordenes listadas</h1>

                <section className='order-list'>
                    {orders.length === 0 ?
                        <div className='order border-none'>
                            <span className={'flex items-center justify-between'}>No hay ningún pedido listado</span>
                        </div>
                        :
                        orders.map((e, i) => {
                            return (
                                <OrderList key={i} deleteOrder={deleteOrder} index={i} order={e} />
                            )
                        })
                    }
                </section>

                <footer>
                    <button type='button' onClick={() => refreshPage()} >Cerrar</button>
                </footer>
            </article>
        </section>
    )
}

export default List