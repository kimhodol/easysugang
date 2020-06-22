> **Deprecated**
>
> 2020년 여름계절학기부터 수강신청 시스템 개편으로 인하여 이 저장소의 프로젝트는 더 이상 유지보수 하지 않습니다.

# easySugang (Korea Univ.)
<p align="center">
  <img src="https://github.com/woonjangahn/easySugang/blob/master/easySugang_sample.gif?raw=true" />
</p>

## 사용방법
1. `easySugang.js` 파일 안에 샘플로 있는 배열처럼 학수번호와 분반을 입력하여 수정 후 전체 코드 복사
2. Chrome 또는 Chrome 기반 브라우저(ex. 네이버 웨일) 사용
3. `Development Tool` - `Sources` - `Snippets` - `New snippet`
4. 복사해둔 코드 붙여넣기 하고 저장
5. [고려대학교 수강신청 페이지](http://sugang.korea.ac.kr) 접속하고 **로그인**
6. 수강신청 가능한 시간대에 snippet에 있는 파일 실행 **(꼭 수강신청 페이지가 아니어도 상관없음)**
7. Console에 수강신청 결과가 출력됨
8. `setInterval()`을 응용하여 반복 실행 가능

## 주의사항
- 테스트 결과 60번 정도의 수강신청 요청이 들어가면 매크로로 판명하고 임시로 신청을 막음
- 수강신청 페이지에서 임의의 과목을 수강신청하면 매크로 방지용 이미지가 뜨는데, 문자를 입력하면 다시 60번 가능
- **코드를 사용했을 떄 얻는 불이익에 대해서는 모든 책임은 사용자 본인에게 있음**
