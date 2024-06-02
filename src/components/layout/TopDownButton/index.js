export default function TopDownButton() {
  return (
    <>
      <div className="remote_button">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          top
        </button>
        <button
          onClick={() =>
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
            })
          }
        >
          bottom
        </button>
      </div>
    </>
  );
}
