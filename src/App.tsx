import React, {useState, useEffect} from 'react';

import './App.css';

type State = {
  username: string
  password:  string
  usernameError: boolean
  passwordError: boolean
  isButtonDisabled: boolean
  helperText : String
};


const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [helperText, setHelperText] = useState('');

  useEffect(() => {
    if (username.length >= 6 && password.length >= 6) {
      setUsernameError(false);
      setPasswordError(false);
      
    } else {
      setUsernameError(true);
      setPasswordError(true);
      
    }
  });
  
  const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name } = e.target;

    switch (name) {
      case 'username':
        setUsername(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        break;
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
                            onChange={e => handleChange(e)}
                    />
                    
                  </div>
                <div className="form-group text-left">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" 
                          className="form-control" 
                          id="password" 
                          name="password"
                          placeholder="Enter Password"
                          onChange={e => handleChange(e)}
                          
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
