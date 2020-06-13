'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6de80c7802b0c16758d0c0c24777c555",
"assets/assets/art_1.png": "7551561d9ee12a54552a55843c534b08",
"assets/assets/art_2.png": "8c1e0686908a50e31694192058857df8",
"assets/assets/art_3.png": "b4a9d161fb01015444bf980da84b5819",
"assets/assets/art_31.png": "effe8d2fc9e0c8f4e72faccc8aa86d08",
"assets/assets/art_4.png": "ff50ca102b3c15f5d62e8e0d5410c0d0",
"assets/assets/art_5.png": "25e0f524ca349b465432307441baeb2d",
"assets/assets/devsangamam.png": "8471b7d9213796e46b7fded8e57841e3",
"assets/assets/devsangamamicon.png": "29d3c9c55a155845dff0607c14b40615",
"assets/assets/facebook.png": "369e986b3f20ddf0ebf5aa78a4371dca",
"assets/assets/gdgch.png": "971a7cb4e1a8d4352decf7356701c244",
"assets/assets/header.png": "3a449cc702dd2fe6ddd450d2d54bbbb1",
"assets/assets/insta.png": "d2a41e35f0634d4c941940421b438d15",
"assets/assets/lefttop.png": "7827b6119def8b318127581290d9b113",
"assets/assets/linkdin.png": "15b103403e222fdb07a8dcd822f45ba9",
"assets/assets/mic.png": "40d70f184ae61aa41e3c42968c106613",
"assets/assets/mobiledevsangam.png": "2b0fd672886bf3d617b2182229de6f56",
"assets/assets/mobiletop.png": "8e2da1907e3050f80b25ef52bd50b767",
"assets/assets/no1.png": "fd598d3ca2bf10b98a38526a69fe8538",
"assets/assets/no10.png": "408eaeae3c4472f4faa1a57624ecd1aa",
"assets/assets/no11.png": "ab01f5db2bf02c5cc69879edc9a4fb8b",
"assets/assets/no12.png": "5232e83a7f765c385bb0f1113741b322",
"assets/assets/no13.png": "c8eedae864110331d6a09d15ae60d9a4",
"assets/assets/no14.png": "17fd7a1595bbe0ad53dc24bf78b31cb9",
"assets/assets/no2.png": "f8957b7d2937a8a35ba816dcc883b78a",
"assets/assets/no3.png": "993f64609d19798b2fdba4031aa62654",
"assets/assets/no4.png": "51d225e81c925a0e61a451ccc5348078",
"assets/assets/no5.png": "6b04e498c130a0c39c69b419614a287e",
"assets/assets/no6.png": "50321e2e0c32ecbba5fe9bb2608614c0",
"assets/assets/no7.png": "dbff1a71abcde642ff5cefdca8bb80a7",
"assets/assets/no8.png": "0a2334e09bcef235447cb409b4cd30f2",
"assets/assets/no9.png": "52f505b6566d0b1a7c8974bdd1e473ed",
"assets/assets/rightbot.png": "a315a50b407b7691321f710c5de476b7",
"assets/assets/sec_break.png": "c54a88a426baabbadb6f767d749bff4f",
"assets/assets/twitter.png": "21a544242443511995be5b7326ea1abc",
"assets/assets/webdevsangam.png": "c22cdc5e06f6912c1e8a5aeca0596eb5",
"assets/assets/wtmch.png": "8f416146e3129abb2bd3d7dc3c38c449",
"assets/FontManifest.json": "a9ffd3b76d04c2f83197d3921cf6b44e",
"assets/fonts/GoogleSans-Bold-v1.27.ttf": "c0370e8a74992bab73461f8348e3b369",
"assets/fonts/GoogleSans-Regular-v1.27.ttf": "51134713ade7b1f137e06ce395d39d40",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "0d0aec70d8f21b04470c78d57358addd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"devsangamamicon.png": "29d3c9c55a155845dff0607c14b40615",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/dev.png": "29d3c9c55a155845dff0607c14b40615",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "9ee8b9a6cce4c2a6cb8d0a5213db2df8",
"/": "9ee8b9a6cce4c2a6cb8d0a5213db2df8",
"main.dart.js": "7836fe63ce2ceed5873e5b141392c946",
"manifest.json": "2b40be657fd3ce8883502bf877e979b5"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
