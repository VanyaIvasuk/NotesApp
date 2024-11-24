import { useState } from "react";
import { BurgerMenuIcon } from "../icons";

export default function DropDawnMenu({setChoosedCategory, choosedCategory}) {
  let [isBurgerMenuClicked, setIsBurgerMenuClicked] = useState(false);
  let [burgerMenuClickCounter, setBurgerMenuClickCounter] = useState(0)

  function burherMenuHandler(){
    setBurgerMenuClickCounter(burgerMenuClickCounter += 1)
  }
  function choseCategoryButtonHandler(category){
    setChoosedCategory(choosedCategory = category)
    setBurgerMenuClickCounter(burgerMenuClickCounter += 1)
  }
  return (
    <div>
      <div>
        <button
          className="size-[50px] bg-[#3B3B3B]  dark:bg-[#26B7CD]  rounded-[15px] mr-[25px] flex items-center justify-between"
          onClick={() => {
          burherMenuHandler()
          }}
        >
          <div className="mx-[auto]">
            <BurgerMenuIcon />
          </div>
        </button>
      </div>
        <div  style={{
                        visibility: burgerMenuClickCounter % 2 !== 0 ? "visible" : "hidden",
                        opacity: burgerMenuClickCounter % 2 !== 0 ? 1 : 0,
                        transform: burgerMenuClickCounter % 2 !== 0 ? "translateY(0)" : "translateY(-10px)",
                        transition: "opacity 0.3s ease, transform 0.3s ease"
  }}
             className="absolute right-[25px] top-[110px] z-[100]  bg-[#3B3B3B]  dark:bg-[#26B7CD]  w-[150px] h-[148px] py-2 text-[17px] gap-[10px] grid gap-[2px] rounded-[15px] ">
          <div onClick={() => {choseCategoryButtonHandler("")}} className=" text-white w-[140px] h-[30px] mx-[auto] rounded-[9px]  hover:bg-white hover:text-black pl-[7px]">
            <button>all categories</button>
          </div>
          <div onClick={() => {choseCategoryButtonHandler("immediate")}} className=" text-[#FF9E9E] w-[140px] h-[30px] mx-[auto] rounded-[9px]  hover:bg-[#FF9E9E] hover:text-white pl-[7px]">
            <button>immediate</button>
          </div>
          <div onClick={() => {choseCategoryButtonHandler("needed")}} className=" text-[#FFF599] w-[140px] h-[30px] mx-[auto] rounded-[9px]  hover:bg-[#FFF599] hover:text-white pl-[7px]">
            <button>needed</button>
          </div>
          <div  onClick={() => {choseCategoryButtonHandler("inplans")}}  className="text-[#91F48F] w-[140px] h-[30px] mx-[auto] rounded-[9px]  hover:bg-[#91F48F] hover:text-white pl-[7px]">
            <button>in palns</button>
          </div>
        </div>
    </div>
  );
}
