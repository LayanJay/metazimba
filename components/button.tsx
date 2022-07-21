import { ReactNode } from 'react'

type Props = {
  type?: 'primary' | 'secondary'
  children: ReactNode
}

const Button = ({ type = 'primary', children }: Props) => {
  return (
    <button
      role='button'
      className={type === 'primary' ? 'primary_button' : 'secondary_button'}
    >
      {children}
    </button>
  )
}

export default Button
