import React, { useEffect, useState } from "react";
import { generateString } from "../util";
import Success from "./success";

function Captcha({ length }) {
  const [captchaValue, setCaptchaValue] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");
  const [statusSuccess, setStateSuccess] = useState(false);

  useEffect(() => {
    setGeneratedCaptcha(generateString(length));
  }, []);

  const onSubmit = () => {
    if(captchaValue !== "") {
      if (generatedCaptcha.split('   ').join('') === captchaValue)
        setStateSuccess(true);
      else
        setGeneratedCaptcha(generateString(length));
    } else alert('The captcha field is empty!');
  };

  return (
    <div className="captcha_container">
      {statusSuccess === false ? (
        <>
          <p>Please Verify captcha for go to page!</p>
          <div className="captcha_image">
            <h3>{generatedCaptcha}</h3>
          </div>
          <div className="captcha_form">
            <input
              type="text"
              value={captchaValue}
              onChange={(e) => setCaptchaValue(e.target.value)}
              placeholder="Enter captcha..."
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
