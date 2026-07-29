interface Props {
  category: string;
  setCategory: (value: string) => void;
}

const CategoryFilter = ({ category, setCategory }: Props) => {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="border rounded-lg p-3"
    >
      <option value="">All Categories</option>
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
  );
};

export default CategoryFilter;