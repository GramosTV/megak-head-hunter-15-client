import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormInputs = {
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
          {...register("fullName", { required: true, maxLength: 384 })}
          placeholder="Imię i nzazwisko"
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
          {...register("maxReservedStudents", { valueAsNumber: true, required: true, max: 999 })}
          placeholder="Limit rezerwacji kursantów"
        />
        {errors.maxReservedStudents?.type === "required" &&
          "To pole jest wymagane"}
        {errors.maxReservedStudents?.type === "max" && "Za długie"}
        <button type="submit">Zatwierdź</button>
      </form>
    </div>
  );
}
