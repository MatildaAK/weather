const DailyWeather = () => {
  const data = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="backdrop-blur-sm bg-blue-100/30 rounded-sm">
        <div className="flex items-center justify-start mt-6">
          <p className="font-medium uppercase">5 days forecast </p>
        </div>
        <hr className="my-1" />
        <div className="flex items-center justify-between">
          {data.map((data, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <p className="font-light text-sm">Wed</p>
                <img
                  src="http://openweathermap.org/img/wn/01d@2x.png"
                  alt="Weather icon"
                  className="w-12 my-1"
                />
                <p className="font-medium">12°</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DailyWeather;
