import { ReactNode } from 'react'

type Props = {
  children: JSX.Element | JSX.Element[] | ReactNode
}

const Container = ({ children }: Props) => {
  return <div className='page_container'>{children}</div>
}

export default Container
