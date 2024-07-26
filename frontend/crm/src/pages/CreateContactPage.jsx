import React from 'react';

const CreateContactPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Create Contact</h1>
      
      <div className="bg-white p-6 shadow-md rounded-lg">
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Contact Image</h2>
          <input type="file" className="border rounded p-2" />
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Contact Owner</label>
              <input type="text" className="border rounded p-2 w-full" placeholder="Ghulam Mustafa" />
            </div>
            <div>
              <label className="block mb-2">First Name</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Last Name</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Account Name</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input type="email" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Phone</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Other Phone</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Mobile</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Assistant</label>
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
              <label className="block mb-2">Title</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Department</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Home Phone</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Fax</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Date of Birth</label>
              <input type="date" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Asst Phone</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Email Opt Out</label>
              <input type="checkbox" />
            </div>
            <div>
              <label className="block mb-2">Skype ID</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Secondary Email</label>
              <input type="email" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Twitter</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Reporting To</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Address Information</h2>
          <button className="bg-blue-500 text-white py-1 px-3 rounded mb-4">Copy Address</button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Mailing Street</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Mailing City</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Mailing State</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Mailing Zip</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Mailing Country</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Other Street</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Other City</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Other State</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Other Zip</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
            <div>
              <label className="block mb-2">Other Country</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Description Information</h2>
          <textarea className="border rounded p-2 w-full" rows="4" />
        </section>

        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Save Contact</button>
      </div>
    </div>
  );
};

export default CreateContactPage;
