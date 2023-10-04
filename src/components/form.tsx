'use client'

import { type SignUpSchema } from '@/types/forms'
import { signUpSchema } from '@/utils/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import Input from './input'
import cn from '@/utils/cn'

export default function Form () {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema)
  })

  const onSubmit = async (data: SignUpSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    console.log(data)
    alert('Form submitted successfully')
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>

      <div className="mb-6">
        <Input
          register={register('email')}
          label="Your email"
          type="email"
          placeholder="name@flowbite.com"
          error={errors.email?.message}
        />

      </div>

      <div className="mb-6">
        <Input
          register={register('password')}
          label="Repeat password"
          type="password"
          placeholder="password"
          error={errors.password?.message}
        />
      </div>

      <div className="mb-6">
        <Input
          register={register('confirmPassword', { required: true })}
          label="Repeat password"
          type="password"
          placeholder="password"
          error={errors.confirmPassword?.message}
        />
      </div>

      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
        </div>
        <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900">I agree with the <a href="#" className="text-blue-600 hover:underline ">terms and conditions</a></label>
      </div>
      <button type="submit" disabled={isSubmitting} className={cn('text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ', isSubmitting && 'cursor-wait opacity-80')}>Register new account</button>
    </form>

  )
}
