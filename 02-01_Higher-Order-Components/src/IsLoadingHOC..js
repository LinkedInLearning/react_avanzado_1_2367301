import React, { useState } from 'react'
import LogoAnimationLoader from './LogoAnimationLoader';

export const IsLoadingHOC = (WrappedComponent, loadingMessage) => {

    function HOC(props) {
        const [isLoading, setLoading] = useState(true);

        const setLoadingState = isComponentLoading => {
            setLoading(isComponentLoading)
        }

        return (
            <>
                {isLoading && <LogoAnimationLoader message={loadingMessage} />}
                <WrappedComponent {...props}  setLoading={setLoadingState} />
            </>
        )
    }

    return HOC;
};

export default IsLoadingHOC;