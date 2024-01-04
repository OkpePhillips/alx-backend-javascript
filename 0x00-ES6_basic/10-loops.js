export default function appendToEachArrayValue(array, appendString) {
  const newArray = [...array];
  for (const value of newArray) {
    const index = newArray.indexOf(value);
    newArray[index] = appendString + value;
  }

  return newArray;
}
