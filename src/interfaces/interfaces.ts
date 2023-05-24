export interface FormData {
    stripWidth: Array<number>
    stripThickness: Array<number>
    stripColor: Array<string>
}

export interface Order {
    productWidth: number
    productHeight: number
    stripWidth: number | string
    stripThickness: number | string
    stripColor: string
    price: number
}