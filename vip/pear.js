const vip_urls = [
  '/api/account/IndexDetail',
  '/api/account/IsVip',
  '/api/account/UserSetting',
  '/api/account/TabRedTip',
  '/api/Account/Suport',
  '/api/cartoon/VipInfo',
  '/api/cartoon/GetAllTagNew',
  '/api/cartoon/indexNew/*',
  '/api/cartoon/LookPhotoVip/*',
  '/api/cartoon/CheckCartoonVip/*',
  '/api/Adv/VuePage/*',
  '/api/PictureSet/OpenPictureSetFree',
  '/api/PictureSet/LookPhoto/*',
  '/api/Download/CheckDownloadTorrent',
  '/api/Movie/Commoent/*',
  '/api/Movie/WatchMovie',
  '/api/video/watch/*'
];

let body = $request.body;

body.replace('"vipEndTime":"2020-03-01"', '"vipEndTime":"2099-03-01"');
body.replace('"vipEndTime":null', '"vipEndTime":"2099-03-01"');
/*数值型*/
body.replace('"vipLevel":0', '"vipLevel":3');
body.replace('"level":0', '"level":3');
body.replace('"surplusCount":0', '"surplusCount":1');
body.replace('"loadCount":null', '"loadCount":60');
body.replace('"count":0', '"count":99');
body.replace('"vip":null', '"vip":3');
/*bool型*/
body.replace('"isVip":false', '"isVip":true');
body.replace('"hadRead":false', '"hadRead":true');
body.replace('"cartoonVip":false', '"cartoonVip":true');
body.replace('"isSkip":false', '"isSkip":true');
body.replace('"isBackShow":false', '"isBackShow":true');
body.replace('"value":false', '"value":true');
body.replace('"hadWach":false', '"hadWach":true');
body.replace('"canWach":false', '"canWach":true');

$done({body: body});