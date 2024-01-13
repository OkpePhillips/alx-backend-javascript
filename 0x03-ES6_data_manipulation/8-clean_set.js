export default function cleanSet(set, startString) {
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));
  const resultString = filteredValues.join('-');
  return resultString;
}
