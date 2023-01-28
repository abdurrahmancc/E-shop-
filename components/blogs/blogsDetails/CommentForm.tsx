import React from "react";

const CommentForm = () => {
  return (
    <>
      <h4 className="text-[#031424] pb-4 font-[600] text-[28px] leading-[42px]">Post a Comment</h4>
      <div className="flex w-full">
        <div className="h-[6px] bg-primary w-[86.5px]"></div>
        <div className="border-b w-full border-[#AEAEAE]"></div>
      </div>
      <div className="mt-[50px]">
        <form>
          <div className="grid grid-cols-2 gap-y-[35px] gap-x-[30px]">
            <div className="form-control w-full">
              <label className="text-[16px] pb-[8px] leading-6 font-[500] text-[#545454]">
                Your Name*
              </label>
              <input
                type="text"
                className="input rounded-none h-[65px] bg-[#F6F6F6] border-none focus:outline-none w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="text-[16px] pb-[8px] leading-6 font-[500] text-[#545454]">
                Email Address*
              </label>
              <input
                type="text"
                className="input rounded-none h-[65px] bg-[#F6F6F6] border-none focus:outline-none w-full"
              />
            </div>
          </div>
          <div className="form-control mb-[37px] mt-[35px] w-full">
            <label className="text-[16px] pb-[8px] leading-6 font-[500] text-[#545454]">
              Your Comment*
            </label>
            <textarea className="textarea h-[143px] rounded-none bg-[#F6F6F6] border-none focus:outline-none w-full" />
          </div>
          <button className="bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate  bg-primary text-[#031424] text-[20px] leading-[30px] rounded-[8px] font-[500] w-full max-w-[199px] h-[68px] ">
            Post Comment
          </button>
        </form>
      </div>
    </>
  );
};

export default CommentForm;
