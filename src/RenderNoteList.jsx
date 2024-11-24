import { useEffect, useRef, useState } from "react";
import {ChewronUpDarkModeIconIcon, ChewronUpIcon } from "../icons";
import createNewNoteImage from "../images/emptyNotes.png";
import EmptyState from "./EmptyState";

export default function RenderNoteList({
  setIsSaparatorClicked,
  isSeparatorClicked,
  firstArray,
  secondArray,
  filteredNotDoneNote,
  filteredDoneNote,
  renderNote,
  themeIcon,
  showDoneTranslate,
  canAnimate
}) {
  let [isdoneNoteArrEmpty, setIsdoneNoteArrEmpty] = useState(true)
  let [ishowDoneClicked, setIshowDoneClicked] = useState(false)
  let [a, setA] = useState(false)
  let divRef = useRef()
  useEffect(() => {
    if( filteredDoneNote(secondArray).length !== 0){
      setTimeout(() => {
        setIsdoneNoteArrEmpty(false)
      }, 1)
    }else{
      setIsdoneNoteArrEmpty(true)
    }    
  }, [!!filteredDoneNote(secondArray).length])
  useEffect(() => {
    if(isSeparatorClicked){
      setIshowDoneClicked(true)
    }else if(isSeparatorClicked === false){
      setTimeout(() => {
      setIshowDoneClicked(false)
      }, 500)
    }
  }, [isSeparatorClicked])
  useEffect(() => {
    if(isSeparatorClicked){
      setTimeout(() => {
      setA(true)
      }, 10)
    }else if(isSeparatorClicked === false){
      setA(false)
    }
  }, [isSeparatorClicked])
  return (
    <div className="ease-in duration-300">
     {
     !!filteredNotDoneNote(firstArray).length ?
      renderNote(filteredNotDoneNote(firstArray))
      :
      <EmptyState
      src={createNewNoteImage}
      width={"350px"}
      height={"350px"}
      title={"Create your first note !"}
    />
    }
 <div className="">
        {!!filteredDoneNote(secondArray).length && (
            <div
            className={`my-[20px] mx-[30px] h-[30px]`}
            style={{opacity: isdoneNoteArrEmpty ? "0" : "1", transform: `translateY(${showDoneTranslate}px)`, transition: canAnimate ? "transform 0.5s ease" : ""}}
            onClick={() => {
              setIsSaparatorClicked(!isSeparatorClicked);
            }}
            ref={divRef}
          > 
          <div className="flex">
            <div className="mr-[10px]">
                <button>
                {themeIcon === "dark" ?
                <div style={{ transform: isSeparatorClicked && "rotate(-180deg)", transition: "transform 0.5s ease", }}>
                  <ChewronUpDarkModeIconIcon/>
                </div>
                : 
                <div style={{ transform: isSeparatorClicked && "rotate(-180deg)", transition: "transform 0.5s ease", }}
                >
                <ChewronUpIcon/>
                </div>
                  }
                </button>
            </div>
              <div className={` text-[white] dark:text-[#26B7CD] text-[20px] `}>Show done</div>
            </div>
          </div>
        )}
        {ishowDoneClicked && 
        <div style={{opacity: a ? "1" : "0"}} className="transition ease-in duration-300 "> 
          {renderNote(filteredDoneNote(secondArray))}
        </div>
        
        }
 </div>
    </div>
  );
}
