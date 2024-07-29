import React from 'react';

const ReportFieldsSelector = ({ selectedFields, setSelectedFields }) => {
  const fields = ['Name', 'Email', 'Phone', 'Company', 'Date Created'];

  const handleFieldToggle = (field) => {
    if (selectedFields.includes(field)) {
      setSelectedFields(selectedFields.filter(f => f !== field));
    } else {
      setSelectedFields([...selectedFields, field]);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium">Select Fields</label>
      <div className="mt-2 space-y-1">
        {fields.map(field => (
          <div key={field}>
            <input
              type="checkbox"
              id={field}
              checked={selectedFields.includes(field)}
              onChange={() => handleFieldToggle(field)}
              className="mr-2"
            />
            <label htmlFor={field}>{field}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportFieldsSelector;
