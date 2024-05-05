"use client";
import React, { useEffect, useRef } from "react";
import animation from "../../styles/css/animation.module.scss";
import "../../styles/css/app.scss";

export default function HelloName() {
  const helloWorldRef = useRef<HTMLDivElement>(null);
  const helloNameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const helloWorld = helloWorldRef.current;
    const helloName = helloNameRef.current;

    const onHelloWorldAnimationEnd = () => {
      if (helloName) {
        helloWorld?.removeEventListener(
          "animationend",
          onHelloWorldAnimationEnd
        );
        animateText(helloName);
      }
    };
    if (helloWorld) {
      helloWorld.classList.add(animation.animated);
      helloWorld.addEventListener("animationend", () => {
        if (helloName) {
          helloName.classList.add(animation.animated);
          animateText(helloName);
        }
      });
    }
  }, []);

  const animateText = (element: HTMLElement) => {
    const text = element.textContent;
    element.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
      if (i < text!.length) {
        element.textContent += text![i];
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);
  };

  return (
    <div>
      <div className="container-main">
        <div className="wrapper-grain">
          <div className="container-grain">
            <div className="components">
              <div ref={helloWorldRef} className="hello-world">
                Hello World,
              </div>
              <h1 ref={helloNameRef} className="hello-name">
                I am Harsha
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
