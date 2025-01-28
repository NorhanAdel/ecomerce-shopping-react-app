 import React, { useState } from "react";
 import IMG from "../../assets/avatar15.png";
 import { Link } from "react-router-dom";
 import { FaEdit, FaCheck } from "react-icons/fa";
 import "./profile.scss";
 export const Profile = () => {
   const [avatar, setAvatar] = useState("");
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmNewPassword, setConfirmNewPassword] = useState("");
   return (
     <section className="profile">
       <div className="profile_container container">
         <Link to={`/myposts/stst`} className="btn">
           My Post
         </Link>
         <div className="profile_details">
           <div className="avatar_wrapper">
             <div className="profile_avatar">
               <img src={IMG} alt="" />
             </div>
             <form className="avatar_from">
               <input
                 type="file"
                 name="avatar"
                 id="avatar"
                 onCanPlay={(e) => setAvatar(e.target.files[0])}
                 accept="png, jpg, jpeg"
               />
               <label for="avatar">
                 <FaEdit />
               </label>
               <button className="profile_avatar_btn">
                 <FaCheck />
               </button>
             </form>
           </div>
           <h1>Ernest Achiver</h1>
           <form className="profile_form">
             <p className="error_massage">this is an error masssge</p>
             <input
               type="text"
               placeholder="Full Name"
               value={name}
               onChange={(e) => setName(e.target.value)}
             />
             <input
               type="email"
               placeholder="Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
             />
             <input
               type="password"
               placeholder="passwird"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
             />
             <input
               type="password"
               placeholder="confirme password"
               value={confirmNewPassword}
               onChange={(e) => setConfirmNewPassword(e.target.value)}
             />
             <button className="btn-primary btn">Update my details</button>
           </form>
         </div>
       </div>
     </section>
   );
 };
