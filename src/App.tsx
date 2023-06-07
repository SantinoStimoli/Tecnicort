import { useState } from "react";
import Form from "./components/Form";
import { Order } from "./interfaces/interfaces";
import List from "./components/List";
import "boxicons/css/boxicons.min.css";
import { PRICEM2 } from "./services/info";
import PdfGenerator from "./components/PdfGenerator";

const App = () => {

  const [listOrdersForm, setListOrdersForm] = useState(false)
  const [pdfForm, setPdfForm] = useState(false)
  const [orders, setOrders] = useState<Array<Order>>([])

  const addOrder: any = (productWidth: number, productHeight: number, stripWidth: number, stripThickness: number, stripColor: string) => {
    let order: Order = { productWidth: productWidth, productHeight: productHeight, stripWidth: stripWidth, stripThickness: stripThickness, stripColor: stripColor, price: (productHeight * productWidth * PRICEM2) }
    setOrders([...orders, order])
  }

  const deleteOrder: any = (orderId: number) => {
    let filteredOrders = orders.filter((e, i) => i !== orderId && e)
    setOrders(filteredOrders);
  }

  const refreshPage = () => {
    setOrders([])
    setPdfForm(false)
  }

  const emptyList = () => {
    setOrders([])
    setListOrdersForm(false)
  }

  return (
    <main className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-5">
        {listOrdersForm && <List orders={orders} refreshPage={() => setListOrdersForm(false)} deleteOrder={deleteOrder} emptyList={emptyList} />}
        {pdfForm && <PdfGenerator orders={orders} refreshPage={() => setPdfForm(false)} orderSended={refreshPage} />}

        <Form addOrder={addOrder} emptyList={emptyList} emptyCondition={orders.length !== 0} />

        {orders.length !== 0 && <button onClick={() => setListOrdersForm(true)}>Ver pedidos ({orders.length})</button>}
        {orders.length !== 0 && <button onClick={() => setPdfForm(true)}>Hacer factura</button>}
      </div>
    </main>
  );
}

export default App
