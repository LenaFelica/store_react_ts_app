import axios from "axios";
import React, { useState } from "react";
import { IProduct } from "../models";
import { ErrorMessage } from "./ErrorMessage";

const productData: IProduct = {
      title: '',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: {
         rate: 42,
         count: 10,
      }
}

export const CreateProduct = () => {
   const [value, setValue] = useState('')
   const [error, setError] = useState('')

   const submitHandler = async (event: React.FormEvent ) => {
      event.preventDefault();
      setError('');
      
      if(value.trim().length === 0) {
         setError("Please enter valid title")
         return
      }

      productData.title = value;
      const res = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
   }
   
   const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
         // const newValue = e.currentTarget.value
         // setValue(newValue)
         setValue(e.currentTarget.value)
   }


   return (
       <form onSubmit={submitHandler}>
         <input 
            value={value}
            // onChange={(e) => setValue(e.target.value)} можно так, но для типов делаем иначе
            onChange={changeHandler}
            type="text"
            className="border py-2 px-4 mb-2 w-full outline-black/50"
            placeholder="Enter product title..."
         />

         {error && <ErrorMessage error={error} />}

         <button 
            type="submit"
            className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
       </form>
   )
}