const Header = ({ input, handleReset, handleChange }) => {
  return (
    <div className="header">
      <h2>String Variation Table</h2>
      <div className="user-input">
        <input
          aria-label="Enter a string into the input box"
          value={input}
          onChange={handleChange}
          id='string-input'
          placeholder="Enter string..."
        />
        <button className="reset-btn" onClick={handleReset}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default Header;
