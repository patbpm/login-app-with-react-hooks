import React, {useState, useEffect} from 'react';

import './App.css';


const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [helperText, setHelperText] = useState('');

  useEffect(() => {
    validateUsername(username);
  }, [username]);

  useEffect(() => {
    validatePassword(password)
  }, [password]);
  
  const validateUsername = (target:any) => {
    if (target.length >= 6) {
      setUsernameError(false);
    } else {
      setUsernameError(true);
    }
  }

  const validatePassword = (target:any) => {
    if (target.length >= 6) {
      setPasswordError(false);
    } else {
      setPasswordError(true);      
    }
  }
  const handleSubmit = (e:React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault();
    if (usernameError || passwordError) {
      setIsButtonDisabled(false)
      setHelperText('The Username or Password  is less than 6 Character, Please add more character');
    }else{ 
      setIsButtonDisabled(true)
      setHelperText('');
    }
    
    
  }
  const handleReset = (e:React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault();
    setUsername('');
    setPassword('')
    
  }
  
  
  return (
    <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center">LOGIN APP</h3>
                <form >
                  
                  <div className="form-group text-left">
                    <label >Username</label>
                    <input type="username" 
                            className="form-control" 
                            id="username" 
                            name="username"
                            placeholder="Enter Username" 
                            onChange={(e) => setUsername(e.target.value)}
                    />
                    
                  </div>
                <div className="form-group text-left">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" 
                          className="form-control" 
                          id="password" 
                          name="password"
                          placeholder="Enter Password"
                          onChange={(e) => setPassword(e.target.value)}
                          
                  />
                </div>
                <div className="form-check">
                </div>
                <button 
                      type="submit" 
                      className="btn btn-primary "
                      onClick={e => handleSubmit(e)}
                      disabled={isButtonDisabled}
                      
                >LOGIN</button>
                <small className="form-text text-danger">{helperText}</small>
                <hr/>
                <button 
                      type="submit" 
                      className="btn btn-danger"
                      onClick={e => handleReset(e)}

                      
                >CLEAR</button>
                  
                </form>
              </div>
              <div className="card-footer text-muted text-center">
                This My Login App for react Hook projects <a href="https://github.com/patbpm/login-app-with-react-hooks">Github Repo</a>
              </div>
            </div>
            
          </div>
    </div>
    
  );
}

export default App;
