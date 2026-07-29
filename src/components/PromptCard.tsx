// import type { Prompt } from "../types/prompt";
// import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";

// import {
//   FaEdit,
//   FaTrash,
//   FaHeart,
//   FaRegHeart,
//   FaClone,
//   FaCopy,
//   FaThumbtack,
// } from "react-icons/fa";

// interface Props {
//   prompt: Prompt;
//   onDelete: (id: string) => void;
//   onFavorite: (id: string) => void;
//   onDuplicate: (id: string) => void;
//   onPin: (id: string) => void;
//   onCopy: (text: string) => void;
// }

// const PromptCard = ({
//   prompt,
//   onDelete,
//   onFavorite,
//   onDuplicate,
//   onPin,
//   onCopy,
// }: Props) => {
// //   const {
// //     attributes,
// //     listeners,
// //     setNodeRef,
// //     transform,
// //     transition,
// //   } = useSortable({
// //     id: prompt.id,
// //   });

// //   

// const style = {};

//   return (
//     <div
//     //   ref={setNodeRef}
//     //   style={style}
//     //   {...attributes}
//     //   {...listeners}
//        className="w-full bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl shadow-lg p-5"
//     >
//       {/* Header */}
//       <div className="flex items-start justify-between">
//         <h2 className="text-xl font-bold break-words">
//           {prompt.title}
//         </h2>

//         <button
//           onClick={() => onPin(prompt.id)}
//           className="text-lg"
//         >
//           <FaThumbtack
//             className={
//               prompt.pinned
//                 ? "text-blue-600"
//                 : "text-gray-400"
//             }
//           />
//         </button>
//       </div>

//       {/* Description */}
//       <p className="mt-3 text-gray-600 dark:text-gray-300 break-words">
//         {prompt.description}
//       </p>

//       {/* Category */}
//       <div className="mt-4">
//         <span className="inline-block rounded-full bg-blue-100 dark:bg-blue-700 dark:text-white px-3 py-1 text-sm">
//           {prompt.category}
//         </span>
//       </div>

//       {/* Prompt */}
//       <div className="mt-4 rounded-lg bg-gray-100 dark:bg-gray-800 p-3">
//         <p className="text-sm break-words">
//           {prompt.prompt}
//         </p>
//       </div>

//       {/* Footer */}
//       <div className="mt-5 flex items-center justify-between">
//         <small className="text-gray-500">
//           {new Date(prompt.createdAt).toLocaleDateString()}
//         </small>

//         <div className="flex items-center gap-4 text-lg">
//           <FaEdit className="cursor-pointer hover:text-blue-600" />

//           <button onClick={() => onDelete(prompt.id)}>
//             <FaTrash className="hover:text-red-600" />
//           </button>

//           <button onClick={() => onFavorite(prompt.id)}>
//             {prompt.favorite ? (
//               <FaHeart className="text-red-500" />
//             ) : (
//               <FaRegHeart />
//             )}
//           </button>

//           <button onClick={() => onDuplicate(prompt.id)}>
//             <FaClone />
//           </button>

//           <button onClick={() => onCopy(prompt.prompt)}>
//             <FaCopy />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PromptCard;




import type { Prompt } from "../types/prompt";
import {
  FaEdit,
  FaTrash,
  FaHeart,
  FaRegHeart,
  FaClone,
  FaCopy,
  FaThumbtack,
} from "react-icons/fa";

interface Props {
  prompt: Prompt;
  onDelete: (id: string) => void;
  onFavorite: (id: string) => void;
  onDuplicate: (id: string) => void;
  onPin: (id: string) => void;
  onCopy: (text: string) => void;
}

const PromptCard = ({
  prompt,
  onDelete,
  onFavorite,
  onDuplicate,
  onPin,
  onCopy,
}: Props) => {
  return (
    <div className="w-full min-h-[380px] rounded-xl bg-white shadow-lg border border-gray-200 p-5 flex flex-col justify-between hover:shadow-xl transition">

      {/* Header */}
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-bold break-words">
          {prompt.title}
        </h2>

        <button onClick={() => onPin(prompt.id)}>
          <FaThumbtack
            className={
              prompt.pinned
                ? "text-blue-600"
                : "text-gray-400"
            }
          />
        </button>
      </div>

      {/* Description */}
      <div className="mt-3">
        <p className="text-gray-600 text-sm line-clamp-3">
          {prompt.description}
        </p>
      </div>

      {/* Category */}
      <div className="mt-3">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          {prompt.category}
        </span>
      </div>

      {/* Prompt */}
      <div className="mt-4 bg-gray-100 rounded-lg p-3 flex-1 overflow-auto">
        <p className="text-sm whitespace-pre-wrap break-words">
          {prompt.prompt}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-5 pt-4 border-t flex justify-between items-center">

        <small className="text-gray-500">
          {new Date(prompt.createdAt).toLocaleDateString()}
        </small>

        <div className="flex items-center gap-4 text-lg">

          <FaEdit className="cursor-pointer hover:text-blue-600" />

          <button onClick={() => onDelete(prompt.id)}>
            <FaTrash className="hover:text-red-600" />
          </button>

          <button onClick={() => onFavorite(prompt.id)}>
            {prompt.favorite ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart />
            )}
          </button>

          <button onClick={() => onDuplicate(prompt.id)}>
            <FaClone />
          </button>

          <button onClick={() => onCopy(prompt.prompt)}>
            <FaCopy />
          </button>

        </div>

      </div>

    </div>
  );
};

export default PromptCard;