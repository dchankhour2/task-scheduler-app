const Modal: React.FC = ({ onClose, children }) => {
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl shadow-lg w-80 p-6 relative">
                    <button 
                        onClick={() => onClose()}
                        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
                    </button>
                    <h2 className="text-xl font-semibold mb-3 text-gray-800">Modal Title</h2>
                    <div className="mb-5">{children}</div>
                    <button 
                        onClick={() => onClose()}
                        className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        Close
                    </button>
                </div>
            </div>
        </>
    )
}

export default Modal;
