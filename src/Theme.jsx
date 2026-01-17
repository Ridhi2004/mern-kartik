export default function Theme() {
  const themes = [
    {
      id: 1,
      name: "Theme Indigo",
      color: "indigo",
      title: "Movies 2014",
      items: [
        {
          title: "Frozen",
          description: "The response to the animations was ridiculous",
        },
        {
          title: "The Fault in Our Stars",
          description: "Touching, gripping and genuinely well made",
        },
        {
          title: "The Avengers",
          description: "A huge success for Marvel and Disney",
        },
      ]
    },
    {
      id: 2,
      name: "Theme",
      color: "black",
      title: "Movies 2014",
      items: [
        {
          title: "Frozen",
          description: "The response to the animations was ridiculous",
        },
        {
          title: "The Fault in Our Stars",
          description: "Touching, gripping and genuinely well made",
        },
        {
          title: "The Avengers",
          description: "A huge success for Marvel and Disney",
        },
      ]
    }
  ];

  return (
    <div className="px-4 sm:px-6 md:px-8 py-6 md:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            Color Themes
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            The color themes have been designed to work harmoniously with each other.
          </p>
        </div>

        {/* Themes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {themes.map((theme) => (
            <div 
              key={theme.id}
              className="rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Theme Header */}
              <div 
                className={`p-4 sm:p-5 md:p-6 text-white ${
                  theme.color === "indigo" ? "bg-indigo-500" : "bg-gray-900"
                }`}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                  {theme.name}
                </h3>
              </div>

              {/* Theme Title */}
              <div className={`p-4 sm:p-5 md:p-6 ${theme.color === "indigo" ? "text-indigo-500" : "text-gray-900"}`}>
                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold">
                  {theme.title}
                </h4>
              </div>

              {/* Theme Items */}
              <div className="divide-y divide-gray-100">
                {theme.items.map((item, index) => (
                  <div 
                    key={index}
                    className="p-4 sm:p-5 md:p-6 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h5 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                      {item.title}
                    </h5>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div 
                className={`p-4 sm:p-5 md:p-6 text-white text-right ${
                  theme.color === "indigo" ? "bg-indigo-600" : "bg-gray-900"
                }`}
              >
                <button className="text-sm sm:text-base md:text-lg font-medium hover:opacity-90 transition-opacity duration-200">
                  Next →
                </button>
              </div>
            </div>
          ))}
        </div>

        
        
      </div>
    </div>
  );
}