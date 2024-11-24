import { CrossIcon } from "../icons";

export default function AddNewNoteBtn({setIsEditorOpened, isEditorOpened}) {
    return(
        <div className="fixed bottom-[50px] right-[35px]">
        <button
          className=" size-[70px] bg-[#252525]  dark:bg-[#26B7CD] shadow-[0_0px_20px_5px_rgba(0,0,0,0.3)] rounded-full"
          onClick={() => {
            setIsEditorOpened(!isEditorOpened);
          }}
        >
          <div className="mx-[11px]">
            <CrossIcon/>
          </div>
        </button>
      </div>
    )
};
