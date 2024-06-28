import React from "react";

type Time = {
  formattedLocalTime: any;
  name: string;
  country: string;
};

type TimeAndLocationProps = {
  weather: Time;
};

const TimeAndLocation: React.FC<TimeAndLocationProps> = ({
  weather: { formattedLocalTime, name, country },
}) => {
  return (
    <>
      <div>
        <div className="flex items-center my-6 justify-center">
          {formattedLocalTime}
        </div>

        <div className="flex justify-center items-center mt-6">
          <p className="text-3xl font-medium">{`${name}, ${country}`}</p>
        </div>
      </div>
    </>
  );
};

export default TimeAndLocation;
