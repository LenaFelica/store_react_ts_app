//* npx create-react-app --template typescript .
//

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