import type { UseFormRegister, FieldValues, Path } from 'react-hook-form'

interface InputFieldProps<T extends FieldValues> {
  icon: string
  id: Path<T>
  type: string
  register: UseFormRegister<T>
  error?: string
  filedName: string
}

export default function InputField<T extends FieldValues>({
  icon,
  id,
  type,
  register,
  error,
  filedName,
}: InputFieldProps<T>) {
  return (
    <>
      <div>
        <div className='w-52 flex gap-2 justify-center items-center border-b border-b-black focus:border-b-[#F74D66]'>
          <img src={`./assets/image/${icon}-icon.webp`} className='size-4' />
          <input
            {...register(id)}
            type={type}
            id={String(id)}
            className='h-10 appearance-none outline-none bg-transparent p-0 m-0 shadow-none placeholder:text-sm '
            placeholder={filedName}
          />
        </div>
        <div className='text-xs mt-1'>{error && <p>* {error}</p>}</div>
      </div>
    </>
  )
}
