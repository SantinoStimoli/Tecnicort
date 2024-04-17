import { FormData } from '../interfaces/interfaces'

export const PRICEM2 = 36000
export const PRICEPITON = 23000

export const STRIP__PROPS = {
  width: 'Ancho',
  thickness: 'Espesor',
  color: 'Color'
}

export const FORM_DATA: FormData = {
  stripWidth: [100, 200, 300],
  stripThickness: [1, 1.5, 2, 3],
  stripColor: [
    'Cristal',
    'Blanco',
    'Azul',
    'Rojo',
    'Amarillo',
    'Verde',
    'Fume',
    'Plateado'
  ]
}
