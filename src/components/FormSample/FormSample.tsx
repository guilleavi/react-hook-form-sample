import { useForm } from "react-hook-form";

const FormSample = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const firstName = watch("firstName");
  const lastName = watch("lastName");

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input
          {...register("firstName", { required: "This is required" })}
          placeholder="First Name"
        />
        <p>{firstName}</p>
        <p>{errors.firstName?.message}</p>
        <input
          {...register("lastName", {
            required: "This is requiered",
            minLength: { value: 4, message: "Min length is 4" },
          })}
          placeholder="Last Name"
        />
        <p>{lastName}</p>
        <p>{errors.lastName?.message}</p>

        <input type="submit" />
      </form>
    </div>
  );
};

export default FormSample;
