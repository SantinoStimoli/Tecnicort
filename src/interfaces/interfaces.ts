export interface FormData {
  stripWidth: Array<number>
  stripThickness: Array<number>
  stripColor: Array<string>
}

export interface Order {
  quantity: number
  productWidth: number
  productHeight: number
  stripWidth: number | string
  stripThickness: number | string
  stripColor: string
  subtotal: number
  total: number
}
