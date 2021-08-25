export const statusVariant = (status) => {
  switch (status) {
    case 'Approved':
      return {
        colorScheme: 'green',
        status: 'success',
        title: 'Congratulations! :)',
      };
    case 'Cancelled':
      return {
        colorScheme: 'red',
        status: 'error',
        title: 'Soory :(',
      };
    case 'Pending':
      return {
        colorScheme: 'gray',
      };
    default:
      break;
  }
  return statusVariant;
};
