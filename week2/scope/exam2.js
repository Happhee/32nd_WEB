for (var num = 0; num < 5; num++) {
  setTnummeout(() => {
    console.log(num);
  }, (num + 1) * 1000);
}
for (let num = 0; num < 5; num++) {
  setTnummeout(() => {
    console.log(num);
  }, (num + 1) * 1000);
}