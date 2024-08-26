// arrow functin calcAverage()
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// tính điểm trung bình cho cả hai độ
let avgScoreDophins1 = calcAverage(44, 23, 71);
let avgScoreKoalas1 = calcAverage(65, 54, 49);

// Tạo một hàm có tên checkWinner
function checkWinner(avgDophins, avgKoalas) {
    if (avgDophins >= avgKoalas * 2) {
        console.log('avgDophins winner');
    } else if (avgKoalas >= avgDophins) {
        console.log('koalas winner')
    } else {
        console.log('no team winner')
    }
}

//kiểm tra đội chiến thắng
checkWinner(avgScoreDophins1, avgScoreKoalas1);

// test data 2
let avgScoreDophins2 = calcAverage(85, 54, 41);
let avgScoreKoalas2 = calcAverage(23, 34, 27);
checkWinner(avgScoreDophins2, avgScoreKoalas2);