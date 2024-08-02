import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateContactPage = () => {
  const [formData, setFormData] = useState({
    contactOwner: 'Ghulam Mustafa',
    firstName: '',
    lastName: '',
    accountName: '',
    email: '',
    phone: '',
    otherPhone: '',
    mobile: '',
    assistant: '',
    leadSource: '',
    title: '',
    department: '',
    homePhone: '',
    fax: '',
    dateOfBirth: '',
    asstPhone: '',
    emailOptOut: false,
    skypeID: '',
    secondaryEmail: '',
    twitter: '',
    reportingTo: '',
    mailingStreet: '',
    mailingCity: '',
    mailingState: '',
    mailingZip: '',
    mailingCountry: '',
    otherStreet: '',
    otherCity: '',
    otherState: '',
    otherZip: '',
    otherCountry: '',
    description: '',
  });
  const [contactImage, setContactImage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setContactImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toast.success('Contact created successfully!');
    setTimeout(() => {
      navigate('/contacts');
    }, 2000);
  };

  const handleCopyAddress = () => {
    setFormData((prevData) => ({
      ...prevData,
      otherStreet: prevData.mailingStreet,
      otherCity: prevData.mailingCity,
      otherState: prevData.mailingState,
      otherZip: prevData.mailingZip,
      otherCountry: prevData.mailingCountry,
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-6">Create Contact</h1>
      
      <div className="bg-white p-6 shadow-md rounded-lg">
        <form onSubmit={handleSubmit}>
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Contact Image</h2>
            <input type="file" className="border rounded p-2" onChange={handleImageChange} />
            {contactImage && <img src={contactImage} alt="Contact" className="mt-4 w-24 h-24 object-cover rounded-full" />}
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Contact Owner</label>
                <input
                  type="text"
                  name="contactOwner"
                  value={formData.contactOwner}
                  readOnly
                  className="border rounded p-2 w-full bg-gray-100"
                />
              </div>
              <div>
                <label className="block mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Account Name</label>
                <input
                  type="text"
                  name="accountName"
                  value={formData.accountName}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Other Phone</label>
                <input
                  type="text"
                  name="otherPhone"
                  value={formData.otherPhone}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Assistant</label>
                <input
                  type="text"
                  name="assistant"
                  value={formData.assistant}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Lead Source</label>
                <select
                  name="leadSource"
                  value={formData.leadSource}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                >
                  <option value="">-None-</option>
                  {/* Add other options */}
                </select>
              </div>
              <div>
                <label className="block mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Department</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Home Phone</label>
                <input
                  type="text"
                  name="homePhone"
                  value={formData.homePhone}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Fax</label>
                <input
                  type="text"
                  name="fax"
                  value={formData.fax}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Asst Phone</label>
                <input
                  type="text"
                  name="asstPhone"
                  value={formData.asstPhone}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="emailOptOut"
                  checked={formData.emailOptOut}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label className="block mb-2">Email Opt Out</label>
              </div>
              <div>
                <label className="block mb-2">Skype ID</label>
                <input
                  type="text"
                  name="skypeID"
                  value={formData.skypeID}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Secondary Email</label>
                <input
                  type="email"
                  name="secondaryEmail"
                  value={formData.secondaryEmail}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Twitter</label>
                <input
                  type="text"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Reporting To</label>
                <input
                  type="text"
                  name="reportingTo"
                  value={formData.reportingTo}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Address Information</h2>
            <button
              type="button"
              onClick={handleCopyAddress}
              className="bg-blue-500 text-white py-1 px-3 rounded mb-4"
            >
              Copy Address
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Mailing Street</label>
                <input
                  type="text"
                  name="mailingStreet"
                  value={formData.mailingStreet}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Mailing City</label>
                <input
                  type="text"
                  name="mailingCity"
                  value={formData.mailingCity}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Mailing State</label>
                <input
                  type="text"
                  name="mailingState"
                  value={formData.mailingState}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Mailing Zip</label>
                <input
                  type="text"
                  name="mailingZip"
                  value={formData.mailingZip}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Mailing Country</label>
                <input
                  type="text"
                  name="mailingCountry"
                  value={formData.mailingCountry}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Other Street</label>
                <input
                  type="text"
                  name="otherStreet"
                  value={formData.otherStreet}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Other City</label>
                <input
                  type="text"
                  name="otherCity"
                  value={formData.otherCity}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Other State</label>
                <input
                  type="text"
                  name="otherState"
                  value={formData.otherState}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Other Zip</label>
                <input
                  type="text"
                  name="otherZip"
                  value={formData.otherZip}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Other Country</label>
                <input
                  type="text"
                  name="otherCountry"
                  value={formData.otherCountry}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                />
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Description Information</h2>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border rounded p-2 w-full"
              rows="4"
            />
          </section>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Save Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateContactPage;
