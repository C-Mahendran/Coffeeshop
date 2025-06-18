// import React from 'react';
// import './home.css';
// import Menuamericano from './img/menu americano.webp';
// import Menucappuccino from './img/menu cappuccino.webp';
// import MenuCaffeLatte from './img/menu caffelatte.jpg';
// import Menufrappuccino from './img/menu frappuccino.webp';
// import Menumacchiato from './img/menu macchiato.webp';
// import Menuespresso from './img/menu espresso.webp';
// import Menucaramellatte from './img/menu caramel latte.avif';
// import MenuaffogatoCoffee from './img/menu affogato Coffee.webp';
// import MenunonChamomile from './img/menu non Chamomile.webp';
// import MenunonBlackTea from './img/menu non Black Tea.webp';
// import MenunonEarlGrey from './img/menu non Earl Grey.webp';
// import MenunonSteamingBlackTea from './img/menu non Steaming Black Tea.jpg';
// import MenunonGreenTea from './img/menu non Green Tea.webp';
// import MenunonJasmineTea from './img/menu non Jasmine Tea.avif';
// import MenunonLycheeTea from './img/menu non Lychee Tea.webp';
// import MenunonMilkTea from './img/menu non Milk Tea.webp';


// export default function home() {
//   let menus = [
//     { name: "Americano", img: Menuamericano, price: "50.00 rupee" },
//     { name: "Cappuccino", img: Menucappuccino, price: "50.00 rupee" },
//     { name: "CaffeLatte", img: MenuCaffeLatte, price: "50.00 rupee" },
//     { name: "Frappuccino", img: Menufrappuccino, price: "50.00 rupee" },
//     { name: "Espresso", img: Menuespresso, price: "50.00 rupee" },
//     { name: "Macchiato", img: Menumacchiato, price: "50.00 rupee" },
//     { name: "Caramellatte", img: Menucaramellatte, price: "50.00 rupee" },
//     { name: "AffogatoCoffee", img: MenuaffogatoCoffee, price: "50.00 rupee" },
//   ]
//   let menus2 = [
//     { name: "Chamomile", img: MenunonChamomile, price: "25.00 rupee" },
//     { name: "BlackTea", img: MenunonBlackTea, price: "25.00 rupee" },
//     { name: "EarlGrey", img: MenunonEarlGrey, price: "25.00 rupee" },
//     { name: "SteamingBlackTea", img: MenunonSteamingBlackTea, price: "25.00 rupee" },
//     { name: "GreenTea", img: MenunonGreenTea, price: "25.00 rupee" },
//     { name: "JasmineTea", img: MenunonJasmineTea, price: "25.00 rupee" },
//     { name: "LycheeTea", img: MenunonLycheeTea, price: "25.00 rupee" },
//     { name: "MilkTea", img: MenunonMilkTea, price: "25.00 rupee" },
//   ]
//   return (
//     <div>
//       <div className='my-component'>
//         <div className='row'>
//           <div className='col-6-lg'></div>
//           <div className='col-6-lg'>
//             <div className='homeani'>
//               <h3 className='homecontent'>WELCOME TO YOUR COFFEE SHOP</h3>
//               <p>where every cup is a moment of comfort and joy </p>
//               <button className='menu-order' type='submit'><a className='menuord' href='#menu-section'>menu order online</a></button>
//             </div></div></div>
//       </div>
//       <section id="menu-section">
//         <div className="menums p-2" style={{ width: '100%', backgroundColor: 'black' }}>
//           <h2 style={{ margin: '70px' }} className="text-light text-center">Menu</h2>
//           <div className="container">
//             <div className="row text-light text-center m-4" >
//               <div className="col-lg">
//                 <h3>Coffee</h3>
//                 <div className=''>
//                   {menus && menus.map((menu) => {
//                     return (
//                       <tr>
//                         <td><img style={{ width: '100px', height: "100px", objectFit: "cover", marginBottom: "20px", borderRadius: '50%' }} src={menu.img}/></td>
//                         <td style={{ paddingLeft: "20px" }}>{menu.name}</td>
//                         <td style={{ color: " #f39c12" }}>-------------{menu.price}</td>
//                       </tr>
//                     )
//                   })}
//                 </div></div>
//               <div className="col-lg">
//                 <h3>NoN Coffee</h3>
//                 {menus2 && menus2.map((menu) => {
//                   return (
//                     <tr>
//                       <td><img style={{ width: '100px', height: "100px", objectFit: "cover", marginBottom: "20px", borderRadius: '50%', color: " #f39c12"}} src={menu.img} /></td>
//                       <td style={{ paddingLeft: "20px" }}>{menu.name}</td>
//                       <td style={{ color: " #f39c12" }}>-------------{menu.price}</td>
//                     </tr>
//                   )
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
// </div>
//   )
// }
import React from 'react';
import './home.css';
import Menuamericano from './img/menu americano.webp';
import Menucappuccino from './img/menu cappuccino.webp';
import MenuCaffeLatte from './img/menu caffelatte.jpg';
import Menufrappuccino from './img/menu frappuccino.webp';
import Menumacchiato from './img/menu macchiato.webp';
import Menuespresso from './img/menu espresso.webp';
import Menucaramellatte from './img/menu caramel latte.avif';
import MenuaffogatoCoffee from './img/menu affogato Coffee.webp';
import MenunonChamomile from './img/menu non Chamomile.webp';
import MenunonBlackTea from './img/menu non Black Tea.webp';
import MenunonEarlGrey from './img/menu non Earl Grey.webp';
import Menulemon from './img/menulemon.jpg';
import MenunonGreenTea from './img/menu non Green Tea.webp';
import MenunonJasmineTea from './img/menu non Jasmine Tea.avif';
import MenunonLycheeTea from './img/menu non Lychee Tea.webp';
import MenunonMilkTea from './img/menu non Milk Tea.webp';


export default function home() {

  let menus = [
    {name:"Americano",img: Menuamericano, price:"50.00 rupee"},
    {name:"Cappuccino",img:Menucappuccino, price:"50.00 rupee"},
    {name:"CaffeLatte",img:MenuCaffeLatte, price:"50.00 rupee"},
    {name:"Frappuccino",img:Menufrappuccino, price:"50.00 rupee"},
    {name:"Espresso",img:Menuespresso, price:"50.00 rupee"},
    {name:"Macchiato",img:Menumacchiato, price:"50.00 rupee"},
    {name:"Caramellatte",img:Menucaramellatte, price:"50.00 rupee"},
    {name:"Affogato",img:MenuaffogatoCoffee, price:"50.00 rupee"},
  ]

  let menus2 = [
    {name:"Chamomile",img: MenunonChamomile, price:"25.00 rupee"},
    {name:"BlackTea",img:  MenunonBlackTea, price:"25.00 rupee"},
    {name:"EarlGrey",img: MenunonEarlGrey, price:"25.00 rupee"},
    {name:"lemon",img: Menulemon, price:"25.00 rupee"},
    {name:"GreenTea",img: MenunonGreenTea, price:"25.00 rupee"},
    {name:"JasmineTea",img: MenunonJasmineTea, price:"25.00 rupee"},
    {name:"LycheeTea",img: MenunonLycheeTea, price:"25.00 rupee"},
    {name:"MilkTea",img:MenunonMilkTea , price:"25.00 rupee"},
  ]
  return (
 <div>
  <div className='my-component'>
  <div className='row'> 
    <div className='col-6-lg'></div> 
  <div className='col-6-lg'>
    <div className='homeani'>
  <h3 className='homecontent'>WELCOME TO YOUR COFFEE SHOP</h3>
  <p>where every cup is a moment of comfort and joy </p>
  <button className='menu-order' type='submit'><a className='menuord' href='#menu-section'>menu order online</a></button>
  </div></div></div>
  </div>
  <section id="menu-section">
  <div className="menums p-2" style={{width:'100%',backgroundColor:'black'}}>
    <h2 style={{margin:'70px'}} className="text-light text-center">Menu</h2>
    <div className="container">
      <div className="row text-light text-center m-4">
        <div className="col-lg">
          <h3>Coffee</h3>
          <div className=''>
            {menus && menus.map((menu)=>{
              return(
                <tr>
                  <td><img style={{width:'100px',height:"100px",objectFit:"cover",marginBottom:"20px",borderRadius:'50%'}} src={menu.img} /></td>
                  <td style={{paddingLeft:"20px"}}>{menu.name}</td>
                  <td style={{  color:" #f39c12"}} >--------{menu.price}</td>
                </tr>
              )
            })}

        </div></div>
<div className="col-lg"> 
          <h3>NoN Coffee</h3>
          {menus2 && menus2.map((menu)=>{
              return(
                <tr>
                  <td><img className='non' style={{width:'100px',height:"100px",objectFit:"cover",marginBottom:"20px",borderRadius:'50%' ,color:" #f39c12"}} src={menu.img} /></td>
                  <td style={{paddingLeft:"20px"}}>{menu.name}</td>
                  <td style={{  color:" #f39c12"}}>--------{menu.price}</td>
                </tr>
              )
            })}
        </div>
      </div>
    </div>
  </div>
</section>

 </div>
  )
}