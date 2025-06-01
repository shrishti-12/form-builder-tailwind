
import React, { useState } from "react";

const FormBuilder = () => {
  const [fields, setFields] = useState([]);

  const addField = (type) => {
    const newField = {
      id: Date.now(),
      type,
      label: `${type.charAt(0).toUpperCase() + type.slice(1)} Field`,
    };
    setFields([...fields, newField]);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">
        Form Builder
      </h1>

      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => addField("text")}
        >
          Add Text Field
        </button>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={() => addField("checkbox")}
        >
          Add Checkbox
        </button>
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          onClick={() => addField("radio")}
        >
          Add Radio Button
        </button>
      </div>

      <div className="border rounded-lg p-6 shadow-md bg-white">
        <h2 className="text-xl font-semibold mb-4">Form Preview</h2>
        <form className="space-y-4">
          {fields.map((field) => (
            <div key={field.id} className="flex flex-col">
              <label className="mb-1 font-medium">{field.label}</label>
              {field.type === "text" && (
                <input
                  type="text"
                  className="border border-gray-300 px-3 py-2 rounded"
                  placeholder="Enter text"
                />
              )}
              {field.type === "checkbox" && (
                <input type="checkbox" className="w-5 h-5" />
              )}
              {field.type === "radio" && (
                <input type="radio" className="w-5 h-5" />
              )}
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default FormBuilder;
