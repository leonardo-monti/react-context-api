import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


export default function ProductDetailPage() {

    const { id } = useParams()

    const [product, setProduct] = useState(null)

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                setProduct(res.data)
            })

    }, [id])

    if (!product) {
        return <h1>Loading...</h1>
    }


    return (

        <div className="row g-4">
            <div className="col-md-5">
                <div className="card shadow p-4">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid"
                        style={{ height: "350px", objectFit: "contain" }} />
                </div>
            </div>
            <div className="col-md-7">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p className="fw-bold">{product.price}€</p>
                <button className="mt-3 btn btn-dark">Aggiungi al carrello</button>
            </div>
        </div>



    )

}

