import React from 'react'

const Ref = () => {
    const inputRef = React.useRef(null);

    const hanldeClick = () => {
        inputRef.current.focus()
    }
  return (
    <>
        <input type="text" ref={inputRef} />
        <button onClick={hanldeClick}>Submit</button>
    </>
  )
}

export default Ref