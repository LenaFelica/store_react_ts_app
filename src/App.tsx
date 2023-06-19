import { Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "./conponents/Navigation";
import { AboutPage } from "./pages/AboutPage";
import { ProductsPage } from "./pages/ProductsPage";


function App() {
   return (
      <>
       <Navigation />
       <Routes>
          <Route path="/products" element={<ProductsPage/>} />
          <Route path="/about" element={<AboutPage/>} /> 
          <Route path="*" element={<Navigate to="/products" replace /> } />
       </Routes>
      </>
   )

}

export default App;
