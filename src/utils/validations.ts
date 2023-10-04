import { z } from 'zod'

export const signUpSchema = z.object({
  email: z.string().email('Por favor introduzca un email válido'),
  password: z.string().min(6, 'Contraseña muy corta (min. 6 caracteres)'),
  confirmPassword: z.string().nonempty('Contraseña no puede estar vacía')
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Contraseñas no coinciden',
  path: ['confirmPassword']
})
