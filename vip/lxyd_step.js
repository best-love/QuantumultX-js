/*
* 使用方法
* [MINT] hostname = sports.lifesense.com
* # 乐心运动刷步数
*/
const step = init();
const time_key = 'yd_xg_time';  /*运动修改时间，防止重复修改每日只修改一次，且必须过早晨8点*/
const step_key = 'yd_step_count'; /*修改的步数*/

let time = step.getdata(time_key);
let stepCount = step.getdata(step_key);
let curTime = new Date().getTime();
if (!time || time == '') {
  // 未设置过
  if (!isOffTime(curTime)) {
    // 未超出指定时间
      step.done();
  } else {
    doMerge();
  }
} else if (!isToday(time)) {
  // 上次设置不是今天
  if (!isOffTime(curTime)) {
    // 未超出指定时间
      step.done();
  } else {
    doMerge();
  }
} else {
  step.done();
}
/*修改*/
function doMerge(){
  let newStepCount = -1;
  do {
    newStepCount = randomStep();
  } while (stepCount == newStepCount);
  step.setdata(time_key, curTime);
  step.setdata(step_key, newStepCount);
  let body = $request.body;
  let bodyObj = JSON.parse(body);
  bodyObj.list[0].step = newStepCount;
  step.done({body: JSON.stringify(bodyObj)});
  step.msg(`乐心运动`, `步数修改: 成功`, ``);
}

function randomStep(){
  return 12000 + parseInt(10000 * Math.random());
}

/*是否今天*/
function isToday(timelong){
  return new Date().toDateString() === new Date(timelong).toDateString();
}
/*是否超出指定限定时间*/
function isOffTime(timelong){
  return new Date(timelong).getHours() >= 8;
}

function init() {
  getdata = (key) => {
    return $prefs.valueForKey(key)
  }
  setdata = (key, val) => {
    return $prefs.setValueForKey(key, val)
  }
  msg = (title, subtitle, body) => {
    $notify(title, subtitle, body)
  }
  log = (message) => console.log(message)
  get = (url, cb) => {
    url.method = 'GET'
    $task.fetch(url).then((resp) => cb(null, {}, resp.body))
  }
  post = (url, cb) => {
    url.method = 'POST'
    $task.fetch(url).then((resp) => cb(null, {}, resp.body))
  }
  put = (url, cb) => {
    url.method = 'PUT'
    $task.fetch(url).then((resp) => cb(null, {}, resp.body))
  }
  done = (value = {}) => {
    $done(value)
  }
  return { msg, log, getdata, setdata, get, post, put, done }
}
