const ENDPOINT = "https://api.indexnow.org/indexnow";
const HOST = "abortioninfo.co.kr";
const KEY = "7f3a9c2e6d4b81f0a5c7e1d9b3f6248a";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const urlList = [
  "https://abortioninfo.co.kr/",
  "https://abortioninfo.co.kr/임신중절수술-비용",
  "https://abortioninfo.co.kr/임신중절수술-회복기간",
  "https://abortioninfo.co.kr/임신중절수술-주의사항",
  "https://abortioninfo.co.kr/임신중절수술-병원-선택",
  "https://abortioninfo.co.kr/임신중절수술-후기",
  "https://abortioninfo.co.kr/임신중절수술-자주-묻는-질문",
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
