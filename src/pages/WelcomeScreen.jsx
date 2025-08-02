import { Link } from 'react-router-dom';

const WelcomeScreen = () => {
  return (
    // <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-4 animate-fadeIn">
      <div className=" justify-center bg-white shadow-xl rounded-2xl w-full  p-20 md:p-10 transition-all">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Welcome to HerCompass
        </h2>
        <p className="text-center text-gray-600 mb-6 text-base md:text-lg">
          Your trusted companion for reproductive health education and support.
        </p>

        {/* Language Selector */}
        <div className="mb-8 text-center">
          <p className="font-medium mb-2">Select Your Language</p>
          <div className="flex justify-center flex-wrap gap-2">
            <button className="bg-black text-white px-4 py-2 rounded hover:scale-105 transition">English</button>
            <button className="bg-gray-300 px-4 py-2 rounded hover:scale-105 transition">Español</button>
            <button className="bg-gray-300 px-4 py-2 rounded hover:scale-105 transition">Français</button>
            <button className="bg-gray-300 px-4 py-2 rounded hover:scale-105 transition">Kiswahili</button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-4 mb-8 sm:grid-cols-1 md:grid-cols-3">
          <div className="border rounded-lg p-4 text-center shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Education Hub</h3>
            <p className="text-sm text-gray-600 mb-3">Comprehensive guides on reproductive health.</p>
            <Link to="/topic" className="text-sm bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600 transition">Explore Now</Link>
          </div>

          <div className="border rounded-lg p-4 text-center shadow hover:shadow-lg transition ">
            <h3 className="font-semibold mb-2">Ask Questions</h3>
            <p className="text-sm text-gray-600 mb-3">Get answers privately and anonymously.</p>
            <button className="text-sm bg-green-900 text-white px-3 py-1 rounded hover:bg-pink-600 transition">Start Chat</button>
          </div>

          <div className="border rounded-lg p-4 text-center shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Community Stories</h3>
            <p className="text-sm text-gray-600 mb-3">Read experiences from women in your community.</p>
            <button className="text-sm bg-green-900 text-white px-3 py-1 rounded hover:bg-pink-600 transition">Read Stories</button>
          </div>

            <div className="border rounded-lg p-4 text-center shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Community Stories</h3>
            <p className="text-sm text-gray-600 mb-3">Read experiences from women in your community.</p>
            <button className="text-sm  text-white px-3 py-1 rounded hover:bg-pink-600 transition">Read Stories</button>

            {/* style={{ background:'#4ABBB7'}} */}
          </div>

            <div className="border rounded-lg p-4 text-center shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Community Stories</h3>
            <p className="text-sm text-gray-600 mb-3">Read experiences from women in your community.</p>
            <button className="text-sm bg-green-900 text-white px-3 py-1 rounded hover:bg-pink-600 transition">Read Stories</button>
          </div>

            <div className="border rounded-lg p-4 text-center shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Community Stories</h3>
            <p className="text-sm text-gray-600 mb-3">Read experiences from women in your community.</p>
            <button className="text-sm bg-green-900 text-white px-3 py-1 rounded hover:bg-pink-600 transition">Read Stories</button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-8 sm:grid-cols-2 md:grid-cols-2">
          <button className="bg-gray-100 p-3 rounded shadow hover:shadow-md transition">Cycle Tracker</button>
          <button className="bg-gray-100 p-3 rounded shadow hover:shadow-md transition">Resources</button>
          <button className="bg-gray-100 p-3 rounded shadow hover:shadow-md transition">Self Assessment</button>
          <button className="bg-gray-100 p-3 rounded shadow hover:shadow-md transition">Settings</button>
        </div>

        {/* Get Started */}
        <div className="text-center  flex gap-4">
          <div>
          <Link
            to="/healthy-journey"
            className="bg-green-900 text-white px-6 py-3 rounded-full hover:bg-green-700 hover:scale-105 transition"
          >
            Get Started
          </Link>

          </div>


               <div className=''>
            <Link
            to="/topic"
            className="bg-green-900  text-white px-6 py-3 rounded-full hover:bg-green-700 hover:scale-105 transition"
          >
            Get Started
          </Link>
          </div>
        </div>
      </div>
  
  );
};

export default WelcomeScreen;