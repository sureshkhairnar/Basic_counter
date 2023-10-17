import React, { useState } from 'react'
import './App.css'
function App() {
  //count state maintained using useState() hook
  const [count, setCount] = useState()

  //increment count function
  const Increment = (incNum) => {
    setCount(parseInt(count) + parseInt(incNum))
  }

  //deccrement count function
  const Decrement = (decNum) => {
    if (count > 0) setCount(count - decNum)
  }

  //reset count function
  const Reset = () => {
    setCount(0)
  }

  const handleChange = (e) => {
    setCount(e.target.value)
  }
  return (
    <div className="App">
      <div>
        <p
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '24px',
          }}
        >
          Basic Counter App
        </p>
        <p>
          Count is:{' '}
          <span
            style={{
              backgroundColor: count ? 'green' : '',
              padding: '2px 5px',
              borderRadius: '5px',
              color: count ? 'white' : 'black',
            }}
          >
            {count}
          </span>
        </p>
        <input
          type="number"
          value={count}
          onChange={handleChange}
          placeholder="Enter value"
          style={{ padding: '5px' }}
        />
      </div>
      <div style={{ marginTop: '10px' }}>
        {/* inc button to increment count by 5 */}
        <button onClick={() => Increment(5)} className="btn">
          Inc ++
        </button>
        {/* dec button to decrement count by 5 */}
        <button onClick={() => Decrement(5)} className="btn">
          Dec --
        </button>
        {/* reset button set count to zero */}
        <button onClick={() => Reset()} className="btn">
          Reset
        </button>
      </div>
    </div>
  )
}

export default App
