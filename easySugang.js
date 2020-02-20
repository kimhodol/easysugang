// 학수번호와 분반으로 이루어진 2차원 배열
var courses = [
  ["BUSS259", "02"],
  ["BUSS246", "00"],
  ["BUSS313", "05"],
  ["BUSS213", "05"],
  ["BUSS384", "02"],
  ["BUSS402", "05"]
];

function easySugang(courses) {
  for (let course of courses) {
    const courseNumber = course[0];
    const courseClass = course[1];
    const url = `https://sugang.korea.ac.kr/SugangAction.jsp?cour_cd_1=${courseNumber}&cour_cls_2=${courseClass}&cour_div_3=99`;

    fetch(url)
      .then(data => data.text())
      .then(data => {
        // console.log(data);
        console.log(
          `%c🙈 ${courseNumber}-${courseClass} ` + "수강신청을 시도합니다.",
          "font-weight: bold;"
        );
        data.includes("save")
          ? console.log(
              `%c🙉 ${courseNumber}-${courseClass} ` + "%c수강신청에 성공 ^__^",
              "font-weight: bold;",
              "color: green; font-weight: bold;"
            )
          : console.log(
              `%c🙊 ${courseNumber}-${courseClass} ` + "%c수강신청에 실패 ㅠㅠ",
              "font-weight: bold;",
              "color: red; font-weight: bold;"
            );
      });
  }
}

// 수강신청 함수 실행
easySugang(courses);

// 디버깅용 에러 목록: String.prototype.includes()로 체크함
// const errors = {
//   quota: "수강정원 마감이거나 신청불가 상태입니다.",
//   Pass: "재수강은 불가능합니다.",
//   registered: "중복신청할 수 없습니다.",
//   Conflict: "시간에 다른 강의가 존재합니다.",
//   CENTER: "저장횟수가 초과되었습니다. 매크로 방지 문자를 입력해주세요."
// };
