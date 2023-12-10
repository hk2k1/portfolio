'use client';

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import '../styles/css/app.scss'

import animation from '../styles/css/animation.module.scss'


export default function Home() {
  const helloWorldRef = useRef<HTMLDivElement>(null);
  const helloNameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const helloWorld = helloWorldRef.current;
    const helloName = helloNameRef.current;

    const onHelloWorldAnimationEnd = () => {
      if (helloName){
        helloWorld?.removeEventListener('animationend', onHelloWorldAnimationEnd);
        animateText(helloName);
      }
    }
    if(helloWorld) {
      helloWorld.classList.add(animation.animated);
      helloWorld.addEventListener('animationend', () => {
        if(helloName){
          helloName.classList.add(animation.animated);
          animateText(helloName);
        }
      });
    }
  }, []);

  const animateText = (element: HTMLElement) => {
    const text = element.textContent;
    element.textContent = '';
    let i = 0;
    const interval = setInterval(() => {
      if( i < text!.length ){
        element.textContent += text![i];
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);
  };

  return (
    <main >
      <div className='container-main'>
        <div className='container-grain'>
          <div className='components'>
          <div ref={helloWorldRef} className='hello-world'>
            Hello World,
          </div>
          <h1 ref={helloNameRef} className='hello-name'>I am Harsha</h1>
          </div>
        </div>
      </div>
    </main>
  )
}
