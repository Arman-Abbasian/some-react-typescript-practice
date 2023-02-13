export type ProfileNameProps={
    name:string
}

const Profile = ({name}:ProfileNameProps) => {
    return ( 
        <div>private profile component .Name is {name}</div>
     );
}
 
export default Profile;