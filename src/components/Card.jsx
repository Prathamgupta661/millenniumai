import React from "react";

const Card = ({
  heading,
  subheading,
  p1,
  p_head,
  li1,
  li2,
  li3,
  li4,
  li5,
  p2,
}) => {
  return (
    <div className="w-ful shadow-lg hover:scale-[1.03] mx-auto group relative bg-gradient-to-br from-[#232046]/90 via-[#18122b]/90 to-[#2d234a]/90 backdrop-blur-md border border-[#2d234a]/40 rounded-xl p-6 hover:shadow-2xl transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

      <div className=" py-8 px-6 sm:px-8 flex flex-col gap-4 rounded-2xl h-full">
        <h2 className="text-xl sm:text-2xl font-bold text-cyan-600 mb-1">
          {heading}
        </h2>
        <p className="text-base text-white font-semibold">{subheading}</p>
        <p className="text-sm text-white">{p1}</p>
        <div>
          <p className="font-semibold text-white mb-1">{p_head}</p>
          <ul className="text-sm text-white list-disc pl-6 space-y-1">
            <li>{li1}</li>
            <li>{li2}</li>
            <li>{li3}</li>
            <li>{li4}</li>
            <li>{li5}</li>
          </ul>
        </div>
        <p className="text-sm text-white">{p2}</p>
      </div>
    </div>
  );
};

export default Card;
