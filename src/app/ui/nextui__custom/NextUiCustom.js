import { extendVariants, Input } from '@nextui-org/react'

export const MyInput = extendVariants(Input, {
  variants: {
    color: {
      white: {
        inputWrapper: ['bg-[#fff]'],
        input: ['text-black']
      }
    }
  },
  defaultVariants: {
    color: 'white',
    size: 'lg'
  }
})
