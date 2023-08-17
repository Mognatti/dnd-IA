import { HfInference } from "@huggingface/inference";
import { useState } from "react";

export default function Chat() {
  const [input, setInput] = useState("");
  const [botOutputs, setBotOutputs] = useState<string[]>([]);
  const [pastUserInputs, setPastUserInputs] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const hf = new HfInference(import.meta.env.VITE_HI_TOKEN);

  const addMessage = async (message: string) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const res = await hf.conversational({
        model: "microsoft/DialoGPT-large",
        inputs: {
          text: message,
          past_user_inputs: pastUserInputs,
          generated_responses: botOutputs,
        },
      });
      setPastUserInputs((prevInputs) => [...prevInputs, message]);
      setBotOutputs((prevOutputs) => [...prevOutputs, res.generated_text]);
      console.log(res);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;
    addMessage(input);
    setInput("");
  };

  const chatHistory = pastUserInputs.map((userInput, idx) => (
    <div key={userInput}>
      <p>Você: {userInput}</p>
      <p>Chat: {botOutputs[idx]}</p>
    </div>
  ));

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div>
          <div>{chatHistory}</div>
          <p>{isLoading && !isError && "..."}</p>
          <p>{isError && "Algo deu errado, tente novamente..."}</p>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}
