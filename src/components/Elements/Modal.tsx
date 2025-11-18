import React from 'react';

interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, children, title }) => {
    return (
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
            >
                <div className="bg-white rounded-2xl shadow-lg w-80 p-6 relative">
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        title="Close"
                        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 p-1 rounded-full"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>

                    <h2 id="modal-title" className="text-xl font-semibold mb-3 text-gray-800">
                        {title ?? 'Modal Title'}
                    </h2>

                    <div className="mb-5">{children}</div>

                    {/* footer intentionally removed - close action moved to top-right icon */}
                </div>
            </div>
        </>
    );
};

export default Modal;
