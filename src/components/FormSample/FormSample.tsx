import { SubmitHandler, useForm } from "react-hook-form";

/*
  {...register("myFieldName", { validationObject })}
  Registers the element into the hook to be able to validate it and submit it.
*/

interface FormInput {
  firstName: string;
  lastName: string;
  age: number;
}

const FormSample = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const firstName = watch("firstName");
  const lastName = watch("lastName");
  const age = watch("age");

  const onSubmitCb: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitCb)}>
        <input
          {...register("firstName", {
            required: "This is required",
          })}
          placeholder="First Name"
        />
        <p>{firstName}</p>
        <p>{errors.firstName?.message}</p>

        <input
          {...register("lastName", {
            required: "This is requiered",
            minLength: {
              value: 4,
              message: "Min length is 4",
            },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Incorrect pattern",
            },
          })}
          placeholder="Last Name"
        />
        <p>{lastName}</p>
        <p>{errors.lastName?.message}</p>

        <input
          type="number"
          {...register("age", {
            min: 18,
            max: 99,
          })}
          placeholder="Age"
        />
        <p>{age}</p>
        <p>{errors.age?.message}</p>

        <input type="submit" />
      </form>
    </div>
  );
};

export default FormSample;
