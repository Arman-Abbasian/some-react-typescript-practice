import Profile, {ProfileNameProps} from './Profile'
import Login from "./Login"

type PrivateProps={
    isLoggedIn:boolean,
    
}
export const Private=({isLoggedIn}:PrivateProps)=>{
if(isLoggedIn){
    return <Profile name='ali' />
}else{
    return <Login />
}
}