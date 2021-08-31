import React from 'react'

export default function Atas(){
    return(
        <div className="w-full  p-2">
        <div className="text-center border-2 ">
          <h1 className="text-5xl font-bold shadow-lg py-6">
            Alqur'an Digital
          </h1>
        </div>
        <div className="lg:m-8 m-6 grid lg:grid-cols-2  bg-yellow-100    ">
          <div className="">
            <h1 className="lg:text-4xl t py-24 text-center mx-7 ">
              " Bacalah Al - Qur'an Nisyaca ia akan datang pada hari kiamat
              sebagai syafaat bagi para pembacanya "{" "}
            </h1>
          </div>
          <img
            className=" rounded-3xl lg:py-10 "
            src="https://pict-a.sindonews.net/dyn/620/pena/news/2021/06/15/68/456504/surat-penenang-hati-yang-terdapat-dalam-alquran-ere.jpg"
            alt=""
          />
        </div>
      </div>
    )
}