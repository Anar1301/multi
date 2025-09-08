"use client";
import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "motion/react";
export default function Home() {
  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState();
  const [form, setForm] = useState({
    firstname: "",
    Lastname: "",
    Username: "",
    email: "",
    phone: "",
    Password: "",
    comfirmPassword: "",
  });
  function gotoNext() {
    console.log("next");
    const NewErrors = {};
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (emailRegex.test(form.email)) {
      NewErrors.email = null;
    } else {
      NewErrors.email = "wrong email";
    }
    const mnPhoneRegex = /^\d{8}$/;
    if (mnPhoneRegex.test(form.phone)) {
      NewErrors.phone = null;
    } else {
      NewErrors.phone = "wrong number";
    }
    const PasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (PasswordRegex.test(form.Password)) {
      NewErrors.Password = null;
    } else {
      NewErrors.Password = "wrong password";
    }
    const comfirmPasswordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (comfirmPasswordRegex.test(form.comfirmPassword)) {
      NewErrors.comfirmPassword = null;
    } else {
      NewErrors.comfirmPassword = "wrong comfirm password";
    }
    if (
      (form.Password =
        form.comfirmPassword && PasswordRegex.test(form.Password))
    ) {
      NewErrors.confirmPassword = null;
    } else {
      NewErrors.confirmPassword = "Password do not match. Please try again";
    }
    setErrors(NewErrors);
    if (!NewErrors.email && !NewErrors.phone) {
      localStorage.setItem("myForm", JSON.stringify(form));
      setStep("step2");
    }
  }
  function Continue() {
    const NewErrors2 = {};

    const UsernameRegex = /^[a-zA-Z0-9_-]{3,16}$/i;
    if (UsernameRegex.test(form.Username)) {
      NewErrors2.Username = null;
    } else {
      NewErrors2.Username = "not username";
    }
    setErrors(NewErrors2);
    if (!NewErrors2.Username) {
      localStorage.setItem("myForm", JSON.stringify(form));
      setStep("step1");
    }
  }
  useEffect(() => {
    const localForm = localStorage.getItem("myForm");
    if (localForm) {
      setForm(JSON.parse(localForm));
    }
  }, []);

  const [step, setStep] = useState("basic");

  console.log({ form });
  function Continue3() {
    setStep("step3");
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    const filePreview = URL.createObjectURL(file);
    setPreview(filePreview);
  }
  if (step === "basic") {
    return (
      <div className="flex justify-center items-center p-[182px]">
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
                value={form.firstname}
                onChange={(e) =>
                  setForm({
                    ...form,
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
                    ...form,
                    Lastname: e.target.value,
                  })
                }
                value={form.Lastname}
                className="w-[392px] h-[40px] flex p-[12px] items-center rounded-[8px] border-[#8B8E95] border-2 text-black"
              ></input>
              <h6 className="text-black">Username *</h6>
              <input
                placeholder={"Placeholder"}
                onChange={(e) =>
                  setForm({
                    ...form,
                    Username: e.target.value,
                  })
                }
                value={form.Username}
                className="w-[392px] h-[40px] flex p-[12px] items-center rounded-[8px] border-[#8B8E95] border-2 text-black"
              />
              {!setErrors.Username && (
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
      <div className="flex justify-center items-center p-[182px]">
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
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
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
                    ...form,
                    phone: e.target.value,
                  })
                }
                value={form.phone}
                className="w-[392px] h-[40px] flex p-[12px] items-center rounded-[8px] border-[#8B8E95] border-2 text-black"
              />
              {!setErrors.phone && (
                <div className="text-red-600">{errors.phone}</div>
              )}
              <h6 className="text-black">Password *</h6>
              <input
                type="text"
                placeholder={"Placeholder"}
                onChange={(e) =>
                  setForm({
                    ...form,
                    Password: e.target.value,
                  })
                }
                value={form.Password}
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
                    ...form,
                    comfirmPassword: e.target.value,
                  })
                }
                value={form.comfirmPassword}
                className="w-[392px] h-[40px] flex p-[12px] items-center rounded-[8px] border-[#8B8E95] border-2 text-black"
              />{" "}
              {!setErrors.comfirmPassword && (
                <div className="text-red-600">{errors.comfirmPassword}</div>
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
      <div className="flex justify-center items-center p-[182px]">
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
                value={form.date}
                onChange={(e) =>
                  setForm({
                    ...form,
                    date: e.target.value,
                  })
                }
                className="w-[392px] h-[40px] p-[12px] items-center rounded-[8px] border-[#8B8E95] border-2 text-black"
              ></input>
            </div>
            <h6 className="text-black mt-3">Profile image *</h6>
            <div className="flex justify-center items-center w-[420px] h-[240px] bg-gray-400 my-5 relative p-4 flex-col">
              {" "}
              Add image
              {preview && (
                <img
                  src={preview}
                  className="absolute inset-0 h-full w-full object-contain"
                />
              )}
              <input
                type="file"
                className="absolute opacity-0 inset-0"
                onChange={handleImageChange}
              ></input>
            </div>
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
              onClick={Continue3}
              className=" w-[272px] h-[40px] bg-[#121316] text-white rounded-[6px]"
            >
              Continue 3/3
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (step === "step3") {
    return (
      <div className="flex justify-center items-center p-[182px]">
        <div className="w-[480px] bg-[#FFF] flex flex-col justify-center p-[32px] items-center rounded-[8xp] gap-[54px]">
          <header>
            <img className="" src="logo.png"></img>
            <br></br>
            <h1 className="text-black font-semibold text-2xl">
              You're All Set 🔥
            </h1>
            <br></br>
            <h3 className="text-[#8E8E8E] items-center text-base mt-[-16px] font-sans">
              We have received your submission. Thank you!
            </h3>
          </header>
        </div>
      </div>
    );
  }
}
