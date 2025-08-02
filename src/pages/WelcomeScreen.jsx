import { Link } from 'react-router-dom';

const WelcomeScreen = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-6 md:px-20">
      {/* Main Section: Left Text + Right Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mb-16">
        {/* Left Column: Intro Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#4ABBB7] mb-6">
            Welcome to HerCompass
          </h1>
          <p className="text-gray-700 text-lg mb-6 max-w-xl">
            Your trusted companion for reproductive health education and support. Access reliable information, get answers to your questions, and connect with your community — all while maintaining your privacy.
          </p>

          <Link
            to="/healthy-journey"
            className="bg-[#4ABBB7] text-white px-6 py-3 rounded hover:bg-[#3aa5a2] transition inline-block"
          >
            Get Started
          </Link>
        </div>

        {/* Right Column: Image */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/400x300?text=Medical+Image" // Replace with actual image asset if available
            alt="Medical tools"
            className="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {/* Education Hub */}
        <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-[#4ABBB7] mb-2">Education Hub</h3>
          <p className="text-gray-600 text-sm mb-4">Explore guides and tools about reproductive health.</p>
          <Link
            to="/topic"
            className="bg-[#4ABBB7] text-white px-4 py-2 rounded hover:bg-[#3aa5a2] transition"
          >
            Explore
          </Link>
        </div>

        {/* Ask Questions */}
        <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-[#4ABBB7] mb-2">Ask Questions</h3>
          <p className="text-gray-600 text-sm mb-4">Get answers privately and anonymously.</p>
          <button className="bg-[#4ABBB7] text-white px-4 py-2 rounded hover:bg-[#3aa5a2] transition">
            Start Chat
          </button>
        </div>

        {/* Community Stories */}
        <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-[#4ABBB7] mb-2">Community Stories</h3>
          <p className="text-gray-600 text-sm mb-4">Read experiences from others like you.</p>
          <button className="bg-[#4ABBB7] text-white px-4 py-2 rounded hover:bg-[#3aa5a2] transition">
            Read Stories
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-500 text-sm mt-12">
        Your Health, Your Future
      </div>
    </div>
  );
};

export default WelcomeScreen;