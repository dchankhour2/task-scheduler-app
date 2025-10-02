import React, { useState } from 'react';

const RecurrenceEditor: React.FC<{ onChange: (recurrence: string) => void }> = ({ onChange }) => {
    const [recurrence, setRecurrence] = useState('');

    const handleRecurrenceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setRecurrence(value);
        onChange(value);
    };

    return (
        <div>
            <label htmlFor="recurrence">Set Recurrence:</label>
            <select id="recurrence" value={recurrence} onChange={handleRecurrenceChange}>
                <option value="">None</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
            </select>
        </div>
    );
};

export default RecurrenceEditor;