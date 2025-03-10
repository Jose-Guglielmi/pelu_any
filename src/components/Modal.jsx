import { X } from "lucide-react";

export const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-100"
      onClick={onClose}
    >
      <div className="bg-white/20 p-6 rounded-lg shadow-lg w-96 backdrop-blur-md ">
        <div className="flex justify-between ">
          <h2 className="text-2xl font-semibold mb-4 text-white">{title}</h2>
          <X onClick={onClose} size={26} color="#ffff" />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
