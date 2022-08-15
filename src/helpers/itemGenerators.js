export const generateOptions = (name, selectedItem, items, funcUpdate) => (
  <select name={name} defaultValue={selectedItem} onChange={funcUpdate}>
    {Object.entries(items).map(([key, value]) => (
      <option key={key} value={key}>{value}</option>
    ))}
  </select>
);
