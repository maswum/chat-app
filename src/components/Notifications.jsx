import { useEffect, useContext } from 'react';
import { ChatContext } from '../context/ChatContext';

const Notifications = () => {
  const { data, dispatch } = useContext(ChatContext);

  useEffect(() => {
    let socket = null;

    const setupWebSocket = () => {
      socket = new WebSocket('ws://localhost:8080'); 

      socket.addEventListener('message', handleWebSocketMessage);
    };

    const handleWebSocketMessage = (event) => {
      const message = JSON.parse(event.data);
      dispatch({ type: 'ADD_MESSAGE', payload: message });
      showNotification('New Message', { body: message.text }); 
    };

    const closeWebSocket = () => {
      if (socket) {
        socket.removeEventListener('message', handleWebSocketMessage);
        socket.close();
      }
    };

    setupWebSocket();

    return () => {
      closeWebSocket(); 
    };
  }, [dispatch]);

  const showNotification = (title, options) => {
    if (!('Notification' in window)) {
      console.log('This browser does not support desktop notification');
      return;
    }

    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        new Notification(title, options);
      } else {
        console.log('Notification permission denied');
      }
    });
  };

  return null;
};

export default Notifications;
