import React from 'react'
import InputType from '../../components/shared/Form/InputType'
import Form from "../../components/shared/Form/Form"
import { useSelector } from 'react-redux'
import Spinner from '../../components/shared/Spinner'
import { toast } from 'react-toastify'
import './style.css'

const Login = () => {
  const {loading,error} = useSelector(state => state.auth)
  return (
    <>
    {error && <span>{alert(error)}</span>}
    {loading ? (<Spinner/>) : (
     <div className = "row g-0 inpage">
      {/* here g-0 is gutter 0 to stop scrolling it is inbuilt */}
      <div className = "col-md-8 form-banner" id='forImage'>
        <img src="./assets/images/2706868.jpg" alt="loginImage" />
        Image by <a href="https://www.freepik.com/free-vector/illustration-people-donating-blood_5137720.htm#query=blood%20bank%20hospital&position=13&from_view=search&track=ais">Freepik</a>
      </div>
      <div className = "col-md-4 form-container">
        {/* bootstrap code copy paste */}
         <div className="col-md-4 form-container">
          <Form formTitle={'Login'} submitBtn={'Login'} formType={'login'} />
         </div>

      </div>
     </div>
    )}
    </>
  )
}

export default Login