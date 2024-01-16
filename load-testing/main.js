import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  thresholds: {
    http_req_failed: ['rate<0.5'],
    http_req_duration: ["p(95) < 1200"],
  },
  scenarios: {
    get_forms: {
      exec: 'get_forms',
      startVUs: 0,
      stages: [
        { duration: '15s', target: 500 },
        { duration: '60s', target: 501 },
        { duration: '60s', target: 1750 },
        { duration: '10s', target: 0 },
      ],
      executor: 'ramping-vus'
    }
  }
}

function isJSON(str) {
    try {
        return (JSON.parse(str) && !!str);
    } catch (e) {
        return false;
    }
}

function httpGet(url, params) {
    var res;
    for (var retries = 5; retries > 0; retries--) {
        res = http.get(url, params)
        if (res.status == 200) {
            return res;
        }
    }
    return res;

}

export function get_forms() {
  let res = httpGet(`https://${__ENV.BASE_HOST}/api/form`);
  check(res, {
    "status was 200": (r) => r.status == 200,
    "body is json-like": (r) => isJSON(r.body)
  });
  sleep(1);
}
