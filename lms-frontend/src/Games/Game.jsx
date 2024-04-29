import React from 'react';
import { Link } from 'react-router-dom';

function Game() {
  const links = [
    { id: 1, path: "http://localhost:3001/", title: "Random Questions Quiz", imageUrl: "randomQuiz.jpg" },
    { id: 2, path: "https://online-quiz-8566e.web.app/", title: "Find The Difference and Custom Quizzes", imageUrl: "hqdefault.jpg" },
    { id: 3, path: "http://127.0.0.1:5500/RoadFighter/index.html", title: "Car Race", imageUrl: "carrace.jpg" },
    // Add more links as needed
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-3 gap-4 p-7">
        {links.map(link => (
          <Link key={link.id} to={link.path} className="block">
            <a href={link.path} target='_blank' className="relative">
              <img src={link.imageUrl} alt={link.title} className="w-full h-{800px}" />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 text-white p-2">
                {link.title}
              </div>
            </a>
          </Link>
        ))}s
      </div>
    </div>
  );
}

export default Game;
