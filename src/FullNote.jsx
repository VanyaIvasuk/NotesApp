import { IconPencil, PrevIcon } from "../icons";

export default function FullNote({
  choosedNoteTitle,
  choosedNoteDescription,
  setIsBtnForRedirectionToFullNoteClicked,
  redirectionFromFullNoteToEditor
}) {
  return (
    <div>
      <div>
        <div className="flex justify-between mx-[25px] mt-[75px] mb-[42px]">
          <button
            className="size-[50px] bg-[#3B3B3B]  dark:bg-[#26B7CD] rounded-[15px]"
            onClick={() => {
              setIsBtnForRedirectionToFullNoteClicked(
               false
              );
            }}
          >
            <div className="ml-[13px]">
              {" "}
              <PrevIcon />{" "}
            </div>
          </button>
          <button
            className="size-[50px] bg-[#3B3B3B]  dark:bg-[#26B7CD] rounded-[15px]"
            onClick={() => {
              redirectionFromFullNoteToEditor();
            }}
          >
            <div className="ml-[13px]">
              {" "}
              <IconPencil />{" "}
            </div>
          </button>
        </div>
        <div className="max-w-[360px] mx-[auto]">
          <p className="text-white dark:text-[#26B7CD] text-[35px] mb-[37px]">{choosedNoteTitle}</p>
          <p className="w-[360px] text-white dark:text-[#26B7CD] text-[23px]">
            {choosedNoteDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
