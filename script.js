const result = document.getElementById('result');
const score = document.getElementById('score');

let win = 0;
let lose = 0;
let draw = 0;

// コンピューターの手をランダムに決める関数
function getComputerHand() {
  const hands = ['グー', 'チョキ', 'パー'];
  const random = Math.floor(Math.random() * 3);
  return hands[random];
}

// 勝ち負けを判定する関数
function judge(player, computer) {
  if (player === computer) {
    return '引き分け';
  } else if (
    (player === 'グー' && computer === 'チョキ') ||
    (player === 'チョキ' && computer === 'パー') ||
    (player === 'パー' && computer === 'グー')
  ) {
    return 'あなたの勝ち！';
  } else {
    return 'あなたの負け';
  }
}

// ゲームを実行する関数
function play(playerHand) {
  const computerHand = getComputerHand();
  const outcome = judge(playerHand, computerHand);

  if (outcome === 'あなたの勝ち！') {
    win = win + 1;
    result.style.backgroundColor = '#e1f5ee';
    result.style.color = '#085041';
  } else if (outcome === 'あなたの負け') {
    lose = lose + 1;
    result.style.backgroundColor = '#fceaea';
    result.style.color = '#7a1f1f';
  } else {
    draw = draw + 1;
    result.style.backgroundColor = '#faeeda';
    result.style.color = '#633806';
  }

  result.textContent = 'あなた: ' + playerHand + '  コンピューター: ' + computerHand + '  → ' + outcome;
  score.textContent = 'あなた: ' + win + '勝 ' + lose + '敗 ' + draw + '引き分け';
}

// ボタンにイベントを設定する
document.getElementById('rock').addEventListener('click', function() {
  play('グー');
});
document.getElementById('scissors').addEventListener('click', function() {
  play('チョキ');
});
document.getElementById('paper').addEventListener('click', function() {
  play('パー');
});