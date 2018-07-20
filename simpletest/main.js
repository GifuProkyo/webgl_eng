let canvas
let player

//問題と解答
qa = new Array();
qa[0] = ["「リンゴ」はどれ？", "apple", "grape", "lemon", "orange", "cherry", 1];
qa[1] = ["「ねこ」はどれ？", "dog", "rabbit", "cow", "cat", "bird", 4];
qa[2] = ["「泣く」はどれ？", "play", "happy", "cry", "sad", "busy", 3];

//初期設定
let count = 0; //問題番号
let q_sel = 5; //選択肢の数

function start() {
    // create hidden canvas for rendering
    EmotePlayer.createRenderCanvas(640, 640);

    // create new player
    canvas = document.getElementById('canvas');
    player = new EmotePlayer(canvas);
    // load emote data from URL

    player.loadDataFromURL("../data/emote_logo_d2.emtbytes");

    player.loadDataFromURL("../data/パイレーツにこにこ.emtbytes");
    player.diffTimelineSlot1 = '差分用_waiting_loop2';

    // set chara scale
    player.scale = 0.5;

    quiz();
}

//問題表示
function quiz() {
    //問題
    document.getElementById("question").innerHTML = (count + 1) + "問目：" + qa[count][0];
    //選択肢
    for (n = 1; n <= q_sel; n++) {
        document.getElementById("word" + n).innerHTML = qa[count][n];
    }
}

//解答表示
function answer(num) {
    if (num == qa[count][q_sel + 1]) {
        document.getElementById("word" + num).innerHTML = "正解☆"
        player.mainTimelineLabel = 'sample_喜03';

        count++;
        quiz();
    }
    else {
        document.getElementById("word" + num).innerHTML = "×"
        player.mainTimelineLabel = 'sample_哀00';
    }
}