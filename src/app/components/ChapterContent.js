// components/ChapterContent.js
import { useEffect } from 'react';

export default function ChapterContent({ content }) {
  // useEffect(() => {
  //   // Add a style tag to the document head
  //   const style = document.createElement('style');
  //   style.textContent = `
  //     .prose * {
  //       text-shadow: 0 0 5px #ACA992;
  //     }
  //   `;
  //   document.head.appendChild(style);

  //   // Clean up function to remove the style tag when the component unmounts
  //   return () => {
  //     document.head.removeChild(style);
  //   };
  // }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-36 2xl:px-52">
      <article className="prose dark:prose-dark max-w-none text-gray-900 dark:text-[#ACA992] ">
        <div className="content-wrapper" dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </div>
  );
}