import React from 'react'

const Signup = () => {
  return (
    <>
<button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModal"><span className='fa fa-user-plus ms-5'>
</span>Register</button> 

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Login</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <button className='btn btn-primary w-100 mb-2'><span className="fab fa-google"></span>
            Sign up with Google
        </button>
        <button className='btn btn-primary w-100 mb-2'><span className="fab fa-facebook"></span>
            Sign up with Facebook
        </button>
        
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
    <input type="text" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"/>
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
  <button type="submit" className="btn btn-outline-primary w-100">Register</button>
</form>
      </div>
    </div>
  </div>
</div>
    
    
    </>
  )
}

export default Signup
