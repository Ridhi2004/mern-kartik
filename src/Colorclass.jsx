export default function Colorclass() {
  return (
    <div className="p-4 sm:p-5 md:p-6 border-0">
      <div className="text-lg sm:text-xl md:text-2xl text-black text-center mb-4 sm:mb-6 md:mb-8">
        Color Classes
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
        <div className="bg-red-600 p-3 sm:p-4 md:p-5 text-white text-sm sm:text-base md:text-lg font-medium text-center flex items-center justify-center min-h-[50px] sm:min-h-[60px] md:min-h-[70px]">
          Red
        </div>
        <div className="bg-blue-500 p-3 sm:p-4 md:p-5 text-white text-sm sm:text-base md:text-lg font-medium text-center flex items-center justify-center min-h-[50px] sm:min-h-[60px] md:min-h-[70px]">
          Blue
        </div>
        <div className="bg-gray-500 p-3 sm:p-4 md:p-5 text-white text-sm sm:text-base md:text-lg font-medium text-center flex items-center justify-center min-h-[50px] sm:min-h-[60px] md:min-h-[70px]">
          Blue Grey
        </div>
        <div className="bg-teal-400 p-3 sm:p-4 md:p-5 text-white text-sm sm:text-base md:text-lg font-medium text-center flex items-center justify-center min-h-[50px] sm:min-h-[60px] md:min-h-[70px]">
          Teal
        </div>
        <div className="bg-yellow-400 p-3 sm:p-4 md:p-5 text-white text-sm sm:text-base md:text-lg font-medium text-center flex items-center justify-center min-h-[50px] sm:min-h-[60px] md:min-h-[70px]">
          Yellow
        </div>
        <div className="bg-orange-500 p-3 sm:p-4 md:p-5 text-white text-sm sm:text-base md:text-lg font-medium text-center flex items-center justify-center min-h-[50px] sm:min-h-[60px] md:min-h-[70px]">
          Orange
        </div>
      </div>
    </div>
  );
}
