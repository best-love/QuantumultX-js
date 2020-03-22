/*
* 使用方法
* [MINT] hostname = www.xmind.cn
* # XMind解锁订阅VIP
* ^https://app.edujia.com/keyboard/vip/query/info.do url script-response-body QuantumultX-js/vip/wm_keyboard.js
*/
let body = $response.body;

let vipBody = {
  "raw_data": "DBcBHgojrvPgruIJMfb4KK/76CmjxSHSp9KipRwOnQUuf+Gt2FncFUzNvxZydUeXEzDZt/XWEm91lHFYrvT0f2AFap2L4psLI/34sKU9VLGH7kFsBYlexU/nifBtosMJqQxL4TU1pjvjl+1uyWsFAeGR42aEnVhQWgvJB5Ovcd0=",
  "license": {
    "status": "sub",
    "expireTime": 3070928235000
  },
  "_code": 200
};

body = JSON.stringfiy(vipBody);

$done({body: body});
