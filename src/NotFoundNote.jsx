import notFoundImage from "../images/searchEmpty.png"
export default function NotFoundNote() {
    return(
        <div className="w-[370px] mx-[auto] mt-[190px]">
        <img src={notFoundImage}/>
        <p className="text-[20px] text-white dark:text-[#26B7CD] text-center">
          File not found. Try searching again.
        </p>
      </div>
    )
  }
