const breadList = ["소금빵", "크루아상", "크림빵", "앙버터", "딸기케이크"];

for (let breadIdx = 0; breadIdx < breadList.length; breadIdx++)
  console.log(breadList[breadIdx]);

for (const breadValue of breadList) console.log(breadValue);
for (const breadKey in breadList) console.log(breadKey);

breadList; // ["소금빵", "크루아상", "크림빵", "앙버터", "딸기케이크"]
const newBreadList = breadList.map((bread, idx, currentBreadList) => {
  console.log(bread, idx, currentBreadList);
  return idx !== currentBreadList.length - 1 ? bread : idx;
});

newBreadList; //['소금빵', '크루아상', '크림빵', '앙버터', 4]

breadList.forEach((bread, idx, currentBreadList) =>
  console.log(bread, idx, currentBreadList)
);
