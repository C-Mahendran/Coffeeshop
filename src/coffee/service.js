import React from 'react';
import './service.css';
import Drinkbrewed from './img/drinkbrewed.jpg'
import Drink2 from './img/drink2.jpg'
import Drink6 from './img/drink6.jpg'
import Drink3 from './img/drink3.jpg'
import Drink4 from './img/drink4.jpg'
import Drink5 from './img/drink5.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function service() {
  // const cards = [
  //   {title: "Coffee Brewing", img:Drinkbrewed, para: "Coffee brewing is an art that involves extracting the rich flavors from coffee beans. Whether it's drip coffee, espresso,each method offers a unique taste experience. Our brewing process ensures you get the perfect cup of coffee every time."},
  //   {title:"Special Drinks", img:Drink2,para:"Our special drinks are crafted with the finest ingredients to provide you with an unforgettable experience. Enjoy a variety of flavors, all made with love and passion. Perfect for any time of day!"},
  //   {title:"Refreshing Drink", img:Drink6,para:"Enjoy our refreshing and unique special drink, crafted with the finest ingredients the to provide an unforgettable taste experience. Perfect for any time of the day!"},
  //   {title:"Refreshing Milk Drink",img:Drink3,para:"Our refreshing milk drink is made with fresh, high-quality milk and a blend of unique flavors. Whether you're looking for a creamy, smooth taste or a light, frothy texture, our milk drinks are the perfect choice to cool off and enjoy any time of day."},
  //   {title:"Gourmet Coffee Blend",img:Drink4,para:"Indulge in our sweetened special drink, featuring a blend of premium ingredients and natural sweeteners. It's the perfect choice for anyone with a sweet tooth, offering a deliciously satisfying experience that's sure to brighten your day, whether you’re looking for a pick-me-up or a treat."},
  //   {title:"Sweetened Special Drink",img:Drink5,para:"Indulge in our sweetened special drink, featuring a blend of premium ingredients and natural sweeteners. It's the perfect choice for anyone with a sweet tooth, offering a deliciously satisfying experience that's sure to brighten your day, whether you’re looking for a pick-me-up or a treat."}
  // ]
  return (
    //   <section className='service'>
    //   <div >  
    // <h2 className="service-title">Our Coffee Shop Services</h2>
    //     <div className="container">
    //       {/* Card 1 */}
    //       <div className='row'>
    //         <div className='col'>
    //       <div className="card m-5 w-25 h-25">
    //       <img src={Drinkbrewed} alt="Coffee Brewing" className="service-image" />
    //         <h3>Coffee Brewing</h3>
    //         <p>
    //       Coffee brewing is an art that involves extracting the rich flavors from coffee beans. 
    //       Whether it's drip coffee, espresso, or cold brew, each method offers a unique taste experience. 
    //       Our brewing process ensures you get the perfect cup of coffee every time.
    //     </p>
    //       </div></div>
    //          {/* Card 2 */}
    //          <div className='col'>
    //       <div className="card m-5 w-25">
    //         <img className="card2" src={ Drink2 } alt="Special Drinks" className="service-image" />
    //         <h3>Special Drinks</h3>
    //         <p>
    //           Our special drinks are crafted with the finest ingredients to provide you with an unforgettable experience. 
    //           Enjoy a variety of flavors, from traditional to creative, all made with love and passion. Perfect for any time of day!
    //         </p>
    //       </div></div>
    //       {/*  */}
    //       <div className='col'>
    //       <div className="card m-5 w-25 h-25">
    //       <img src={ Drink6 }  className="service-image" />
    //       <h3></h3>
    //       <p>
    //       Enjoy our refreshing and unique special drink, crafted with the finest ingredients to provide an unforgettable taste experience.
    //       Perfect for any time of the day!
    //     </p>
    //     </div></div></div></div>
    // ,.....................................................
    // <div className='bg-dark'>
    //   <div className="col-lg-4 mb-3">
    //     {cards && cards.map((card)=>{
    //       return(
    //         <div>
    //             <div className="card">
    //               <img src={card.img} alt="Coffee Brewing" className="service-image" />
    //               <div className='service1'>
    //                 <h3 className=''>Coffee Brewing</h3>
    //                 <p>
    //                   Coffee brewing is an art that involves extracting the rich flavors from coffee beans.
    //                   Whether it's drip coffee, espresso,each method offers a unique taste experience.
    //                   Our brewing process ensures you get the perfect cup of coffee every time.
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //       )
    //     })}
    //   </div>
      <div className='service'>
        <div className="container">
          <h2 className="servicehead">Our Coffee Shop Services
            <p className="serpara">
              At our coffee shop, we believe in providing a unique and enriching experience. From expertly brewed coffees to our range of specialty drinks, we aim to offer something special for every coffee lover. Whether you’re in the mood for a smooth espresso, a refreshing iced drink, or a sweet dessert, we’ve got you covered. Come in and enjoy the best quality coffee and a relaxing atmosphere that makes every visit memorable.
            </p>
          </h2>
          {/* Card 1 */}
          <div className='m-4'>
            <div className="row">
              <div className="col-lg-4 mb-3">
                <div className="card">
                  <img src={Drinkbrewed} alt="Coffee Brewing" className="service-image" />
                  <div className='service1'>
                    <h3 className=''>Coffee Brewing</h3>
                    <p>
                      Coffee brewing is an art that involves extracting the rich flavors from coffee beans.
                      Whether it's drip coffee, espresso,each method offers a unique taste experience.
                      Our brewing process ensures you get the perfect cup of coffee every time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-lg-4 mb-3">
                <div className="card">
                  <img className="card2" src={Drink2} alt="Special Drinks" />
                  <div className='service2'>
                    <h3 className=''>Special Drinks</h3>
                    <p>
                      Our special drinks are crafted with the finest ingredients to provide you with an unforgettable experience.
                      Enjoy a variety of flavors, all made with love and passion. Perfect for any time of day!
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-lg-4 mb-3">
                <div className="card">
                  <img src={Drink6} alt="Refreshing Drink" className="service-image" />
                  <div className='service3'>
                    <h3 className=''>Refreshing Drink</h3>
                    <p>
                      Enjoy our refreshing and unique special drink, crafted with the finest ingredients the to provide an unforgettable taste experience.
                      Perfect for any  time of the day!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 1 */}
            <div className='row'>
              <div className="col-lg-4 mb-3">
                <div className="card">
                  <img src={Drink3} alt="Milk Drink" className="service-image" />
                  <div className='service4'>
                    <h3 className='p-3 text-center'>Refreshing Milk Drink</h3>
                    <p>
                      Our refreshing milk drink is made with fresh, high-quality milk and a blend of unique flavors.
                      Whether you're looking for a creamy, smooth taste or a light, frothy texture, our milk drinks are
                      the perfect choice to cool off and enjoy any time of day.
                    </p>
                  </div>
                </div></div>

              {/* Card 2 */}
              <div className="col-lg-4 mb-3">
                <div className="card">
                  <img src={Drink4} alt="Coffee Beans" className="service-image" />
                  <div className='service5'>
                    <h3 className='p-1'>Gourmet Coffee Blend</h3>
                    <p>
                      Our gourmet coffee blends are crafted from the finest coffee beans sourced from around the world.
                      Enjoy a rich, aromatic cup of coffee that delivers an unparalleled depth of flavor and complexity,
                      perfect for coffee lovers who appreciate quality and taste.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="col-lg-4 mb-3">
                <div className="card">
                  <img src={Drink5} alt="Sugar" className="service-image" />
                  <div className='service6'>
                    <h3 className='p-1'>Sweetened Special Drink</h3>
                    <p>
                      Indulge in our sweetened special drink, featuring a blend of premium ingredients and natural sweeteners.
                      It's the perfect choice for anyone with a sweet tooth, offering a deliciously satisfying experience
                      that's sure to brighten your day, whether you’re looking for a pick-me-up or a treat.
                    </p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  )
}

