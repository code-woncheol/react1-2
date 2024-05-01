import { useState, useEffect } from "react";


export default function UserListItem(props) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }
        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
        return () => {
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
        };
    }); 

   return (
    <li style={{color: isOnline ? 'green' : 'black'}}>
            {props.user.name}
        </li>
   )
}