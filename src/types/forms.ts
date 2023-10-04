import { type signUpSchema } from '@/utils/validations'
import { type z } from 'zod'

export type SignUpSchema = z.infer<typeof signUpSchema>
