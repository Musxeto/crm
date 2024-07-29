import React from 'react';

const CreateDealsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Create Deal</h1>
      
      <div className="bg-white p-6 shadow-md rounded-lg">
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Deal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Deal Owner</label>
              <input type="text" className="border rounded p-2 w-full" placeholder="Ghulam Mustafa" />
            </div>
            <div>
              <label className="block mb-2">Deal Name</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Account Name</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Type</label>
              <select className="border rounded p-2 w-full">
                <option value="">-None-</option>
                {/* Add other options */}
              </select>
            </div>
            <div>
              <label className="block mb-2">Next Step</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Lead Source</label>
              <select className="border rounded p-2 w-full">
                <option value="">-None-</option>
                {/* Add other options */}
              </select>
            </div>
            <div>
              <label className="block mb-2">Contact Name</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Amount</label>
              <input type="number" className="border rounded p-2 w-full" placeholder="PKR" />
            </div>
            <div>
              <label className="block mb-2">Closing Date</label>
              <input type="date" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Stage</label>
              <input type="text" className="border rounded p-2 w-full" placeholder="Qualification" />
            </div>
            <div>
              <label className="block mb-2">Probability (%)</label>
              <input type="number" className="border rounded p-2 w-full" placeholder="10" />
            </div>
            <div>
              <label className="block mb-2">Expected Revenue</label>
              <input type="number" className="border rounded p-2 w-full" placeholder="PKR" />
            </div>
            <div>
              <label className="block mb-2">Campaign Source</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Description Information</h2>
          <textarea className="border rounded p-2 w-full" rows="4" />
        </section>

        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Save Deal</button>
      </div>
    </div>
  );
};

export default CreateDealsPage;
