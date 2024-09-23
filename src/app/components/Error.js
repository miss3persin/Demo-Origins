import React, { useState, useEffect } from 'react';

export const Error = () => {
  const emoticons = [
    '(oꆤ︵ꆤo)',
    '(╥_╥)',
    '(ಥ﹏ಥ)',
    '(╯︵╰,)',
    '(っ- ‸ – ς)',
    '、ヽ｀(~д~*)、ヽ｀',
    '(⌯˃̶᷄ ﹏ ˂̶᷄⌯)',
  ];

  // Set a default emoticon for the initial render
  const defaultEmoticon = '(⌯˃̶᷄ ﹏ ˂̶᷄⌯)ﾟ';
  const [randomEmoticon, setRandomEmoticon] = useState(defaultEmoticon);

  // Set the random emoticon after the component has mounted
  useEffect(() => {
    const random = emoticons[Math.floor(Math.random() * emoticons.length)];
    setRandomEmoticon(random);
  }, []);

  return (
    <div className="flex items-center justify-center min-w-screen min-h-screen bg-gray-50 dark:bg-black">
      <div className='flex flex-col gap-10 items-center justify-center'>
        <p className='text-4xl text-gray-900 dark:text-[#ACA992]'>
          Failed to Get Chapter {randomEmoticon}
        </p>
        <p className='text-gray-900 dark:text-[#ACA992] text-center'>
          It's either the network connection is weak or the chapter isn't available yet.
        </p>
      </div>
    </div>
  );
};
