"use client";

import { Basic } from "next/font/google";
import { useState } from "react";

export default function Home(props) {
  const [errors, setErrors] = useState({});

  function gotoNext() {
    console.log("next");
    const NewErrors = {};
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (emailRegex.test(from.email)) {
      NewErrors.email = null;
    } else {
      NewErrors.email = "wrong email";
    }
    const mnPhoneRegex = /^\d{8}$/;
    if (mnPhoneRegex.test(from.phone)) {
      NewErrors.phone = null;
    } else {
      NewErrors.phone = "wrong number";
    }
    const PasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (PasswordRegex.test(from.Password)) {
      NewErrors.Password = null;
    } else {
      NewErrors.Password = "wrong password";
    }
    setErrors(NewErrors);
    if (!NewErrors.email && !NewErrors.phone) {
      setStep("step2");
    }
  }
  function Continue() {
    const NewErrors2 = {};

    const UsernameRegex = /^[a-zA-Z0-9_-]{3,16}$/i;
    if (UsernameRegex.test(from.Username)) {
      NewErrors2.Username = null;
    } else {
      NewErrors2.Username = "wrong username";
    }
    setErrors(NewErrors2);
    if (!NewErrors2.Username) {
      setStep("step1");
    }
  }

  const [step, setStep] = useState("basic");
  const [from, setForm] = useState({
    firstname: "",
    Lastname: "",
    Username: "",
  });

  console.log({ step });

  // function Continue2() {
  //   setStep("step2");
  // }

  if (step === "basic") {
    return (
      <div>
        <div className="w-[480px] h-[655px] bg-[#FFF] flex flex-col justify-between p-[32px] items-start rounded-[8xp]">
          <header>
            <img className="" src="logo.png"></img>
            <br></br>
            <h1 className="text-black font-semibold text-2xl">Join Us! 😎</h1>
            <br></br>
            <h3 className="text-[#8E8E8E] items-center text-base mt-[-16px] font-sans">
              Please provide all current information accurately.
            </h3>

            <div className="mt-5">
              <h6 className="text-black">First name *</h6>
              <input
                placeholder={"Placeholder"}
                value={from.firstname}
                onChange={(e) =>
                  setForm({
                    ...from,
                    firstname: e.target.value,
                  })
                }
                className="w-[392px] h-[40px] flex p-[12px] items-center rounded-[8px] border-[#8B8E95] border-2 text-black"
              ></input>
              <h6 className="text-black">Last name *</h6>
              <input
                placeholder={"Placeholder"}
                onChange={(e) =>
                  setForm({
                    ...from,
                    Lastname: e.target.value,
                  })
                }
                value={from.Lastname}
                className="w-[392px] h-[40px] flex p-[12px] items-center rounded-[8px] border-[#8B8E95] border-2 text-black"
              ></input>
              <h6 className="text-black">Username *</h6>
              <input
                placeholder={"Placeholder"}
                onChange={(e) =>
                  setForm({
                    ...from,
                    Username: e.target.value,
                  })
                }
                value={from.Username}
                className="w-[392px] h-[40px] flex p-[12px] items-center rounded-[8px] border-[#8B8E95] border-2 text-black"
              />
              {errors.Username && (
                <div className="text-red-600">{errors.Username}</div>
              )}
            </div>
          </header>
          <button
            onClick={Continue}
            className=" w-[392px] h-[40px] bg-[#121316] text-white rounded-[6px]"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }
  if (step === "step1") {
    return (
      <div>
        <div className="w-[480px] h-[655px] bg-[#FFF] flex flex-col justify-between p-[32px] items-start rounded-[8xp]">
          <header>
            <img className="" src="logo.png"></img>
            <br></br>
            <h1 className="text-black font-semibold text-2xl">Join Us! 😎</h1>
            <br></br>
            <h3 className="text-[#8E8E8E] items-center text-base mt-[-16px] font-sans">
              Please provide all current information accurately.
            </h3>

            <div className="mt-5">
              <h6 className="text-black">Email *</h6>
              <input
                placeholder={"Placeholder"}
                value={from.email}
                onChange={(e) =>
                  setForm({
                    ...from,
                    email: e.target.value,
                  })
                }
                className="w-[392px] h-[40px] flex p-[12px] items-center rounded-[8px] border-[#8B8E95] border-2 text-black"
              />
              {!setErrors.email && (
                <div className="text-red-600">{errors.email}</div>
              )}
              <h6 className="text-black">Phone number *</h6>
              <input
                placeholder={"Placeholder"}
                onChange={(e) =>
                  setForm({
                    ...from,
                    phone: e.target.value,
                  })
                }
                value={from.phone}
                className="w-[392px] h-[40px] flex p-[12px] items-center rounded-[8px] border-[#8B8E95] border-2 text-black"
              />
              {!setErrors.phone && (
                <div className="text-red-600">{errors.phone}</div>
              )}
              <h6 className="text-black">Password *</h6>
              <input
                type="password"
                placeholder={"Placeholder"}
                onChange={(e) =>
                  setForm({
                    ...from,
                    Password: e.target.value,
                  })
                }
                value={from.Password}
                className="w-[392px] h-[40px] flex p-[12px] items-center rounded-[8px] border-[#8B8E95] border-2 text-black"
              />
              {!setErrors.Password && (
                <div className="text-red-600">{errors.Password}</div>
              )}
              <h6 className="text-black">Confirm password *</h6>
              <input
                type="password"
                placeholder={"Placeholder"}
                onChange={(e) =>
                  setForm({
                    ...from,
                    Password: e.target.value,
                  })
                }
                value={from.Password}
                className="w-[392px] h-[40px] flex p-[12px] items-center rounded-[8px] border-[#8B8E95] border-2 text-black"
              />{" "}
              {!setErrors.Password && (
                <div className="text-red-600">{errors.Password}</div>
              )}
            </div>
          </header>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setStep("basic");
              }}
              className=" w-[142px] h-[40px] bg-white text-black rounded-[6px] border-1"
            >
              Back
            </button>
            <button
              onClick={gotoNext}
              className=" w-[272px] h-[40px] bg-[#121316] text-white rounded-[6px]"
            >
              Continue 2/3
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (step === "step2") {
    return (
      <div>
        <div className="w-[480px] h-[655px] bg-[#FFF] flex flex-col justify-between p-[32px] items-start rounded-[8xp]">
          <header>
            <img className="" src="logo.png"></img>
            <br></br>
            <h1 className="text-black font-semibold text-2xl">Join Us! 😎</h1>
            <br></br>
            <h3 className="text-[#8E8E8E] items-center text-base mt-[-16px] font-sans">
              Please provide all current information accurately.
            </h3>

            <div className="mt-5">
              <h6 className="text-black">Date of birth *</h6>
              <input
                type="date"
                placeholder={"--/--/--"}
                value={from.date}
                onChange={(e) =>
                  setForm({
                    ...from,
                    date: e.target.value,
                  })
                }
                className="w-[392px] h-[40px] flex p-[12px] items-center rounded-[8px] border-[#8B8E95] border-2 text-black"
              ></input>
            </div>
            <h6 className="text-black mt-3">Profile image *</h6>
          </header>
          <div className="flex gap-2">
            <button
              onClick={() => {
                Continue("step1");
              }}
              className=" w-[142px] h-[40px] bg-white text-black rounded-[6px] border-1"
            >
              Back
            </button>
            <button
              onClick={Continue}
              className=" w-[272px] h-[40px] bg-[#121316] text-white rounded-[6px]"
            >
              Continue 3/3
            </button>
          </div>
        </div>
      </div>
    );
  }
}
