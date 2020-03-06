import React from 'react';

export function About() {
  return (
    <div className="bg-white rounded overflow-hidden shadow-lg">
      <img
        src="https://res.cloudinary.com/onlinechesstimer/image/upload/v1579381863/smaller_miles_and_i_adqywo.png"
        alt="My son and I in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-700">
          About me
        </div>
        <div className="text-gray-700 leading-normal">
          <p className="mb-6">
            I am a Software Engineer in the Washington DC area
            building web apps with Ruby on Rails, React, and Vue.
          </p>
          <p className="mb-6">
            I am way into taking my son on hikes,{' '}
            <a
              className="text-blue-400 hover:text-blue-600"
              href="https://twitter.com/lawn_champ/status/1209288227275902977"
            >
              smoking meats
            </a>
            , and{' '}
            <a
              className="text-blue-400 hover:text-blue-600"
              href="https://twitter.com/lawn_champ/status/1217650684226670593"
            >
              cutting my grass.
            </a>
          </p>
          <p className="mb-6">
            My son is about to turn 2 so I felt it was about time to
            start teaching him chess. Knowing that we have years of
            chess ahead of us, I built this simple timer for us to
            use.
          </p>
          If you enjoy using this timer or have any comments, please
          reach out to me on{' '}
          <a
            className="text-blue-400 hover:text-blue-600"
            href="https://twitter.com/lawn_champ"
          >
            Twitter
          </a>
          !
        </div>
      </div>
    </div>
  );
}
