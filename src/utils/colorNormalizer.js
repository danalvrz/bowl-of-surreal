const colorNormalizer = (array) => {
  const newArray = array.filter((artwork) => artwork.color !== null);
  const badColorArr = array.filter((artwork) => artwork.color === null);
  badColorArr.forEach((element) => {
    newArray.push({
      ...element,
      color: {
        h: 40, l: 21, s: 2,
      },
    });
  });

  return newArray;
};

export default colorNormalizer;
