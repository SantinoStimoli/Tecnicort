export interface FormData {
    stripWidth: Array<number>
    stripThickness: Array<number>
    stripColor: Array<string>
}

export interface Order {
    productWidth: number
    productHeight: number
    stripWidth: number
    stripThickness: number
    stripColor: string
    client: string
    price: number
}