import { DiApple } from "react-icons/di";
import { FaCss3 } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";

const res = [
  {
    id: 1,
    label: "Responsive",
    icon: <DiApple className="mx-auto my-2 text-6xl md:text-7xl lg:text-8xl" />,
    properties: [
      "Built-in responsiveness",
      "Mobile first fluid grid",
      "Fits any screen sizes",
      "PC Tablet and Mobile"
    ]
  },
  {
    id: 2,
    label: "Standard CSS",
    icon: <FaCss3 className="mx-auto my-2 text-6xl md:text-7xl lg:text-8xl" />,
    properties: [
      "Standard CSS only",
      "Easy to learn",
      "No need for jQuery",
      "No JavaScript library"
    ]
  },
  {
    id: 3,
    label: "Design",
    icon: <IoDiamondOutline className="mx-auto my-2 text-6xl md:text-7xl lg:text-8xl" />,
    properties: [
      "Paper like design",
      "Bold colors and shadows",
      "Equal across platforms",
      "Equal across devices"
    ]
  }
];

export default function Hero() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8">
        {res.map((item) => (
          <div
            key={item.id}
            className="text-center p-4 md:p-6 bg-white rounded-lg shadow-lg md:shadow-xl hover:shadow-xl transition-shadow duration-300"
          >
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
              {item.label}
            </h1>
            {item.icon}
            <div className="mt-3 md:mt-4 space-y-2 md:space-y-3">
              {item.properties.map((property, index) => (
                <p 
                  key={`${item.id}-${index}`} 
                  className="text-base md:text-lg lg:text-xl"
                >
                  {property}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
