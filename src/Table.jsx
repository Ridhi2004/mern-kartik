export default function Table() {
  return (
    <div className="p-4 sm:p-6 md:p-8">
     

     

      {/* Tables Section Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl  text-gray-800 mb-4 text-center">
        Tables
      </h2>
      
      {/* Table Description */}
      <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 text-center">
        Don't worry. W3.CSS takes care of your tables.
      </p>

      {/* Table Component */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 text-sm sm:text-base">
          <thead>
            <tr className="bg-black">
              <th className="border border-gray-300 p-3 sm:p-4 text-left font-semibold text-white">
                First Name
              </th>
              <th className="border border-gray-300 p-3 sm:p-4 text-left font-semibold text-white">
                Last Name
              </th>
              <th className="border border-gray-300 p-3 sm:p-4 text-left font-semibold text-white">
                Points
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 p-3 sm:p-4 text-gray-800">
                Jill
              </td>
              <td className="border border-gray-300 p-3 sm:p-4 text-gray-800">
                Smith
              </td>
              <td className="border border-gray-300 p-3 sm:p-4 text-gray-800">
                50
              </td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="border border-gray-300 p-3 sm:p-4 text-gray-800">
                Eve
              </td>
              <td className="border border-gray-300 p-3 sm:p-4 text-gray-800">
                Jackson
              </td>
              <td className="border border-gray-300 p-3 sm:p-4 text-gray-800">
                94
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 p-3 sm:p-4 text-gray-800">
                Adam
              </td>
              <td className="border border-gray-300 p-3 sm:p-4 text-gray-800">
                Johnson
              </td>
              <td className="border border-gray-300 p-3 sm:p-4 text-gray-800">
                67
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}