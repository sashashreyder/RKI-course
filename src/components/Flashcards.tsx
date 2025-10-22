import React, { useState } from "react";

interface FlashcardItem {
  word: string;
  ipa?: string;
  meaning: string;
  example: string;
}

interface FlashcardsProps {
  items: FlashcardItem[];
}

const Flashcards: React.FC<FlashcardsProps> = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const current = items[index];

  const nextCard = () => {
    setFlipped(false);
    setIndex((prev) => (prev + 1) % items.length);
  };

  const prevCard = () => {
    setFlipped(false);
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        className="w-[90vw] max-w-md aspect-3/2 perspective-[1000px] cursor-pointer select-none"
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-3d ${
            flipped ? "transform-[rotateY(180deg)]" : ""
          }`}
        >
          <div className="absolute w-full h-full backface-hidden bg-[#0096d6] text-white flex flex-col justify-center items-center rounded-xl shadow-xl p-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center">
              {current.word}
            </h2>
            {current.ipa && (
              <p className="text-white/80 mt-3 text-base italic">{current.ipa}</p>
            )}
            <p className="text-sm mt-4 opacity-80 text-center">👆 Tap to flip</p>
          </div>

          <div className="absolute w-full h-full backface-hidden transform-[rotateY(180deg)] bg-[#8cc63f] text-white flex flex-col justify-center items-center rounded-xl shadow-xl p-6">
            <p className="text-lg sm:text-xl font-semibold text-center">
              {current.meaning}
            </p>
            {current.example && (
              <p className="text-sm mt-3 italic opacity-90 text-center">
                {current.example}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={prevCard}
          className="px-5 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700 transition font-medium shadow-md"
        >
          ⬅ Prev
        </button>
        <button
          onClick={nextCard}
          className="px-5 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700 transition font-medium shadow-md"
        >
          Next ➡
        </button>
      </div>

      <p className="text-gray-600 text-sm mt-1">
        Card {index + 1} of {items.length}
      </p>
    </div>
  );
};

export default Flashcards;






