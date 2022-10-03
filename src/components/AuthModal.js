import React, { useEffect, useRef } from 'react';
import { mountApp } from 'authModal/AuthModal'

const AuthModal = (handleSubmit) => {

    const ref = useRef(null)

    useEffect(() => {
        mountApp(ref.current, handleSubmit)
    })

    return <div ref={ref} />

}

export default AuthModal;