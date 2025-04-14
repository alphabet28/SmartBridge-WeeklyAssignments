import { useState } from "react";

const TextUpdater = () => {
  const [text, setText] = useState("");

  return (
    <div className="p-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="Type something..."
      />
      <p className="mt-2 text-lg text-gray-700">You typed: {text}</p>
    </div>
  );
};

export default TextUpdater;
