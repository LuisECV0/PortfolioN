import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './Contact.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // Evitar envíos múltiples

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);

    // Validación de campos en el frontend
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!/^[a-zA-Z\s]+$/.test(name)) {
      Swal.fire({ title: 'Error', text: 'Nombre no válido. Usa solo letras y espacios.', icon: 'error' });
      setIsSubmitting(false);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Swal.fire({ title: 'Error', text: 'Correo electrónico no válido.', icon: 'error' });
      setIsSubmitting(false);
      return;
    }
    if (message.trim().length < 5) {
      Swal.fire({ title: 'Error', text: 'El mensaje es demasiado corto.', icon: 'error' });
      setIsSubmitting(false);
      return;
    }

    // Enviar datos al backend (aquí se usa un proxy como ejemplo)
    try {
      const res = await fetch('/api/contact', { // Cambia '/api/contact' por tu backend real
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (data.success) {
        Swal.fire({ title: '¡Enviado!', text: 'Mensaje enviado correctamente.', icon: 'success' });
        event.target.reset(); // Limpia el formulario
      } else {
        Swal.fire({ title: 'Error', text: 'Hubo un problema al enviar tu mensaje.', icon: 'error' });
      }
    } catch (error) {
      Swal.fire({ title: 'Error', text: 'Error al conectar con el servidor.', icon: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='contact' id='contact'>
      <form onSubmit={onSubmit}>
        <h2>Contact Form</h2>

        <div className='input-box'>
          <label>Nombre:</label>
          <input type="text" name="name" className='field' placeholder="Ingresa tu nombre" required />
        </div>

        <div className='input-box'>
          <label>Correo electrónico:</label>
          <input type="email" name="email" className='field' placeholder="Ingresa tu correo" required />
        </div>

        <div className='input-box'>
          <label>Mensaje:</label>
          <textarea name="message" className='field mess' placeholder="Escribe tu mensaje" required></textarea>
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
        </button>
      </form>
    </section>
  );
};

export default Contact;
