import React, { useState } from 'react';


const CustomModal = ({ cancelReservation, setShowModal }) => {
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    await cancelReservation();
    setLoading(false);
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-96">
        <h2 className="text-xl font-semibold mb-4">Are you sure you want to cancel?</h2>
        <div className="flex justify-end space-x-4 mt-4">
          <button className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300" onClick={() => setShowModal(false)}>No</button>
          <button className="px-4 py-2 rounded-md bg-customColor text-white" onClick={handleConfirm} disabled={loading}>
            {loading ? 'Please Wait...' : 'Yes'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomModal