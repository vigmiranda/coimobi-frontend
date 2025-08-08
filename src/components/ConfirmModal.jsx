import React from 'react';

export default function ConfirmModal({ isOpen, onConfirm, onCancel }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded shadow-md max-w-sm w-full text-center">
                <h2 className="text-lg font-semibold mb-4">Confirmação</h2>
                <p className="mb-6">Tem certeza que deseja deletar este imóvel?</p>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Deletar
                    </button>
                </div>
            </div>
        </div>
    );
}