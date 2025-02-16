import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias ${formData.name}, hemos recibido tu mensaje y te contactaremos pronto!`);
    setFormData({ name: '', email: '', message: '' }); // Reinicia el formulario
  };

  return (
    <div className="container">
      <h1>Contáctanos</h1>
      <p>¿Tienes alguna duda sobre inversiones en criptomonedas? ¡Escríbenos y te responderemos lo antes posible!</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Escribe tu mensaje aquí..."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Enviar Mensaje</button>
      </form>
    </div>
  );
};

export default Contact;
