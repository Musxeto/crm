import React from 'react';
import SummaryMetrics from '../components/SummaryMetrics ';
import QuickActions from '../components/QuickActions';
import Notifications from '../components/Notifications';
import RecentActivity from '../components/RecentActivity';
import Charts from '../components/Charts';
import AssignedTasks from '../components/AssignedTasks';

const Home = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
       <SummaryMetrics />
       <Notifications />
       <AssignedTasks />
       <QuickActions />
       <Charts />
       <RecentActivity />
       
      </div> 
    </div>
  );
};

export default Home;
