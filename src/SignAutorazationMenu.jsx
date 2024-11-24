import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
export default function SignAutorazationMenu({ isLogin, setIsLogin }) {
  let [nameValue, setNameValue] = useState();
  let [passwordValue, setPasswordValue] = useState();
  const auth = getAuth();

  function changeNameValue(event) {
    setNameValue(event.target.value);
  }
  function changePasswordValue(event) {
    setPasswordValue(event.target.value);
  }

  function submutOnClickHandler() {
    isLogin
      ? signInWithEmailAndPassword(auth, nameValue, passwordValue)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          })
      : createUserWithEmailAndPassword(auth, nameValue, passwordValue)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            alert("no acc")
            // ..
          });
  }
  return (
    <div className=" h-screen flex items-center justify-center">
      <div>
        <div>
          <p className="w-fit text-[white] text-[25px] mx-[auto]">
            {isLogin ? "Log in" : "Registration"}
          </p>
        </div>
        <div className="mt-[35px]">
          <div>
            {isLogin ? (
              <input
                value={nameValue}
                onChange={changeNameValue}
                type="text"
                placeholder="Write login"
                className="text-[white] text-[20px] bg-[#3B3B3B] rounded-[15px] py-[5px] px-[20px] outline-0"
              />
            ) : (
              <input
                value={nameValue}
                onChange={changeNameValue}
                type="text"
                placeholder="Write name"
                className="text-[white] text-[20px] bg-[#3B3B3B] rounded-[15px] py-[5px] px-[20px] outline-0"
              />
            )}
          </div>
          <div className="mt-[20px]">
            <input
              value={passwordValue}
              onChange={changePasswordValue}
              type="text"
              placeholder="Write password"
              className="text-[white] text-[20px] bg-[#3B3B3B] rounded-[15px] py-[5px] px-[20px] outline-0"
            />
          </div>
        </div>
        <div className="w-[170px] mx-[auto] mt-[25px]">
          <button
            className="w-[170px] mx-[auto] text-[#3B3B3B] bg-[white] text-[20px]  py-[2px] px-[10px] rounded-[15px] hover:text-white hover:bg-[#3B3B3B]"
            onClick={() => {
              submutOnClickHandler();
            }}
          >
            Submit
          </button>
        </div>
        <div className="w-full mt-[10px] text-center">
          <button
            className="text-[17px] text-white hover:underline"
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            {isLogin
              ? "You don`t have an account?"
              : "Already have an account?"}
          </button>
        </div>
      </div>
    </div>
  );
}
