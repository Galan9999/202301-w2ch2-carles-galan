const strictEquals = (valueA, valueB) => {
  if (Number.isNaN(valueA) && Number.isNaN(valueB)) {
    return true;
  }
  return Object.is(valueA, valueB);
};

export default strictEquals;
