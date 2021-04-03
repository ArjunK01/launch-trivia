import React,{useState} from 'react'

const UserInput = ({setAmountQ}) => {
    const [numQ, setNumQ] = useState(null)

    return (
        <div>
            <form>
                <label>Number of Questions: </label>
                <input type="number" value={numQ} onChange={e => setNumQ(e.target.value)}/>
                <button onClick={() => (numQ && numQ > 0) ? setAmountQ(numQ): null}>Submit</button>
            </form>
        </div>
    )
}

export default UserInput
