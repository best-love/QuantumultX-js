/*
* 使用方法
* [MINT] hostname = m.pearkin.com
* # 雪梨Pear全局VIP
* ^https://m.pearkin.com/(api/account/IndexDetail|api/account/IsVip|api/account/UserSetting|api/account/TabRedTip|api/Account/Suport|api/cartoon/VipInfo|api/cartoon/GetAllTagNew|api/cartoon/indexNew/.*|api/cartoon/LookPhotoVip/.*|api/cartoon/CheckCartoonVip/.*|api/Adv/VuePage/.*|api/PictureSet/OpenPictureSetFree|api/PictureSet/LookPhoto/.*|api/Download/CheckDownloadTorrent|api/Movie/Commoent/.*|api/Movie/WatchMovie|api/video/watch/.*) url script-response-body QuantumultX-js/vip/pear.js
*/

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

let body = $response.body;

body = body.replace('"vipEndTime":"2020-03-01"', '"vipEndTime":"2099-03-01"');
body = body.replace('"vipEndTime":null', '"vipEndTime":"2099-03-01"');
/*数值型*/
body = body.replace('"vipLevel":0', '"vipLevel":3');
body = body.replace('"level":0', '"level":3');
body = body.replace('"surplusCount":0', '"surplusCount":1');
body = body.replace('"loadCount":null', '"loadCount":60');
body = body.replace('"count":0', '"count":99');
body = body.replace('"vip":null', '"vip":3');
/*bool型*/
body = body.replace('"orderVip":false', '"orderVip":true');
body = body.replace('"isVip":false', '"isVip":true');
body = body.replace('"hadRead":false', '"hadRead":true');
body = body.replace('"cartoonVip":false', '"cartoonVip":true');
body = body.replace('"isSkip":false', '"isSkip":true');
body = body.replace('"isBackShow":false', '"isBackShow":true');
body = body.replace('"value":false', '"value":true');
body = body.replace('"hadWach":false', '"hadWach":true');
body = body.replace('"canWach":false', '"canWach":true');

$done({body: body});
