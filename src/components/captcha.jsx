import React, { useEffect, useState } from "react";
import { generateString } from "../util";
import Success from "./success";

function Captcha({ length }) {
  const [captchaValue, setCaptchaValue] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");
  const [statusSuccess, setStateSuccess] = useState(false);

  useEffect(() => {
    setGeneratedCaptcha(generateString(6));
  }, []);

  const onSubmit = () => {
    if (generatedCaptcha.split('   ').join('') === captchaValue)
      setStateSuccess(true);
    else
      setGeneratedCaptcha(generateString(length));
  };

  return (
    <div className="captcha_container">
      {statusSuccess === false ? (
        <>
          <div className="captcha_image">
            <h3>{generatedCaptcha}</h3>
          </div>
          <div className="captcha_form">
            <input
              type="text"
              value={captchaValue}
              onChange={(e) => setCaptchaValue(e.target.value)}
              placeholder="Enter code..."
            />
            <button onClick={onSubmit}>Verify</button>
          </div>
        </>
      ) : (
        <Success />
      )}
    </div>
  );
}

export default Captcha;
