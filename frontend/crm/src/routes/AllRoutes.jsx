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

const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/tasks' element={<Tasks/>} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
  );
}

export default AllRoutes;
