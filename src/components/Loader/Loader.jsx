import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="loader-ring"></div>

        <h1 className="loader-logo">
          Amarachi<span>.</span>
        </h1>

        <p className="loader-text">
          Crafting beautiful experiences...
        </p>
      </div>
    </div>
  );
};

export default Loader;