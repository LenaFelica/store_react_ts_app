import { CreateProduct } from "./conponents/CreateProduct";
import { ErrorMessage } from "./conponents/ErrorMessage";
import { Loader } from "./conponents/Loader";
import { Modal } from "./conponents/Modal";
import {Product} from "./conponents/Product";
import {useProducts} from "./hooks/products";

function App() {
   
   const {loading, products, error} = useProducts()

   return (
   <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader />}
      {error &&  <ErrorMessage error={error}/>}
      {products.map(product => <Product key={product.id} product={product}/>)}   
   
      <Modal title="Create new product">
         <CreateProduct/>
      </Modal>
   </div>
   )
}

export default App;
