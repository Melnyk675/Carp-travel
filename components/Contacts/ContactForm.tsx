"use client"

import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import useFormPersist from 'react-hook-form-persist';
import { FormData } from "../../types/types";
import { ContactFormInfo } from "../../data/contacts";
import FormButton from "../Form/FormButton";
import FormInputs from "../Form/FormInputs";
import FormTextarea from "../Form/FormTextarea";

const ContactForm: React.FC = () => {
  const { register, handleSubmit, reset, watch, setValue, formState: { errors } } = useForm<FormData>();

  useFormPersist("contactFormData", {
    watch,
    setValue,
  });

  const { formContent: { inputs, textarea } } = ContactFormInfo;

  const onSubmit = (data: FormData) => {
    reset();
    toast.success(`Thanks, ${data.name}, your message was successfully delivered! You can check out for 24 hours before we come back.`);
  }

  return (
    <form
      className="flex flex-col md:flex-row md:gap-5 xl:w-1/2 xl:flex-col xl:gap-10"
      onSubmit={handleSubmit(onSubmit)}
      aria-label="Contact"
      noValidate>
      <div className="flex flex-col xl:flex-row xl:gap-5">
        {inputs.map(inputInfo =>
          <div className="mb-6 flex flex-col relative xl:mb-0" key={inputInfo.id}>
            <FormInputs
              inputInfo={inputInfo}
              inputStyles="xl:w-[292px]"
              register={register}
              errors={errors}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <FormTextarea
          textarea={textarea}
          textAreaStyles="mb-4 min-h-[192px] md:w-[462px] md:min-h-[220px] xl:w-[607px] xl:min-h-[174px] xl:mb-6"
          register={register}
        />
        <FormButton
          aria-label="Button send"
          btnStyles="text-white xl:mr-2"
        />
      </div>
    </form>
  )
}

export default ContactForm;