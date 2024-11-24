export default function EmptyState({src, width, height, title}) {
    return(
        <div className="mx-auto w-fit mt-[177px] ">
        <img 
        src={src} 
        width={width} 
        height={height}
        />
        <h2 className="text-xl text-white dark:text-[#26B7CD] leading-[27px] font-normal text-center">
            {title}
        </h2>
    </div> 
    
    )
};
