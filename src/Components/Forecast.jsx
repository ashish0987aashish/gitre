
const Forecast = ({title,data}) => {
 
    
  return (
    <div>
    
    <div className="flex items-center justify-center xl:justify-start mt-6">

    <p className="font-medium uppercase">{title}</p>

    </div>

      <hr className="my-1"/>

      <div className="flex items-center justify-around xl:justify-between">
    
       {data.map((d,index)=>{

        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center py-2 "
          >
            <p className="font-light text-sm ">{d.title}</p>
            <img src={d.icon} alt="weather icon" className="w-12 my-1" />
            <p className="font-medium">{`${d.temp}°`}</p>
          </div>
        );
       })}

      </div>

    </div>
  )
}

export default Forecast
