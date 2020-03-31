/**
* 今日热榜pro vip 到期时间 2031-01-14
*/
let urls = {
  account: 'account/sync',//用户中心
  filters: 'my/filters',//tophub过滤器
  alerts: 'my/alerts'//关键词追踪
};

let body = $response.body;
let bodyObj = JSON.parse(body);
let url = $request.url;
let data = bodyObj.data;
if (url.indexOf('account') != -1) {
  /*用户中心*/
  data = {
    is_vip: "1",
    vip_expired: "1926142400",
    is_vip_now: true
  };
} else if (url.indexOf('filters') != -1) {
  // tophub过滤器
  if (!data.status) data.status = "off";
  if (!data.keywords) data.keywords = [];
  if (!data.items) data.items = [];
} else if (url.indexOf('alerts') != -1) {
  // 关键词追踪
  if (!data.alerts) data.alerts = [];
  if (!data.items) data.items = [];
}

$done({body: JSON.stringify(bodyObj)});
