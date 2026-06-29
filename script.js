let timeLeft = 180; // 3分（秒換算）
let timerId = null;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// 残り時間を「分:秒」の形式に変換して画面に表示する関数
function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    // 1桁のときに「03:05」のように頭に0をつける処理
    display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// カウントダウンを開始する関数
function startTimer() {
    if (timerId !== null) return; // すでに動いている場合は二重起動を防ぐ

    timerId = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timerId);
            timerId = null;
            alert('時間になりました！');
        }
    }, 1000); // 1000ミリ秒（1秒）ごとに実行
}

// カウントダウンを一時停止する関数
function stopTimer() {
    clearInterval(timerId);
    timerId = null;
}

// タイマーを最初の状態に戻す関数
function resetTimer() {
    stopTimer();
    timeLeft = 180; // 初期値に戻す
    updateDisplay();
}

// 各ボタンにクリックしたときの動きを登録
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

// 最初に画面を開いたときにも表示を更新しておく
updateDisplay();
