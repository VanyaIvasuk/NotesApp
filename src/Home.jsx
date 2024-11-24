import { SearchIcon, SunIcon, MoonIcon } from "../icons";
import NoteList from "./NoteList";
import InfoPopup from "./InfoPopup";
import AddNewNoteBtn from "./AddNewNoteBtn";
import DropDawnMenu from "./DropdawnMenu";
import { useEffect, useState } from "react";

export default function HomeScreenEmpty({
  isEditorOpened,
  setIsEditorOpened,
  arrayOfNotes,
  openFullNoteHandler,
  noteClickId,
  setNoteClickId,
  delateNoteFromArrayHandler,
  changedButtonHandler,
  setChoosedCategory,
  choosedCategory,
  setIsBtnForSearchNoteClicked,
  setArrayOfNotes
}) {
  const [themeIcon, setThemeIcon] = useState(localStorage.theme);

  const onSwitchTheme = () => {
    if (!localStorage.theme) {
      localStorage.theme = "dark";
    }
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      document.documentElement.classList.add("dark");
      document.getElementById("body").style.backgroundColor = "#252525"
      setThemeIcon("light");
    } else if (localStorage.theme === "light") {
      localStorage.theme = "dark";
      document.documentElement.classList.remove("dark");
       document.getElementById("body").style.backgroundColor = "#EDECE7"
      setThemeIcon("dark");
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeIcon]);
  return (
    <div>
      {" "}
      <div className="flex justify-between">
        {" "}
        <div className="mt-[47px]">
          <p className="text-[43px] font-[400] text-white dark:text-[#26B7CD] ml-[24px]">Notes</p>
        </div>
        <div className="mt-[51px] flex">
          <button
           onClick={() => {setIsBtnForSearchNoteClicked(true)}}
            type="primary"
            className="size-[50px]  bg-[#3B3B3B]  dark:bg-[#26B7CD]  rounded-[15px] mr-[21px]"
          >
            <div className="mx-[13px]">
              <SearchIcon />
            </div>
          </button>
          <button
           onClick={onSwitchTheme}
            type="primary"
            className="size-[50px] bg-[#3B3B3B]  dark:bg-[#26B7CD] rounded-[15px] mr-[21px]"
          >
            <div className="mx-[13px]">
              {themeIcon === "dark" ? <SunIcon/> : <MoonIcon/>}
            </div>
          </button>
             <div> 
              <DropDawnMenu setChoosedCategory={setChoosedCategory} choosedCategory={choosedCategory}/>
             </div>
        </div>
      </div>
        <NoteList
          setNotes={setArrayOfNotes}
          themeIcon={themeIcon}
          choosedCategory={choosedCategory}
          changedButtonHandler={changedButtonHandler}
          delateNoteFromArrayHandler={delateNoteFromArrayHandler}
          noteClickId={noteClickId}
          setNoteClickId={setNoteClickId}
          notes={arrayOfNotes}
          openFullNoteHandler={openFullNoteHandler}
        />
      <AddNewNoteBtn
        isEditorOpened={isEditorOpened}
        setIsEditorOpened={setIsEditorOpened}
      />
      <InfoPopup />
    </div>
  );
}
