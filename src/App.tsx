import React, {useState, useEffect} from 'react';

import './App.css';

type State = {
  username: string
  password:  string
  
};

const App = () => {
  const [state , setState] = useState({
    email : "",
    password : ""
})
  return (
    <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center">LOG APP</h3>
                <form >
                  
                  <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="Enter email" 
                    />
                    
                  </div>
                <div className="form-group text-left">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" 
                          className="form-control" 
                          id="password" 
                          placeholder="Password"
                          
                  />
                </div>
                <div className="form-check">
                </div>
                <button 
                      type="submit" 
                      className="btn btn-primary"
                      
                >OK</button>
                <small className="form-text text-muted">Wrong Message</small>
                <hr/>
                <button 
                      type="submit" 
                      className="btn btn-primary"
                      
                >Clear</button>
                  
                </form>
              </div>
              <div className="card-footer text-muted text-center">
                This My Login App for react Hook projects <a href="https://github.com/patbpm/login-app-with-react-hooks">Github Repo</a>
              </div>
            </div>
            <div className="text-center py-2">
              
            </div>
          </div>
    </div>
    
  );
}

export default App;
