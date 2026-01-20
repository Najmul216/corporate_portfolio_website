import React from "react";
import { FaBullseye } from "react-icons/fa";
import { HiOutlineChartBar } from "react-icons/hi2";

const AboutProgress = () => {
  const data = [
    {
      id: 1,
      title: "Projects Completed",
      percentage: 98,
      icon: <FaBullseye className="text-white text-2xl" />,
    },
    {
      id: 2,
      title: "Customer Satisfaction",
      percentage: 95,
      icon: <HiOutlineChartBar className="text-white text-2xl" />,
    },
  ];

  return (
    <div className="text-black w-full lg:w-[80%] space-y-4 sm:space-y-5 md:space-y-4 py-4 sm:py-5 md:py-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-6 bg-gray-100 rounded-xl shadow-md p-6"
        >
          {/* Icon Section */}
          <div className="bg-green-400 p-5 rounded-md flex items-center justify-center">
            {item.icon}
          </div>
          {/* Text & Progress Section */}
          <div className="flex-1 w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 sm:mb-3 gap-1 sm:gap-0">
              <h3 className="font-semibold text-base sm:text-lg md:text-xl text-center sm:text-left">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base font-medium text-center sm:text-right">
                {item.percentage}%
              </p>
            </div>
            <div className="w-full h-2 sm:h-2.5 md:h-3 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-400 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutProgress;
