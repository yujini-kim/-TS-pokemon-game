import { z } from 'zod'

export const signUpSchema = z
  .object({
    username: z.string().min(1, '이름을 입력해주세요'),
    email: z.string().min(1, '이메일을 입력해주세요').email('유효한 이메일을 입력해주세요'),
    password: z.string().min(6, '비밀번호는 6자 이상 입력해주세요'),
    passwordConfirm: z.string().min(6, '비밀번호 확인은 6자 이상 입력해주세요'),
  })
  .superRefine(({ password, passwordConfirm }, ctx) => {
    if (password !== passwordConfirm) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '비밀번호가 일치하지 않습니다',
        path: ['passwordConfirm'],
      })
    }
  })
export type SignUpForm = z.infer<typeof signUpSchema>

export const signInSchema = z.object({
  email: z.string().min(1, '이메일을 입력해주세요').email('유효한 이메일을 입력해주세요'),
  password: z.string().min(6, '비밀번호는 6자 이상 입력해주세요'),
})

export type SignInForm = z.infer<typeof signInSchema>
