import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";




const url = "https://authapizomato.herokuapp.com/api/auth/userInfo";

export default class Header extends Component {

  constructor(){
    super();

    this.state={
      userData:'',
    }
  }


  handleLogout =()=>{
    sessionStorage.removeItem('userinfo');
        sessionStorage.setItem('loginStatus',false);
        sessionStorage.removeItem('ltk');
        this.props.history.push('/');
  }


  conditionalHeader = () => {

    if(sessionStorage.getItem('ltk')){
      let data = this.state.userData;
      let outArray = [data.name]
      sessionStorage.setItem('userInfo', outArray);
      sessionStorage.setItem('loginStatus',true);

      return(
<>
        <div className="collapse navbar-collapse d-flex justify-content-end " id="navbarSupportedContent">
          <Link to="/login" className="btn btn-outline-success mx-2" type="submit">
            <i className="fa fa-user" aria-hidden="true">
                &nbsp;Hi {data.name}
            </i>
          </Link>

          <Link to="/login" className="btn btn-outline-danger mx-2" type="submit" onClick={this.handleLogout}>
            <i className="fa fa-user" aria-hidden="true">
               &nbsp;LogOut
            </i>
          </Link>
        </div>
        
        </>
)

        

    }else{
      
      return (
        <>
          <Link to="/login" className="btn btn-outline-success mx-2" type="submit">
            <i className="fa fa-user" aria-hidden="true">
               &nbsp;LogIn
            </i>
          </Link>
  
          <Link to="/signup" className="btn btn-outline-success mx-2" type="submit">
            <i className="fa fa-user-plus" aria-hidden="true">
            &nbsp;SignUp
            </i>
          </Link>
        </>
      );

    }

   
  };

  
         
         
        
          

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to='/' className="navbar-brand" href="/">
              <h2>Fibonacci's</h2>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/input' className="nav-link active" aria-current="page" >Fibonacci's Calc</Link>
        </li>
      </ul>
      </div>

            <div className="collapse navbar-collapse d-flex justify-content-end " id="navbarSupportedContent">

              {this.conditionalHeader()}

            </div>

          </div>
          
        </nav>
        
       

        
      </>
    );
  }

    // Get user info after login
    componentDidMount(){
      fetch(url,{
        method:"GET",
        headers:{
          'x-access-token': sessionStorage.getItem('ltk')
        }
      })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          userData:data
        })
      })
    }

}
