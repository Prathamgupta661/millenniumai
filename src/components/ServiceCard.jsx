import React from "react";

const ServiceCard = ({
  icon,
  title,
  description,
  features,
  gradientFrom = "#232046",
  gradientVia = "#18122b",
  gradientTo = "#2d234a",
  iconBgFrom = "from-cyan-500",
  iconBgTo = "to-cyan-600",
  titleGradient = "from-cyan-400 to-pink-400",
}) => (
  <div className="group relative bg-gradient-to-br rounded-xl shadow-lg p-6 border border-[#2d234a]/40 hover:shadow-2xl transition-all duration-300"
    style={{
      background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientVia} 50%, ${gradientTo} 100%)`
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${iconBgFrom} ${iconBgTo} flex items-center justify-center shadow-lg`}>
          {icon}
        </div>
        <h3 className={`text-xl font-bold font-playfair text-transparent bg-clip-text bg-gradient-to-r ${titleGradient}`}>
          {title}
        </h3>
      </div>
      <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
        {description}
      </p>
      <ul className="mt-4 space-y-2 text-gray-300">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className={`w-1.5 h-1.5 rounded-full ${f.dotColor}`}></span>
            <span>{f.text}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ServiceCard;