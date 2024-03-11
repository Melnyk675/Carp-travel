
import { FormTextAreaProps } from '../../types/career';

const FormTextarea: React.FC<FormTextAreaProps> = ({  textarea, textAreaStyles, register }) => {

  return (
    <>
      <label htmlFor={textarea.id} className="label">
        {textarea.label}
      </label>
      <textarea
        id={textarea.id}
        autoComplete={textarea.autoComplete}
        aria-label={textarea.aria}
        className={`input resize-none ${textAreaStyles}`}
        {...register(textarea.formData)}
      ></textarea>
    </>
  )
}

export default FormTextarea;