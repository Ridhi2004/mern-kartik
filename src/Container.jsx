// export default function Container() {
//     return (
//         <div className="grid grid-rows-5 ">
//             <div className="text-2xl text-center">Containers</div>
//             <p className="text-xl text-center">Use containers to create headers, sections and footers</p>
//             <div className="bg-gray-700 text-white  ">Header</div>
//             <div className="p-2">
//                 <div className="text-2xl">London</div>
//                 <div>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.

//                     Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.

//                     By the way, you can add a close icon to all containers if you want the ability to hide them. Look to your right!</div>
//             </div>
//             <div>
//                 <div>Footer</div>
//                 <div>Footer information goes here</div>
//             </div>
//         </div>
//     )
// }
export default function Container() {
  return (
    <div className="p-4 sm:p-5">
      <div className="text-xl sm:text-2xl md:text-3xl text-center mb-3 sm:mb-4">Containers</div>
      <p className="text-base sm:text-lg md:text-xl text-center mb-6 sm:mb-8 md:mb-10">
        Use containers to create headers, sections and footers
      </p>
      
      <div className="bg-gray-700 text-white p-3 sm:p-4 md:p-5 text-lg sm:text-xl font-medium">
        Header
      </div>
      
      <div className="p-4 sm:p-5 md:p-6 bg-gray-100 border-l border-r border-gray-300">
        <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">London</div>
        <div className="text-sm sm:text-base md:text-lg leading-relaxed space-y-3 sm:space-y-4">
          <p>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
          <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
          <p>By the way, you can add a close icon to all containers if you want the ability to hide them. Look to your right!</p>
        </div>
      </div>
      
      <div className="bg-gray-700 text-white p-3 sm:p-4 md:p-5">
        <div className="font-bold text-lg sm:text-xl mb-2">Footer</div>
        <div className="text-sm sm:text-base">Footer information goes here</div>
      </div>
    </div>
  );
}