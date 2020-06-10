'use strict';
{

  // const name = window.prompt("名前を入力してください");
  // const total = window.prompt("合計金額を入力して下さい。");
  // const sum = total * 1.10;

  // alert(`${name}さんの合計金額は${sum}円となります。`);


  // ====メンバーの情報一覧ページ=====

  // const members = [

  //   { name: '山田太郎', age: '42', hobby: 'ギター' },
  //   { name: '斎藤すぐる', age: '46', hobby: '車' },
  //   { name: '田中芳雄', age: '32', hobby: '旅行、カメラ' },
  //   { name: '高橋とおる', age: '25', hobby: '絵を描くこと' },

  // ];

  // for(let i = members[0]; i<=members.length;i++) {
  //   document.write(i);
  // }




  // ＝＝＝＝九九の計算＝＝＝＝

  // for(let x = 1;x <= 9;x++) {
  //   for(let y = 1;y <= 9;y++){
  //     document.write(x +'×'+ y + '='+ (x*y)+'<br>');
  //   }

  // }



  // ＝＝＝＝FizzBuzz＝＝＝＝

  for (let i = 1; i <= 30; ++i) {
    if (i % 15 === 0) {
      document.write('FizzBuzz' + ' ');
    } else if (i % 5 === 0) {
      document.write('Buzz' + ' ');
    } else if (i % 3 === 0) {
      document.write('Fizz' + ' ')
    } else {
      document.write(i + ' ');
    }

  }
}

