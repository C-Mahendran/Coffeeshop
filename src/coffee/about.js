// import React from 'react'
// import './about.css'
// import Cofee2 from './img/cofee2.jpg';
// import Coffee3 from './img/coffee3.jpg';
// import Coffee4 from './img/coffee4.jpg';
// import Coffee5 from './img/coffee5.jpg';
// import Coffee6 from './img/coffee6.webp';
// import Coffee7 from './img/coffee7.jpg';
// import 'bootstrap/dist/css/bootstrap.min.css';
// export default function about() {
//   return (
// <div>
//   <section id='about-section'>
//     <div className='container'>
//         <div className='about'>
//         <div className='row'>
//        <div className='text-center'> 
//       <h1 className='abouthead'>About Robusta</h1>
//   <div className='text-light'>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore er dolore magna aliqua.</p>
//     <p> Ut enim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//         </div></div></div>
//       <div className="m-3">
//       <div className='row'>
//       <div className='col-lg-3'> 
//         <img className='img1' src={ Cofee2} />
//       </div>
//       <div className='col-lg-4'>
//        <img className='img2' src={ Coffee3 } />
//       </div>
//       <div className='col-lg-3'>
//         <img className='img3' src={ Coffee4 } />
//       </div>
//     </div>
//       <div className='row'>
//         <div className='col-lg-4 '>
//         <img className='img4' src={ Coffee5 } />
//         </div>
//         <div className='col-lg-3'>
//           <img className='img5' src={ Coffee6 } />
//         </div>
//         <div className='col-lg-4'>
//           <img className='img6' src={ Coffee7 } />
//         </div>
//       </div>
//       </div></div></div>
//     </section>
//   </div>  
//   )
// }*/
import React, { useState } from 'react';
import './about.css';
import Cofee2 from './img/cofee2.jpg';
import Coffee3 from './img/coffee3.jpg';
import Coffee4 from './img/coffee4.jpg';
import Coffee5 from './img/coffee5.jpg';
import Coffee6 from './img/coffee6.webp';
import Coffee7 from './img/coffee7.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <section id="about-section">
        <div className="container">
          <div className="about">
            <div className="row">
              <div className="text-center">
                <h1 className="abouthead">About Robusta</h1>
                <div className="text-light">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <p>
                    Ut enim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>

            <div className="m-3">
              <div className="row">
                <div className="col-lg-3">
                  <img className="img1" src={Cofee2} alt="Coffee 1" onClick={() => handleImageClick(Cofee2)} />
                </div>
                <div className="col-lg-4">
                  <img className="img2" src={Coffee3} alt="Coffee 2" onClick={() => handleImageClick(Coffee3)} />
                </div>
                <div className="col-lg-3">
                  <img className="img3" src={Coffee4} alt="Coffee 3" onClick={() => handleImageClick(Coffee4)} />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <img className="img4" src={Coffee5} alt="Coffee 4" onClick={() => handleImageClick(Coffee5)} />
                </div>
                <div className="col-lg-3">
                  <img className="img5" src={Coffee6} alt="Coffee 5" onClick={() => handleImageClick(Coffee6)} />
                </div>
                <div className="col-lg-4">
                  <img className="img6" src={Coffee7} alt="Coffee 6" onClick={() => handleImageClick(Coffee7)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {selectedImage && (
        <div className="modal" style={{ display: 'block' }} onClick={handleCloseModal}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-body">
                <img src={selectedImage} alt="Selected" className="img-fluid" />
              </div>
              <button className="close" onClick={handleCloseModal}>&times;</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
