import CandleForm from "./Candle_Form";
import CandleResume from "./Candle_Resume";

const Candle = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between  p-4'>
      <CandleForm />
      <CandleResume />
    </div >
  );
};

export default Candle;