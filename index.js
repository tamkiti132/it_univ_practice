//変数
//let unko = 'Hello World!';

//unko = 'Hello World2!';

//定数
//const bigUnko = 'He..Hell..Hello World!';

//bigUnko = 'Hello world2!!';

//console.log(bigUnko);

//配列
const inoki = ['いーち','にーい','さーん','ダーー！！'];

console.log(inoki[2]);


//ループ文
/*let atsushi = 0;
while(atsushi < inoki.length)
{
atsushi++;
console.log(inoki[atsushi]);
}
*/

//if /else
/*if(inoki.length > 5)
{
	 console.log('ボンバイエ！！')
}
else
{
	console.log('ボンバ。。。！');
}
*/

//関数 / (引数)
/*const test = (arg) => 
{
   if(inoki.length > arg)
 {
	 console.log('ボンバイエ！！')
 }
else
 {
	console.log('ボンバ。。。！');
 }
};



//オブジェクト
const unko2 = 
{
   color: 'pink',
   size: 'large',
   purfume: 'mint'
   aaa: () =>{
      console.log('Hello world!');
   }
};

console.log(unko2.aaa());
*/


//console.log(document.getElementsByTagName('button')[0]);
document.getElementsByTagName('button')[0].addEventListener('click', () =>{
     window.alert('おはよう')
});
document.getElementsByTagName('button')[1].addEventListener('click', () =>{
     window.alert('こんにちは')
});
document.getElementsByTagName('button')[2].addEventListener('click', () =>{
     window.alert('こんばんは')
});
document.getElementsByTagName('button')[3].addEventListener('click', () =>{
     window.alert('またあした')
});
document.getElementsByTagName('button')[4].addEventListener('click', () =>{
     window.alert('Error...')
});


