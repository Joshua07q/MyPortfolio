import {Link, Outlet} from 'react-router-dom';
function Login(){


  const  username=document.getElementById("username");
   const  password=document.getElementById("password"); 
 const email= document.getElementById("email");

 if(!username.trim()){
    displayError("Username is Required");

 }

 if(!email.trim()||!isValidEmail(email)){
    displayError("Please enter a valid email address");

 }

 if(!password.trim()||!isStrongPassword(password)){
    displayError(
        "Password must be at least 8 characters long"
    );
 }



  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Sucessful");
  };

  
  
  return (
  <>
    <div className='sign-in-page'>
      <div className="sign-in-box">
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
        <div>
              <label htmlFor="name">Username:</label>
        <input type="text" className='user-handle' id="username" value={username} required minLength="6" maxLength="12" placeholder='Ayodele' /><br/>
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input type="text" className='email-handle' id="email" value={email} placeholder='xxx@gmail.com' /><br/>
         </div>
         <div>
          <label htmlFor="password">Password:</label>
          <input type="text" className='password' id="password" value={password} />
         </div>
        
         <div>
         <button type="submit"><Link to='./posts'>Sign In</Link></button>
         </div>
         <Outlet/>
        </form>
        <div id={errorMessages}>{{message}}</div>
      </div>
    </div>
    </>
  );
}

function displayError(message){
    errorMessages.className="error";
    errorMessages.textContent= message;
    errorMessages.appendChild(errorMessages);

}

function isValidEmail(email){

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}
function isStrongPassword(password){

    let pattern= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return pattern.test(password);
}
export default Login