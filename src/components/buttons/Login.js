import React from 'react'


const Login = () => {
  return (

         <> 

<button type="button" className="btn btn-outline-primary ms-auto" data-toggle="modal" data-target="#loginModal">
     <span className='fa fa-sign-in ms-2'></span>Login
</button>
<div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="loginModalLabel">Login</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      
      <div className="modal-body">
      <button className='btn btn-primary w-100 mb-2'><span className="fab fa-google"></span>
            Sign in with Google
        </button>
        <button className='btn btn-primary w-100 mb-2'><span className="fab fa-facebook"></span>
            Sign in with Facebook
        </button>
        
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-outline-primary w-100">Submit</button>
</form>
      </div>
    </div>
  </div>
</div>
    
    </>
    

  )
}

export default Login
