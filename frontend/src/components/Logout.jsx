import React from 'react'
import toast from 'react-hot-toast';

function Logout() {
  return (
    <div>
      <button className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer" 
      onClick={()=>{
        localStorage.removeItem("Users")
        setInterval(() => {
            window.location.reload();
        }, 2000);
        toast.success("You logout from account");
        
      }}
      >Logout</button>
    </div>
  )
}

export default Logout
