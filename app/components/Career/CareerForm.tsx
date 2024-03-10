"use client";

import { useForm } from "react-hook-form";
import useFormPersist from 'react-hook-form-persist';
import { FormData } from "../../types/career";
import { CareerFormInfo } from "../../data/careerInputs";
import FormInputs from "../Form/FormInputs";
import FormTextarea from "../Form/FormTextarea";
import FormButton from "../Form/FormButton";
import FormPolicy from "../Form/FormPolicy";

const CareerForm: React.FC = () => {
  const { register, handleSubmit, reset, watch, setValue, formState: { errors } } = useForm<FormData>();

  useFormPersist("careerFormData", {
    watch, setValue,
  });

  const { description, formContent: { inputs, textarea, policy } } = CareerFormInfo;

  const onSubmit = (data: FormData) => {
    reset();
  }

  return (
    <>
      <p className="ml-3 text-white mb-9 w-[178px] text-sm font-extralight leading-5 md:ml-0 md:mb-7 md:w-[220px] md:text-[12px] md:leading-5 xl:mb-3.5 xl:w-[234px] xl:text-lg xl:leading-6">
        {description}
      </p>
      <form
        className="flex flex-col md:w-[464px] md:grid md:grid-cols-2 md:gap-x-7 xl:w-[606px]"
        onSubmit={handleSubmit(onSubmit)}
        aria-label="Career"
        noValidate>

        <div className="flex flex-col">
          {inputs.map(inputInfo =>
            <div className="mb-4 flex flex-col relative md:mb-[16px] xl:mb-[26px]" key={inputInfo.id}>
              <FormInputs
                inputInfo={inputInfo}
                register={register}
                errors={errors}
              />
            </div>
          )}
        </div>

        <div className="mb-4 flex flex-col md:mb-0">
          <FormTextarea
            textarea={textarea}
            textAreaStyles="min-h-[196px] md:min-h-[224px] xl:w-[292px] xl:min-h-[274px]"
            register={register}
          />
        </div>

        {policy &&
          <FormPolicy
            policy={policy}
            register={register}/>
        }

        <FormButton
          btnStyles="text-white justify-self-end mt-4 md:m-0 xl:text-[32px]"
        />
      </form>
    </>
  )
}

export default CareerForm;