"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Image from "next/image";
import React, { useEffect } from "react";

//image
import world from "../../assets/Image/world.png";

const Information = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const a = window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".conts", // Kích hoạt khi container vào viewport
        start: "top top", // Bắt đầu khi container đạt 80% viewport
        end: "+=4000 top", // Kết thúc khi container ra khỏi viewport
        scrub: true, // Cuộn mượt
        pin: true,
      },
    });

    for (let i = 1; i <= 11; i++) {
      const selector = `#text-${i}`;

      tl.fromTo(
        selector,
        { opacity: 0, x: 12, y: 30, rotateZ: 0 },
        { opacity: 1, x: 40, y: -90, duration: 1, rotateZ: 30 },
        0.1 * i
      ).fromTo(
        selector,
        { opacity: 1 },
        { x: 0, y: 0, duration: 1, rotateZ: 0 },
        0.2 * i
      );
    }
    tl.fromTo(
      "#left-2",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        "#left-3",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1 }
      )
      .fromTo(
        "#left-4",
        { opacity: 0 },
        { opacity: 1, duration: 0, x: -20 },
        "<"
      )
      .fromTo(
        "#img-world",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, y: 0, duration: 2 }
      )
      .to("#all", {
        x: -a * 2,
        duration: 2,
        opacity: 0,
      });

    gsap.to("#img-world", {
      y: 40, // Di chuyển lên xuống 20px
      duration: 10, // Thời gian di chuyển
      repeat: -1, // Lặp vô hạn
      rotateZ: -5,
      yoyo: true, // Quay ngược lại sau khi hoàn tất
      ease: "power1.inOut", // Hiệu ứng chuyển động mượt
    });
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <div
        id="all"
        className="conts h-[100vh] w-full flex justify-between px-20 items-center "
      >
        <div id="left-1" className="w-[50%] space-y-5">
          <div className="flex space-x-5">
            <div className="flex text-[72px] font-bungee">
              <p id="text-1" className="text-[#F4E324]">
                G
              </p>
              <p id="text-2" className="text-[#F4D921]">
                O
              </p>
              <p id="text-3" className="text-[#F6CF1E]">
                L
              </p>
              <p id="text-4" className="text-[#F7C51B]">
                D
              </p>
              <p id="text-5" className="text-[#F7BA17]">
                E
              </p>
              <p id="text-6" className="text-[#F8B114]">
                N
              </p>
              <p className="px-1"></p>
              <p id="text-7" className="text-[#FAA110]">
                C
              </p>
              <p id="text-8" className="text-[#FB980D]">
                L
              </p>
              <p id="text-9" className="text-[#FB8F0A]">
                O
              </p>
              <p id="text-10" className="text-[#FD8307]">
                U
              </p>
              <p id="text-11" className="text-[#FE7903]">
                D
              </p>
            </div>
          </div>
          <div>
            <h2 id="left-2" className="text-[42px] -mt-4">
              BIẾN Ý TƯỞNG CỦA BẠN <br /> THÀNH HIỆN THỰC
            </h2>
          </div>
          <div>
            <h3 id="left-3" className="text-[25px] ">
              Our vision is to revolutionize the way brands and advertisers
              target, reach
            </h3>
          </div>
          <div className="w-full  pt-5">
            <div id="left-4" className="gradient-bar"></div>
          </div>
        </div>
        <div id="container-img-world" className="w-[50%] relative ">
          <Image
            id="img-world"
            src={world}
            alt="world"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </>
  );
};

export default Information;
