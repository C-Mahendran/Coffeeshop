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
import MenunonEnglishBreakfast from './img/menu non English Breakfast.avif';
import MenunonGreenTea from './img/menu non Green Tea.webp';
import MenunonJasmineTea from './img/menu non Jasmine Tea.avif';
import MenunonLycheeTea from './img/menu non Lychee Tea.webp';
import MenunonMilkTea from './img/menu non Milk Tea.webp';


export default function home() {

  let menus = [
    {name:"Cofee",img: Menuamericano, price:"50.00 rupee"},
    {name:"Cofee2",img:Menucappuccino, price:"50.00 rupee"},
    {name:"Cofee3",img:MenuCaffeLatte, price:"50.00 rupee"},
    {name:"Cofee4",img:Menufrappuccino, price:"50.00 rupee"},
    {name:"Cofee5",img:Menuespresso, price:"50.00 rupee"},
    {name:"Cofee6",img:Menumacchiato, price:"50.00 rupee"},
    {name:"Cofee7",img:Menucaramellatte, price:"50.00 rupee"},
    {name:"Cofee8",img:MenuaffogatoCoffee, price:"50.00 rupee"},
  ]

  let menus2 = [
    {name:"Cofee9",img: MenunonChamomile, price:"25.00 rupee"},
    {name:"Cofee9",img:  MenunonBlackTea, price:"25.00 rupee"},
    {name:"Cofee9",img: MenunonEarlGrey, price:"25.00 rupee"},
    {name:"Cofee9",img: MenunonEnglishBreakfast, price:"25.00 rupee"},
    {name:"Cofee9",img: MenunonGreenTea, price:"25.00 rupee"},
    {name:"Cofee9",img: MenunonJasmineTea, price:"25.00 rupee"},
    {name:"Cofee9",img: MenunonLycheeTea, price:"25.00 rupee"},
    {name:"Cofee9",img:MenunonMilkTea , price:"25.00 rupee"},
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
                  <td style={{  color:" #f39c12"}} >-------------{menu.price}</td>
                </tr>
              )
            })}
          {/* <p><img style={{width:'100px',borderRadius:'50%'}} src={ Menuamericano} />Americano <span className="price">-------------50.00 Rs</span></p>
          <p><img style={{width:'100px',borderRadius:'50%'}} src={ Menucappuccino} />Cappuccino <span className="price">-------------50.00 Rs</span></p>
          <p><img style={{width:'100px',borderRadius:'50%'}} src={ MenuCaffeLatte} />Caffe Latte <span className="price">-------------50.00 Rs</span></p>
          <p><img style={{width:'100px',height:'80px',borderRadius:'50%'}} src={ Menufrappuccino} />Frappuccino <span className="price">-------------50.00 Rs</span></p>
          <p><img style={{width:'100px',borderRadius:'50%'}} src={ Menumacchiato} />Macchiato <span className="price">-------------50.00 Rs</span></p>
          <p><img style={{width:'100px',borderRadius:'50%'}} src={ Menuespresso} />Espresso <span className="price">-------------50.00 Rs</span></p>
          <p><img style={{width:'100px',borderRadius:'50%',height:'80PX'}} src={ Menucaramellatte} />Caramel Latte <span className="price">-------------40.00 Rs</span></p>
          <p><img style={{width:'100px',borderRadius:'50%'}} src={ MenuaffogatoCoffee} />Affogato Coffee <span className="price">-------------50.00 Rs</span></p>
         */}
        </div></div>
<div className="col-lg"> 
          <h3>NoN Coffee</h3>
          {menus2 && menus2.map((menu)=>{
              return(
                <tr>
                  <td><img style={{width:'100px',height:"100px",objectFit:"cover",marginBottom:"20px",borderRadius:'50%' ,color:" #f39c12"}} src={menu.img} /></td>
                  <td style={{paddingLeft:"20px"}}>{menu.name}</td>
                  <td style={{  color:" #f39c12"}}>-------------{menu.price}</td>
                </tr>
              )
            })}
          {/* <p><img style={{width:'100px',borderRadius:'50%'}} src={ MenunonChamomile } />Chamomile <span className="price">-------------25.00 Rs</span></p>
          <p><img style={{width:'100px',borderRadius:'50%'}} src={ MenunonBlackTea } /> Black Tea<span className="price">-------------25.00 Rs</span></p>
          <p><img style={{width:'100px',borderRadius:'50%'}} src={ MenunonEarlGrey } />Earl Grey <span className="price">-------------25.00 Rs</span></p>
          <p><img style={{width:'100px',borderRadius:'50%'}} src={ MenunonEnglishBreakfast }/> Breakfast<span className="price">-------------25.00 Rs</span></p>
          <p><img style={{width:'100px',borderRadius:'50%'}} src={ MenunonGreenTea } />Green Tea <span className="price">-------------25.00 Rs</span></p>
          <p><img style={{width:'100px',height:'80px',borderRadius:'50%'}} src={ MenunonJasmineTea } />Jasmine Tea <span className="price">-------------25.00 Rs</span></p>
          <p><img style={{width:'100px',height:'80px',borderRadius:'50%'}} src={ MenunonLycheeTea } />Lychee Tea <span className="price">-------------25.00 Rs</span></p>
          <p><img style={{width:'100px',borderRadius:'50%'}} src={ MenunonMilkTea } />Milk Tea <span className="price">-------------25.00 Rs</span></p> */}
        </div>
      </div>
    </div>
  </div>
</section>

 </div>
  )
}
