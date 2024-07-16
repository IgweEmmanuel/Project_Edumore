// import packages
// define our card
export const ClassCard = (data) => {
  console.log(data)
  return (
    <div>
      <div className="bg-[#f1f3f4] rounded-[16px] w-screen h-auto pb-8 ">
        <div className="grid justify-center items-center w-full h-full">
          <div className="w-full grid place-items-center gap-4 justify-center w-screens mt-20">
            <div className="text-2xl text-slate-600">
              <span>{data.title}</span>
            </div>

            <iframe
              className="w-[480px] h-[340px] md:w-[700px] md:h-[500px] lg:w-[966px] lg:h-[650px]"
              src={data.url}
              title="Habitats"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
