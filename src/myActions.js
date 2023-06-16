//* npx create-react-app --template typescript .
//

import axios from "axios"
import React, { useEffect } from "react"

//* то редставляет из себя синаксис JSX
//* при импорте, чтобы не писать длинное ннапример creaeElement
//* можно указать так
//! import React, {createElement as e} from 'react;
//
//* и уже в коде использовать е вместо createElement:
//
//function App() {
//   return e('div',{className: 'container'}, [
//   e('h1', {className: 'front-bold', key: 1 }, 'test-JSX'),
//   e('button', {className: '', key: 2 }, 'click me'),
// ])
// }
// export default App;
//
//* Но каждый раз так прописывать не очень удобно
//* поэтому сделали удобный синакис , чтобы заенять эти функции
//* 
// function App() {
//    return (
//       <h1>hello react</h1>
//    )
// }
//
//* 
//! ***  в качестве css будем ипользовать tailwind react ***
//
//* идем на tailwind react и устанавливаем с помощью указанных комманд
//
//* 
// import React from "react"; 
// import { products } from "../data/products";
// import { IProduct } from "../models";

// interface ProductProps {
//    product: IProduct; 
// }

// export function Product ({product}: ProductProps) {
   
//    return (
//       <div
//          className="border py-2 px-4 rounded flex flex-col items-center mb-2"
//       >
//          <img src={product.image} className="w 1" alt={product.title}/>
//          <p>{ product.title }</p>
//          <p className="font-bold">{ product.price}</p>
//!          <button className="py-2 px-4 border bg-yellow-400" >Show Details</button> - кнопка под картинкой и названием
//       </div>
//    )
// }
//
//* теперь сделаем так, чтобы при лике на кнопку показвалось описание- дескрипшн
//* для этого потребуетс локальный state, 
//* он вызывается с помощью функции useState() в Product.tsx
//* создадим сосстояние - кортедж - по умолчанию не удет видеть - инициализируем как faalse
//* const [details, setDetails] =useState(false)
//
//* вешаем слушатель события на кнопку и переводим состоние в true
//* ниже создаем див, который будет держать в себе параграф с описанием
//* с помоью условных операторов даем условие
//* что див с опианием показываетс только когда details в состоянии true
//
//* Собственно как выглядит If в JSX
//* дляя этого обернуть див в {details && <div><p></p></div>} 

//*теперь когда я нажимаю на кнопку show details , мне показываетс описание
//
//* Чтобы убрать это описание: копируем кнопку , делаем ей bg blue и сетим в состояние false при нажатии
//
//* 
// import React, { useState } from "react"; 
// import { IProduct } from "../models";

// interface ProductProps {
//    product: IProduct; 
// }

// export function Product ({product}: ProductProps) {

//    const [details, setDetails] = useState(false)

//    return (
//       <div
//          className="border py-2 px-4 rounded flex flex-col items-center mb-2"
//       >
//          <img src={product.image} className="w-1 6" alt={product.title}/>
//          <p>{ product.title }</p>
//          <p className="font-bold">{ product.price}</p>
//!          <button 
//!              onClick={()=> setDetails(true)}
//!              className="py-2 px-4 border bg-yellow-400" 
//!         >Show Details</button>
//!          <button 
//!              onClick={()=> setDetails(false)}
//!              className="py-2 px-4 border bg-blue-400" 
//!         >Hide Details</button>

//          {details && 
//           <div>
//             <p>{ product.description }</p>
//          </div>
//          }
//       </div>
//    )
// }
//
//* Но это не очень хороший подход - дублирование
//
//* другой подхо - в функци setDetails при onClick
//* мы можем передавать стелочную функцию, которая принимает в себя prev - предыдущее состояние
//* и мы можем отталкиваться от предыдущего и менять текущее состояние
//* onClick={() => setDetatils(prev => !prev)}
//
//* Без второй кнопи - получился функционал toggle!!!
// return (
//    <div
//       className="border py-2 px-4 rounded flex flex-col items-center mb-2"
//    >
//       <img src={product.image} className="w-16" alt={product.title}/>
//       <p>{ product.title }</p>
//       <p className="font-bold">{ product.price}</p>
//       <button 
//!           onClick={()=> setDetails(prev => !prev)}
//           className="py-2 px-4 border bg-yellow-400" 
//       >Show Details</button>

//       {details && 
//        <div>
//          <p>{ product.description }</p>
//       </div>
//       }
//    </div>
// )
// }
//
//*  Но надо изменять кнопк на ддругой цвет!!
//* в самой кнопке используем динамический текст и трнарны оператор
//* { details ? 'Hide detaails' : 'Show Details'}
//
//* как изменить классНейм - сделать кнопку синей
//* создаем назван ие клаа. которое будт мняться выше над return
//? const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
//* поле оздаем btnClasses массив класов - в нем указываем все общие классы
//* и добавляем btnBgClassName:
//? const btnClasses = ['py-2 px-4 border', btnBgClassName ] 
//
//* и в кнопку в className вместо стией передаем динамику и указываем btnClasses
//* но так как массив не может быть применен к строчке, вызываем метод join и соединем все через пробел
//* className={btnClasses.join(' ')} :
//
// interface ProductProps {
//    product: IProduct; 
// }

// export function Product ({product}: ProductProps) {

//    const [details, setDetails] = useState(false)
//!   const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400';
//!   const btnClasses = ['py-2 px-4 border', btnBgClassName]


//    return (
//       <div
//          className="border py-2 px-4 rounded flex flex-col items-center mb-2"
//       >
//          <img src={product.image} className="w-16" alt={product.title}/>
//          <p>{ product.title }</p>
//          <p className="font-bold">{ product.price}</p>
//          <button 
//              onClick={()=> setDetails(prev => !prev)}
//!             className={btnClasses.join(' ')}
//          >{details ? 'Hide Details' : 'Show Details'}</button>

//          {details && 
//           <div>
//             <p>{ product.description }</p>
//          </div>
//          }
//       </div>
//    )
// }
//
//* пропишем инлайн стили для рейтинга 
//* инлайн стили прописываются в рамках объекта
// 
// {details && 
//    <div>
//      <p>{ product.description }</p>
//!      <p>Rate: <span style={{ fontWeight: 'bold'}}>{product.rating.rate}</span></p>
//   </div>
//   }
//
//* Идем в Арр и там нам нужна итерация - ак работают циклы в рамах реакт
//* потому что если продуков будет 1000, мы же не бужем их прописывать
//* 
// function App() {
//    return (
//        <div className='container mx-auto max-w-2xl pt-5'>

//       {products.map(product => <Product key={product.id} product={product}/>)}   

//        </div>
//    )
// }
//
//! **  Загрузка данных с сервера ***
//
//* useEffect(()=> {},[])
//
// function App() {
//!    const [products, setProducts] = useState<IProduct[]>([])

//    useEffect(() => {
//!       fetchProducts();
//    },[])

//!    async function fetchProducts () {
//!       const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
//!       setProducts(response.data);
      
//    }

//    return (
//        <div className='container mx-auto max-w-2xl pt-5'>

//!       {products.map(product => <Product key={product.id} product={product}/>)}   

//        </div>
//    )
// }

// export default App;

//
//* Реакт все сделал автоматически, 
//* мы прото изменили состояние и реакт перерисовал шаблон
//* в return
//* проработали состоние получение продуктов с сервера, загрузки и ошибки
//
// function App() {
//!    const [products, setProducts] = useState<IProduct[]>([])
//!    const [loading, setLoading] = useState(false);
//!    const [error, setError] = useState('');

//    useEffect(() => {
//       fetchProducts();
//    },[])

//    async function fetchProducts () {
      
//!       try{
//!          setError('')
//!          setLoading(true)
//!          const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
//!          setProducts(response.data);
//!          setLoading(false)
//!       } catch(e: unknown) {
//!          const error = e as AxiosError
//!          setLoading(false)   
//!          setError(error.message)     
//       }
//    }

//    return (
//    <div className='container mx-auto max-w-2xl pt-5'>
//!       {loading &&  <p className='text-center'>Loading...</p>}
//!       {error &&  <p className='text-center text-red-600'>{ error }</p>}
//!       {products.map(product => <Product key={product.id} product={product}/>)}   
//    </div>
//    )
// }

// export default App;

//
//* Сейчас Арр перегружен,  очень много кода, который относитя к общему компоненту
//
//! Создаю папку hooks и в ней products.ts
//
//* здесь будет кастомный хук с приставкой use
//* это должна быть функция
// export function useProducts()
//
//* далее из Арр выезаем все от состояни о ретерна
//* и вставляем сюда
//* да, будут ошибки , но все поправим
//* и так это кастомный хук и он возвращает то, что надо ипользоать при отрисовке в основном Арр
// import { IProduct } from './../models';
// import { useState, useEffect } from 'react';
// import axios, {AxiosError} from 'axios';

// export function useProducts() {
//    const [products, setProducts] = useState<IProduct[]>([])
//    const [loading, setLoading] = useState(false);
//    const [error, setError] = useState('');

//    useEffect(() => {
//       fetchProducts();
//    },[])

//    async function fetchProducts () {
      
//       try{
//          setError('')
//          setLoading(true)
//          const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
//          setProducts(response.data);
//          setLoading(false)
//       } catch(e: unknown) {
//          const error = e as AxiosError
//          setLoading(false)   
//          setError(error.message)     
//       }
//    }
//    return {products, loading, error}
// }
//! Код в Арр
//* стал намного чище, работа с логикой вынесена в отдельный файл и мы ей управлем
//** Арр */
//
// import {Product} from "./conponents/Product";
// import {useProducts} from "./hooks/products";

// function App() {
   
//    const {loading, products, error} = useProducts()

//    return (
//    <div className='container mx-auto max-w-2xl pt-5'>
//       {loading &&  <p className='text-center'>Loading...</p>}
//       {error &&  <p className='text-center text-red-600'>{ error }</p>}
//       {products.map(product => <Product key={product.id} product={product}/>)}   
//    </div>
//    )
// }

// export default App;

//
//* в Арр компоненте мы работаем непосредственно с состояниеми и шаблоном
//
//* Далее, выносим лоадер и ошибку в отдельный компонеты
//* Loader.tsx:

// import React from "react";

// export function Loader() {
//    return (
//       <p className='text-center'>Loading...</p>
//    )
// } 
//
//* ErrorMessage.tsx:
// import React from "react";

// interface ErrorMessageProps {
//    error: string
// }

// export function ErrorMessage ({error}: ErrorMessageProps) {
//    return (
//       <p className='text-center text-red-600'>{ error }</p>
//    )
// }
//
//* в Арр теперь
// import { ErrorMessage } from "./conponents/ErrorMessage";
// import { Loader } from "./conponents/Loader";
// import {Product} from "./conponents/Product";
// import {useProducts} from "./hooks/products";

// function App() {
   
//    const {loading, products, error} = useProducts()

//    return (
//    <div className='container mx-auto max-w-2xl pt-5'>
//       {loading && <Loader />}
//       {error &&  <ErrorMessage error={error}/>}
//       {products.map(product => <Product key={product.id} product={product}/>)}   
//    </div>
//    )
// }

// export default App;

//! повторение- мать учения
//* кастомный хук - useProducts
//* синтасис export function usePrducts
//* return {все, что потом в Арр ипользуем}
// export function useProducts() {
// const[products, setProducts] = useState<IProduct[]>([])
// const [loading, setLoading] = useSatet(false)
// const [error, setError] = useState('')

// useEffect(() => {
//    fetchProduct()
// },[])

// async function fetchProduct() {
//    try{
//       setError('')
//       setLoading(true)
//       const response = await axios.get<IProduct>('url?limit=5')
//       setProducts(response.data)
//       setLoading(false)

//    } catch(e: unknown){
//       setLoading(true)
//       const error = e as AxiosError
//       setError(message.error)
//    }
// }
// return{products, loading, error}
// }
//
//* в Арр воспользуемся эти хуком
// const{products, loading, error} = useProducts()

// return(
//    <div>
//      {loading && <Loader/>}
//      {error && <ErrorMessage/>}
//      {products.map(product => <Product key={product.id} product={product}/>)}
//    </div>
// )

//!   ****  Modal.tsx  ***
//
//* самозарывающийся див и в нем стили
//* bagDrop - затемненный фон модалки - 50 - это прозраноть 50%
//* className="fixed bg-black/50 top-0 right-0 left-0 bottom-0"

//! <> - фрагмент - пустой тег в JSX - объединеи элементы 
//* - облегчает верстку и группирует вутренние элементы
//* пример в коде  -видно, что он объединяющий и внутри много элементов
//?  <>
//?  <div />
//?  <div
//?     className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2"
//?  >
//? 
//?  </div>
//?  </>
//* опишем класс
//* w-[500px] - ширина 500 пикселей
//* р-5 - паддинг 5
//* rounded bg-white - бэкграунд белый
//* absolute  -позишн абсолют
//* top - 10 единиц
//* left-1/2
//* -translate-x-1/2  - с минусом, чтобы спозиционировать окно по центру
//
//* Ладее в модалке надо создать форму.
//* но тобы оставить его универсальным, не стоит в нем прописывать стили и ссоздавать форму прямо внутри
//* так как потом придется снова происывать стили при переиспользовании
//* для изоляции стилей есть еще Cmponent.module.css
//
//* оставим компонент Module как универсальный, он будет отвечать только за модалку
//* и дальше, как контент в него передавать другой компонент!!!
//
//! **** Modal ***
//
// import React from "react";

// export const Modal = () => {
//    return (
//       <>
//          <div 
//            className="fixed bg-black/50 top-0 right-0 left-0 bottom-0"
//          />
//          <div
//            className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2"
//          >
//          <h1>Modal</h1>
//          </div>
//       </>
//    )
// }
//
//! *** CreatePoduct.tsx
//
// import React from "react";

// export const CreateProduct = () => {
//    return (
//        <form>
//          <input 
//             type="text"
//             className="border py-2 px-4 mb-2"
//             placeholder="Enter product title..."
//          />
//          <button 
//             type="submit"
//             className="py-2 px-4 borde bg-yellow-400">Create</button>
//        </form>
//    )

//
//* Есть модалка и есть CreatePrduct
//* как теперь передать CreatePrduct в модальное окно!!??
//* делаем <Modal></Modal> - открыв и закры тег
//* и внутрь передается любой кнтент , котороый надо, будь то компонент или еще что
{/* <Modal> - здесь ошибка, так как мы принимаем параметр , но не описали его тип
   <CreateProduct />
</Modal> */}

//
//* В модалке принимаем параметр, но не описали его тип
//* идм в модалку и пишем interface !!!
// //
//? interface ModalProps {
//?    children: React.ReactNode
//? }

//* у пропсов есть зарезервированное поле children - в него попадет все, что мы передаем как внутренний конетн
//
//* и в саму функцию Модал (принимаем какой-то объект {children} - делаем деструктуризацию)
//* и говорим, что у объекта тип - ModalProps
//? export const Modal = ({ children }: ModalProps) => {
//*
//* а в отрисовке компонента, в return внутри дива выводим {children}
//!  Modal ****
// import React from "react";

//! interface ModalProps {
//!     children: React.ReactNode
//! }

//! export const Modal = ({ children }: ModalProps) => {
//    return (
//       <>
//          <div 
//            className="fixed bg-black/50 top-0 right-0 left-0 bottom-0"
//          />
//          <div
//            className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2"
//          >
//          <h1>Modal</h1>
//!           {children}
//          </div>
//       </>
//    )
// } 
//
//* Подправим стилистику
//* Сделаем input во всю ширину w-full
//* писать без пробеов между двоеточием и текстом, например
//* className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
//
//! Отменяем поведение формы о умолчанию
//* <form onSubmit={submitHandler} .../>
//* А выше эту функцию реализуем с ивентом и preventDefault()

// import React from "react";

// export const CreateProduct = () => {

//!    const submitHandler = (e: React.FormEvent ) => {
//!       e.preventDefault()
//    }
//    return (
//!        <form onSubmit={submitHandler}>
//          <input 
//             type="text"
//             className="border py-2 px-4 mb-2 w-full outline-black/50"
//             placeholder="Enter product title..."
//          />
//          <button 
//             type="submit"
//             className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
//        </form>
//    )
// }
//
//* Теперь кога нажимаем create страница не перезагружается - предотвратили дефолтное поведение брауузера
//
//! Сделать инпут управляемым
//* создать состояние value
//* инициализировать как пустая строка
//* value={value}
//* onChange={(e) => setValue(e.target.value)}
//
//* Но чтоы прорпботать типы. напишем функцию отделно!!
//* onChange={changeHandler}
//
//* выше реализуем функцию:
//* тип: React.KeyboardEvent
//* джененрик - от какого конкретно элемента событие <HTMLInputElement>
//?  const changeHandler = (e: React.KeyboardEvent<HTMLInputElemnt>) => {
//?     setValue(e.target.value)
//?  }
//
//! Логика типов в react:
//
//* Reаct.MouseEvent - если совершен клик
//* React.KeyboardEvent - если печатаем то-то в поле
//* React.FormEvent - если это форма
//
//! --------------------------------------------------
//! конструкция KeyboardEvent ошибка (в нем нет event)
// const changeHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
// setValue(e.target.value);
// };
//! выдаёт ошибку, используйте FormEvent
// const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
// const newValue = e.currentTarget.value;
// setValue(newValue);
// };
//* или без const newValue сразу:
//  setValue(e.currentTarget.value)
//!-------------------------------------------------------
//!  *** CreateProducts.tsx ***
//
// import React, { useState } from "react";

// export const CreateProduct = () => {
//    const [value, setValue] = useState('')

//    const submitHandler = (event: React.FormEvent ) => {
//       event.preventDefault();
//    }
   
//!    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
//          // const newValue = e.currentTarget.value
//          // setValue(newValue)
//!          setValue(e.currentTarget.value)
//    }


//    return (
//        <form onSubmit={submitHandler}>
//          <input 
//             value={value}
//             // onChange={(e) => setValue(e.target.value)} можно так, но для типов делаем иначе
//!             onChange={changeHandler}
//             type="text"
//             className="border py-2 px-4 mb-2 w-full outline-black/50"
//             placeholder="Enter product title..."
//          />
//          <button 
//             type="submit"
//             className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
//        </form>
//    )
// }

//
//
//! ***  Создать элемент  потложить в массив уже имеющихся продуктов
//* и отправить запрос на сервер
//* 
//* все это будет происхоит в submitHandler
//
//* сейчас с fake store api берем моковые данные
//* вставляем их в CreateProduct
// const productData: IProduct = {
//    title: '',
//    price: 13.5,
//    description: 'lorem ipsum set',
//    image: 'https://i.pravatar.cc',
//    category: 'electronic',
//    rating: {
//       rate: 42,
//       count: 10,
//    }
// }
//* эти данные помогут отправить POST запрос на сервер!!
//
//* копируем там ссылку в фейкоыом add new product
//* 
//* и в const submitHandler делаяя ее асинхронной обращаемся к axios !!
//! const submitHandler = async (event: React.FormEvent ) => {
//    event.preventDefault();

//!  const res = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
// }
//
//
//* но перед этим нужно в productData изменить поле title на то, что будет в value при вводе в инпут!!
//* но title может быть ее и пустым, поэтому надо сделать валидацию
//* чтоы убедиться, что отправлем корректные данные , а не пустую строчку или набр пробелов
//
//! Базовая валидаци!!!!!!!
//
//* создаем состояние для ошибки
//* const [error, setError] = useSatate('')
// 
//! trim() - убрать пробелы слева и справа
//
//* и в submitHandler делвем проверку
//* если длина value застримленного  === 0
//* то выдаем ошибку - setError("Please evter valid title")
//  
// const [error, setError] = useState('')
//
//if(value.trim().length === 0) {
//    setError('Please enter valid title')
//    return; - чтобы дальше элемент не сосздавалс
// }
//productData.title = value
//const res =  await axios.post('url', productData)
//
//* И в отрисовке ниже воспользуемся компонентом 
//* <ErrorMessage error={error}/>
//* и передадим error
//* и мы эту ошибк будем показывать только в том сучае, если error есть
//! {error && <ErrorMassage error={error} />}
//
//* теперь в поле инпута, как value прописать кучу проелов, вместо title
//* нажимаем create -> Please enter valid title красным цветом!!!
//
//
//* и КСТАИ, КАЖДЫЙ РАЗ. КОГДА ЗАХОДИМ В SUBMIThANDLER, МЫ МОЖЕМ ЧИСТИТЬ ОШИБКУ
//* ЧТОБЫ НЕ БЫЛО ТАМ ОСТАТКОВ НПРАВИЛЬНЫХ АННЫХ
//setError('')
//
//* прбуем написать что-то в инпуте - create
//* смотрим в консоле в network или сеть -> headers(заголови)
//* что отправился запрос на продукты
//* рядом с заголовками полезная нагрузка(payload) - то, что мы отправили
//* и в превью ответ
//
//* Далее то надо сделать
//
//* Сделать так, чтобы модалное окно закрывалось, а элемент отображался в нашем списке элементов на странице
//* то еть, доавлялсятуда