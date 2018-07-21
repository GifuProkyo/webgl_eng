let canvas
let player

//問題と解答
qa = new Array();
qa[0] = ["「美徳」はどれ？", "apology", "sin", "virtue", "vice", 3];
qa[1] = ["「絶対的な」はどれ？", "absolute", "relative", "decadent", "devoted", 1];
qa[2] = ["「陳謝」はどれ？", "appreciation", "apology", "praise", "envious", 2];
qa[3] = ["「地方の」はどれ？", "urban", "rural", "biased", "domestic", 2];
qa[4] = ["「内閣」はどれ？", "cabinet", "sacrifice", "brigade", "division", 1];
qa[5] = ["「共産主義」はどれ？", "democracy", "communism", "socialism", "combatism", 2];
qa[6] = ["「避難させる」はどれ？", "evacuate", "acomplish", "abandan", "contribute", 1];
qa[7] = ["「主義主張」はどれ？", "masterpice", "foundation", "government", "principle", 4];
qa[8] = ["「顕著な」はどれ？", "suitable", "smart", "remarkable", "humid", 3];

//初期設定
let count = 0; //問題番号
let q_sel = 4; //選択肢の数

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
        player.mainTimelineLabel = '';
        player.mainTimelineLabel = 'sample_喜03';

        count++;
        quiz();
    } else {
        document.getElementById("word" + num).innerHTML = "×"
        player.mainTimelineLabel = 'sample_哀00';
    }
}