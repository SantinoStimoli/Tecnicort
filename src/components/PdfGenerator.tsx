import React, { useEffect, useState } from 'react';
import { Order } from '../interfaces/interfaces';
import html2pdf from 'html2pdf.js';
import Table from './Table';
import { STRIP__PROPS } from '../services/info';
import Footer from './Footer';
import fondo from '../assets/fondo.jpg';


interface Props {
    orders: Array<Order>;
    refreshPage: any;
    setOrders: any;
}

const PdfGenerator: React.FC<Props> = ({ orders, refreshPage, setOrders }: Props) => {

    const [date, setDate] = useState('');
    const text = 'Buen día, aquí le dejo el presupuesto del pedido que nos ha solicitado a través de nuestra página web. En caso de tener alguna duda o comentario, no dude en comunicarse con nosotros. Desde ya, muchas gracias y le deseamos que siga bien.'

    const copyText = (texto: string) => {
        const input = document.createElement('input');
        input.setAttribute('value', texto);
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
    };

    const handleDownloadPDF = () => {
        const element = document.getElementById('pdf-content');
        const options = {
            filename: 'Presupuesto_Tecnicort.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        };
        html2pdf().set(options).from(element).save();
        copyText(getText());
        setOrders([])
    };

    const getDate = () => {
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        setDate(`${day}-${month}-${year}`);
    };

    const getEmptyInfo = () => {
        let emptyInfo = [];
        orders.forEach(e => {
            if (e.stripColor === 'No definido' && !emptyInfo.includes(STRIP__PROPS.color)) emptyInfo = [...emptyInfo, STRIP__PROPS.color]
            if (e.stripThickness === 'No definido' && !emptyInfo.includes(STRIP__PROPS.thickness)) emptyInfo = [...emptyInfo, STRIP__PROPS.thickness]
            if (e.stripWidth === 'No definido' && !emptyInfo.includes(STRIP__PROPS.width)) emptyInfo = [...emptyInfo, STRIP__PROPS.width]
        })
        return emptyInfo
    }

    const getText = () => {
        let finalText = ' *Elementos faltantes para la producción de la cortina: ';
        let emptyElements = getEmptyInfo()

        if (emptyElements.length === 0) return text

        for (let i = 0; i < emptyElements.length; i++) {
            if (i === 0) finalText = finalText + emptyElements[i];
            if (i === 1 && emptyElements.length === 3) finalText = finalText + ', ' + emptyElements[i];
            if ((i === 1 && emptyElements.length === 2) || (i === 2 && emptyElements.length === 3)) finalText = finalText + ' y ' + emptyElements[i];
        }

        return text + finalText
    }

    useEffect(() => {
        getDate();
    }, []);


    return (
        <section className="modal-bg pdf">
            <article className="modal pdf">
                <section id="pdf-content">
                    <img className="border-b-4 pb-5 border-dashed border-red-300" src={fondo} alt="Fondo" />
                    <p className="date">{date}</p>
                    <h1 id="title">Cortinas de PVC</h1>
                    <Table orders={orders} />
                    <Footer />
                </section>

                <footer className="footer mt-5">
                    <button onClick={handleDownloadPDF}>Descargar PDF</button>
                    <button type="button" onClick={() => refreshPage()}>
                        Cancelar
                    </button>
                </footer>
            </article>
        </section>
    );
};

export default PdfGenerator;
