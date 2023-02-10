const breadList = ["소금빵", "크루아상", "크림빵", "앙버터", "딸기케이크"];

breadList[1];
breadList[breadList.length - 1];

breadList.push("잠봉뵈르"); // [ '소금빵', '크루아상', '크림빵', '앙버터', '딸기케이크', '잠봉뵈르']
breadList.splice(2, 1); // ['크림빵']
breadList.pop(); // '잠봉뵈르'
breadList.reverse(); // ['딸기케이크', '앙버터', '크루아상', '소금빵']
breadList.includes("크림빵"); // false
