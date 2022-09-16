import { useState } from 'react';
import Logo from '../assets/images/shared/logo.svg';

const COLORS = [
  {
    id: '#0B0D17',
    rgb: '11, 13, 23',
    hsl: '230°, 35%, 7%',
    style: 'bg-dark text-white',
  },
  {
    id: '#D0D6F9',
    rgb: '208, 214, 249',
    hsl: '231°, 77%, 90%',
    style: 'bg-light text-dark',
  },
  {
    id: '#FFFFFF',
    rgb: '255, 255, 255',
    hsl: '0°, 0%, 100%',
    style: 'bg-white text-dark',
  },
];

const HEADINGS = [
  {
    id: '0',
    title: 'Heading 1 - Bellefair Regular - 150px',
    body: 'EARTH',
    style: 'text-5xl font-bellefair',
  },
  {
    id: '1',
    title: 'Heading 2 - Bellefair Regular - 100px',
    body: 'VENUS',
    style: 'text-4xl font-bellefair',
  },
  {
    id: '2',
    title: 'Heading 3 - Bellefair Regular - 56px',
    body: 'JUPITER & SATURN',
    style: 'text-3xl font-bellefair',
  },
  {
    id: '3',
    title: 'Heading 4 - Bellefair Regular - 32px',
    body: 'URANUS, NEPTUNE, & PLUTO',
    style: 'text-2xl font-bellefair',
  },
  {
    id: '4',
    title: 'Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space',
    body: 'SO, YOU WANT TO TRAVEL TO SPACE',
    style: 'text-xl tracking-widest text-light font-barlowCondensed',
  },
];

const SUBHEADINGS = [
  {
    id: '0',
    title: 'Subheading 1 - Bellefair Regular - 28px',
    body: '384,400 km',
    style: 'text-xl font-bellefair',
  },
  {
    id: '1',
    title:
      'Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space',
    body: 'AVG. DISTANCE',
    style: 'text-sm font-barlowCondensed',
  },
  {
    id: '2',
    title: 'Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space',
    body: 'EUROPA',
    style: 'font-barlowCondensed',
  },
  {
    id: '3',
    title: 'Body Text',
    body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. ',
    style: 'text-md',
  },
];

const LINKS = [
  { id: '00', title: 'ACTIVE', style: 'border-b-2' },
  { id: '01', title: 'HOVERED', style: 'border-b-2 border-white/50' },
  { id: '02', title: 'IDLE' },
];

const TABS = [
  { name: 'MOON', style: 'border-b-2 border-white' },
  { name: 'MARS' },
  { name: 'EUROPA' },
];

function DesignSystem() {
  return (
    <div className="container my-16 max-w-[80rem] space-y-24">
      <header className="flex items-center justify-between">
        <img src={Logo} alt="logo" />
        <h1 className="font-barlowCondensed text-light text-lg uppercase tracking-widest">
          Design System
        </h1>
      </header>

      {/* Colors Section */}
      <section className="space-y-12">
        <h5 className="font-barlowCondensed text-lg uppercase tracking-widest">
          <span className="mr-6 font-bold text-white/25">01</span> Colors
        </h5>

        <div className="flex gap-8">
          {COLORS.map((color) => (
            <div className="grow" key={color.id}>
              <div
                className={`font-bellefair + mb-4 border px-6 pt-16 pb-6 text-lg ${color.style}`}
              >
                {color.id}
              </div>
              <p className="text-md">
                <span className="text-light mr-14">RGB</span> {color.rgb}
              </p>
              <p className="text-md">
                <span className="text-light mr-14">HSL</span> {color.hsl}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Typography Section */}
      <section className="space-y-12">
        <h5 className="font-barlowCondensed text-lg uppercase tracking-widest">
          <span className="mr-6 font-bold text-white/25">02</span> Typography
        </h5>

        <div className="flex gap-8">
          <div className="basis-full">
            {HEADINGS.map((heading) => (
              <div key={heading.id} className="mb-6 space-y-2">
                <p className="text-md text-light">{heading.title}</p>
                <p className={heading.style}>{heading.body}</p>
              </div>
            ))}
          </div>

          <div className="basis-full">
            {SUBHEADINGS.map((subHeading) => (
              <div key={subHeading.id} className="mb-6 space-y-2">
                <p className="text-md text-light">{subHeading.title}</p>
                <p className={`font-bellefair + ${subHeading.style}`}>
                  {subHeading.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Elements */}
      <section className="space-y-12">
        <h5 className="font-barlowCondensed text-lg uppercase tracking-widest">
          <span className="mr-6 font-bold text-white/25">03</span> Interactive
          Elements
        </h5>
      </section>

      {/* Navigation */}
      <div>
        <nav>
          <ul className="flex items-center justify-center gap-32 bg-white/5">
            {LINKS.map((link) => (
              <li
                key={link.id}
                className={`font-barlowCondensed + cursor-pointer py-8 uppercase ${link.style}`}
              >
                <a>
                  <span className="font-bold">{link.id}</span> {link.title}
                </a>
              </li>
            ))}
          </ul>

          <p className="text-light text-md mt-8 text-center">
            Different States of Navigation Bar
          </p>
        </nav>
      </div>

      <div className="flex justify-around">
        <div className="space-y-36">
          {/* Idle Main Button */}
          <div>
            <button className="font-bellefair text-dark rounded-full w-[274px] h-[274px] bg-white text-2xl uppercase tracking-widest">
              Explore
            </button>
            <p className="text-md text-center text-light mt-6">
              Landing Page Main Button - Idle
            </p>
          </div>

          {/* Hover Main Button */}
          <div>
            <button className="font-bellefair text-dark rounded-full w-[274px] h-[274px] bg-white text-2xl uppercase tracking-widest hover:ring-[88px] hover:ring-white/10 ease-in-out duration-500">
              Explore
            </button>
            <p className="text-md text-center text-light mt-28">
              Landing Page Main Button - Hover
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center">
          <div>
            <nav>
              <ul className="flex justify-center gap-6">
                {TABS.map((tab) => (
                  <li key={tab.name}>
                    <button
                      className={`text-light font-barlowCondensed uppercase pb-2 hover:border-b-2 hover:border-white/50 + ${tab.style}`}
                    >
                      {tab.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <p className="text-md text-light mt-2">
              Tabs (Active, Hover, & Idle)
            </p>
          </div>

          <div>
            <nav>
              <ul className="flex justify-center items-center">
                <li>
                  <button className="p-2">
                    <span className="block rounded-full w-2.5 h-2.5 bg-white opacity-17 hover:opacity-50 ease-in-out duration-300">
                      <span className="sr-only">"Commander"</span>
                    </span>
                  </button>
                </li>
                <li>
                  <button className="p-2">
                    <span className="block rounded-full w-2.5 h-2.5 bg-white opacity-17 hover:opacity-50 ease-in-out duration-300">
                      <span className="sr-only">"Mission Specialist"</span>
                    </span>
                  </button>
                </li>
                <li>
                  <button className="p-2">
                    <span className="block rounded-full w-2.5 h-2.5 bg-white opacity-17 hover:opacity-50 ease-in-out duration-300">
                      <span className="sr-only">"Pilot"</span>
                    </span>
                  </button>
                </li>
                <li>
                  <button className="p-2">
                    <span className="block rounded-full w-2.5 h-2.5 bg-white opacity-17 hover:opacity-50 ease-in-out duration-300">
                      <span className="sr-only">"Flight Engineer"</span>
                    </span>
                  </button>
                </li>
              </ul>
            </nav>
            <p className="text-md text-light mt-2">
              Slider 1 States (Active, Hover, & Idle)
            </p>
          </div>

          <div>
            <nav>
              <ul className="flex flex-col justify-center items-center gap-4">
                <li>
                  <button className="block rounded-full w-10 h-10 border border-white/25 text-white font-bellefair hover:border-white/100 ease-in-out duration-300">
                    1
                  </button>
                </li>
                <li>
                  <button className="block rounded-full w-10 h-10 border border-white/25 text-white font-bellefair hover:border-white/100 ease-in-out duration-300">
                    2
                  </button>
                </li>
                <li>
                  <button className="block rounded-full w-10 h-10 border border-white/25 text-white font-bellefair hover:border-white/100 ease-in-out duration-300">
                    3
                  </button>
                </li>
              </ul>
            </nav>
            <p className="text-md text-light mt-2">
              Slider 2 States (Active, Hover, & Idle)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignSystem;
