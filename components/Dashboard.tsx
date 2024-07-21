"use client"

import React, { useState } from "react";
import SidebarLayout from "@/components/sidebar";

const Dashboard = () => {
  const courses = [
    {
      name: "Full Stack",
      description: "Learn to build complete web applications from scratch.",
      students: 120,
      progress: 75,
    },
    {
      name: "Cyber Security",
      description: "Understand the fundamentals of cybersecurity and defense.",
      students: 85,
      progress: 60,
    },
    {
      name: "Frontend",
      description: "Master the art of building modern and responsive interfaces.",
      students: 150,
      progress: 90,
    },
    {
      name: "Backend",
      description: "Learn to develop robust and scalable server-side applications.",
      students: 100,
      progress: 80,
    },
  ];

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (course : object) => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="p-4 bg-white dark:bg-neutral-800 rounded-lg shadow cursor-pointer"
              onClick={() => openModal(course)}
            >
              <h2 className="text-xl font-semibold">{course.name}</h2>
              <p className="mt-2">{course.description}</p>
              <p className="mt-4 text-lg font-bold">{course.students} Students</p>
              <div className="mt-4">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="mt-1 text-sm">{course.progress}% Complete</p>
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

const Modal = ({ course, onClose}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-bold mb-4">{course.name}</h2>
        <p className="mb-4">{course.description}</p>
        <p className="mb-4 text-lg font-semibold">{course.students} Students</p>
        <div className="mb-4">
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-blue-500 rounded-full"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
          <p className="mt-1 text-sm">{course.progress}% Complete</p>
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
