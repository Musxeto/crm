import React from 'react';
import Board from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';
import dealsData from '../mock-data/dealsdata';

const generateKanbanColumns = (deals) => {
  const columns = {
    'Qualification': [],
    'Negotiation': [],
    'Prospecting': [],
    'Proposal': [],
    'Closed Won': [],
    'Closed Lost': []
  };

  deals.forEach(deal => {
    const column = columns[deal.stage];
    if (column) {
      column.push({
        id: deal.id,
        title: deal.dealName,
        description: deal.description,
        amount: deal.amount,
        closingDate: deal.closingDate,
        owner: deal.owner,
        accountName: deal.accountName,
        contactName: deal.contactName,
        type: deal.type,
        source: deal.source,
        nextStep: deal.nextStep,
        createdTime: deal.createdTime,
        modifiedTime: deal.modifiedTime,
      });
    }
  });

  return Object.keys(columns).map(status => ({
    id: status,
    title: status,
    cards: columns[status],
  }));
};

const DealsKanban = () => {
  return (
    <Board
      initialBoard={{ columns: generateKanbanColumns(dealsData) }}
      allowAddCard={{ on: 'top' }}
    />
  );
};

export default DealsKanban;
