export const SearchBar = ({ value, onSearch }) => {

    const handleSubmit = e => {
      e.preventDefault();

      if (!value.trim()) {
        alert("Please fill in the search field");
        return}

      onSearch(e.target.elements.query.value);
      e.target.reset();
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={value}
          onChange={e => onSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    );
  };