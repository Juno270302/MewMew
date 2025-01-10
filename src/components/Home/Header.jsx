"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Lenis from "lenis";
import logo from "../../assets/Image/logo.png";

const Header = () => {
  const menuItemsRef = useRef([]);
  const textRef = useRef(null);

  const circleText = "Scroll down - Scroll down -";

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Tạo hiệu ứng cho từng mục trong danh sách

    gsap.to(textRef.current, {
      rotation: 360,
      repeat: -1,
      duration: 10,
      ease: "linear",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".menu-screen", // Kích hoạt khi container vào viewport
        start: "20% top", // Bắt đầu khi container đạt 80% viewport
        end: "bottom top", // Kết thúc khi container ra khỏi viewport
        scrub: true, // Cuộn mượt
        markers: true,
      },
    });

    // Thêm các phần tử vào timeline
    tl.fromTo(
      ".img",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5 },
      0
    );
    menuItemsRef.current.forEach((item, index) => {
      tl.fromTo(
        item,
        { y: 50, opacity: 0 }, // Trạng thái bắt đầu
        { y: 0, opacity: 1, duration: 0.5 },
        index * 0.2 // Thời gian delay giữa các phần tử
      );
    });

    const es = gsap.fromTo(
      ".bg",
      { opacity: 1 },
      {
        opacity: 0,
        duration: 0.5,
        x: -1000,
        scrollTrigger: {
          trigger: ".menu-screen",
          start: "top top",
          end: "80% 50%", // Tăng giá trị này để scroll lâu hơn
          pin: true,
          scrub: true,
        },
      }
    );
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
      <div className="sticky top-0 z-[1000] ">
        <div className="flex justify-center items-center space-x-20 py-2  bg-black">
          <div>
            <Image
              src={logo}
              alt="logo"
              width={200}
              height={100}
              className="img"
            />
          </div>

          <div className="bg fixed w-full top-0 right-0 h-[100vh] bg-slate-100 text-black z-[100] ">
            <p className="h-full flex justify-center items-center">
              Chào Mừng Đến Với Golden Cloud Solution
            </p>
            <div className="absolute bottom-0 ">
              <div className="flex items-center justify-center py-10">
                <div
                  ref={textRef}
                  className="relative w-40 h-40 rounded-full flex items-center justify-center"
                >
                  {circleText.split("").map((char, index) => (
                    <span
                      key={index}
                      style={{ transform: `rotate(${index * 12.3}deg)` }}
                      className="rotate-text"
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <ul className="flex space-x-5">
            {["Trang Chủ", "Dịch Vụ", "Liên Hệ", "Blog", "Dự Án"].map(
              (text, index) => (
                <li
                  key={index}
                  ref={(el) => (menuItemsRef.current[index] = el)}
                  className="text-lg font-medium"
                >
                  {text}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="menu-screen h-screen "></div>
    </>
  );
};

export default Header;
