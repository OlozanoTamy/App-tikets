import { useState } from "react";
import { useForm } from "react-hook-form";

const signUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleClearClick = () => {
    reset();
  };

  const handleSubmitForm = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <label>
        Name
        <input {...register("name", { required: true })} />
      </label>
      <br />
      <label>
        Age
        <input {...register("age", { required: true })} />
      </label>
      <br />
      <label>
        Address
        <input {...register("address", { required: true })} />
      </label>
      <br />
      <label>
        ZipCode
        <input {...register("zipcode", { required: true })} />
      </label>
      <br />
      <label>
        Phone
        <input {...register("phone", { required: true })} />
      </label>
      <br />
      <div>
        <button onClick={handleClearClick}>Clear</button>
        <button type="submit">Submmit</button>
      </div>
    </form>
  );
};

export default signUpForm;
