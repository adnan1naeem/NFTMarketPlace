import React from 'react';
const Timer = () => {
  return (
    <div>
     <div className="flex items-center justify-center text-white pt-1">
                    <h1 className="font-semibold">06</h1>
                    <h1 className="ml-5 font-semibold">13</h1>
                    <h1 className="ml-5 font-semibold">50</h1>
                    <h1 className="ml-5 font-semibold">23</h1>
                    </div>
                    <div className="flex items-center justify-center text-white">
                    <h1>Days</h1>
                    <h1 className="ml-2 font-semibold">Hrs</h1>
                    <h1 className="ml-2 font-semibold">Min</h1>
                    <h1 className="ml-2 font-semibold">Sec</h1>
     </div>
    </div>
    
  );
}
export default Timer;



