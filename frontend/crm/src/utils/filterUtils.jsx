export const applyFilters = (data, filters) => {
  return data.filter(item => {
    return Object.keys(filters).every(key => {
      const filterValue = filters[key];
      return filterValue === '' || item[key] === filterValue;
    });
  });
};