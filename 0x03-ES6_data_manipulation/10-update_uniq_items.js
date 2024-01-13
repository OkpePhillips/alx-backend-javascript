export default function updateUniqueItems(groceryMap) {
  if (!(groceryMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  const updatedMap = new Map();

  for (const [item, quantity] of groceryMap) {
    updatedMap.set(item, quantity === 1 ? 100 : quantity);
  }

  return updatedMap;
}
