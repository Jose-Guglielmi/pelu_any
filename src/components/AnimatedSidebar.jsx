export const AnimatedSidebar = ({
  title,
  menuOptions = [],
  children,
  open = false,
  onClose,
  buttonText = "Reservar cita",
  buttonAction = () => {},
  bgColor = "bg-[#722F37]",
  hoverColor = "bg-purple-800",
  textColor = "text-white",
}) => {
  return (
    <div className="relative">
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-50 z-999 transition-opacity duration-500"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 rounded-tl-lg rounded-bl-lg bg-white shadow-lg z-1000 transform transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 overflow-y-auto h-full">
          {/* Header with close button */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-[#722F37]">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Menu */}
          {menuOptions.length > 0 && (
            <>
              <nav className="space-y-2 mt-10">
                {menuOptions.map((option, index) => (
                  <a
                    key={index}
                    href={option.link || `#${option.text.toLowerCase()}`}
                    className="block py-2 text-[#722F37] hover:text-[#722F37]/50 "
                    onClick={option.onClick || null}
                  >
                    {option.text}
                  </a>
                ))}
              </nav>
            </>
          )}

          {/* Action Button */}
          {buttonText && (
            <button
              className={`w-full py-2 mt-10 ${bgColor} ${textColor} rounded hover:${hoverColor} transition-colors`}
              onClick={buttonAction}
            >
              {buttonText}
            </button>
          )}

          {/* Custom Content */}
          {children && <div className="mt-4">{children}</div>}
        </div>
      </div>
    </div>
  );
};
