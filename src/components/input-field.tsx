import type { UseFormRegister, FieldValues, Path } from 'react-hook-form'

interface InputFieldProps<T extends FieldValues> {
  label: string
  id: Path<T>
  type: string
  register: UseFormRegister<T>
  error?: string
}

export default function InputField<T extends FieldValues>({
  label,
  id,
  type,
  register,
  error,
}: InputFieldProps<T>) {
  return (
    <>
      <label htmlFor={String(id)}>{label}</label>
      <input {...register(id)} type={type} id={String(id)} className='border' />
      {error && <p>{error}</p>}
    </>
  )
}
