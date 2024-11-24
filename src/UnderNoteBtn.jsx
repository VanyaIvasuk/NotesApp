export default function UnderNoteBtn({bgColor, btnIcon, onClick}) {
    return(
        <div 
            className="w-[116px] h-[55px] rounded-[10px] flex tems-center justify-center"
            style={{backgroundColor: bgColor}}
            onClick={onClick}
        >
        <div className="size-[27px] my-auto">
            {btnIcon}
        </div>
    </div>
    )
};
