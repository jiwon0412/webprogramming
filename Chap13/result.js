onmessage = function(e) {
    let score = e.data;
    let grade;

    // 점수를 기반으로 학점 계산
    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    // 점수와 학점을 함께 메인 스크립트로 전송
    postMessage({ score: score, grade: grade });
};
