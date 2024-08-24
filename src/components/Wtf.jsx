import React, { useState } from 'react';

const Wtf = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <form className = "form" onSubmit={handleSubmit}>
      <div>
      <h1 className= "contact-text">Contact Us!</h1>
    <div className = "topdiv">
      <h2 className = "getin">Get in Touch</h2>
      <h3 className = "emailtext">Email : Whatthefood@gmail.com</h3>
      <h3 className = "phonetext">Phone : 9839xxxxxx</h3>
      <p className = "contact-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra.Lorem ipsum dolor sit amet.
</p>
      </div>
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          name="email"
           placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message"></label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className = "submit" type="submit">Send</button>
    </form>
  );
};

export default Wtf;