//もう一回ボタンを隠す（非表示にする）
$('p').hide();

//liの数を調べる
const li_count = $('li').length;

$('li').on('click', (e) => {
    if (!$('body').hasClass('over')) {
        //3分の1の確率で、あたる
        //0~2のランダムな数字を作って、
        //0が出たらあたりとする
        // console.log(e);
        const check = Math.floor(Math.random() * li_count);
        if (check) {
            // console.log('はずれ');
            //クリックされたliにhazureを付加
            $(e.currentTarget).addClass('hazure');
        } else {
            // console.log('あたり');
            //クリックされたliにatariを付加
            $(e.currentTarget).addClass('atari');
        }
        $('body').addClass('over');
        $('p').show();
    }
});

$('button').on('click', () => {
    //もう一回ボタンを消す
    $('p').hide();

    //宝箱を閉じる
    $('li').removeClass();

    //bodyのクラスoverをとる
    $('body').removeClass();
});