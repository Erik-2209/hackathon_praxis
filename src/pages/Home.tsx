import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Users } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Home: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to QuizMaster</h1>
          <p className="text-xl mb-8">Test your knowledge with our interactive quizzes</p>
          {isAuthenticated ? (
            <Link 
              to="/dashboard" 
              className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition duration-300"
            >
              Go to Dashboard
            </Link>
          ) : (
            <div className="space-x-4">
              <Link 
                to="/login" 
                className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition duration-300"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-indigo-600 transition duration-300"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose QuizMaster?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <BookOpen size={48} className="text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Learn Anything</h3>
            <p className="text-gray-600">Access a wide variety of quizzes on different topics to expand your knowledge.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <Award size={48} className="text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
            <p className="text-gray-600">Monitor your performance and see how you improve over time.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <Users size={48} className="text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Join Community</h3>
            <p className="text-gray-600">Connect with other learners and share your knowledge and experiences.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Test Your Knowledge?</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of users who are already improving their skills with QuizMaster.</p>
          {!isAuthenticated && (
            <Link 
              to="/register" 
              className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition duration-300"
            >
              Get Started Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;