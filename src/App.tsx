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

  const validateUsername = (target:any) => {
    if (target.value.length >= 6) {
      setUsername(target.value);
      setUsernameError(false);
      setHelperText('');
    } else {
      setUsernameError(true);
      setHelperText('The Username is less than 6 Character, Please add more character');
    }
  }

  const validatePassword = (target:any) => {
    if (target.value.length >= 6) {
      setPassword(target.value);
      setPasswordError(false);
      setHelperText('');
    } else {
      setPasswordError(true);
      setHelperText('The Password is less than 6 Character, Please add more character');
      
    }
  }
  
  const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name } = e.target;

    switch (name) {
      case 'username':
        validateUsername(e.target);
        break;
      case 'password':
        validatePassword(e.target);
        break;
      default:
        break;
    }
  }
  const handleSubmit = (e:React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault();
    if (usernameError || passwordError) {
      setIsButtonDisabled(false)
    }else{ 
      setIsButtonDisabled(true)
    }
    
    
  }
  useEffect(() => {
    
  });

  
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
