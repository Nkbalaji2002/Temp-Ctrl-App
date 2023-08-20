import React from 'react'

interface Props {
    name: string
    age: number
}

const MyComponent: React.FC<Props> = ({name, age}) => {
  return (
    <>
        <h2>
            Hello, {name}! You are {age} years old.
        </h2>
    </>
  )
}

export default MyComponent