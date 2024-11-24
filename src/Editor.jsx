import { useEffect, useRef, useState } from "react";
import { PrevIcon, SeeIcon, DownloadIcon, InfoIcon } from "../icons";
export default function Editor({
  isEditorOpened,
  setIsEditorOpened,
  updateNotes,
  choosedNoteTitle,
  setChoosedNoteTitle,
  choosedNoteDescription,
  setChoosedNoteDescription,
  isBtnForRedirectionToEditorClicked,
  changeChoosedNoteHandler,
  isNoteInfoFill,
  setIsNoteInfoFill,
}) {
  let [noteDescription, setNoteDescription] = useState("");
  let [noteTitle, setNoteTitle] = useState("");
  let [noteCategory, setNoteCategory] = useState(1);
  let [noteBgColor, setNoteBgColor] = useState("");
  let titleFieldRef = useRef()
  let descriptionFieldRef = useRef()

  function onSaveNoteHandler() {
    let newNote = {
      title: noteTitle,
      description: noteDescription,
      id: new Date().getTime(),
      bgColor: noteBgColor,
      translateY:0,
      isDone: false
    };
    updateNotes(newNote);
  }

  function onChangeTitleHandler(event) {
    setNoteTitle(event.target.value);
  }

  function onChangeChoosedNoteTitleHandler(event) {
    setChoosedNoteTitle(event.target.value);
  }

  function onChangeDescriptionHandler(event) {
    setNoteDescription(event.target.value);
  }
  
  function onChangeChoosedNoteDescriptionHandler(event) {
    setChoosedNoteDescription(event.target.value);
  }

  useEffect(() => {
    if (noteCategory === 1) {
      setNoteBgColor("#FF9E9E");
    } else if (noteCategory === 2) {
      setNoteBgColor("#FFF599");
    } else if (noteCategory === 3) {
      setNoteBgColor("#91F48F");
    }
  }, [noteCategory]);

  function saveNoteBtnHandler(){
    if(!!titleFieldRef.current.value.length === false || !!descriptionFieldRef.current.value.length === false){
      setIsNoteInfoFill(true)

    } else{
      isBtnForRedirectionToEditorClicked
        ? changeChoosedNoteHandler()
        : onSaveNoteHandler()
    }
  }
  
  return (
    <div className="w-[425px]">
      <div className="flex justify-between mx-[23px] mt-[53px]">
        <div>
          <button
            className="size-[50px] bg-[#3B3B3B]  dark:bg-[#26B7CD] rounded-[15px] flex items-center jistify-center"
            onClick={() => {
              setIsEditorOpened(!isEditorOpened);
            }}
          >
            <div className="ml-[13px]">
              {" "}
              <PrevIcon />{" "}
            </div>
          </button>
        </div>
        <div>
          <button className="size-[50px] bg-[#3B3B3B]  dark:bg-[#26B7CD] rounded-[15px] mr-[23px]">
            <div className="ml-[13px]">
              {" "}
              <SeeIcon />
            </div>
          </button>
          <button
            className="size-[50px] bg-[#3B3B3B]  dark:bg-[#26B7CD] rounded-[15px]"
            onClick={
              () =>{
                saveNoteBtnHandler()
              }
            }
          >
            <div className="ml-[13px]">
              {" "}
              <DownloadIcon />
            </div>
          </button>
        </div>
      </div>
      <div className="mx-[24px] mt-[40px]">
        <input
          placeholder="Title"
          className="text-[#9A9A9A] text-[48px] mb-[35px] outline-0  bg-[#252525] dark:bg-[#EDECE7]"
          value={
            isBtnForRedirectionToEditorClicked ? choosedNoteTitle : noteTitle
          }
          ref={titleFieldRef}
          onChange={
            isBtnForRedirectionToEditorClicked
              ? onChangeChoosedNoteTitleHandler
              : onChangeTitleHandler
          }
        />
        <input
          placeholder="Type description..."
          className="text-[#9A9A9A] text-[23px]  outline-0 bg-[#252525] dark:bg-[#EDECE7]"
          value={
            isBtnForRedirectionToEditorClicked
              ? choosedNoteDescription
              : noteDescription
          }
          ref={descriptionFieldRef}
          onChange={
            isBtnForRedirectionToEditorClicked
              ? onChangeChoosedNoteDescriptionHandler
              : onChangeDescriptionHandler
          }
        />
      </div>
      {
        isBtnForRedirectionToEditorClicked === false &&
      <div className="mx-[24px] mt-[35px]">
        <p className="text-[#9A9A9A] text-[30px]  outline-0  bg-[#252525] dark:bg-[#EDECE7]">
          Choose category
        </p>
        <div className="flex justify-between mt-[20px]">
          <button
            className="h-[50px] w-[100px] bg-[#FF9E9E]  rounded-[15px] text-[000000] text-center font-[600] hover:border hover:border-2 hover:border-white"
            onClick={() => {
              setNoteCategory((noteCategory = 1));
            }}
          >
            immediate
          </button>
          <button
            className="h-[50px] w-[100px] bg-[#FFF599] rounded-[15px] text-[000000] text-center font-[600] hover:border hover:border-2 hover:border-white"
            onClick={() => {
              setNoteCategory((noteCategory = 2));
            }}
          >
            needed
          </button>
          <button
            className="h-[50px] w-[100px] bg-[#91F48F] rounded-[15px] text-[000000] text-center font-[600] hover:border hover:border-2 hover:border-white"
            onClick={() => {
              setNoteCategory((noteCategory = 3));
            }}
          >
            in plans
          </button>
        </div>
      </div>
}
      <div className="absolute top-[330px] left-[42px] hidden">
        {" "}
        <div className="w-[330px] h-[236px] bg-[#252525] border border-2 border-white rounded-[20px]">
          <div className="flex items-center justify-center mt-[41px]">
            <InfoIcon />
          </div>
          <p className="text-white text-[23px] flex items-center justify-center mt-[20px]">
            Save changes ?
          </p>
          <div className="flex justify-between mx-[33px] mt-[24px]">
            <button className="text-[18px] text-[white] w-[112px] h-[39px] bg-[#FF0000] rounded-[5px]">
              Discard
            </button>
            <button className="text-[18px] text-[white] w-[112px] h-[39px] bg-[#30BE71] rounded-[5px]">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
