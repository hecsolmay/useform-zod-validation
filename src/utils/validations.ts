import { z } from 'zod'

const MAX_FILE_SIZE = 2000000
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']

export const signUpSchema = z.object({
  email: z.string().email('Por favor introduzca un email válido'),
  password: z.string().min(6, 'Contraseña muy corta (min. 6 caracteres)'),
  confirmPassword: z.string().nonempty('Contraseña no puede estar vacía'),
  files: z.custom<FileList>()
    .refine((files) => Array.from(files).every((file: any) => file instanceof File), {
      message: 'Archivo inválido'
    })
    .refine((files) => files.length > 0, {
      message: 'Se esperaba un archivo'
    })
    .refine((files) => files.length <= 4, {
      message: 'Se esperaba un maximo de 4 archivos'
    })
    .refine((files) => Array.from(files).every((file) => ACCEPTED_IMAGE_TYPES.includes(file.type)), {
      message: 'Se esperaba un archivo de imagen con el formato .jpg, .jpeg, .png o .webp'
    })
    .refine((files) => Array.from(files).every((file) => file.size <= MAX_FILE_SIZE), {
      message: 'Tamaño maximo de archivo excedido (maximo de 2MB)'
    })
})
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Contraseñas no coinciden',
    path: ['confirmPassword']
  })
