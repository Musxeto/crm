export const applyFilters = (data, filters) => {
  console.log('Data before filtering:', data);
  console.log('Applied filters:', filters);

  let filteredData = data;

  for (const [key, value] of Object.entries(filters)) {
    if (value !== undefined && value !== '') {
      filteredData = filteredData.filter(item => {
        if (item[key] === undefined) return false;
        return item[key].toString().toLowerCase().includes(value.toLowerCase());
      });
    }
  }

  console.log('Filtered data:', filteredData);
  return filteredData;
};
