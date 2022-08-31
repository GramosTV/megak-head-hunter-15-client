import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { errorNotif } from "../../../../utils/notifications/errorNotif";
import { successNotif } from "../../../../utils/notifications/successNotif";
import { ExpectedContractType, ExpectedTypeWork, UserProfile } from "types";
import { ProfileForm } from "./ProfileForm";
import {useFetch} from "../../../../hooks/useFetch";

interface ProfileProps {
  studentProfile: UserProfile;
}
export type FormInputs = {
  email: string;
  tel: number;
  firstName: string;
  lastName: string;
  githubUsername: string;
  portfolioUrls: string;
  bonusProjectUrls: string;
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
  const [edit, setEdit] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      ...(studentProfile as any),
      portfolioUrls: studentProfile?.portfolioUrls?.join(", ") || null,
      bonusProjectUrls: studentProfile?.bonusProjectUrls?.join(", ") || null,
    },
  });
  const {sendReq} = useFetch();
  useEffect(() => {
    reset(studentProfile as any);
    console.log(studentProfile)
  }, [studentProfile.email]);
  const onSubmit: SubmitHandler<FormInputs> = async ({
    email,
    tel,
    firstName,
    lastName,
    githubUsername,
    portfolioUrls,
    bonusProjectUrls,
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
      let portfolio = []
      let bonusProject = []
      if(typeof portfolioUrls === 'string') {
        portfolio = portfolioUrls.split(",").map((el) => el.trim())
      } else {
        portfolio = portfolioUrls
      }
      if(typeof bonusProjectUrls === 'string') {
        bonusProject = bonusProjectUrls.split(",").map((el) => el.trim())
      } else {
        bonusProject = bonusProjectUrls
      }
      const data = await sendReq('student/update', 'PATCH', {
            email,
            tel,
            firstName,
            lastName,
            githubUsername,
            portfolioUrls: portfolio,
            bonusProjectUrls: bonusProject,
            bio,
            expectedTypeWork,
            targetWorkCity,
            expectedContractType,
            expectedSalary: Number(expectedSalary),
            canTakeApprenticeship,
            monthsOfCommercialExp: Number(monthsOfCommercialExp),
            education,
            workExperience,
            courses,
          }) as {ok: boolean; message: string};
      if (data.ok) {
        successNotif("Profil pomyślnie zaktualizowany!");
      } else {
        errorNotif(data.message);
      }
    } catch (e) {
      console.log(e);
      errorNotif('Coś poszło nie tak, spróbuj ponownie.')
    }
  };
  return (
    <>
      <form
        className="studentPanel__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>Twój profil</h2>
        <img
          src={`https://github.com/${studentProfile.githubUsername}.png`}
          alt="Github profile"
        />
        
        <ProfileForm register={register} edit={edit} errors={errors}/>

        {edit ? <button type="submit">Zatwierdź</button> : null}
      </form>
      {edit ? null : (
        <button className="mainBtn" onClick={() => setEdit((prev) => !prev)}>Edytuj</button>
      )}
    </>
  );
}
