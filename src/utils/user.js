export const getFirstName = (fullName) => {
  if (fullName) {
    const parts = fullName.split(' ');
    if (parts.length) {
      return parts[0];
    }
  }
  return '👋';
};
