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
    <div className="text-black space-y-8 py-6 md:py-10">
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
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.percentage}%</p>
            </div>
            <div className="w-full h-2.5 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-2 bg-green-400 rounded-full"
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
