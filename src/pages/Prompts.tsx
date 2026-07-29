import { useEffect, useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import PromptCard from "../components/PromptCard";
import PromptModal from "../components/PromptModal";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ImportExport from "../components/ImportExport";

import type { Prompt } from "../types/prompt";



const Prompts = () => {
const [prompts, setPrompts] = useState<Prompt[]>([]);
const [openModal, setOpenModal] = useState(false);

const [search, setSearch] = useState("");
const [category, setCategory] = useState("");
const [favoriteOnly, setFavoriteOnly] = useState(false);
const [sortBy, setSortBy] = useState("Newest");


  const fetchPrompts = async () => {
  try {
    const res = await API.get("/");
    setPrompts(res.data);
  } catch (error) {
    console.error(error);
  }
};

 useEffect(() => {
  const data = localStorage.getItem("prompts");

  if (data) {
    setPrompts(JSON.parse(data));
  }
}, []);

useEffect(() => {
  localStorage.setItem("prompts", JSON.stringify(prompts));
}, [prompts]);



 const addPrompt = (prompt: Prompt) => {
  setPrompts((prev) => [...prev, prompt]);
};

  const deletePrompt = (id: string) => {
  setPrompts((prev) =>
    prev.filter((item) => item.id !== id)
  );
};


const favoritePrompt = (id: string) => {
  setPrompts((prev) =>
    prev.map((item) =>
      item.id === id
        ? { ...item, favorite: !item.favorite }
        : item
    )
  );
};

const duplicatePrompt = (id: string) => {
  const item = prompts.find((p) => p.id === id);

  if (!item) return;

  setPrompts((prev) => [
    ...prev,
    {
      ...item,
      id: crypto.randomUUID(),
      title: item.title + " Copy",
      createdAt: new Date().toISOString(),
    },
  ]);
};

const pinPrompt = (id: string) => {
  setPrompts(
    prompts.map((item) =>
      item.id === id
        ? { ...item, pinned: !item.pinned }
        : item
    )
  );
};

const copyPrompt = (text: string) => {
  navigator.clipboard.writeText(text);
  alert("Prompt copied successfully!");
};


const filteredPrompts = [...prompts]
  .filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.prompt.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "" || item.category === category;

    const matchesFavorite =
      !favoriteOnly || item.favorite;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesFavorite
    );
  })
  .sort((a, b) => {
    if (a.pinned !== b.pinned) {
      return Number(b.pinned) - Number(a.pinned);
    }

    switch (sortBy) {
      case "Newest":
        return (
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
        );

      case "Oldest":
        return (
          new Date(a.createdAt).getTime() -
          new Date(b.createdAt).getTime()
        );

      case "A-Z":
        return a.title.localeCompare(b.title);

      case "Z-A":
        return b.title.localeCompare(a.title);

      default:
        return 0;
    }
  });

const handleDragEnd = (event: any) => {
  const { active, over } = event;

  if (!over || active.id === over.id) return;

  const oldIndex = prompts.findIndex(
    (item) => item.id === active.id
  );

  const newIndex = prompts.findIndex(
    (item) => item.id === over.id
  );

  setPrompts(arrayMove(prompts, oldIndex, newIndex));
};
  

  return (

    <div className="flex">

      <Sidebar />

      <div className="ml-64 w-full min-h-screen bg-gray-100 dark:bg-gray-800">

        <Navbar />

        <div className="p-6">

          <div className="flex justify-between items-center mb-6">

  <h2 className="text-3xl font-bold">
    Prompt Management
  </h2>

  <div className="flex gap-3">
 


    <ImportExport
      prompts={prompts}
      setPrompts={setPrompts}
    />

    <button
      onClick={() => setOpenModal(true)}
      className="bg-blue-600 text-white px-5 py-2 rounded"
    >
      Add Prompt
    </button>

  </div>

</div>

          <div className="grid md:grid-cols-4 gap-4 mb-6">

  <SearchBar
    search={search}
    setSearch={setSearch}
  />

  <CategoryFilter
    category={category}
    setCategory={setCategory}
  />

  <select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
    className="border rounded-lg p-3"
  >
    <option>Newest</option>
    <option>Oldest</option>
    <option>A-Z</option>
    <option>Z-A</option>
  </select>

  <label className="flex items-center gap-2">
    <input
      type="checkbox"
      checked={favoriteOnly}
      onChange={(e) => setFavoriteOnly(e.target.checked)}
    />
    Favorites Only
  </label>

</div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

 <DndContext
  collisionDetection={closestCenter}
  onDragEnd={handleDragEnd}
>
  <SortableContext
    items={filteredPrompts.map((p) => p.id)}
    strategy={verticalListSortingStrategy}
  >
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      {filteredPrompts.length === 0 ? (
        <div className="col-span-full text-center py-20 text-gray-500 dark:text-gray-300">
          No prompts found.
        </div>
      ) : (
        filteredPrompts.map((item) => (
          <PromptCard
            key={item.id}
            prompt={item}
            onDelete={deletePrompt}
            onFavorite={favoritePrompt}
            onDuplicate={duplicatePrompt}
            onPin={pinPrompt}
            onCopy={copyPrompt}
          />
        ))
      )}

    </div>
  </SortableContext>
</DndContext>

</div>

        </div>

      </div>

      <PromptModal

        isOpen={openModal}

        onClose={() => setOpenModal(false)}

        addPrompt={addPrompt}

      />

    </div>

  );

};


export default Prompts;