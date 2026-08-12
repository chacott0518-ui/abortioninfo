const ENDPOINT = "https://api.indexnow.org/indexnow";
const HOST = "abortioninfo.co.kr";
const KEY = "7f3a9c2e6d4b81f0a5c7e1d9b3f6248a";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// 주의: CONTENT_PAGES(콘텐츠 등록 소스)가 아니라 이 배열에 URL을 수동으로 추가해야
// IndexNow에 제출됩니다. 신규 페이지 추가 시 이 목록도 함께 갱신하세요.
const urlList = [
  "https://abortioninfo.co.kr/",
  "https://abortioninfo.co.kr/의료정보",
  "https://abortioninfo.co.kr/임신중절수술-비용",
  "https://abortioninfo.co.kr/임신중절수술-회복기간",
  "https://abortioninfo.co.kr/임신중절수술-주의사항",
  "https://abortioninfo.co.kr/임신중절수술-병원-선택",
  "https://abortioninfo.co.kr/임신중절수술-후기",
  "https://abortioninfo.co.kr/임신중절수술-자주-묻는-질문",
  "https://abortioninfo.co.kr/임신중절수술-전-검사",
  "https://abortioninfo.co.kr/임신초기중절수술-주수-확인",
  "https://abortioninfo.co.kr/임신중절수술-예약-전-확인사항",
  "https://abortioninfo.co.kr/임신중절수술-당일-절차",
  "https://abortioninfo.co.kr/임신중절수술-수면마취",
  "https://abortioninfo.co.kr/흡입술과-소파술-차이",
  "https://abortioninfo.co.kr/임신중절수술-후-이상증상",
  "https://abortioninfo.co.kr/임신중절수술-후-일상활동",
];

async function submitToIndexNow() {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const text = await res.text();

  console.log(`HTTP status: ${res.status}`);
  if (text) {
    console.log(`Response body: ${text}`);
  }
  console.log(`제출 URL 수: ${urlList.length}`);

  if (res.status === 200 || res.status === 202) {
    console.log("결과: 성공");
  } else {
    console.log("결과: 실패");
  }
}

submitToIndexNow();
