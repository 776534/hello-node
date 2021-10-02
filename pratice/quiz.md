# code1



  ---
function readData(idx) {
  for (let i = 0; i < 100; i++) {
    idx++;
    console.log(idx);
  }
  if (idx < 500) {
    readData(idx);
  }
}

readData(0);
console.log("after");
 ---

# 答案

 
1
2
3
~
500
after
 

after會500後印出。
原因;readData(0) 後for loop會執行五次，idx會被加到500,才去執行console.log("after")




# code2



 ---
function readData(idx) {
  for (let i = 0; i < 100; i++) {
    idx++;
    console.log(idx);
  }
  if (idx < 500) {
    setTimeout(function () {
      readData(idx);
    }, 0);
  }
}

readData(0);
console.log("after");
 ---

# 答案



1
~
100
after
101
~
500


 after會在100後印出。
 原因;不知道。
