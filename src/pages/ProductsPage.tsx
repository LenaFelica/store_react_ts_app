import { useContext, useState } from "react";
import { CreateProduct } from "../conponents/CreateProduct";
import { ErrorMessage } from "../conponents/ErrorMessage";
import { Loader } from "../conponents/Loader";
import { Modal } from "../conponents/Modal";
import {Product} from "../conponents/Product";
import { ModalContext } from "../context/ModalContext";
import {useProducts} from "../hooks/products";
import { IProduct } from "../models";

export function ProductsPage() {

   const {loading, products, error, addProduct} = useProducts()
   const {modal, open, close} = useContext(ModalContext)
   
      const createHandler = (product: IProduct) => {
         close();
         addProduct(product)
      }
   
      return (
      <div className='container mx-auto max-w-2xl pt-5'>
         {loading && <Loader />}
         {error &&  <ErrorMessage error={error}/>}
         {products.map(product => <Product key={product.id} product={product}/>)}   
      
         {modal && <Modal title="Create new product" onClose={close}>
            <CreateProduct onCreate={createHandler}/>
         </Modal>}
         
         <button 
            onClick={open}
            className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white px-4 py-2">
            +
      </button> 
      </div>
      )
}