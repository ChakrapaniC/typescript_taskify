import React from "react";

interface prop {
  todo: string;
  settodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo:(e:React.FormEvent)=> void
}
const InputField: React.FC<prop> = ({todo , settodo, addTodo}) => {
  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        placeholder="enter your task"
        className="w-[500px] h-[50px] text-[20px] border-2 border-black rounded-xl px-4 bg-blue-300 text-black"
        onChange={(e) => settodo(e.target.value)}
        value={todo}
      />
    </form>
  );
};

export default InputField;
