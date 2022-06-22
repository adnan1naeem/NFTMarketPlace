import React,{useState, useEffect} from 'react';
const Timer = (props) => {
  const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    useEffect(() => {

      let days, minutes, seconds, countDownDate;
      // Get today's date and time
      if(props.nftNum === 1){
      countDownDate = new Date("June 26, 2022 23:59:59").getTime();
      }
     else if(props.nftNum ===2){
        countDownDate = new Date("June 29, 2022 16:33:44").getTime();
        }
       else if(props.nftNum === 3){
          countDownDate = new Date("June 27, 2022 18:44:12").getTime();
          }
          else if(props.nftNum === 4){
            countDownDate = new Date("June 30, 2022 22:54:51").getTime();
          }
      const timer = setInterval(() => {

          const now = new Date().getTime();

          // Find the distance between now and the count down date
          const distance = countDownDate - now;
          
          // Time calculations for days, month, minutes and seconds
          days = Math.floor(distance / (1000 * 60 * 60 * 24));
          minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Updated time for timer with min, sec, hours 
          const totalSeconds     = Math.floor((countDownDate - (now))/1000);;
          const totalMinutes     = Math.floor(totalSeconds/60);
          const totalHours       = Math.floor(totalMinutes/60);
          const totalDays        = Math.floor(totalHours/24);

          const hoursRem   = totalHours - ( totalDays * 24 );

          setSec(seconds);
          setMin(minutes);
          setHour(hoursRem);
          setDay(days);

          if (distance < 0) {
              clearInterval(timer);
          }
          
      }, 1000);

      return () => {
          setSec(seconds);
          setMin(minutes);
          setHour(days * 24);
          setDay(days);
      };

  }, []);

  const data = [
      { time: day, value: 'Days' },
      { time: hour, value: 'Hrs' },
      { time: min, value: 'Min' },
      { time: sec, value: 'Sec' }
  ];
  return (

    <div>
     <div className="flex items-center justify-between text-white pt-1 pl-3 pr-3">
                    
                    {data.map((i)=>{
                      return(
                        <div>
                          <h1 className={` font-semibold`}>{i.time}</h1>
                          <h1 className={` font-semibold`}>{i.value}</h1>
                        </div>
                      )
                
                    })}
                    </div>
                    {/* <div className="flex items-center justify-between pl-3 pr-3 text-white text-sm">
                    <h1>Days</h1>
                    <h1 className="ml-2 font-semibold">Hrs</h1>
                    <h1 className="ml-2 font-semibold">Min</h1>
                    <h1 className="ml-2 font-semibold">Sec</h1> 
     </div>*/}
    </div>
    
  );
}
export default Timer;



