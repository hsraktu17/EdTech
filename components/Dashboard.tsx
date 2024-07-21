"use client";

import React, { useState } from "react";
import SidebarLayout from "@/components/sidebar";

type Course = {
  name: string;
  description: string;
  students: number;
  progress: number;
  syllabus: string[];
};

type ModalProps = {
  course: Course;
  onClose: () => void;
};

const Dashboard: React.FC = () => {
  const courses: Course[] = [
    {
      name: "Full Stack",
      description: "Learn to build complete web applications from scratch.",
      students: 120,
      progress: 75,
      syllabus: [
        "Introduction to Web Development",
        "Frontend Development with HTML, CSS, and JavaScript",
        "Backend Development with Node.js and Express",
        "Database Management with MongoDB and PostgreSQL",
        "Building and Deploying Full Stack Applications",
      ],
    },
    {
      name: "Cyber Security",
      description: "Understand the fundamentals of cybersecurity and defense.",
      students: 85,
      progress: 60,
      syllabus: [
        "Introduction to Cyber Security",
        "Network Security",
        "Cryptography",
        "Application Security",
        "Security Operations and Monitoring",
      ],
    },
    {
      name: "Frontend",
      description: "Master the art of building modern and responsive interfaces.",
      students: 150,
      progress: 90,
      syllabus: [
        "Introduction to Frontend Development",
        "HTML and CSS Basics",
        "JavaScript and DOM Manipulation",
        "Advanced CSS Techniques",
        "Modern JavaScript Frameworks (React, Vue, Angular)",
      ],
    },
    {
      name: "Backend",
      description: "Learn to develop robust and scalable server-side applications.",
      students: 100,
      progress: 80,
      syllabus: [
        "Introduction to Backend Development",
        "Node.js and Express Basics",
        "Database Management with SQL and NoSQL",
        "Authentication and Authorization",
        "Building and Deploying RESTful APIs",
      ],
    },
  ];

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCourse(null);
    setIsModalOpen(false);
  };

  return (
    <SidebarLayout>
      <div className="flex flex-1 p-4 md:p-10 bg-gray-100 dark:bg-neutral-900 flex-col gap-4">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => openModal(course)}
            >
              <h2 className="text-2xl font-semibold mb-2">{course.name}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{course.description}</p>
              <p className="text-lg font-bold mb-4">{course.students} Students</p>
              <div className="flex justify-center items-center mb-4">
                <CircularProgressBar progress={course.progress} />
              </div>
            </div>
          ))}
        </div>
        {isModalOpen && selectedCourse && (
          <Modal course={selectedCourse} onClose={closeModal} />
        )}
      </div>
    </SidebarLayout>
  );
};

const Modal: React.FC<ModalProps> = ({ course, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300">
      <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-bold mb-4">{course.name}</h2>
        <p className="mb-4">{course.description}</p>
        <p className="mb-4 text-lg font-semibold">{course.students} Students</p>
        <div className="flex justify-center items-center mb-4">
          <CircularProgressBar progress={course.progress} />
        </div>
        <h3 className="text-xl font-semibold mb-4">Syllabus:</h3>
        <ul className="list-disc list-inside">
          {course.syllabus.map((topic, idx) => (
            <li key={idx} className="mb-2">
              {topic}
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

type CircularProgressBarProps = {
  progress: number;
};

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ progress }) => {
  const radius = 50;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
      className=""
    >
      <circle
        stroke="#e5e7eb"
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#3b82f6"
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference + " " + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        className="text-xl font-bold fill-current text-gray-700 dark:text-white"
      >
        {progress}%
      </text>
    </svg>
  );
};

export default Dashboard;
