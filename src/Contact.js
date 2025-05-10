import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errs = {};
    if (!form.name) errs.name = "Name is required";
    if (!form.email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Email is invalid";
    if (!form.message) errs.message = "Message is required";
    return errs;
  };

  const handleBlur = (e) => {
    const errs = validate();
    setErrors({ ...errors, [e.target.name]: errs[e.target.name] });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <input name="name" onBlur={handleBlur} onChange={handleChange} placeholder="Name" />
      {errors.name && <p>{errors.name}</p>}

      <input name="email" onBlur={handleBlur} onChange={handleChange} placeholder="Email" />
      {errors.email && <p>{errors.email}</p>}

      <textarea name="message" onBlur={handleBlur} onChange={handleChange} placeholder="Message" />
      {errors.message && <p>{errors.message}</p>}

      <button type="submit">Send</button>
    </form>
  );

    return (
      <form className="max-w-xl mx-auto p-6 space-y-4 bg-white shadow-md rounded">
        <input
          name="name"
          placeholder="Name"
          onBlur={handleBlur}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
  
        <input
          name="email"
          placeholder="Email"
          onBlur={handleBlur}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
  
        <textarea
          name="message"
          placeholder="Message"
          onBlur={handleBlur}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
  
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Send
        </button>
      </form>
    );
  
};

export default Contact;
