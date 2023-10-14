"use client"

export default ({state, setState}) => {

   

    return (
        state ? (
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="fixed inset-0 w-full h-full bg-black opacity-20" onClick={() => setState(false)}></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative w-full md:w-[50vw] h-[60vh] md:h-[80vh] p-4 mx-auto bg-white rounded-md shadow-lg">
                        <div className="mt-3">
                        </div>
                    </div>
                </div>
            </div>
        ) : ''
    )
}