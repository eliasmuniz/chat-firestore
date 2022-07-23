import React from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine'; 
import firebase from 'firebase';

import { useAuth } from '../contexts/AuthContext';

const Chats = () =>{
    const history = useHistory();
    const {user} = useAuth();

    console.log(user);

    const handleLogout = async () => {
      
        await firebase.auth().signOut().then(function() {
            console.log("Successfully signed out.")
        }).catch(function(error) {
            console.log(error)
            console.log("An error occurred")
        });
    
        history.push('/');
       
    }

    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    ChatYa
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Cerrar Sesión
                </div>
            </div>

            <ChatEngine 
                height="calc(100vh - 66px)"
                projectId="22c7dc0f-bcb1-4d91-b7da-f5e5e2eda6c7"
                userName="."
                userSecret="."
            />
        </div>
    )
};

export default Chats;