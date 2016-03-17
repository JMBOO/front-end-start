// //var str = 'hello world!';
// //console.log(str);
// //var nick = 'my nick is \'aji\'';
// //var homepage = "niceaji.github.com";
//
// var man = {
//   name: 'aj',
//   age: 30,
//   hobby: 'bike'
// };
//
// console.log( 1 + 2 ) // 3
// console.log( "a" + "b" ) // "ab"
// console.log( 1 + "4") // "14"

// if(man.name === "aj")
// {
//   console.log("aj");
// }else {
//   console.log("who?");
// }
//
// if(man.age > "20")
// {
//   console.log("old");
// }else {
//   console.log("young");
// }

// for(var count=0; count<5; count++)
// {
//   console.log(count);
// }
//
// function sum(x, y){
//     if(!y) y = 1;
//     console.log(x+y);
// }
// sum(3);

/*1부터 100까지 출력*/
console.log("1부터 100까지 출력");
for(var count=1; count<=100; count++)
{
  console.log(count);
}
console.log("1부터 100까지 출력 끝");
console.log(" ");
/*1~100 짝수 구하기*/
console.log("짝수를 구하자");
for(var count=1; count<=100; count++)
{
  if(count%2 == 0){
  console.log(count+"(짝수)");
  }
}
console.log("짝수 구하기 끝");
console.log(" ");
console.log("구구단 시작");
function gugudan(x,y)
{
  return x*y;
}

for(var i=2; i<=9; i++)
{
  for(var j=1; j<=9; j++)
  {
    //gugudan(j,i);
    console.log(i+"x"+j+"="+gugudan(j,i));
  }
}
console.log("구구단 끝");

function sum(x,y)
{
  return x+y;
}

var n1 = prompt("숫자입력1");
var n2 = prompt("숫자입력2");

alert(sum(Number(n1),Number(n2)));
