import React from 'react';
import Swal from 'sweetalert2'
import './Contact.css';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault(); // Evita que el formulario se recargue
    const formData = new FormData(event.target); // Recoge todos los datos del formulario

    formData.append("access_key", "dc85e2e6-f5e4-4842-bca7-d18a628a2d75");

    const object = Object.fromEntries(formData); // Convierte los datos en un objeto
    const json = JSON.stringify(object); // Convierte el objeto a formato JSON

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json()); // Procesa la respuesta JSON de la API

    if (res.success) { // Si la respuesta es exitosa
      Swal.fire({
        title: "Enviado!",
        text: "Mensaje enviado correctamente",
        icon: "success"
      });
    }
  };

  return (
    <section className='contact' id='contact'>
      <form onSubmit={onSubmit}> {/* Ahora se llama a la función correctamente */}

        <h2>Contact Form</h2>

        <div className='input-box'>
          <label>Name:</label>
          <input type="text" name='name' className='field' placeholder="Enter your Name" required/>
        </div>

        <div className='input-box'>
          <label>Email address:</label>
          <input type="email" name='email' className='field' placeholder="Enter your email" required/>
        </div>

        <div className='input-box'>
          <label>Your Message:</label>
          <textarea name='message' id='' className='field mess' placeholder='Enter your message' required></textarea>
        </div>

        <button type='submit'>Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
