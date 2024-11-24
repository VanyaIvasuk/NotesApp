import { useState } from "react"

export default function Autorization({setWhichSignIsClicked}) {
    let [isLogin, setIsLogin] = useState(false)
    return(
        <div className=" h-screen flex items-center justify-center">
            <div>
                <div>
                    <p className=" w-[315px] text-white text-[25px] mx-[auto]">Do you already have profile?</p>
                </div>
                <div className="w-[425px] flex justify-between mt-[30px]">
                    <button className="text-[19px] text-white w-[170px] bg-[#3B3B3B] rounded-[14px] py-[5px] ml-[30px] hover:bg-[white] hover:text-[#3B3B3B]" onClick={() => {setWhichSignIsClicked("signIn")}}>Yes, sign in</button>
                    <button className="text-[19px] text-white w-[170px] bg-[#3B3B3B] rounded-[14px] py-[5px] mr-[30px] hover:bg-[white] hover:text-[#3B3B3B]" onClick={() => {setWhichSignIsClicked("signUp")}}>No, sign up</button>
                </div>
            </div>
            {/* <div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    <input type="text" />
                </div>
                <button></button>
            </div> */}
        </div>
        
    )
};
