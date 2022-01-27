import React, { useState } from 'react';

const defaultFormData = {
  title: '',
  body: '',
};

const Form = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const { title, body } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    setFormData(defaultFormData);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' value={title} id='title' onChange={onChange} />
        <input type='text' value={body} id='body' onChange={onChange} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
