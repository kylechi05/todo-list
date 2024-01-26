import { useNavigate } from "react-router-dom";

function PageNotFound() {
    let navigate = useNavigate();

    return (
        <div className='h-screen w-screen flex items-center justify-center bg-orange-50'>
            <div className='h-1/2 w-1/2 p-5 flex flex-col justify-center bg-orange-200 rounded-2xl'>
                <h1 className="text-3xl text-center grow">
                    404 Error: Page Not Found
                </h1>
                <button
                    className="w-1/3 p-2 bg-salmon-pastel rounded-md"
                    onClick={() => {navigate('/tasklist')}}
                >
                    Return
                </button>
            </div>
        </div>
    );
}

export default PageNotFound;