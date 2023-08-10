import {useState} from "react";
import {useDispatch} from "react-redux";
import {addCount} from "../../../features/candles.js";
import {nanoid} from "nanoid";

const CandleForm = () => {
  const dispatch = useDispatch()

  const [age, setAge] = useState(0)
  const [name, setName] = useState('')
  const [countResult, setCountResult] = useState(0)
  const handleSubmit = (e) => {
    e.preventDefault()

    if (age > 0) {
      let result = 0
      for (let i = 0; i < age; i++) {
        result += i
      }
      setCountResult(result)
      const saveRecord = {id: nanoid(6), name, age, count: result}
      dispatch(addCount(saveRecord))
    }
  };
  return (
    <div className='flex flex-col w-full h-[300px] p-8 justify-around items-center '>
      <form onSubmit={handleSubmit}
            className='flex flex-col items-center gap-4'
      >
        <div className='flex gap-2 flex-wrap'>
          <label htmlFor="name">
            Enter your name :
          </label >
          <input
            onChange={e => {
              setName(e.target.value)
              setCountResult(0)
            }}
            value={name}
            type="text"
            name="name"
            id="name"
          />
        </div >
        <div className='flex gap-2 flex-wrap'>
          <label htmlFor="age">
            Enter your age :
          </label >
          <input
            onChange={e => {
              setAge(Number(e.target.value))
              setCountResult(0)
            }}
            value={age}
            type="number"
            name="age"
            id="age"
          />
        </div >
        <button className='bg-green-600 hover:bg-green-700 text-slate-200 px-4 py-2 rounded '>Calculate</button >
      </form >
      {
        countResult > 0 && (
          <div className='bg-slate-400 w-full h-[80px] flex flex-col justify-center items-center rounded shadow '>
            <h3 >Bonjour <strong >{name}</strong > tu as {age} ans</h3 >
            <p >En {age} ans, tu as soufflé <strong >{countResult} {countResult > 1 ? 'bougies' : 'bougie'}</strong >
            </p >
          </div >
        )
      }
    </div >
  );
};

export default CandleForm;