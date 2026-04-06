import React, { useContext } from 'react'
import { UserContext } from '../App'

const ThirdChild = () => {
  const user = useContext(UserContext);
  return (
    <div>
      data: {user.name}
    </div>
  )
}

export default ThirdChild
