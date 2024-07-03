interface TodaysWeatherProps {
  title: string;
  data: { temp: number; title: string; icon: string; data: string; }[];
}

const DailyWeather: React.FC<TodaysWeatherProps> = ({ title, data }) => {

  return (
    <>
      <div className="backdrop-blur-sm bg-green-100/30 rounded-sm m-4 pb-4">
        <div className="flex items-center justify-start mt-6 p-2">
          <p className="font-medium uppercase">{title} </p>
        </div>
        <hr className="my-1" />
        <div className="flex flex-row items-center justify-evenly md:justify-between mx-2">
          {data.map((d, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <p className="font-light text-sm">{d.title}</p>
                <img
                  src={d.icon}
                  alt="Weather icon"
                  className="w-12 my-1"
                />
                <p className="font-medium">{d.temp.toFixed()}°</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DailyWeather;
