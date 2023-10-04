import cn from '@/utils/cn'

interface InputProps {
  label: string
  type?: string
  placeholder?: string
  required?: boolean
  className?: string
  error?: string
  register: any
}

export default function Input (
  { label, className, error, placeholder, required, type, register }: InputProps
) {
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
      <input {...register} type={type} placeholder={placeholder} className={cn('shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ', error !== undefined && 'border-red-600', className)} required={required} />
      <p className={cn('mt-2 text-sm text-red-600', error === undefined ? 'hidden' : '')}>{error}</p>
    </>
  )
}
