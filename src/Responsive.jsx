export default function Responsive() {
  return (
    <div className="p-4 sm:p-5 md:p-6 border-0 text-center my-2 sm:my-3 md:my-4 gap-4 sm:gap-5">
      <div className="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 md:mb-5">Built-In Responsiveness</div>
      <p className="text-base sm:text-lg mb-4 sm:mb-5">Resize the page to see the effects !</p>
      
      {/* Half Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-300 leading-relaxed text-sm sm:text-base md:text-[18px]">
        <div className="bg-blue-400 p-3 sm:p-4 text-white text-left">
          <p className="font-medium mb-2">w3-half</p>
          <p className="mb-2">The w3-half class uses half (50%) of the screen window.</p>
          <p>On small screens (max 600 pixels) it automatically resizes to full screen width.</p>
        </div>
        <div className="p-3 sm:p-4 text-left">
          <p className="font-medium">w3-half</p>
        </div>
      </div>

      {/* Third Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 sm:mt-5 mb-4 sm:mb-5 border border-gray-300 text-left text-sm sm:text-base md:text-[18px]">
        <div className="bg-green-500 text-white leading-relaxed p-3 sm:p-4 md:p-5">
          <p className="font-medium mb-2">w3-third</p>
          <p className="mb-2">The w3-third class uses one third (33.33%) of the screen widow.</p>
          <p>On small screens (max 600 pixels) it automatically resizes to full screen width.</p>
        </div>
        <div className="p-3 sm:p-4 md:p-5">
          <p className="font-medium">w3-third</p>
        </div>
        <div className="p-3 sm:p-4 md:p-5 sm:col-span-2 lg:col-span-1">
          <p className="font-medium">w3-third</p>
        </div>
      </div>

      {/* Quarter Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-300 text-left text-sm sm:text-base md:text-[18px]">
        <div className="bg-red-600 text-white leading-relaxed p-3 sm:p-4 md:p-5">
          <p className="font-medium mb-2">w3-quarter</p>
          <p className="mb-2">The w3-quarter class uses one quarter (25%) of the screen window.</p>
          <p>On small screens (max 600 pixels) it automatically resizes to full screen width.</p>
        </div>
        <div className="p-3 sm:p-4 md:p-5">
          <p className="font-medium">w3-quarter</p>
        </div>
        <div className="p-3 sm:p-4 md:p-5">
          <p className="font-medium">w3-quarter</p>
        </div>
        <div className="p-3 sm:p-4 md:p-5">
          <p className="font-medium">w3-quarter</p>
        </div>
      </div>
    </div>
  );
}