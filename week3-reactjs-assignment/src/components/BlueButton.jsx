const BlueButton = () => {
    const handleClick = () => {
      console.log("Button clicked!");
    };
  
    return (
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Click Me
      </button>
    );
  };
  
  export default BlueButton;
  