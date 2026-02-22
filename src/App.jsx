import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from "./pages/ProductDetailPage";
import { BudgetProvider } from "./contexts/BudgetContext.jsx";




export default function App() {
  return (
    <BudgetProvider>
      <BrowserRouter>

        <Navbar />

        <div className="container mt-4">
          <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/chi-siamo" element={<AboutPage />} />
            <Route path="/prodotti" element={<ProductsPage />} />
            <Route path="/prodotti/:id" element={<ProductDetailPage />} />

          </Routes>
        </div>

      </BrowserRouter>
    </BudgetProvider>
  )
}
