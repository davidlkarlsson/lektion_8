import type { Product } from "~/interfaces/Product"

export function ProductCard(props: Product) {


    return( 
        <div>
            <img src={props.image} alt="image" />
            <h3>{props.title}</h3>

            <footer>
                <p>{props.category}</p>
                <p>{props.rating.rate}</p>
            </footer>

        </div>
    )
}