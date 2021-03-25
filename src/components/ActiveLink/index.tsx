import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement, ReactElement } from 'react'

interface ActiveLinkPropst extends LinkProps {
  children: ReactElement
  activeClassName: string
}

export function ActiveLink({ children, activeClassName, ...rest }: ActiveLinkPropst) {
  const { asPath } = useRouter()

  const className = asPath === rest.href ? activeClassName : ''


  return (
    <Link {...rest}>
      {cloneElement(children, {className})}
    </Link>
  )
}