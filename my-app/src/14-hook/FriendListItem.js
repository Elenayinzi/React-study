import UseFriendStatus from "./UseFriendStatus";
export default function FriendListItem({friendObj}) {
    const isOnline  = UseFriendStatus(friendObj.id)
    return (
        <li style={{color: isOnline?"green":"black"}}>
            {
                friendObj.name
            }
        </li>
    )
}