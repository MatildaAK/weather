import { BiSolidDropletHalf } from "react-icons/bi";
import { FaThermometerEmpty } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

type Weather = {
  details: string;
  icon: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  sunrise: number;
  sunset: number;
  speed: number;
  humidity: number;
  feels_like: number;
};

type TempAndDetailsProps = {
  weather: Weather;
  units: string;
};

const TempAndDetails: React.FC<TempAndDetailsProps> = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
  },
  units,
}) => {
  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Feels like",
      value: `${feels_like.toFixed()}°`,
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: `${humidity.toFixed()}%`,
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: `${speed.toFixed()} ${ units === 'metric' ? 'km/h' : 'm/s'}`,
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
    <>
      <div className="md:mx-10 backdrop-blur-sm bg-blue-100/30 rounded-sm m-4">
        <div className="flex items-center justify-center py-4 text-xl">
          <p>{details}</p>
        </div>

        <div className="flex flex-row items-center justify-evenly md:justify-between py-3">
          <img src={icon} alt="weather icon" className="w-20" />
          <p className="text-5xl">{`${temp.toFixed()}°`}</p>

          <div className="flex flex-col space-y-3 items-start">
            {verticalDetails.map(({ id, Icon, title, value }) => {
              return (
                <div
                  key={id}
                  className="flex font-light text-sm items-center justify-center"
                >
                  <Icon size={18} className="mr-1" />
                  {`${title}: `}{" "}
                  <span className="font-medium ml-1">{value}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-row items-center justify-center space-x-10 text-sm p-3">
          <div className="flex flex-row items-center">
            {horizontalDetails.map(({ id, Icon, title, value }) => {
              return (
                <div
                  key={id}
                  className="flex font-light text-sm items-center justify-center "
                >
                  <Icon size={30} />
                  <p className="font-thin md:font-light ml-1">
                    {`${title}: `}{" "}
                    <span className="font-light md:font-medium ml-1">{value}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TempAndDetails;
