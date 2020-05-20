import React, {useEffect, useRef} from 'react';

const Loader = () => {
    useEffect(() => {
        setTimeout(()=>{
            loaderRef.current!.style.display = 'none'
        }, 2800)

    })
    const loaderRef = useRef<HTMLDivElement>(null)
    return (
        <>
            <div ref={loaderRef} className="flex-container">
                <div className="flex-row">
                    <div className="loader">
                        <span/>
                        <span/>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Loader;