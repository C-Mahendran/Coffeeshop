import { useState } from 'react';
import emailjs from 'emailjs-com';
import'./contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: " ",
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // 1. Send "Thank You" email to the user
    const userParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      
    };

    emailjs
      .send(
        'service_gkivl1n',    // YOUR_SERVICE_ID
        'template_pgurxdq',      // template_id
        userParams,           // Pass the user details as parameters
        'UeDqUjMJOYFvDRBfp'        // public key
      )
      .then((response) => {
        console.log('Thank You email sent successfully to the user!', response.status, response.text);
      })
      .catch((err) => console.error('Failed to send Thank You email to the user:', err));

    // 2. Send admin email with user details
    const adminParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      // admin_email: 'gowthamak812@gmail.com',  // You can add admin's email here if required
    };

    emailjs
      .send(
        'service_gkivl1n',   // YOUR_SERVICE_ID
        'template_0ndcyb8',     // template_id
        adminParams,          // Pass the user details as parameters
        'UeDqUjMJOYFvDRBfp'        // public key
      )
      .then((response) => {
        console.log('Admin email sent successfully!', response.status, response.text);
      })
      .catch((err) => console.error('Failed to send admin email:', err));
  };
  return (
    <div className='contact'>
    <div className='container'>
    
    <h1 style={{ paddingTop: '5rem',color:'white', textAlign: 'center' }}>Contact</h1>
      <div className='row text-light m-5'>
        <div className='col-lg'>
          <h5><a className='map' href='https://www.google.com/maps/place/Coimbatore,+Tamil+Nadu/@11.0139689,76.967235,12z/data=!3m1!4b1!4m6!3m5!1s0x3ba859af2f971cb5:0x2fc1c81e183ed282!8m2!3d11.0168445!4d76.9558321!16zL20vMDE5ZmM0?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D'><i className="fa-solid fa-location-dot"></i></a> <span className='p-2'>Our Office Address</span></h5>
          <p >Palm Court Bldg M, 501/B, 5th Floor, New Link Road beside Goregaon Sports Complex, Malad, Coimbatore</p>
          <h5><a className='mail' href='https://mail.google.com/'><i className="fa-regular fa-envelope"></i></a><span className='p-2'>General Enquiries</span></h5>
          <p>websupport@justdial.com</p>
          <h5><a className='call' href="tel:+918888888888"><i className="fa-solid fa-phone"></i></a><span className='p-2'>Call Us</span></h5>
          <p>+918888888888</p>
          <h5>Our Timing</h5>
          <p>Mon-Sun: 10:00 AM - 07:00 PM</p>
        </div>
        <div className='col-lg'>
          <form onSubmit={sendEmail}>
            <div>
              <input
                type='text'  
                name='name'
                placeholder='Your Name'
                value={formData.name}
                onChange={handleChange}
                required
                style={{width:'100%',padding:'10px',marginBottom:'10px'}}
              />
            </div>
          <div>
              <input
                type='tel'
                name='mobile'
                placeholder='Mobile Number'
                value={formData.mobile}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                />
          </div>
            <div>
              <input
                type='email'
                name='email'
                placeholder='Email ID'
                value={formData.email}
                onChange={handleChange}
                style={{width:'100%',padding:'10px',marginBottom:'10px'}}
              />
            </div>
            <div>
              <textarea
                name='message'
                placeholder='Message'
                value={formData.message}
                onChange={handleChange}
                style={{width:'100%' ,height:'20vh',padding:'10px',marginBottom:'10px'}}
              ></textarea>
            </div>
            <button className='submit' type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
}

