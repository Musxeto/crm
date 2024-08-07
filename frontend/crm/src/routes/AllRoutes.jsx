import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Analytics from '../pages/Analytics';
import Reports from '../pages/Reports';
import Leads from '../pages/Leads';
import Deals from '../pages/Deals';
import Contacts from '../pages/Contacts';
import Accounts from '../pages/Accounts';
import Tasks from '../pages/Tasks';
import CreateLeadPage from '../pages/CreateLeadPage';
import CreateContactPage from '../pages/CreateContactPage';
import CreateAccountPage from '../pages/CreateAccountPage';
import CreateDealsPage from '../pages/CreateDealsPage';
import CreateTasksPage from '../pages/CreateTasksPage';
import CreateReportPage from '../pages/CreateReportPage';

const AllRoutes = () => {
  return (
      <Routes>
        {/*Main Pages*/}
        <Route path="/" element={<Home />} />
        <Route path='/tasks' element={<Tasks/>} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/reports" element={<Reports />} />
        {/*Create Routes*/}
        <Route path="/leads/create-lead" element={<CreateLeadPage />} />
        <Route path="/contacts/create-contact" element={<CreateContactPage />} />
        <Route path="/accounts/create-account" element={<CreateAccountPage />} />
        <Route path="/deals/create-deal" element={<CreateDealsPage />} />
        <Route path="/tasks/create-task" element={<CreateTasksPage />} />
        <Route path="/reports/create-report" element={<CreateReportPage />} />
      </Routes>
  );
}

export default AllRoutes;
