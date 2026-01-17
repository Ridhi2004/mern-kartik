
export default function Shadows() {
  return (
    <div>
      <div className="text-2xl text-center mb-3">Paper-like Cards with Shadows</div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pl-0 sm:pl-5">
        <div className="shadow-gray-500">
          <img src="https://www.w3schools.com/w3images/car.jpg" alt="" className="w-full" />
          <p className="p-2">w3-card</p>
        </div>
        <div>
          <img src="https://www.w3schools.com/w3images/car.jpg" alt="" className="w-full" />
          <p className="p-2">w3-card-4</p>
        </div>
        <div>
          <img src="https://www.w3schools.com/w3images/car.jpg" alt="" className="w-full" />
          <p className="p-2">w3-card-4</p>
        </div>
      </div>
    </div>

   


  )
}