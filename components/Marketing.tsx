"use client"
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";
import Image from "next/image";
import Img1 from '@/public/Img1.png'
import { WobbleCard } from "@/components/ui/wobble-card";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function FlipWordsDemo() {
  const words = ["Full Stack Development", "Cyber Security", "Frontend Developer", "Backend Developer"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="lg:text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 md:text-2xl sm:text-2xl ">
        Build your career in
        <FlipWords words={words} /> <br />
        with EdTech
      </div>
    </div>
  );
}



export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 w-full max-w-7xl mx-auto lg:grid-cols-3">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] relative"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Master Full-Stack Development
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Build responsive and dynamic web applications with ease. Become a full-stack developer and make an impact.
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] relative bg-blue-900">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Defend the Digital Realm
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Step into cybersecurity. Protect data, secure networks, and become the shield against cyber threats.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] relative bg-blue-900">
        <div className="max-w-sm md:max-w-lg">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Join the Future of Tech
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Enroll today and transform your career. Master full-stack development and cybersecurity to become a tech leader.
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}

export default function Marketing() {
  return (
      <div>
          <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                  <FlipWordsDemo />
              </div>
              <div className="hidden md:block">
                  <Image src={Img1} alt={""} className="pt-[9rem] h-[45rem] w-[40rem]" />
              </div>
          </div>
          <br />
          <WobbleCardDemo />
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <StickyScrollRevealDemo/>
          <br/>
          <br/>
          <InfiniteMovingCardsDemo/>
          <br/>
          <br/>
          <br/>
          <Footer/>
      </div>
  );
}


const content = [
  
  {
    title: "Full Stack Development",
    description:
      "Full-stack development involves building both the front-end and back-end of web applications. Full-stack developers work with technologies like HTML, CSS, and JavaScript for the user interface, and Node.js, Python, or Ruby for server-side logic and databases. This comprehensive skill set allows them to create complete and functional web solutions from start to finish.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Full Stack Development
      </div>
    ),
  },
  {
    title: "Cyber Security",
    description:
      "Cybersecurity focuses on protecting systems, networks, and data from cyber threats. It involves implementing measures like firewalls, encryption, and intrusion detection systems to safeguard against unauthorized access, data breaches, and attacks. Professionals in this field work to ensure the confidentiality, integrity, and availability of information, crucial for maintaining trust and security in the digital world.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Cyber Security
      </div>
    ),
  },
  {
    title: "Frontend Developer",
    description:
      "Frontend development focuses on designing and implementing the user interface (UI) and user experience (UX) of a web application. It involves using technologies like HTML, CSS, and JavaScript to create responsive and interactive layouts that users can easily navigate. Frontend developers aim to deliver a seamless and visually appealing experience, ensuring the application looks good and works well across different devices and browsers.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Frontend Developer
      </div>
    ),
  },
  {
    title: "Backend Developer",
    description:
      "Backend development involves creating and maintaining the server-side logic, databases, and application programming interfaces (APIs) that power the functionality of a web application. It ensures the smooth operation of an app, handling data storage, user authentication, and business logic. Backend developers work with languages like Python, Java, and Node.js to build robust, scalable systems.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Backend Developer
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-10 md:space-y-0">
        <div className="flex flex-col space-y-4">
          
          <p className="text-sm text-gray-600">
            
          </p>
          <div className="flex space-x-2">
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="font-bold">Reach out to us</h3>
          <p className="text-sm text-gray-600">Get your questions answered about learning with EdTech.</p>
          <p className="font-bold text-gray-800">
            <span role="img" aria-label="phone">
              📞
            </span>{" "}
            Call +91 9999999999
          </p>
        </div>
        <div className="flex flex-wrap space-y-4 md:space-y-0 md:space-x-10">
          <div className="flex flex-col space-y-2">
            <h4 className="font-bold">Company</h4>
            <Link href="#">About Us</Link>
            <Link href="#">Shikshodaya</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Blogs</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms and Conditions</Link>
          </div>
          <div className="flex flex-col space-y-2">
            <h4 className="font-bold">Help & support</h4>
            <Link href="#">User Guidelines</Link>
            <Link href="#">Site Map</Link>
            <Link href="#">Refund Policy</Link>
            <Link href="#">Takedown Policy</Link>
            <Link href="#">Grievance Redressal</Link>
          </div>
          <div className="flex flex-col space-y-2">
            <h4 className="font-bold">Company</h4>
            <Link href="#">Learner app</Link>
            <Link href="#">Educator app</Link>
            <Link href="#">Parent app</Link>
          </div>
          <div className="flex flex-col space-y-2">
            <h4 className="font-bold">Popular goals</h4>
            <Link href="#">Full Stack Development</Link>
            <Link href="#">Cyber Security</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0">
        <p className="text-sm text-gray-600">© 2024 Sorting Hat Technologies Pvt Ltd</p>
        <div className="flex space-x-5 text-gray-600">
          <Link href="#"><FaFacebookF /></Link>
          <Link href="#"><FaTwitter /></Link>
          <Link href="#"><FaYoutube /></Link>
          <Link href="#"><FaInstagram /></Link>
          <Link href="#"><FaLinkedinIn /></Link>
        </div>
      </div>
    </footer>
  );
};

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </div>
  );
}
 
const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];


