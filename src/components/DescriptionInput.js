import { useEffect, useState } from "react";

const DescriptionInput = () => {
  const [text, setText] = useState("");
  useEffect(() => {
    console.log(text);
  });

  return (
    <form>
      <label>
        description:{" "}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
    </form>
  );
};

export default DescriptionInput;
