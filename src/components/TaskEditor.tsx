import React from 'react';

export default function TaskEditor() {
  const [title, setTitle] = React.useState('');
  const [date, setDate] = React.useState<string>(() => {
    const d = new Date();
    return d.toISOString().slice(0, 10);
  });

  const handleSave = () => {
    console.log('save', { title, date });
    setTitle('');
    setDate(new Date().toISOString().slice(0, 10));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSave();
      }}
      className="form-row"
    >
      <label>
        Task title
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Buy groceries"
        />
      </label>

      <label>
        Date
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>

      <div>
        <button type="submit">Save task</button>
      </div>
    </form>
  );
}
