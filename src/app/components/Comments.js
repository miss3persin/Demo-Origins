'use client'

import { useState } from 'react';

export default function Comments({ chapterId }) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment(''); // Clear comment box after submission
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Comments</h3>
      <form onSubmit={handleCommentSubmit} className="mt-4">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded"
          placeholder="Write a comment..."
          rows="4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Submit
        </button>
      </form>

      <div className="mt-4 space-y-4">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <p className="text-gray-900 dark:text-white">{comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-700 dark:text-gray-300">No comments yet. Be the first!</p>
        )}
      </div>
    </div>
  );
}
