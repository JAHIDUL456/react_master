import React from 'react'

const App = () => {
  const marks=90;
  return (
    <div>
{
  marks>90 
  ?<h1>good bro</h1>
  :<h1>bad bro</h1>
}
    </div>
  )
}

export default App