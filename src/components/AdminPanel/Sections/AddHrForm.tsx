import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormInputs = {
  email: string;
  fullName: string;
  company: string;
  maxReservedStudents: number;
};
export function AddHrForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = (data: any) => console.log(data);

  return (
    <div className="addHrFormContainer">
      <form className="addHrFormContainer__form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Dodaj HR</h2>
        <input
          {...register("email", { required: true, maxLength: 255 })}
          type="email"
          placeholder="Email"
        />
        {errors.email?.type === "required" && "To pole jest wymagane"}
        {errors.email?.type === "maxLength" && "Za długie"}
        <input
          {...register("fullName", { required: true, maxLength: 384 })}
          placeholder="Imię i nazwisko"
        />
        {errors.fullName?.type === "required" && "To pole jest wymagane"}
        {errors.fullName?.type === "maxLength" && "Za długie"}
        <input
          {...register("company", { required: true, maxLength: 160 })}
          placeholder="Firma"
        />
        {errors.company?.type === "required" && "To pole jest wymagane"}
        {errors.company?.type === "maxLength" && "Za długie"}
        <input
        className="addHrFormContainer__maxReservedStudentsInput"
          type="number"
          {...register("maxReservedStudents", { required: true, max: 999, min: 1 })}
          placeholder="Limit rezerwacji kursantów"
        />
        {errors.maxReservedStudents?.type === "required" &&
          "To pole jest wymagane"}
        {errors.maxReservedStudents?.type === "max" && "Liczba nie może przekraczać 999"}
        {errors.maxReservedStudents?.type === "min" && "Liczba nie może być mniejsza niż 1"}
        <button type="submit">Zatwierdź</button>
      </form>
    </div>
  );
}
