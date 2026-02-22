import { useContext } from "react"
import { Link } from "react-router-dom"
import { BudgetContext } from "../contexts/BudgetContext"


export default function Navbar() {

    const { budgetMode, setBudgetMode } = useContext(BudgetContext)

    const handleToggle = () => {
        setBudgetMode((prev) => !prev)
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">E-commerce For You</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home Page</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/chi-siamo">Chi Siamo</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/prodotti">Prodotti</Link>
                        </li>
                        <button className="btn btn-outline-dark" onClick={handleToggle}>
                            {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
                        </button>
                    </ul>
                </div>
            </div >
        </nav >
    )
}
