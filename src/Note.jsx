import { useEffect, useRef, useState } from "react";
import ChangeNoteButton from "./ChangeNoteButton";
import DelateNoteButton from "./DelateNoteButton";
import { CheckMarkIcon, DelateIcon, IconPencil } from "../icons";
import UnderNoteBtn from "./UnderNoteBtn";

export default function Note({
  title,
  id,
  bgColor,
  description,
  openFullNoteHandler,
  noteClickId,
  setNoteClickId,
  delateNoteFromArrayHandler,
  changedButtonHandler,
  noteRef,
  doneNoteId,
  underNoteCheckBtnHandler,
  translateY,
  canAnimate,
  canClick,
  noteClickedCounter,
  setNoteClickedCounter,
}) {
  let [lineTrowheihgt, setLineTrowheihgt] = useState();
  let lineThrowHeight = useRef();
  let lineThrow = useRef();
  const doneNoteIds = JSON.parse(localStorage.getItem("DoneNoteId") || "[]");
  let underNoteBtnArray = [
    {
      bgColor: "#FF8C00",
      btnIcon: <IconPencil />,
      onClick: underNoteChangeBtnHandler,
    },
    {
      bgColor: "#FF0000",
      btnIcon: <DelateIcon />,
      onClick: underNoteDelateBtnHandler,
    },
    {
      bgColor: "#808080FF",
      btnIcon: <CheckMarkIcon />,
      onClick: underNoteBtnHandler,
    },
  ];
  let classToAnimate = "transition-all duration-500";
  function underNoteBtnHandler() {
    lineThrow.current.style.left = "0px";
    lineThrow.current.style.top = `${lineTrowheihgt / 2}px`;
    setTimeout(() => {
      canClick && underNoteCheckBtnHandler(id);
    }, 500);
  }
  function underNoteDelateBtnHandler() {
    delateNoteFromArrayHandler(id);
  }
  function underNoteChangeBtnHandler() {
    changedButtonHandler(title, description);
  }
  function showNoteFunctionButton(event) {
    setLineTrowheihgt(lineThrowHeight.current.offsetHeight);
    setNoteClickedCounter((noteClickedCounter += 1));
    setNoteClickId(id);
  }

  return (
    <div
      className={`z-100  ${canAnimate ? classToAnimate : ""}   `}
      style={{ transform: `translateY(${translateY}px)` }}
      ref={(note) => (noteRef.current[id] = note)}
    >
      <div
        className=" ease-in duration-300 w-[365px]   rounded-[10px] mx-auto mt-[25px] flex justify-center items-center flex-col relative overflow-hidden"
        onClick={showNoteFunctionButton}
        style={{
          backgroundColor: bgColor,
          minHeight: id === noteClickId && noteClickedCounter % 2 ? "120px" : "110px",
        }}
      >
        <div className="w-[80%] text-center my-[20px] relative">
          <span className="text-[25px] " id={id} ref={lineThrowHeight}>
            {title}
            <div 
              ref={lineThrow}
              className="absolute w-[292px] h-[2.1px] bg-gray-600 top-center top-1/2 opacity-[100%] left-[-330px] ease-in duration-300"
              style={{
                left: doneNoteIds.includes(id) && "0px",
                top: doneNoteIds.includes(id) && `${lineTrowheihgt / 2}px`,
              }}
            ></div>
          </span>
        </div>
        {noteClickId === id && noteClickedCounter % 2 ? (
          <div className="w-[365px] mt-[10px] flex justify-between px-[30px] my-[20px]">
            <p className="text-[20px] mx-[auto] w-fit">
              {description.slice(0, 20)}
            </p>
            <button
              onClick={() => {
                openFullNoteHandler(title, description);
              }}
              className="text-black  "
            >
              see more...
            </button>
          </div>
        ) : (
          ""
        )}
      </div>

      {noteClickId === id && noteClickedCounter % 2 ? (
        <div className="flex justify-between w-[365px] min-h-[55px] mx-[auto] mt-[10px]">
          {underNoteBtnArray.map(({ bgColor, btnIcon, onClick }) => (
            <UnderNoteBtn
              onClick={onClick}
              bgColor={bgColor}
              btnIcon={btnIcon}
              title={title}
              description={description}
              id={id}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
