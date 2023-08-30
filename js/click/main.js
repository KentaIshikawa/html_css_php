let count = 0;
let sw = true;
$('.btn_again').hide();

let start_time;
let end_time;

$('.btn').on('click', (e) => {
    if (sw) {
        if (count == 0) {
            $('.main').addClass('step1');
            $(e.currentTarget).addClass('btn_step1');
            start_time = new Date();
            //console.log(start_time);
        } else if (count > 10 && count <= 20) {
            $('.main').addClass('step2');
        } else if (count > 20 && count <= 30) {
            $('.main').addClass('step3');
        } else if (count > 30) {
            $('.main').addClass('step4');
            $(e.currentTarget).addClass('btn_step2');
            sw = false;
            $('.btn_again').show();
            end_time = new Date();
            const time = Math.floor((end_time - start_time) / 1000);
            const message = '<p class="time">あなたの記録は、' + time + '秒です</p>';
            $('.btn_area').append(message);
        }
        count++;
        //console.log(count);
    }
});

$('.btn_again').on('click', (e) => {
    //mainの画像を元に戻す
    $('.main').removeClass('step1 step2 step3 step4');

    //クリックボタンの画像を元に戻す
    $('.btn').removeClass('btn_step1 btn_step2');

    //もう一回ボタンを消す
    $(e.currentTarget).hide();

    //もう一度ゲームができるようにする
    sw = true;
    count = 0;

    //時間を消す
    $('.time').remove();
});