import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Counter from './components/session9_redux/Counter'
import ToDoAdd from './components/session9_redux/ToDoAdd'
import Student from './components/session9_redux/Student'
library.add(fas)


// import HomePage_Demo from './components/secsion1/HomePage';
// import Card_Demo  from './components/secsion1/Card';
// import PropsFather from './components/secsion2/PropsFather';
// import Table from './components/secsion2/Table';
// import Dice from './components/secsion2/Dice';
// import RollDice from './components/secsion2/RollDice';
// import Lifecycle from './secsion3/Lifecycle';
// import Form from './components/secsion3/form';
// import UseState from './components/secsion4_hooks/useState';
// import Ref from './components/secsion4_hooks/ref';
// import CallBack from './components/secsion4_hooks/callBack';
// import Memo from './components/secsion4_hooks/memo';
// import RenderScore from './components/renderScore';
// import HomePage from './view/pages/HomePage';
// import MiniProject from './MiniProject';
// import Router from './components/session08_router/router';


/* --------------------------------------------------------------------------------------------------- */


// const dogArray = [
//   {
//       id:1,
//       url: "https://file.hstatic.net/1000292100/article/61312315_440746569804333_4727353524977926144_n_9a585e47ace64345af4b2dd9bc1f45bb_1024x1024.jpg",
//       title:"Dog BecDe",
//       body: "This is dog becde",
//   },
//   {
//       id:2,
//       url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY5olSkohb_p3H-MwtCM1EaXNrvffYP4J7MA&usqp=CAU",
//       title:"Dog BecDe",
//       body: "This is dog becde",
//   },
//   {
//       id:3,
//       url:"https://cdn.chotot.com/0gMWhs-INjetbLbf77vN-XNRxGJHKwgi3FglAHwUTWQ/preset:listing/plain/f60a92ef9b1c2017feebcacab5a98179-2814822792580256575.jpg",
//       title:"Dog BecDe",
//       body: "This is dog becde",
//   },
// ]

// const productList = [
//   { 
//     id:1,
//     name: "Nike Air Force 1",
//     stock: 5,
//     price: 500,
//     url:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/220a9e95-2e4e-48ab-87af-6e1e914e3c04/air-force-1-07-shoes-ZL3fVs.png"
//   },
//   {
//     id:2,
//     name: "Nike Air Max",
//     stock: 5,
//     price: 450,
//     url:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9d1a2178-3bc4-485f-bb67-fbdaaac00f35/air-max-90-se-womens-shoes-2ZsM2w.png"
//   },
//   {
//     id:3,
//     name: "Jordan",
//     stock: 5,
//     price: 380,
//     url:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8c9506df-399e-4e8d-ad89-a62c073e67b4/air-jordan-1-low-og-big-kids-shoes-QZJbMs.png"
//   },
// ]


function App() {
  return (
    <>
      {/* <HomePage_Demo/> */}
      {/* <div className='d-flex justify-content-center align-item-center'>
        {dogArray.map((item) => <Card key={item.id} dogs={item}/>) }
      </div> */}
   
      {/* {productList.map((item) => <Table key={item.id} products={item}/>)} */}

      {/* <Table productList={productList}/> */}
     
      {/* <RollDice/> */}
      {/* <Lifecycle/> */}

      {/* <Form/> */}

      {/* <UseState/> */}
      {/* <Ref/> */}
      {/* <Context/> */}
      {/* <CallBack/> */}
      {/* <Memo/> */}
      {/* <RenderScore/> */}
      {/* <HomePage/> */}
      {/* <MiniProject/> */}
      {/* <Router/> */}
      <Counter/>
      <br/>
      <ToDoAdd/>
      <br />
      <Student/>

    </>
  )
}

export default App;


