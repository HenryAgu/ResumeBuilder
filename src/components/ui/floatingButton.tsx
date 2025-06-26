const FloatingButton = () => {

  return (
    <div className="fixed bottom-4 right-4 print:hidden">
      <button
        className="bg-[#101720] p-5 rounded-full shadow-2xl animate-bounce cursor-pointer"
        onClick={() => window.print()}
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 14 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 6H10V0H4V6H0L7 13L14 6ZM6 8V2H8V8H9.17L7 10.17L4.83 8H6ZM0 15H14V17H0V15Z"
            fill="#ffffff"
          />
        </svg>
      </button>
    </div>
  );
};

export default FloatingButton;
