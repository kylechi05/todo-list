function MyDayTask({ myDay, setMyDay, hover, setHover, isMyDay }) {

    const handleMouseEnter = () => { setHover('text-lavender-pastel') };
    const handleMouseLeave = () => {
        myDay[1].fontVariationSettings == "'FILL' 0"
        ? setHover('text-zinc-700') 
        : null
    };
    const handleClick = () => {
        setMyDay(
            [
                true,
                myDay[1].fontVariationSettings == "'FILL' 0"
                ? {fontVariationSettings: "'FILL' 1"}
                : {fontVariationSettings: "'FILL' 0"}
            ]
        ) 
    };
    
    return (
        <span
            className={`${isMyDay ? 'text-lavender-pastel' : hover} material-symbols-outlined`}
            onMouseEnter={isMyDay ? null : handleMouseEnter}
            onMouseLeave={isMyDay ? null : handleMouseLeave}
            onClick={isMyDay ? null : handleClick}
            style={myDay[1]}
        >
            routine
        </span>
    );
};

export default MyDayTask;