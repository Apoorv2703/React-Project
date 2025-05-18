// import React, {useState} from "react";
// import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css'

// let  Form = ()=>{
//     let [Name,setName]=useState()
//     let [Email,setEmail] = useState()
//     let [Password,setPassword] = useState()
//     let [ConfirmPassword,setConfirmPassword]=useState()
//     console.log(Name);
//     let handleSubmit = (event)=>{
//         event.preventDefault();
//         if(Name && Email && Password && ConfirmPassword){
            
//             if(Password === ConfirmPassword){
//                 toast.success("Signup successful")
//             }else{
//                 toast.error("Err:Password Mismatch")
//             }
//         }else{
//             toast.error("All fields are mandatory")
//         }

//     }
    
//     return (
//          <div className="form-container">
//             <form onSubmit={handleSubmit}>
//                 <p className="heading">Signup</p>
//                 <div>
//                     <p >Name</p>
//                     <input type="text" onChange={(event)=>setName(event.target.value)} />
//                     <p>{Name ? "":"Name is require"}</p>
//                 </div>
//                 <div>
//                     <p>Email</p>
//                     <input type="email" onChange={(event)=>setEmail(event.target.value)} />
//                     <p>{Email ? "":"email is require"}</p>
//                 </div>
//                 <div>
//                     <p>Password</p>
//                     <input type="password" onChange={(event)=>setPassword(event.target.value)} />
//                     <p>{Password ? "":"Password is require"}</p>
//                 </div>
//                 <div>
//                     <p>Confirm password</p>
//                     <input type="password" onChange={(event)=>setConfirmPassword(event.target.value)} />
//                     <p>{ConfirmPassword ? "":"Password not match"}</p>
//                 </div>
//                 <div>
//                     <button>Signup</button>
//                 </div>
//             </form>
//         </div>
        
       

//     )
// }

// export default Form;