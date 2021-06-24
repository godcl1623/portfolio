import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const {
    register,
    reset,
    formState: { isSubmitSuccessful, errors },
    handleSubmit,
    setError,
    clearErrors
  } = useForm({
    mode: 'onSubmit'
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSuccess = data => {
    console.log(data);
  };

  const onError = error => console.error(error);

  return (
    <div className="Contact">
      <form onSubmit={handleSubmit(onSuccess, onError)}>
        <input
          type="text"
          placeholder="Name"
          {...register('name', {
            required: true
          })}
          onChange={() => clearErrors('name')}
        />
        { errors.name && <p>{ errors.name.message }</p>}
        <input type="text" {...register('email')} placeholder="E-mail" />
        <textarea {...register('message')} placeholder="Message" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Contact;