const breadList = ["소금빵", "크루아상", "크림빵", "앙버터", "딸기케이크"];

const breadResult = breadList.filter((bread) => bread.length > 3);

breadResult; //['크루아상', '딸기케이크']

function breadCallback(bread) {
  return bread.length > 3;
}

breadList.filter(breadCallback);
