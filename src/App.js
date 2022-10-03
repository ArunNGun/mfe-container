import React, { useState } from 'react';
import AuthModal from './components/AuthModal';
const App = () => {
    const [showmodal, setShowmodal] = useState(false)
    const [auth, setAuth] = useState(false)
    const handleClick = () => {
        setShowmodal(!showmodal)
    }
    const handleSubmit = () => {
        handleClick()
        setAuth(true)
    }

    return (
        <div>
            {showmodal && <AuthModal isOpen={showmodal} handleSubmit={handleSubmit} />}
            <div
                style={{
                    padding: '20px',
                    fontSize: '50px',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                This is an example of Microfrontend
            </div>
            <p
                style={{ display: 'flex', justifyContent: 'center', fontSize: 25 }}
            >
                This is a container App
            </p>
            <div style={{ paddingTop: '20vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button onClick={handleClick}>
                    {auth ? 'authenticated' : 'not authenticated'}
                </button>
            </div>
        </div>
    );
}
export default App;