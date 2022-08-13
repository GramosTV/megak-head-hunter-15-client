import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ExpectedContractType, ExpectedTypeWork, UserProfile } from "types";

interface ProfileProps {
  studentProfile: UserProfile;
}
type FormInputs = {
  email: string;
  tel: number;
  firstName: string;
  lastName: string;
  githubUsername: string;
  portfolioUrls: string;
  projectUrls: string;
  bio: string;
  expectedTypeWork: ExpectedTypeWork;
  targetWorkCity: string;
  expectedContractType: string;
  expectedSalary: number;
  canTakeApprenticeship: number;
  monthsOfCommercialExp: number;
  education: string;
  workExperience: string;
  courses: string;
};
export function Profile({ studentProfile }: ProfileProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      ...(studentProfile as any),
      portfolioUrls: studentProfile?.portfolioUrls?.join(", ") || null,
      projectUrls: studentProfile?.projectUrls?.join(", ") || null,
    },
  });
  const onSubmit: SubmitHandler<FormInputs> = async ({
    email,
    tel,
    firstName,
    lastName,
    githubUsername,
    portfolioUrls,
    projectUrls,
    bio,
    expectedTypeWork,
    targetWorkCity,
    expectedContractType,
    expectedSalary,
    canTakeApprenticeship,
    monthsOfCommercialExp,
    education,
    workExperience,
    courses,
  }) => {
    try {
      const res = await fetch("/student/profile", {
        method: "PATCH",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "true",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          tel,
          firstName,
          lastName,
          githubUsername,
          portfolioUrls: portfolioUrls.split(",").map((el) => el.trim()),
          projectUrls: projectUrls.split(",").map((el) => el.trim()),
          bio,
          expectedTypeWork,
          targetWorkCity,
          expectedContractType,
          expectedSalary,
          canTakeApprenticeship,
          monthsOfCommercialExp,
          education,
          workExperience,
          courses,
        }),
      });
      const data = await res.json();
      if (data.ok) {
        console.log(data);
      } else {
        console.log(data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <form
        className="studentPanel__profileForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>Twój profil</h2>
        <img
          src={`https://github.com/${studentProfile.githubUsername}.png`}
          alt="Github profile"
        />
        <label>Email</label>
        <input
          {...register("email", {
            required: true,
            maxLength: 255,
            minLength: 3,
          })}
          type="email"
          placeholder="Email"
        />
        {errors.email?.type === "required" && "To pole jest wymagane"}
        {errors.email?.type === "maxLength" &&
          "Email może mieć maksymalnie 255 znaków"}
        {errors.email?.type === "minLength" &&
          "Email musi mieć co najmniej 3 znaki"}
        <label>Numer telefonu</label>
        <input
          className=""
          type="number"
          {...register("tel", {
            required: true,
            max: 15,
            min: 0,
          })}
          placeholder="Numer telefonu"
        />
        {errors.tel?.type === "required" && "To pole jest wymagane"}
        {errors.tel?.type === "max" && "Numer nie może być dłuższy niż 15 cyfr"}
        {errors.expectedSalary?.type === "min" &&
          "Numer nie może być mniejszy od 0"}
        <label>Imię</label>
        <input
          {...register("firstName", { required: true, maxLength: 255 })}
          placeholder="Imię"
        />
        {errors.firstName?.type === "required" && "To pole jest wymagane"}
        {errors.firstName?.type === "maxLength" && "Za długie"}
        <label>Nazwisko</label>
        <input
          {...register("lastName", { required: true, maxLength: 128 })}
          placeholder="Nazwisko"
        />
        {errors.lastName?.type === "required" && "To pole jest wymagane"}
        {errors.lastName?.type === "maxLength" && "Za długie"}
        <label>Nazwa użytkownika z github</label>
        <input
          {...register("githubUsername", { required: true, maxLength: 39 })}
          placeholder="Nazwa użytkownika z github"
        />
        {errors.githubUsername?.type === "required" && "To pole jest wymagane"}
        {errors.githubUsername?.type === "maxLength" && "Za długie"}
        <label>Linki do portfolio (po przecinku)</label>
        <input
          {...register("portfolioUrls", { required: true, maxLength: 999 })}
          placeholder="Linki do portfolio (po przecinku)"
        />
        {errors.portfolioUrls?.type === "required" && "To pole jest wymagane"}
        {errors.portfolioUrls?.type === "maxLength" && "Za długie"}
        <label>Linki do projektów (po przecinku)</label>
        <input
          {...register("projectUrls", { required: true, maxLength: 999 })}
          placeholder="Linki do projektów (po przecinku)"
        />
        {errors.projectUrls?.type === "required" && "To pole jest wymagane"}
        {errors.projectUrls?.type === "maxLength" && "Za długie"}
        <label>Biografia</label>
        <textarea
          {...register("bio", { required: true, maxLength: 250 })}
          placeholder="Biografia"
        />
        {errors.bio?.type === "required" && "To pole jest wymagane"}
        {errors.bio?.type === "maxLength" && "Za długie"}
        <label>Preferowany rodzaj pracy</label>
        <select {...register("expectedTypeWork")}>
          {Object.values(ExpectedTypeWork).map((e) => {
            return <option value={e}>{e}</option>;
          })}
        </select>
        <label>Docelowe miejsce pracy (miasto)</label>
        <input
          {...register("targetWorkCity", { required: true, maxLength: 189 })}
          placeholder="Docelowe miejsce pracy (miasto)"
        />
        {errors.targetWorkCity?.type === "required" && "To pole jest wymagane"}
        {errors.targetWorkCity?.type === "maxLength" && "Za długie"}
        <label>Preferowany rodzaj kontraktu</label>
        <select {...register("expectedContractType")}>
          {Object.values(ExpectedContractType).map((e) => {
            return <option value={e}>{e}</option>;
          })}
        </select>
        <label>Oczekiwana pensja</label>
        <input
          className=""
          type="number"
          {...register("expectedSalary", {
            required: true,
            max: 99999,
            min: 0,
          })}
          placeholder="Oczekiwana pensja"
        />
        {errors.expectedSalary?.type === "required" && "To pole jest wymagane"}
        {errors.expectedSalary?.type === "max" &&
          "Liczba nie może przekraczać 999"}
        {errors.expectedSalary?.type === "min" &&
          "Liczba nie może być mniejsza od 0"}
        <label>Ilość miesięcy doświadczenia zawodowego</label>
        <input
          className=""
          type="number"
          {...register("monthsOfCommercialExp", {
            required: true,
            max: 99,
            min: 0,
          })}
          placeholder="Ilość miesięcy doświadczenia zawodowego"
        />
        {errors.monthsOfCommercialExp?.type === "required" &&
          "To pole jest wymagane"}
        {errors.monthsOfCommercialExp?.type === "max" &&
          "Liczba nie może przekraczać 999"}
        {errors.monthsOfCommercialExp?.type === "min" &&
          "Liczba nie może być mniejsza od 0"}
        <label>Edukacja</label>
        <textarea
          {...register("education", { required: true, maxLength: 2000 })}
          placeholder="Edukacja"
        />
        {errors.education?.type === "required" && "To pole jest wymagane"}
        {errors.education?.type === "maxLength" && "Za długie"}
        <label>Doświadczenie zawodowe</label>
        <textarea
          {...register("workExperience", { required: true, maxLength: 2000 })}
          placeholder="Doświadczenie zawodowe"
        />
        {errors.workExperience?.type === "required" && "To pole jest wymagane"}
        {errors.workExperience?.type === "maxLength" && "Za długie"}
        <label>Szkolenia</label>
        <textarea
          {...register("courses", { required: true, maxLength: 2000 })}
          placeholder="Szkolenia"
        />
        {errors.courses?.type === "required" && "To pole jest wymagane"}
        {errors.courses?.type === "maxLength" && "Za długie"}

        <button type="submit">Zatwierdź</button>
      </form>
    </>
  );
}