import React, { useState } from "react";
import Form from "./components/Form";
import { Order } from "./interfaces/interfaces";
import List from "./components/LIst";
import "boxicons/css/boxicons.min.css";
import { PRICEM2 } from "./services/info";
import PdfGenerator from "./components/PdfGenerator";

const App = () => {
  const [addOrderModal, setAddOrderModal] = useState(false)
  const [listOrdersForm, setListOrdersForm] = useState(false)
  const [pdfForm, setPdfForm] = useState(false)
  const [orders, setOrders] = useState<Array<Order>>([])

  const addOrder: any = (productWidth: number, productHeight: number, stripWidth: number, stripThickness: number, stripColor: string, client: string) => {
    let order: Order = { productWidth: productWidth, productHeight: productHeight, stripWidth: stripWidth, stripThickness: stripThickness, stripColor: stripColor, client: client, price: (productHeight * productWidth * PRICEM2) }
    setOrders([...orders, order])
    // setAddOrderModal(false)
  }

  const deleteOrder = (orderId: number) => {
    let filteredOrders = orders.filter((e, i) => i !== orderId)
    setOrders(filteredOrders);
  }

  return (
    <main className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-5">
        {addOrderModal && <Form addOrder={addOrder} refreshPage={() => setAddOrderModal(false)} />}
        {listOrdersForm && <List orders={orders} refreshPage={() => setListOrdersForm(false)} deleteOrder={deleteOrder} />}
        {pdfForm && <PdfGenerator orders={orders} refreshPage={() => setPdfForm(false)} />}

        <button onClick={() => setAddOrderModal(true)}>Añadir pedido</button>
        <button onClick={() => setListOrdersForm(true)}>Ver pedidos</button>
        <button onClick={() => setPdfForm(true)}>Hacer factura</button>
      </div>
    </main>
  );
}

export default App
