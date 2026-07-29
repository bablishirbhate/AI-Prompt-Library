import type { Prompt } from "../types/prompt";

interface Props {
  prompts: Prompt[];
  setPrompts: React.Dispatch<React.SetStateAction<Prompt[]>>;
}

const ImportExport = ({ prompts, setPrompts }: Props) => {

  const exportJSON = () => {

    const json = JSON.stringify(prompts, null, 2);

    const blob = new Blob([json], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "prompts.json";

    link.click();

    URL.revokeObjectURL(url);
  };

  const importJSON = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {

      try {

        const data = JSON.parse(
          e.target?.result as string
        );

        if (!Array.isArray(data)) {

          alert("Invalid JSON File");

          return;
        }

        setPrompts(data);

        alert("Prompts Imported Successfully");

      } catch {

        alert("Invalid JSON");

      }

    };

    reader.readAsText(file);

  };

  return (

    <div className="flex gap-3">

      <button
        onClick={exportJSON}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Export JSON
      </button>

      <input
        type="file"
        accept=".json"
        onChange={importJSON}
      />

    </div>

  );

};

export default ImportExport;