import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type DefaultValues, type FieldValues } from 'react-hook-form'
import type { ZodType } from 'zod'

export default function useAuthForm<T extends FieldValues>(
  schema: ZodType<any, any>,
  defaultValues: DefaultValues<T>,
) {
  return useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  })
}
