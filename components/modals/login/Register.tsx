import React, { useState, SetStateAction, Dispatch } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

type FromData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

interface Props {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const Register = ({ setIsLogin, isLogin }: Props) => {
  const [isHidden, setIsHidden] = useState<string>("close");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FromData>();

  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <div className="min-h-[723px] max-h-[809px] h-full lg:max-w-[564px] md:max-w-[500px] sm:max-w-[450px] max-w-[350px] rounded-[16px] w-full bg-white bg-cover bg-no-repeat">
      <div className="p-[60px]">
        <div className="grid border-b border-[#AEAEAE] grid-cols-2">
          <div
            className={`text-[20px] text-center font-[500] leading-[32px]  text-[#414141] ${
              isLogin ? "pb-3 border-b-[5px] border-primary" : ""
            }`}
          >
            <button onClick={() => setIsLogin(true)} className={"custom_prev"}>
              Login
            </button>
          </div>
          <div
            className={`text-[20px] text-center font-[500] leading-[32px]  text-[#414141] ${
              isLogin ? "" : "pb-3 border-b-[5px] border-primary"
            }`}
          >
            <button onClick={() => setIsLogin(false)} className={"custom_next"}>
              Register
            </button>
          </div>
        </div>
        <div className="mt-[43px]">
          <form onSubmit={onSubmit}>
            <div className="grid grid-cols-2 gap-3">
              <div className="form-control">
                <label className="label px-0 pt-0 pb-3">
                  <span className="text-[16px] font-[500] leading-6 text-[#000000]">
                    First Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Mr"
                  className="input rounded-[3px] text-black placeholder:text-[#6E6E6E] leading-6 text-[16px] h-[60px] input-bordered bg-[#FFFFFF] focus:outline-none border-[#AEAEAE]"
                  {...register("firstName", {
                    required: { value: true, message: "First Name is required" },
                  })}
                />
                {errors.firstName?.type === "required" && (
                  <span className="label-text-alt text-red-500 text-xs">
                    {errors.firstName?.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label px-0 pt-0 pb-3">
                  <span className="text-[16px] font-[500] leading-6 text-[#000000]">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="input rounded-[3px] text-black placeholder:text-[#6E6E6E] leading-6 text-[16px] h-[60px] input-bordered bg-[#FFFFFF] focus:outline-none border-[#AEAEAE]"
                  {...register("lastName", {
                    required: { value: true, message: "Last Name is required" },
                  })}
                />
                {errors.lastName?.type === "required" && (
                  <span className="label-text-alt text-red-500 text-xs">
                    {errors.lastName?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="form-control relative mt-[20px]">
              <label className="label px-0 pt-0 pb-3">
                <span className="text-[16px] font-[500] leading-6 text-[#000000]">Email</span>
              </label>

              <input
                type="text"
                placeholder="demmo@gmail.com"
                className="input rounded-[3px] text-black placeholder:text-[#6E6E6E] leading-6 text-[16px] h-[60px] input-bordered bg-[#FFFFFF] focus:outline-none border-[#AEAEAE]"
                {...register("email", {
                  required: { value: true, message: "Email is required" },
                  pattern: {
                    value:
                      /^[\w-']+(\.[\w-']+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/,
                    message: "Provide a valid email",
                  },
                })}
              />
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500 text-xs">{errors.email?.message}</span>
              )}
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500 text-xs">{errors.email?.message}</span>
              )}
            </div>
            <div className="form-control relative mt-[20px]">
              <label className="label px-0 pt-0 pb-3">
                <span className="text-[16px] font-[500] leading-6 text-[#000000]">Password</span>
              </label>

              <input
                type={"password"}
                placeholder="Enter Password"
                defaultValue={"Ab1234@A"}
                className="input rounded-[3px] text-black placeholder:text-[#6E6E6E] leading-6 text-[16px] h-[60px] input-bordered bg-[#FFFFFF] focus:outline-none border-[#AEAEAE]"
                {...register("password", {
                  required: { value: true, message: "password is required" },
                  pattern: {
                    value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                    message:
                      "must be one uppercase, one lowercase  letters, one special character, one digit, and a total length of 8",
                  },
                })}
              />
              {errors.password?.type === "pattern" && (
                <span className="label-text-alt text-red-500 text-xs">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red-500 text-xs">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="mt-[20px] flex items-center justify-between">
              <div className="form-control">
                <label className="cursor-pointer p-0 gap-3 justify-start label">
                  <input
                    type="checkbox"
                    className="checkbox border-[#AEAEAE] rounded-none w-[14px] h-[14px] checked:checkbox-primary"
                  />
                  <span className="text-[16px] leading-[24px] text-[#676767]">Remember me</span>
                </label>
              </div>
              <div>
                <label>
                  <span className="text-[16px] cursor-pointer leading-[24px] text-[#676767]">
                    Forgot Password
                  </span>
                </label>
              </div>
            </div>
            <div className="mt-[28px]">
              <button
                type="submit"
                className="bg-primary font-[500] rounded-[3px] text-[20px] leading-[30px] text-[#031424] h-[60px] w-full"
              >
                Create New Account
              </button>
            </div>
          </form>
        </div>
        <div className="mt-7">
          <p className="text-[16px] leading-[30px] text-[#676767] text-center">
            By providing your email address, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
