import {useSelector} from "react-redux";

const CandleResume = () => {
  const {candles_count} = useSelector(state => state.candles)

  return (
    <div className='w-full flex flex-col items-center'>
      <h2 className='text-slate-300 font-semibold'>Candle Resume</h2 >
      <table className='table-auto w-full mt-2 bg-slate-300 rounded p-2'>
        <thead >
        <tr >
          <th >Name</th >
          <th >Age</th >
          <th >Count</th >
        </tr >
        </thead >
        <tbody >
        {
          candles_count.length > 0 &&
          candles_count.map(count => (
            <tr key={count.id}
            >
              <th >{count.name}</th >
              <td className='text-center'>{count.age}</td >
              <td className='text-center'>{count.count}</td >
            </tr >
          ))
        }
        </tbody >

      </table >
    </div >
  );
};

export default CandleResume;