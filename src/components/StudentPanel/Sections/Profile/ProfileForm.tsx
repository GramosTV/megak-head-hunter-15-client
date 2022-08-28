import React from 'react'
import { DeepRequired, FieldErrorsImpl, UseFormRegister } from 'react-hook-form';
import { ExpectedContractType, ExpectedTypeWork } from 'types';
import { FormInputs } from './Profile';

interface ProfileFormProps {
    register: UseFormRegister<FormInputs>;
    edit: boolean;
    errors: FieldErrorsImpl<DeepRequired<FormInputs>>;
}
export function ProfileForm({register, edit, errors}: ProfileFormProps) {
  return (
    <section>
          <div>
            <label>Email</label>
            <input
              {...register("email", {
                required: true,
                maxLength: 255,
                minLength: 3,
              })}
              type="email"
              placeholder="Email"
              className={edit ? "" : "disabled"}
              disabled={!edit}
            />
            {errors.email?.type === "required" && "To pole jest wymagane"}
            {errors.email?.type === "maxLength" &&
              "Email może mieć maksymalnie 255 znaków"}
            {errors.email?.type === "minLength" &&
              "Email musi mieć co najmniej 3 znaki"}
            <label>Numer telefonu</label>
            <input
              type="number"
              {...register("tel", {
                required: true,
                max: 999999999999999,
                min: 0,
              })}
              placeholder="Numer telefonu"
              className={edit ? "" : "disabled"}
              disabled={!edit}
            />
            {errors.tel?.type === "required" && "To pole jest wymagane"}
            {errors.tel?.type === "max" &&
              "Numer nie może być dłuższy niż 15 cyfr"}
            {errors.expectedSalary?.type === "min" &&
              "Numer nie może być mniejszy od 0"}
            <label>Imię</label>
            <input
              {...register("firstName", { required: true, maxLength: 255 })}
              placeholder="Imię"
              className={edit ? "" : "disabled"}
              disabled={!edit}
            />
            {errors.firstName?.type === "required" && "To pole jest wymagane"}
            {errors.firstName?.type === "maxLength" && "Za długie"}
            <label>Nazwisko</label>
            <input
              {...register("lastName", { required: true, maxLength: 128 })}
              placeholder="Nazwisko"
              className={edit ? "" : "disabled"}
              disabled={!edit}
            />
            {errors.lastName?.type === "required" && "To pole jest wymagane"}
            {errors.lastName?.type === "maxLength" && "Za długie"}
            <label>Nazwa użytkownika z github</label>
            <input
              {...register("githubUsername", { required: true, maxLength: 39 })}
              placeholder="Nazwa użytkownika z github"
              className={edit ? "" : "disabled"}
              disabled={!edit}
            />
            {errors.githubUsername?.type === "required" &&
              "To pole jest wymagane"}
            {errors.githubUsername?.type === "maxLength" && "Za długie"}

            <label>Preferowany rodzaj pracy</label>
            <select
              {...register("expectedTypeWork")}
              className={edit ? "" : "disabled"}
              disabled={!edit}
            >
              {Object.values(ExpectedTypeWork).map((e) => {
                return <option value={e}>{e}</option>;
              })}
            </select>
            <label>Docelowe miejsce pracy (miasto)</label>
            <input
              {...register("targetWorkCity", {
                required: true,
                maxLength: 189,
              })}
              placeholder="Docelowe miejsce pracy (miasto)"
              className={edit ? "" : "disabled"}
              disabled={!edit}
            />
            {errors.targetWorkCity?.type === "required" &&
              "To pole jest wymagane"}
            {errors.targetWorkCity?.type === "maxLength" && "Za długie"}
            <label>Preferowany rodzaj kontraktu</label>
            <select
              {...register("expectedContractType")}
              className={edit ? "" : "disabled"}
              disabled={!edit}
            >
              {Object.values(ExpectedContractType).map((e) => {
                return <option value={e}>{e}</option>;
              })}
            </select>
            <label>Oczekiwana pensja</label>
            <input
              type="number"
              {...register("expectedSalary", {
                required: true,
                max: 99999,
                min: 0,
              })}
              placeholder="Oczekiwana pensja"
              className={edit ? "" : "disabled"}
              disabled={!edit}
            />
            {errors.expectedSalary?.type === "required" &&
              "To pole jest wymagane"}
            {errors.expectedSalary?.type === "max" &&
              "Liczba nie może przekraczać 99999"}
            {errors.expectedSalary?.type === "min" &&
              "Liczba nie może być mniejsza od 0"}
            <label>Ilość miesięcy doświadczenia zawodowego</label>
            <input
              type="number"
              {...register("monthsOfCommercialExp", {
                required: true,
                max: 99,
                min: 0,
              })}
              placeholder="Ilość miesięcy doświadczenia zawodowego"
              className={edit ? "" : "disabled"}
              disabled={!edit}
            />
            {errors.monthsOfCommercialExp?.type === "required" &&
              "To pole jest wymagane"}
            {errors.monthsOfCommercialExp?.type === "max" &&
              "Liczba nie może przekraczać 99"}
            {errors.monthsOfCommercialExp?.type === "min" &&
              "Liczba nie może być mniejsza od 0"}
          </div>

          <div>
            <label>Biografia</label>
            <textarea
              {...register("bio", { required: true, maxLength: 250 })}
              placeholder="Biografia"
              className={edit ? "" : "disabled"}
              disabled={!edit}
            />
            {errors.bio?.type === "required" && "To pole jest wymagane"}
            {errors.bio?.type === "maxLength" && "Za długie"}
            <label>Edukacja</label>
            <textarea
              {...register("education", { required: true, maxLength: 2000 })}
              placeholder="Edukacja"
              className={edit ? "" : "disabled"}
              disabled={!edit}
            />
            {errors.education?.type === "required" && "To pole jest wymagane"}
            {errors.education?.type === "maxLength" && "Za długie"}
            <label>Doświadczenie zawodowe</label>
            <textarea
              {...register("workExperience", {
                required: true,
                maxLength: 2000,
              })}
              placeholder="Doświadczenie zawodowe"
              className={edit ? "" : "disabled"}
              disabled={!edit}
            />
            {errors.workExperience?.type === "required" &&
              "To pole jest wymagane"}
            {errors.workExperience?.type === "maxLength" && "Za długie"}
            <label>Szkolenia</label>
            <textarea
              {...register("courses", { required: true, maxLength: 2000 })}
              placeholder="Szkolenia"
              className={edit ? "" : "disabled"}
              disabled={!edit}
            />
            {errors.courses?.type === "required" && "To pole jest wymagane"}
            {errors.courses?.type === "maxLength" && "Za długie"}
            <label>Linki do portfolio (po przecinku)</label>
            <input
              {...register("portfolioUrls", { required: true, maxLength: 999 })}
              placeholder="Linki do portfolio (po przecinku)"
              className={edit ? "" : "disabled"}
              disabled={!edit}
            />
            {errors.portfolioUrls?.type === "required" &&
              "To pole jest wymagane"}
            {errors.portfolioUrls?.type === "maxLength" && "Za długie"}
            <label>Linki do projektów (po przecinku)</label>
            <input
              {...register("bonusProjectUrls", { required: true, maxLength: 999 })}
              placeholder="Linki do projektów (po przecinku)"
              className={edit ? "" : "disabled"}
              disabled={!edit}
            />
            {errors.bonusProjectUrls?.type === "required" && "To pole jest wymagane"}
            {errors.bonusProjectUrls?.type === "maxLength" && "Za długie"}
          </div>
        </section>
  )
}
