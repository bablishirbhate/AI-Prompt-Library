import { useState } from "react";
import type { Prompt } from "../types/prompt";
import { v4 as uuid } from "uuid";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  addPrompt: (prompt: Prompt) => void;
}

const PromptModal = ({ isOpen, onClose, addPrompt }: Props) => {

  const [title, setTitle] = useState("");
  const [prompt, setPrompt] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Coding");
  const [tags, setTags] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    if (!title || !prompt) {
      alert("Title and Prompt are required");
      return;
    }

    const newPrompt: Prompt = {

      id: uuid(),

      title,

      prompt,

      description,

      category,

      tags: tags.split(","),

      favorite: false,

      pinned: false,

      createdAt: new Date().toISOString(),

      updatedAt: new Date().toISOString(),

      order: Date.now(),
    };

    addPrompt(newPrompt);

    setTitle("");
    setPrompt("");
    setDescription("");
    setCategory("Coding");
    setTags("");

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

      <div className="bg-white w-[500px] p-6 rounded">

        <h2 className="text-2xl font-bold mb-5">
          Add Prompt
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            placeholder="Title"
            className="w-full border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Prompt"
            className="w-full border p-2 rounded"
            rows={4}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <textarea
            placeholder="Description"
            className="w-full border p-2 rounded"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <select
            className="w-full border p-2 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Coding</option>
            <option>Marketing</option>
            <option>Content Writing</option>
            <option>Email</option>
            <option>Resume</option>
            <option>SQL</option>
            <option>Design</option>
            <option>Social Media</option>
            <option>Productivity</option>
            <option>Others</option>
          </select>

          <input
            placeholder="react,javascript"
            className="w-full border p-2 rounded"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default PromptModal;