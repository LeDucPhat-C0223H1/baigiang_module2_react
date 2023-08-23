export default function Card_Demo(props) {
  return (
    <>
            <div className="card ms-3" style={{ width: "18rem" }}>
               <img src={props.dogs.url} className="card-img-top" style={{width:'200px', height:'200px', margin: '0 auto' }}/>
               <div className="card-body">
                   <h5 className="card-title">{props.dogs.title}</h5>
                   <p className="card-text">{props.dogs.body}</p>
                   <a href="#" class="btn btn-primary">Go somewhere</a>
               </div>
            </div>
    </>
  )
}







// import { Component } from "react";



// export default class Card extends Component {
//     render() {
//         return (
//             <>
//                 {dogArray.map((item) =>(
//                 <div className="card ms-3" style={{ width: "18rem" }}>
//                     <img src={item.url} className="card-img-top" alt="..." />
//                     <div className="card-body">
//                         Card Title
//                         <p className="card-text">
//                             Some quick example text to build on the card title
//                             and make up the bulk of the card's content.
//                         </p>
//                     </div>
//                 </div>
//                 )
//                 )}
//             </>
//         );
//     }
// }
