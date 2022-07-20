import React, { useEffect, useState } from "react";
import { generateString } from "../util";

function Captcha() {
  const [captchaValue, setCaptchaValue] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");

  useEffect(() => {
    setGeneratedCaptcha(generateString(6));
  }, []);

  const onSubmit = () => {
    if(generatedCaptcha === captchaValue) {
      // changed value of status showing
    }
  }

  return (
    <div className="captcha_container">
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
    </div>
  );
}

export default Captcha;
