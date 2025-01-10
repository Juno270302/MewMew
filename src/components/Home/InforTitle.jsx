"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React from "react";

//image
import layer1 from "../../assets/Image/layer_1.png";
import people from "../../assets/Image/people.png";
import door from "../../assets/Image/door.png";
import underDoor from "../../assets/Image/under-door.png";
import rightDoor from "../../assets/Image/right-door.png";
import border from "../../assets/Image/border.png";

const InforTitle = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#cotainer-title", // Kích hoạt khi container vào viewport
        start: "top top", // Bắt đầu khi container đạt 80% viewport
        end: "+=4000 top", // Kết thúc khi container ra khỏi viewport
        scrub: true, // Cuộn mượt
        pin: true,
      },
    });

    tl.fromTo(
      "#img-layer-1-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, zIndex: 10, z: 10 }
    )
      .fromTo(
        "#img-people-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      )
      .fromTo(
        "#img-door-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, x: -10, duration: 1 }
      )
      .fromTo(
        "#img-under-door-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, x: -100, duration: 1 }
      )
      .fromTo(
        "#img-right-door-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 }
      )
      .fromTo("#img-border-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
  }, []);
  return (
    <div id="cotainer-title" className="h-[100vh] border">
      <div className=" w-full h-[100vh] flex items-center justify-center  px-20">
        <div className="relative flex ">
          <Image
            id="img-layer-1-title"
            src={layer1}
            alt="people"
            className=""
            width={550}
            height={550}
          />
          <div className="absolute -bottom-10 -left-36 z-50">
            <Image
              id="img-people-title"
              src={people}
              alt="people"
              className=""
              width={500}
              height={475}
            />
          </div>
          <div className=" h-full flex flex-col items-center space-y-6 ">
            <Image
              id="img-door-title"
              src={door}
              alt="door"
              className=" mt-7"
              width={272}
              height={242}
            />
            <div className="relative">
              <Image
                id="img-under-door-title"
                src={underDoor}
                alt="door"
                className=""
                width={412}
                height={115}
              />
            </div>
          </div>
          <div className=" h-full flex flex-col  space-y-2 mt-32 ">
            <Image
              id="img-right-door-title"
              src={rightDoor}
              alt="door"
              className=" "
              width={423}
              height={208}
            />
            <div className="relative">
              <Image
                id="img-border-title"
                src={border}
                alt="door"
                className=""
                width={338}
                height={114}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InforTitle;
