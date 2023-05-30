// import { AUTH_API } from './Url';
import { AUTH_API } from './Url';

/**generateOtpAPI is generating OTP for the handyman */
export const generateOtpAPI = async (mobileNumber: string) => {
  try {
    const response = await fetch(`${AUTH_API}/auth/userOtp/generate-otp`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mobileNumber: mobileNumber,
      }),
    });
    const jsonResponse = await response.json();
    console.log(JSON.stringify(jsonResponse.message));
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
};

/**validateOtp is generating token for the handyman */
export const validateOtpAPI = async (mobileNumber: string, otp: string) => {
  try {
    const response = await fetch(`${AUTH_API}/auth/userOtp/userlogin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: mobileNumber,
        password: otp,
      }),
    });
    const jsonResponse = await response.json();

    if (!response.ok) {
      throw new Error(jsonResponse.message);
    }
    return jsonResponse;
  } catch (err) {
    console.log('Wrong OTP');
    throw err;
  }
};
