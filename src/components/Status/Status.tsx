type StatusProps={
    status:'loading'|'success'|'error'
}

const Status = ({status}:StatusProps) => {
    let message;
    if(status==='loading') message='loading'
    else if (status==='success') message='success' 
    else if (status==='error') message='error' 
    return ( 
        <div>
            <p>{message}</p>
        </div>
     );
}
 
export default Status;