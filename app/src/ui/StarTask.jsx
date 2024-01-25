function StarTask({ starred, setStarred, hover, setHover }) {

    const handleMouseEnter = () => { setHover('text-salmon-pastel') };
    const handleMouseLeave = () => {
        starred[1].fontVariationSettings == "'FILL' 0"
        ? setHover('text-zinc-700') 
        : null
    };
    const handleClick = () => {
        setStarred([true,
            starred[1].fontVariationSettings == "'FILL' 0"
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
            style={starred[1]}
        >
            star
        </span>
    );
};

export default StarTask;