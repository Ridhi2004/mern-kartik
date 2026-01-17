import { TiThMenu } from "react-icons/ti";

export default function Header() {
  return (
    <div className="bg-black p-4 md:p-6 lg:p-8 min-h-[75px] flex flex-col justify-center">
      <div className="absolute top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-8">
        <TiThMenu size="25" color="white" className="cursor-pointer"/>
      </div>
      
      <div className="text-white text-center px-4 pt-8 md:pt-10 lg:pt-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            BEAUTIFUL RESPONSIVE WEB SITES
          </p>
          
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 sm:mb-8 md:mb-10 lg:mb-12 font-bold">
            BUILT WITH W3.CSS
          </p>
          
          <div className="flex justify-center">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 
                bg-gray-500 cursor-pointer hover:bg-white hover:text-black 
                transition-colors duration-300 font-bold inline-block w-auto
                transform hover:scale-105 transition-transform duration-300">
              LEARN W3.CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}