import React, { useState } from 'react';
import './Scheduling.css';

const Scheduling = () => {
  const [schedules, setSchedules] = useState([
    { id: 1, class: 'Sem 1 A1', subject: 'Web Development', startTime: '11:00 AM', endTime: '12:45 PM' },
    { id: 2, class: 'Sem 1 A2', subject: 'Computer Programming', startTime: '09:00 AM', endTime: '10:30 AM' },
    { id: 3, class: 'Sem 2 A1', subject: 'AI Basics', startTime: '02:00 PM', endTime: '03:30 PM' },
    // Add more schedule data here...
  ]);

  const [editingSchedule, setEditingSchedule] = useState(null);

  const handleStartTimeChange = (e, id) => {
    const updatedSchedules = schedules.map((schedule) =>
      schedule.id === id ? { ...schedule, startTime: e.target.value } : schedule
    );
    setSchedules(updatedSchedules);
  };

  const handleEndTimeChange = (e, id) => {
    const updatedSchedules = schedules.map((schedule) =>
      schedule.id === id ? { ...schedule, endTime: e.target.value } : schedule
    );
    setSchedules(updatedSchedules);
  };

  const handleEditClick = (schedule) => {
    setEditingSchedule(schedule);
  };

  const handleSaveClick = (id) => {
    // Here you would send the updated schedule to your backend API
    console.log('Saving schedule:', schedules.find((s) => s.id === id));
    setEditingSchedule(null);
  };

  const handleCancelClick = () => {
    setEditingSchedule(null);
  };

  return (
    <div className="scheduling-container">
      <h2>Scheduling</h2>
      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Subject</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule) => (
            <tr key={schedule.id}>
              <td>{schedule.class}</td>
              <td>{schedule.subject}</td>
              <td>
                {editingSchedule && editingSchedule.id === schedule.id ? (
                  <input
                    type="time"
                    value={schedule.startTime}
                    onChange={(e) => handleStartTimeChange(e, schedule.id)}
                  />
                ) : (
                  schedule.startTime
                )}
              </td>
              <td>
                {editingSchedule && editingSchedule.id === schedule.id ? (
                  <input
                    type="time"
                    value={schedule.endTime}
                    onChange={(e) => handleEndTimeChange(e, schedule.id)}
                  />
                ) : (
                  schedule.endTime
                )}
              </td>
              <td>
                {editingSchedule && editingSchedule.id === schedule.id ? (
                  <>
                    <button onClick={() => handleSaveClick(schedule.id)}>
                      Save
                    </button>
                    <button onClick={handleCancelClick}>Cancel</button>
                  </>
                ) : (
                  <button onClick={() => handleEditClick(schedule)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Scheduling;