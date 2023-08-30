let cal = '';
const week_arr = ['日', '月', '火', '水', '木', '金', '土'];

//今の日付オブジェクトを取得
const now = new Date();
//今の年と、月を取得
const now_year = now.getFullYear();
const now_month = now.getMonth() + 1;

//今の月の、最終日の日付オブジェクトを取得
const end = new Date(now_year, now_month, 0);
//今の月の、最終日の日付を取得
const end_date = end.getDate();
//今の月の、最終日の曜日を取得
const end_day = end.getDay();


//今の月の、1日の日付オブジェクトを取得
const start = new Date(now_year, now_month - 1, 1);
//今の月の、1日の曜日を取得
const start_day = start.getDay();

console.log(start_day);

cal += '<ul>';
//曜日を追記
for (week of week_arr) {
    cal += '<li>';
    cal += week;
    cal += '</li>';
}

//必要に応じて、空のliを追記
for (let i = 0; i < start_day; i++) {
    cal += '<li></li>';
}


//今月の1日から、最終日までを追記
for (let i = 0; i < end_date; i++) {
    cal += '<li>';
    cal += i + 1;
    cal += '</li>';
}

//必要に応じて、空のliを追記
for (let i = 0; i < 6 - end_day; i++) {
    cal += '<li></li>';
}


cal += '</ul>';


$('#cal').html(cal);

$('#date').append('<time>' + now_year + '-' + now_month + '</time>');