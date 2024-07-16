// import packages
// define our card
export const Card = (data) => {
  console.log(data)
  return (
    <div>
      <div className="bg-[#f1f3f4] rounded-[16px] w-[200px] h-[180px] ">
        <div
          className="grid justify-center items-center w-full h-full p-8"
          key={data.id}
        >
          <div className="w-full flex justify-center">
            <img className="w-20 h-24" src={data.image} alt="" />
          </div>
          <div>
            <p>{data.title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
