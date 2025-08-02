import React, { useState } from 'react';

const Inquire = () => {
  const [question, setQuestion] = useState('');
  const [submittedQuestions, setSubmittedQuestions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (question.trim() !== '') {
      setSubmittedQuestions([...submittedQuestions, question]);
      setQuestion('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-[#4ABBB7]">Ask a Question</h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question here..."
          rows={4}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ABBB7]"
        />

        <button
          type="submit"
          className="mt-3 px-6 py-2 bg-[#4ABBB7] text-white rounded hover:bg-[#3aa9a4] transition"
        >
          Submit Question
        </button>
      </form>

      {/* Optional: Show submitted questions */}
      {submittedQuestions.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Submitted Questions:</h2>
          {submittedQuestions.map((q, index) => (
            <div key={index} className="p-3 border rounded-md bg-gray-50">
              {q}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Inquire;
