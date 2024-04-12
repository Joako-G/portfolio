import { Snippet } from '@nextui-org/react'

export function Item ({ item }) {
  return (
    <Snippet className='m-2' variant='shadow' hideCopyButton hideSymbol color='danger'> {item} </Snippet>
  )
}
