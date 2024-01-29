import { useNavigate } from "react-router-dom";

function PageNotFound() {
    let navigate = useNavigate();

    return (
        <div className='h-screen w-screen flex items-center justify-center bg-orange-50'>
            <div className='h-1/2 w-1/2 p-5 flex flex-col justify-center items-center bg-orange-200 rounded-2xl'>
                <h1 className='text-9xl text-center'>404</h1>
                <h2 className='p-3'>Page Not Found</h2>
                <button
                    className="w-1/3 p-3 bg-salmon-pastel rounded-md"
                    onClick={() => {navigate('/tasks')}}
                >
                    Return
                </button>
            </div>
        </div>
    );
}

export default PageNotFound;