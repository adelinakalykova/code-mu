//Замыкания

function createBalance(startSum) {
  let balance = startSum;
  return function (summa) {
    balance += summa;
    console.log(balance);
  };
}
let AdelinaBalance = createBalance(100);
AdelinaBalance(600);
AdelinaBalance(-200);

console.log("///////////");
let MashasBalance = createBalance(2000);
MashasBalance(-300);
MashasBalance(500);
