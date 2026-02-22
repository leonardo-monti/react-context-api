import { useEffect, useState, useContext } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { BudgetContext } from "../contexts/BudgetContext"


export default function ProductsPage() {

    const [products, setProducts] = useState([])
    const { budgetMode } = useContext(BudgetContext)

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setProducts(res.data)
            })
    }, [])

    const visibleProducts = budgetMode ? products.filter((p) =>
        p.price <= 30) : products

    return (
        <div>
            <h1 className="text-center mb-4">Prodotti</h1>

            <div className="row g-3">
                {visibleProducts.map((p) => (
                    <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <Link to={`/prodotti/${p.id}`}
                            className="text-decoration-none">
                            <div className="card h-100 shadow-sm">
                                <img src={p.image}
                                    alt={p.title}
                                    className="card-img-top p-3"
                                    style={{ height: "180px", objectFit: "contain" }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h6 className="text-center">{p.title}</h6>
                                    <p className="text-center fw-bold">{p.price} €</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div >
    )
}
