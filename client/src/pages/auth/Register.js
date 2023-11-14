// rafce means react arrow function with export... this is done by an extension called es7 
import React from 'react'
import Form from '../../components/shared/Form/Form';
import { useSelector } from 'react-redux';
import Spinner from '../../components/shared/Spinner';
import './style.css'

const Register = () => {
  const {loading, error} = useSelector(state => state.auth)
  return (
    <>
    {error && <span>{alert(error)}</span>}
    {loading ? <Spinner/> : (
      <div className="row g-0 inpage">
        <div className="col-md-8 form-banner">
          <img src="./assets/images/2707649.jpg" alt="registerImage"></img>
          <p>Image by <a href="https://www.freepik.com/free-vector/illustration-people-donating-blood_5137720.htm#query=blood%20bank%20hospital&position=13&from_view=search&track=ais">Freepik</a></p>
        </div>
        <div className="col-md-4 form-container">
          <Form formTitle={'Register'} submitBtn={'Register'} formType={'register'} />
        </div>
      </div>
        )}
    </>
  );
};

export default Register