export const filterArr = (arr, targetElement) => {
    const filteredArr = arr.filter(item => item.datetime === targetElement);
    return filteredArr;
  };
  