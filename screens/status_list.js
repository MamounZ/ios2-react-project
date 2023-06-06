import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { getFirestore } from 'firebase/firestore';

function status_list() {
  const [statusList, setStatusList] = useState([]);
  const firestore = getFirestore();

  useEffect(() => {
    const fetchData = async () => {
      const statusRef = firestore.collection('status');
      const snapshot = await statusRef.get();
      const statuses = snapshot.docs.map((doc) => doc.data());
      setStatusList(statuses);
    };

    fetchData();
  }, []);

  const handleStatusRemoval = async (statusId) => {
    try {
      await firestore.collection('status').doc(statusId).delete();
    } catch (error) {
      console.error('Error removing status:', error);
    }
  };

  const showChoiceDialog = (statusId) => {
    // Implement your dialog logic here
    // You can use a modal or any other UI component to show the dialog
    // When the user confirms deletion, call handleStatusRemoval(statusId)
  };

  return (
    <div>
      {statusList.length === 0 ? (
        <CircularProgress /> // Show a loading indicator if data is not available
      ) : (
        statusList.map((status) => (
          <div key={status.id} onClick={() => showChoiceDialog(status.id)}>
            <div>
              {status.status}
            </div>
            <div>
              <img src={status.image} alt="Status" />
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default status_list;
