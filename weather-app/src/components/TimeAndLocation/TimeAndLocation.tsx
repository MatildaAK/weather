import React from "react";

type Time = {
  formattedLocalTime: any;
  name: string;
  country: string;
};

type TimeAndLocationProps = {
  weather: Time;
}

const TimeAndLocation: React.FC<TimeAndLocationProps> = ({
  weather: { 
    formattedLocalTime, 
    name, 
    country 
  },
}) => {
  return (
    <>
      <div>
        <div className="flex justify-center text-white">{formattedLocalTime}</div>

        <div className="flex justify-center mt-6 text-white">
          <p>{`${name}, ${country}`}</p>
        </div>
      </div>
    </>
  );
};

export default TimeAndLocation;
