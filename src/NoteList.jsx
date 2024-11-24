import { useEffect, useRef, useState } from "react";
import Note from "./Note";
import RenderNoteList from "./RenderNoteList";
import { json } from "react-router-dom";

export default function NoteList({
  notes,
  openFullNoteHandler,
  noteClickId,
  setNoteClickId,
  delateNoteFromArrayHandler,
  changedButtonHandler,
  choosedCategory,
  themeIcon,
  setNotes,
}) {
  let noteRef = useRef([]);
  let ulRef = useRef();
  // let [doneNoteId, setDoneNoteId] = useState([]);
  let [isSeparatorClicked, setIsSaparatorClicked] = useState(true);
  let [canAnimate, setCanAnimate] = useState(true);
  let [canClick, setCanClick] = useState(true);
  let [noteClickedCounter, setNoteClickedCounter] = useState(0);
  let [showDoneTranslate, setShowDoneTranslate] = useState(0);
  let [doneNoteCounter, setDoneNoteCounter] = useState(0);
  const doneNoteIds = JSON.parse(localStorage.getItem("DoneNoteId"));
  console.log("appDoneNoteId",  doneNoteIds)
  const filteredDoneNote = (notes) =>
    notes.filter(function (note) {
      if (doneNoteIds.includes(note.id)) return note;
    });
  const filteredNotDoneNote = (notes) =>
    notes.filter(function (note) {
      if (!doneNoteIds.includes(note.id)) return note;
    });
  const filteredImmediateCategoryNotesArray = notes.filter(
    (note) => note.bgColor === "#FF9E9E"
  );
  const filteredNeededCategoryNotesArray = notes.filter(
    (note) => note.bgColor === "#FFF599"
  );
  const filteredInPlansCategoryNotesArray = notes.filter(
    (note) => note.bgColor === "#91F48F"
  );
  console.log("filteredDoneNote", filteredDoneNote(notes))
  let doneNoteIndex;
  let noteHeight = 110;
  let noteGap = 25;
  let notesLength = notes.length - 1;


  function underNoteCheckBtnHandler(id) {
    // console.log("startId", doneNoteId)
    setNoteClickedCounter((noteClickedCounter += 1));
    doneNoteIndex = notes.findIndex((note) => note.id === id);

    let updatedNotes
    updatedNotes = notes.map((note) => 
      note.id === id ? { ...note, isDone:  true}  :  note
    );
    updatedNotes = updatedNotes.map((note, i) => {
        if (i === doneNoteIndex) {
          return {
            ...note,
            translateY:
              (noteHeight + noteGap) * (notesLength - doneNoteIndex) + 45,
          };
        } else if (i > doneNoteIndex ) {
          return { ...note, translateY: -(noteHeight + noteGap) };
        }
        return { ...note, translateY: note.translateY};
      })
    setNotes(updatedNotes);
    setCanClick(false);
    setDoneNoteCounter((doneNoteCounter += 1));
    doneNoteCounter > 1 && setShowDoneTranslate(-(noteHeight + noteGap));
    setTimeout(() => {
      let updatedNotes = notes.filter((note) => note.id !== id);
      let doneNote = notes.find((note) => note.id === id);
      doneNote.isDone = true;
      setCanAnimate(false);
      setShowDoneTranslate((showDoneTranslate = 0));
      setNotes([...updatedNotes, doneNote]);
      localStorage.setItem(
        "arrayOfNotes",
        JSON.stringify([...updatedNotes, doneNote])
      );
      // setDoneNoteId((prev) => [...prev, id])

      localStorage.setItem("DoneNoteId", JSON.stringify([...doneNoteIds, id]));
      setCanClick(true);
    }, 500);

    setCanAnimate(true);
  }

  const renderNote = (notes) =>
    notes.map(
      ({ title, bgColor, description, id, isDone, translateY }) => (
        <Note
          
          noteClickedCounter={noteClickedCounter}
          setNoteClickedCounter={setNoteClickedCounter}
          underNoteCheckBtnHandler={underNoteCheckBtnHandler}
          // doneNoteId={doneNoteId}
          noteRef={noteRef}
          changedButtonHandler={changedButtonHandler}
          delateNoteFromArrayHandler={delateNoteFromArrayHandler}
          noteClickId={noteClickId}
          setNoteClickId={setNoteClickId}
          openFullNoteHandler={openFullNoteHandler}
          title={title}
          description={description}
          bgColor={bgColor}
          key={id}
          id={id}
          isDone={isDone}
          translateY={translateY}
          canAnimate={canAnimate}
          canClick={canClick}
        />
      )
    );
  return (
    <ul ref={ulRef} className="relative">
      {choosedCategory === "" ? (
        <>
          <RenderNoteList
            canAnimate={canAnimate}
            showDoneTranslate={showDoneTranslate}
            themeIcon={themeIcon}
            renderNote={renderNote}
            setIsSaparatorClicked={setIsSaparatorClicked}
            isSeparatorClicked={isSeparatorClicked}
            filteredNotDoneNote={filteredNotDoneNote}
            filteredDoneNote={filteredDoneNote}
            firstArray={notes}
            secondArray={notes}
          />
        </>
      ) : choosedCategory === "immediate" ? (
        <>
          <RenderNoteList
            canAnimate={canAnimate}
            showDoneTranslate={showDoneTranslate}
            themeIcon={themeIcon}
            renderNote={renderNote}
            setIsSaparatorClicked={setIsSaparatorClicked}
            isSeparatorClicked={isSeparatorClicked}
            filteredNotDoneNote={filteredNotDoneNote}
            filteredDoneNote={filteredDoneNote}
            firstArray={filteredImmediateCategoryNotesArray}
            secondArray={filteredImmediateCategoryNotesArray}
          />
        </>
      ) : choosedCategory === "needed" ? (
        <>
          <RenderNoteList
            canAnimate={canAnimate}
            showDoneTranslate={showDoneTranslate}
            themeIcon={themeIcon}
            renderNote={renderNote}
            setIsSaparatorClicked={setIsSaparatorClicked}
            isSeparatorClicked={isSeparatorClicked}
            filteredNotDoneNote={filteredNotDoneNote}
            filteredDoneNote={filteredDoneNote}
            firstArray={filteredNeededCategoryNotesArray}
            secondArray={filteredNeededCategoryNotesArray}
          />
        </>
      ) : (
        choosedCategory === "inplans" && (
          <>
            <RenderNoteList
              canAnimate={canAnimate}
              showDoneTranslate={showDoneTranslate}
              themeIcon={themeIcon}
              renderNote={renderNote}
              setIsSaparatorClicked={setIsSaparatorClicked}
              isSeparatorClicked={isSeparatorClicked}
              filteredNotDoneNote={filteredNotDoneNote}
              filteredDoneNote={filteredDoneNote}
              firstArray={filteredInPlansCategoryNotesArray}
              secondArray={filteredInPlansCategoryNotesArray}
            />
          </>
        )
      )}
    </ul>
  );
}
