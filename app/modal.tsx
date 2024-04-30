// Modal.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const stopPropagation = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <motion.div
            className="bg-black bg-opacity-25 fixed inset-0"
            onClick={onClose} // Close modal when clicking on the overlay
          />
          <motion.div
            className="bg-white rounded-lg shadow-lg pb-2 relative md:w-2/5 w-4/5"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={stopPropagation} // Prevent click events from propagating to the overlay
          >
            <div className="flex items-center p-2 justify-between bg-blue-800 rounded text-white mb-4">
              <div className="pl-4 font-semibold"> Terms And Conditions</div>
              <div className="cursor-pointer font-black pr-4" onClick={onClose}>
                X
              </div>
            </div>
            <div className="px-3 overflow-y-auto max-h-[450px]">{children}</div> {/* Apply overflow and max-height here */}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
