import { CancelIcon, PrevIcon } from "../icons";
import { useState } from "react";
import NoteList from "./NoteList";
import NotFoundNote from "./NotFoundNote";

export default function SearchingNote({
  setIsBtnForSearchNoteClicked,
  arrayOfNotes,
  choosedCategory,
  changedButtonHandler,
  redirectionFromFullNoteToEditor,
  delateNoteFromArrayHandler,
  noteClickId,
  setNoteClickId,
  openFullNoteHandler,
}) {
  let [fieldForSearchValue, setFieldForSearchValue] = useState();
  function onChangeFieldValue(event) {
    setFieldForSearchValue(event.target.value);
  }
  const filteredNotesArray = arrayOfNotes.filter((note) =>
    note.title.includes(fieldForSearchValue)
  );
  return (
    <div>
      <div className="w-full">
        <button
          className="size-[50px] bg-[#3B3B3B]  dark:bg-[#26B7CD] rounded-[15px] flex items-center justify-center mt-[30px] ml-[30px]"
          onClick={() => {
            setIsBtnForSearchNoteClicked(false);
          }}
        >
          <div>
            <PrevIcon />
          </div>
        </button>
        <div className="w-[360px] mx-[auto] h-[50px] rounded-full bg-[#3B3B3B]  dark:bg-[#26B7CD] flex items-center justify-center mt-[28px]">
          <label>
            {" "}
            <input
              value={fieldForSearchValue}
              onChange={onChangeFieldValue}
              placeholder="Search by the keyword..."
              className="bg-[#3B3B3B]  dark:bg-[#26B7CD] w-[215px] h-[27px] text-[20px] text-white font-400 outline-0"
            />
          </label>
          <button className="size-[24px] ml-[63px]">
            <CancelIcon />
          </button>
        </div>
      </div>
      <div>
        {fieldForSearchValue === "" || !filteredNotesArray.length ? (
          <NotFoundNote />
        ) : (
          <NoteList
            notes={filteredNotesArray}
            choosedCategory={choosedCategory}
            changedButtonHandler={changedButtonHandler}
            redirectionFromFullNoteToEditor={redirectionFromFullNoteToEditor}
            delateNoteFromArrayHandler={delateNoteFromArrayHandler}
            noteClickId={noteClickId}
            setNoteClickId={setNoteClickId}
            openFullNoteHandler={openFullNoteHandler}
          />
        )}
      </div>
    </div>
  );
}
