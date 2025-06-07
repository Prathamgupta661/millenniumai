import React from 'react'

const Card = ({ heading, subheading, p1, p_head, li1, li2, li3, li4, li5, p2 }) => {
  return (
    <div className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 rounded-2xl shadow-lg hover:scale-[1.03] transition mx-auto">
      <div className="bg-white py-8 px-6 sm:px-8 flex flex-col gap-4 rounded-2xl h-full">
        <h2 className="text-xl sm:text-2xl font-bold text-cyan-600 mb-1">{heading}</h2>
        <p className="text-base text-gray-700 font-semibold">{subheading}</p>
        <p className="text-sm text-gray-500">{p1}</p>
        <div>
          <p className="font-semibold text-gray-700 mb-1">{p_head}</p>
          <ul className="text-sm text-gray-600 list-disc pl-6 space-y-1">
            <li>{li1}</li>
            <li>{li2}</li>
            <li>{li3}</li>
            <li>{li4}</li>
            <li>{li5}</li>
          </ul>
        </div>
        <p className="text-sm text-gray-500">{p2}</p>
      </div>
    </div>
  )
}

export default Card