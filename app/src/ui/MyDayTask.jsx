function MyDayTask({ myDay, setMyDay, hover, setHover }) {

    const handleMouseEnter = () => { setHover('text-lavender-pastel') };
    const handleMouseLeave = () => {
        myDay[1].fontVariationSettings == "'FILL' 0"
        ? setHover('text-zinc-700') 
        : null
    };
    const handleClick = () => {
        setMyDay([true,
            myDay[1].fontVariationSettings == "'FILL' 0"
            ? {fontVariationSettings: "'FILL' 1"}
            : {fontVariationSettings: "'FILL' 0"}
        ])  
    };
    
    return (
        <span
            className={`${hover} material-symbols-outlined`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={myDay[1]}
        >
            routine
        </span>
    );
};

export default MyDayTask;