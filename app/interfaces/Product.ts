export interface Product {

    id: number
    title: string
    price: number
    description: string
    category: string
    image: string | undefined
    rating: {
        rate: number
        count: number
    }

}


// Alternativ 2 med rating
export interface Rating {
    rate: number
    count: number
}

