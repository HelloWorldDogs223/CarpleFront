"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const IdFindPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const router = useRouter();

  const findId = async () => {
    try {
      setNameError(true);
      setEmailError(true);
    } catch (e) {
      console.log(e);
      alert("서버에러");
    }
  };

  return (
    <div className="relative w-full px-[20px] pt-[57.5px]">
      <div className="flex top-[57.5px]">
        <svg
          onClick={() => {
            router.back();
          }}
          className="absolute left-[20px] top-[57.5px] cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="18"
          viewBox="0 0 11 18"
          fill="none"
        >
          <path
            id="Rectangle 882"
            d="M10 1.10938L1.82023 7.92585C1.39337 8.28157 1.39337 8.93718 1.82023 9.2929L10 16.1094"
            stroke="#505050"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute left-[141.5px] top-[52.5px] text-center text-black/90 text-xl font-semibold font-['Pretendard'] leading-[30px]">
          아이디 찾기
        </div>
      </div>

      <div className="self-stretch flex-col justify-start items-start flex mt-[62.5px]">
        <div className="self-stretch h-[91px] flex-col justify-start items-start flex">
          <div className="mb-[10px] pl-[10px] text-[#4f4f4f] text-sm font-medium font-['Pretendard']">
            이름
          </div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력해주세요"
            className={`${
              nameError ? "rounded-[10px] border border-[#e0302d]" : ""
            } self-stretch h-[51px] p-[15px] bg-white rounded-[10px] border border-[#e9e9e9] justify-start items-center gap-3 inline-flex placeholder:text-[#b2b2b2] text-[#1A1A1A] text-lg font-medium font-['Pretendard']`}
          />
          {nameError && (
            <div className="pl-[10px] text-[#e0302d] text-sm font-normal font-['Pretendard'] mt-[3px]">
              이름을 다시 입력해주세요
            </div>
          )}
        </div>

        <div className="relative self-stretch mb-[57px] h-[91px] flex-col justify-start items-start flex">
          <div className="mb-[10px] pl-[10px] text-[#4f4f4f] text-sm font-medium font-['Pretendard'] mt-[20px]">
            이메일
          </div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력해주세요"
            className={`${
              emailError ? "rounded-[10px] border border-[#e0302d]" : ""
            }  w-full h-[51px] placeholder:text-[#b2b2b2] text-[#1A1A1A] text-lg font-medium font-['Pretendard'] self-stretch p-[15px] bg-white rounded-[10px] border border-[#e9e9e9] justify-between items-center inline-flex relative`}
          />
          {emailError && (
            <div className="pl-[10px] mt-[3px] text-[#e0302d] text-sm font-normal font-['Pretendard']">
              이메일을 다시 입력해주세요
            </div>
          )}
          <div className="cursor-pointer absolute right-[15px] bottom-[-24px]"></div>
        </div>
      </div>
      {name && email ? (
        <div
          onClick={() => findId()}
          className="w-[335px] h-[51px] px-[30px] py-[15px] cursor-pointer bg-[#007aff] rounded-xl justify-center items-center gap-2.5 inline-flex mt-[371px]"
        >
          <div className="text-white text-lg font-semibold font-['Pretendard']">
            아이디 찾기
          </div>
        </div>
      ) : (
        <div className="w-[335px] h-[51px] px-[30px] py-[15px] bg-[#dadde1] rounded-xl justify-center items-center gap-2.5 inline-flex mt-[371px]">
          <div className="text-[#a2abb4] text-lg font-semibold font-['Pretendard']">
            아이디 찾기
          </div>
        </div>
      )}
    </div>
  );
};

export default IdFindPage;
