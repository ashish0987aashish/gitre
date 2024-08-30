import { FaThermometerEmpty } from "react-icons/fa"
import { BiSolidDropletHalf } from "react-icons/bi"
import { FiWind } from "react-icons/fi"
import { GiSunrise,GiSunset } from "react-icons/gi"
import { MdKeyboardArrowUp,MdKeyboardArrowDown } from "react-icons/md"


const TempAndDetails = ({weather:{

  details,icon,temp,temp_min,temp_max,sunrise,sunset,speed,humidity,feels_like

},units}) => {
  
    const veticalDetails = [
      {
        Id: 1,
        Icon: FaThermometerEmpty,
        title: "Real Feel",
        value: `${feels_like.toFixed()}°`,
      },
      {
        Id: 2,
        Icon: BiSolidDropletHalf,
        title: "Humidity",
        value: `${humidity.toFixed()}%`,
      },
      {
        Id: 3,
        Icon: FiWind,
        title: "wind ",
        value: `${speed.toFixed()} ${ units ==='metric'?"m/h":"km/h"}`,
      },
    ];
  
    const horizontalDetails = [
      {
        id: 1,
        Icon: GiSunrise,
        title: "Sunrise",
        value: sunrise,
      },
      {
        id: 2,
        Icon: GiSunset,
        title: "Sunset",
        value: sunset,
      },
      {
        id: 3,
        Icon: MdKeyboardArrowUp,
        title: "High",
        value: `${temp_max.toFixed()}°`,
      },
      {
        id: 4,
        Icon: MdKeyboardArrowDown,
        title: "Low",
        value: `${temp_min.toFixed()}°`,
      },
    ];
     

  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>

      <div className="flex flex-col md:flex-row items-center lg:justify-between py-3">
        <img
          src={icon}
          alt="weather icon"
          className="w-20"
        />

        <p className="text-5xl">{`${temp.toFixed()}°`}</p>

        <div className="flex flex-col space-y-3 items-start">
          {veticalDetails.map((data) => {
            return (
              <div
                key={data.Id}
                className="flex font-light items-center justify-center"
              >
                <data.Icon size={18} className="mr-1" />
                {data.title}{" "}
                <span className="font-medium ml-1">{data.value}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="md:flex flex-row hidden items-center justify-center md:space-x-10 md:text-sm py-3">
        {horizontalDetails.map(({ id, Icon, title, value }) => {
          return (
            <div key={id} className="flex flex-row items-center">
              <Icon size={30} />
              <p className="font-light ml-1">
                {title}
                <span className="font-medium ml-1">{value}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TempAndDetails
