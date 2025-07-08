import type { UseFormRegister, FieldValues, Path } from 'react-hook-form'

interface InputFieldProps<T extends FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: string
  name: Path<T>
  register: UseFormRegister<T>
  error?: string
}

export default function InputField<T extends FieldValues>({
  icon,
  name,
  register,
  error,
  ...props
}: InputFieldProps<T>) {
  return (
    <>
      <div>
        <div className='w-52 flex gap-2 justify-center items-center border-b border-b-black focus:border-b-[#F74D66]'>
          <img src={`./assets/icon/${icon}-icon.webp`} className='size-4' />
          <input
            {...register(name)}
            {...props}
            className='h-10 appearance-none outline-none bg-transparent p-0 m-0 shadow-none text-sm  placeholder:text-sm '
          />
        </div>
        <div className='text-xs mt-1'>{error && <p>* {error}</p>}</div>
      </div>
    </>
  )
}
