import UseFriendStatus from "./UseFriendStatus";
export default function FriendStatusString({friendObj}) {
    const isOnline = UseFriendStatus(friendObj.id)
    if(isOnline === null) {
        return 'loading.....'
    }
    return isOnline?"在线～～":"离线。。。"
}