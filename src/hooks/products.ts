import { IProduct } from './../models';
import { useState, useEffect } from 'react';
import axios, {AxiosError} from 'axios';

export function useProducts() {
   const [products, setProducts] = useState<IProduct[]>([])
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');


   function addProduct(product: IProduct) {
      setProducts(prev => [...prev, product])
   }

   useEffect(() => {
      fetchProducts();
   },[])

   async function fetchProducts () {
      
      try{
         setError('')
         setLoading(true)
         const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
         setProducts(response.data);
         setLoading(false)
      } catch(e: unknown) {
         const error = e as AxiosError
         setLoading(false)   
         setError(error.message)     
      }
   }
   return {products, loading, error, addProduct}
}