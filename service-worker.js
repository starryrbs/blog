/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "76f8678e6ff03e4587561b855f2f23ae"
  },
  {
    "url": "about/index.html",
    "revision": "b012417642bea130a37495a66e8e265a"
  },
  {
    "url": "assets/css/0.styles.ffed565c.css",
    "revision": "230e40190855a462b48449d17a9c96b8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3a1af55e.js",
    "revision": "dc87606953acd24e65e6a4e44ebb44e3"
  },
  {
    "url": "assets/js/100.148145fd.js",
    "revision": "b5c61ba524b159afda21619401f0f381"
  },
  {
    "url": "assets/js/101.e0af8731.js",
    "revision": "7dbe7bc8f3902ee9902506e648b0a8e5"
  },
  {
    "url": "assets/js/102.7c043f5e.js",
    "revision": "71f430ef67e2c71abe9c01c8f89c5352"
  },
  {
    "url": "assets/js/103.2a1578c3.js",
    "revision": "e61726fc5cdf23f54e0e51c89a67433d"
  },
  {
    "url": "assets/js/104.7eeaa78f.js",
    "revision": "bc20c2a94a8af0a4b5e5749fc3378bee"
  },
  {
    "url": "assets/js/105.430b000f.js",
    "revision": "04385357b39a195f28d958f6f707b6e6"
  },
  {
    "url": "assets/js/106.aaa19cf2.js",
    "revision": "6ea8b90e8ff71b84d08894896aa257cf"
  },
  {
    "url": "assets/js/107.45916e69.js",
    "revision": "1693432e91a05c6421f8d81882d115d1"
  },
  {
    "url": "assets/js/108.4f9245b5.js",
    "revision": "20075be3320b7ecb33ecadc540aa4985"
  },
  {
    "url": "assets/js/109.94773b8f.js",
    "revision": "4924c9a81e24f9d18929c97f59aa3513"
  },
  {
    "url": "assets/js/11.1136a5cc.js",
    "revision": "0458dc5d6f91eebcab799acffc85b75a"
  },
  {
    "url": "assets/js/110.3a43e21c.js",
    "revision": "e936e90475f45a1af04643fde360caab"
  },
  {
    "url": "assets/js/111.fbdebf35.js",
    "revision": "5f165d79919c4d399c09616ec673b87f"
  },
  {
    "url": "assets/js/112.610ae3ad.js",
    "revision": "024a9c5882844f1d9627009ecd6c5c93"
  },
  {
    "url": "assets/js/113.90fed9fb.js",
    "revision": "609cb4bb8ce824bbb5dc86e8a794c054"
  },
  {
    "url": "assets/js/114.2b7551c7.js",
    "revision": "7fd6df3465bafffb211e0d5710791707"
  },
  {
    "url": "assets/js/115.1cc943c7.js",
    "revision": "97f005de78a53c0eb1007ba800f6ba78"
  },
  {
    "url": "assets/js/116.5558d5f0.js",
    "revision": "9d8eb3ec3a422f5846b67784c1bb8d5e"
  },
  {
    "url": "assets/js/117.40e7ea91.js",
    "revision": "04fe5289c83542b3ee48e9805667ee66"
  },
  {
    "url": "assets/js/118.61b5195f.js",
    "revision": "3f1e66e72777d4f5f9063af1cb74f906"
  },
  {
    "url": "assets/js/119.c2f8b3c5.js",
    "revision": "81c2c2c9cb0cd85a0e9a754673ad196a"
  },
  {
    "url": "assets/js/12.cf81ad02.js",
    "revision": "f44842e62b99c336e40a00f400d2091c"
  },
  {
    "url": "assets/js/120.cbf64f51.js",
    "revision": "e77f8839ebd73dd20ceab901ed3f94d5"
  },
  {
    "url": "assets/js/121.be6bf423.js",
    "revision": "2254185cbac488826a248b563c92638c"
  },
  {
    "url": "assets/js/122.34d1a8d8.js",
    "revision": "7bf50917d88e7d2e488fdc150137aff1"
  },
  {
    "url": "assets/js/123.b9549270.js",
    "revision": "f4b38daa9fcffa3330808a9c55d8f889"
  },
  {
    "url": "assets/js/124.5805f16c.js",
    "revision": "a2581364ad3a44408af1d6426c873be8"
  },
  {
    "url": "assets/js/125.d01035e3.js",
    "revision": "6199f6de5e5ae5011331f173c82f5853"
  },
  {
    "url": "assets/js/126.a843cfc0.js",
    "revision": "8dcf71dda170aa6182b4b546da3dc7b3"
  },
  {
    "url": "assets/js/127.a9cbcc91.js",
    "revision": "9bae47685db101ebc009c1136c4fb408"
  },
  {
    "url": "assets/js/128.40da115d.js",
    "revision": "43bb9abd7bc5ea4f7e191bec48f41d71"
  },
  {
    "url": "assets/js/129.d0ad2ff9.js",
    "revision": "3034dfb603411cf647403413e9da7271"
  },
  {
    "url": "assets/js/13.58814a16.js",
    "revision": "d831a70e9ed85843be6033f79e51bb43"
  },
  {
    "url": "assets/js/130.8deb8398.js",
    "revision": "d8ab8b4b132acf70a884af7a4d4e9a41"
  },
  {
    "url": "assets/js/131.47bb0b94.js",
    "revision": "65c807c5f952be238cd0e621b4bf331a"
  },
  {
    "url": "assets/js/132.a18c3dce.js",
    "revision": "ee260f0204009b964b03055096517a2f"
  },
  {
    "url": "assets/js/133.8836bf36.js",
    "revision": "01e56a50444be1580cadecf4e4a5f496"
  },
  {
    "url": "assets/js/134.aefbd4d4.js",
    "revision": "eab776ce5beb4303031bcd7e23f94e9d"
  },
  {
    "url": "assets/js/135.9fb3e453.js",
    "revision": "bd6c14ea6c68bb60656395ea4b6a60a1"
  },
  {
    "url": "assets/js/136.a57aa54b.js",
    "revision": "365e1b2660afd6144fb13795ee1d58c6"
  },
  {
    "url": "assets/js/137.e04d90ad.js",
    "revision": "f2a72300d07938eb6d0da4a1c7b6d603"
  },
  {
    "url": "assets/js/138.88644d49.js",
    "revision": "8ef7873b997f1d0bfb27a6c3ad88c7aa"
  },
  {
    "url": "assets/js/139.2bb9a644.js",
    "revision": "f44e44de80aa31339be953c4e0e21a10"
  },
  {
    "url": "assets/js/14.155a1b72.js",
    "revision": "9219dfa691d35771b9e9c5740a3655c4"
  },
  {
    "url": "assets/js/140.50b12c87.js",
    "revision": "3053ce3f7ef3b03044d43fd0c5e3984e"
  },
  {
    "url": "assets/js/141.9a5ef8d6.js",
    "revision": "11f48f92d61fc3ed738a4da17c66d011"
  },
  {
    "url": "assets/js/142.ada47c1b.js",
    "revision": "64ea101911414848dbc3a60f4bc80807"
  },
  {
    "url": "assets/js/143.29024d7a.js",
    "revision": "6f8af087eb57e7e4a7fe538a1a48a504"
  },
  {
    "url": "assets/js/144.ac417367.js",
    "revision": "978a5bdf8a78fd6140b28af73e4d2614"
  },
  {
    "url": "assets/js/145.0d90f4fd.js",
    "revision": "e997579a543a662a5c00e66fcf34d3a3"
  },
  {
    "url": "assets/js/146.b1d26236.js",
    "revision": "86f44d74894381c3ed4c74bc2b8c4408"
  },
  {
    "url": "assets/js/147.8d2740eb.js",
    "revision": "08194cb6da43cbd3b8ae3bbb76338adb"
  },
  {
    "url": "assets/js/148.e39af44e.js",
    "revision": "ce372a610b97ae5e5d9797696ccdfee0"
  },
  {
    "url": "assets/js/149.cb623a77.js",
    "revision": "beee2f528907025efadb315da197b426"
  },
  {
    "url": "assets/js/15.fe32a887.js",
    "revision": "95d612094ce80fc7470af13fecd0931f"
  },
  {
    "url": "assets/js/150.37a6c400.js",
    "revision": "4a7850f21f7aa4b4356a8c9482bf65f2"
  },
  {
    "url": "assets/js/151.22135ece.js",
    "revision": "46d4a6a63611d47d806ecd5a0bdb30d9"
  },
  {
    "url": "assets/js/152.1de1091c.js",
    "revision": "1a8e2976f0e5b5162fdf5fec9096721e"
  },
  {
    "url": "assets/js/153.cd99655b.js",
    "revision": "dd1f47c28e757b8adb07fe574155329a"
  },
  {
    "url": "assets/js/154.a8706e37.js",
    "revision": "46cc9910a9d0749e9102a80f5e6b2b50"
  },
  {
    "url": "assets/js/16.e14c5145.js",
    "revision": "4b5de8d478156462cb3263a62fe62aef"
  },
  {
    "url": "assets/js/17.60c6f847.js",
    "revision": "8a6cbbaa1b0b9a5c7060240c185ef03a"
  },
  {
    "url": "assets/js/18.e51e50fc.js",
    "revision": "3a8fedd8bca28010d93c222871ba5554"
  },
  {
    "url": "assets/js/19.46c56097.js",
    "revision": "c6cc45a19818e613a9f8633e9124d12e"
  },
  {
    "url": "assets/js/2.87c12698.js",
    "revision": "791c2379dbc682cc0dd4dd177179707b"
  },
  {
    "url": "assets/js/20.f7be9738.js",
    "revision": "1a828a5e84d5442b2c776ac079ef61ee"
  },
  {
    "url": "assets/js/21.7433c232.js",
    "revision": "891e57c6cb718b575f76680f6b0a9b1e"
  },
  {
    "url": "assets/js/22.1d4599f3.js",
    "revision": "5ad0ebbcfd5b7ec5e5c599193fcf87ee"
  },
  {
    "url": "assets/js/23.911062a7.js",
    "revision": "6d8cdbd09aa0a7045d7e7213bef22ebc"
  },
  {
    "url": "assets/js/24.8c7b4572.js",
    "revision": "a27b34197634ae459aa9b61483a9ae2d"
  },
  {
    "url": "assets/js/25.861f5f70.js",
    "revision": "ea2f67c26d54d2c4b5aec48b3244a378"
  },
  {
    "url": "assets/js/26.c2ed1b22.js",
    "revision": "132fe2a231f685a181f09b02b2a70dea"
  },
  {
    "url": "assets/js/27.6f8920ea.js",
    "revision": "bbf14c32c77087bdcbe892b6de0f61e1"
  },
  {
    "url": "assets/js/28.b05019fe.js",
    "revision": "936cab4997df77afd6dd6bdc1ad07d11"
  },
  {
    "url": "assets/js/29.d23cef08.js",
    "revision": "8d5cf6369d58feed3f9502e26428ef31"
  },
  {
    "url": "assets/js/3.26717ae3.js",
    "revision": "ab903ea298622e97369732f7c93a82d7"
  },
  {
    "url": "assets/js/30.b2f9f78b.js",
    "revision": "9127cde330dae6ac98a9de77d5789d0e"
  },
  {
    "url": "assets/js/31.67578908.js",
    "revision": "595d637dbca05cb1d0471c982e039493"
  },
  {
    "url": "assets/js/32.47e5777a.js",
    "revision": "776294c9cdcea965bcd72561581a812f"
  },
  {
    "url": "assets/js/33.53e06cdc.js",
    "revision": "035d2846fd83141465a1b2eb38ab13f9"
  },
  {
    "url": "assets/js/34.12d8188e.js",
    "revision": "7640ae1a456dd50567f0642ab1e93d9b"
  },
  {
    "url": "assets/js/35.9dea5c04.js",
    "revision": "90e47f1c1d7b3a61ef013be3ed39fe91"
  },
  {
    "url": "assets/js/36.862a5a70.js",
    "revision": "3e9abc9e94025658882d60dbf8c655a2"
  },
  {
    "url": "assets/js/37.0c45b75c.js",
    "revision": "c6039229ebf30db4694ec58b8f83d0f3"
  },
  {
    "url": "assets/js/38.85858d47.js",
    "revision": "4d50111e8bc62c9315b32336a743e2c3"
  },
  {
    "url": "assets/js/39.bf2fe0b0.js",
    "revision": "bf95e727d636b8240982614f6243aae4"
  },
  {
    "url": "assets/js/4.d62f2c4b.js",
    "revision": "161b0048840bdfc7efb97bf9abb767df"
  },
  {
    "url": "assets/js/40.398e2f85.js",
    "revision": "554f7c7de0abb1d7294922ec5363bfee"
  },
  {
    "url": "assets/js/41.981a7466.js",
    "revision": "7e74d5f9b4c5eea335fa5a117c0c9d51"
  },
  {
    "url": "assets/js/42.a4f70fbc.js",
    "revision": "a4ce068ad793793b11abbee3c6be67fa"
  },
  {
    "url": "assets/js/43.5f71bd5c.js",
    "revision": "09902a6a8309a0894dd6d826653e5309"
  },
  {
    "url": "assets/js/44.e3d5c386.js",
    "revision": "57cbb94b1c2c5ff4d3750264e3c724fa"
  },
  {
    "url": "assets/js/45.345621fa.js",
    "revision": "a5cc9419640df9d1560e378a57c3af75"
  },
  {
    "url": "assets/js/46.d9f868b2.js",
    "revision": "b6f653baf998ba0b76734eb182bde2ee"
  },
  {
    "url": "assets/js/47.89708173.js",
    "revision": "5319d3e973582db4f17051df41709bf6"
  },
  {
    "url": "assets/js/48.0fc4ca00.js",
    "revision": "e3863f2953ce69e7224e5d646fcd5edc"
  },
  {
    "url": "assets/js/49.3bf4092f.js",
    "revision": "32d42b5e9aeac60ea56856ecccf78e5b"
  },
  {
    "url": "assets/js/5.6d94a809.js",
    "revision": "a955ccf3bac1271d0aac62efc8aeb07c"
  },
  {
    "url": "assets/js/50.62dc6f12.js",
    "revision": "68cf5081048ef3ead23a9993fb9759b9"
  },
  {
    "url": "assets/js/51.0902372e.js",
    "revision": "6a08921007c04f43cd04532de2cf4f37"
  },
  {
    "url": "assets/js/52.6f556538.js",
    "revision": "fbcb7b713452cea32dadbdf1a582e1af"
  },
  {
    "url": "assets/js/53.038d53c8.js",
    "revision": "8dd44753aef7d9f758a6875f042ece5f"
  },
  {
    "url": "assets/js/54.6cf3c5f0.js",
    "revision": "b43b5ce0c3dedc1a0e8d61907a18eaaa"
  },
  {
    "url": "assets/js/55.77c8d348.js",
    "revision": "40a39a468c5d7d3850c83c41677ea474"
  },
  {
    "url": "assets/js/56.5a331051.js",
    "revision": "531b4c3baf31bcf97fb5a82473507a6d"
  },
  {
    "url": "assets/js/57.c3f9f550.js",
    "revision": "5bc61d3bbdde6774fa5882006296e06b"
  },
  {
    "url": "assets/js/58.56cef690.js",
    "revision": "b23c0add9654a799482a8f6478f6a47c"
  },
  {
    "url": "assets/js/59.456ada43.js",
    "revision": "e15332b2907a73777253d7d92d125053"
  },
  {
    "url": "assets/js/6.85125b4d.js",
    "revision": "d230a174e194538acf19d92911d334b3"
  },
  {
    "url": "assets/js/60.330750cc.js",
    "revision": "983ba2c9f86d08da3464393910028605"
  },
  {
    "url": "assets/js/61.2e639de6.js",
    "revision": "73af87f618d674639873a55f34a19a6f"
  },
  {
    "url": "assets/js/62.35f9770e.js",
    "revision": "06161a55e43e702c1ae2ede59cc72845"
  },
  {
    "url": "assets/js/63.8e3034fa.js",
    "revision": "97c6675d7322329bc66a8f56754d78b7"
  },
  {
    "url": "assets/js/64.9f56663a.js",
    "revision": "2a610d182cd707e2544b149215253f74"
  },
  {
    "url": "assets/js/65.fb8e4e73.js",
    "revision": "ab5acff8957c8976dddc5f5c2705e82f"
  },
  {
    "url": "assets/js/66.8c572a0b.js",
    "revision": "6c15be9d5ef36f45dae51f63caac1e81"
  },
  {
    "url": "assets/js/67.e181de81.js",
    "revision": "06cf6fd572404739c2c6bd9594c6f047"
  },
  {
    "url": "assets/js/68.51749f25.js",
    "revision": "75d51ba8990df6d150f1701442884af2"
  },
  {
    "url": "assets/js/69.d1233d13.js",
    "revision": "268821c12338e6537c6730eac91a756a"
  },
  {
    "url": "assets/js/7.5c6c9618.js",
    "revision": "7c50956e07275fba5476a615359f6deb"
  },
  {
    "url": "assets/js/70.7423facc.js",
    "revision": "4f6a2b1230f7700b505741741505be0e"
  },
  {
    "url": "assets/js/71.930c98de.js",
    "revision": "d2c0697966b5d9a04b227280206d8a4c"
  },
  {
    "url": "assets/js/72.585559d2.js",
    "revision": "e38a0341c89587cb55afdbca8fda111a"
  },
  {
    "url": "assets/js/73.0a03a6c9.js",
    "revision": "750e3169109f645647340f0960a7df70"
  },
  {
    "url": "assets/js/74.6df093d1.js",
    "revision": "0d0e984da6770bdb9b6340ea3728f057"
  },
  {
    "url": "assets/js/75.9237a2b6.js",
    "revision": "9b7e1f773a5937a0f4f74f73bb8f09af"
  },
  {
    "url": "assets/js/76.dfe650d1.js",
    "revision": "1ce864ecd45b369941d795bed5e93b44"
  },
  {
    "url": "assets/js/77.c418394a.js",
    "revision": "eb8f03665b7f4a534f28e8a667e1c7db"
  },
  {
    "url": "assets/js/78.28626779.js",
    "revision": "5a79b45362eba1f67ddc8ae542d60499"
  },
  {
    "url": "assets/js/79.4c713427.js",
    "revision": "d7be8e92b394b0d1798a29832af43fee"
  },
  {
    "url": "assets/js/8.34e4aa45.js",
    "revision": "c92a899c58832659d27c37008b9dca09"
  },
  {
    "url": "assets/js/80.fc818467.js",
    "revision": "4e0fdf85bf92a836be7356c1981e539d"
  },
  {
    "url": "assets/js/81.04f0ae74.js",
    "revision": "8d0ddc48dc9f943eaca9f81509d072e2"
  },
  {
    "url": "assets/js/82.570a5a9e.js",
    "revision": "d394b995c7e0674fe08f6ec8d762dd16"
  },
  {
    "url": "assets/js/83.809b7690.js",
    "revision": "d394d660c26d3796911ae2afccae8d00"
  },
  {
    "url": "assets/js/84.7e485dc9.js",
    "revision": "56d762ca11cc8707c9924fd2242b98f4"
  },
  {
    "url": "assets/js/85.2fad4bc4.js",
    "revision": "fcb5ab4bd3a56187dc3b4e0f5f8f83ed"
  },
  {
    "url": "assets/js/86.f01c9fb1.js",
    "revision": "41c0880f368fce380292e210c4b19014"
  },
  {
    "url": "assets/js/87.fb13ed7b.js",
    "revision": "aab3856f6b1c52a22d459c8c2f667a23"
  },
  {
    "url": "assets/js/88.fe49a21b.js",
    "revision": "634ecf96624c3eb05176b33025af15ce"
  },
  {
    "url": "assets/js/89.e587af0c.js",
    "revision": "7d65cd2a08884bcbbff597082283d68c"
  },
  {
    "url": "assets/js/9.23ace7f8.js",
    "revision": "eb2e82893eb9b77ba3f7c529bf6d86d8"
  },
  {
    "url": "assets/js/90.e6a43423.js",
    "revision": "6589eda76f090275ecbcc58cfc20cdea"
  },
  {
    "url": "assets/js/91.dfe3448b.js",
    "revision": "353464c140d17dbe5645e194d4054174"
  },
  {
    "url": "assets/js/92.dcffa7b3.js",
    "revision": "792233171cf8cdac0f460c4f4f412eb4"
  },
  {
    "url": "assets/js/93.460af9d2.js",
    "revision": "cb4c6db7e5ade42ac43f34831924cff3"
  },
  {
    "url": "assets/js/94.0e484f22.js",
    "revision": "7a36ea8185e51a5508ade02b8ae6d88b"
  },
  {
    "url": "assets/js/95.9b2d26f6.js",
    "revision": "10fb8c73a27276699d6c7f0ec1b146a5"
  },
  {
    "url": "assets/js/96.0d7ca784.js",
    "revision": "33d0bf88d690fdca066d049ebaa0ba5d"
  },
  {
    "url": "assets/js/97.d14e1985.js",
    "revision": "96b448071a9a88ed705da9d972e39d83"
  },
  {
    "url": "assets/js/98.d21aaa24.js",
    "revision": "f53f414a83485335f7a74571125d6c77"
  },
  {
    "url": "assets/js/99.125b834c.js",
    "revision": "2cd5c205de8b7fc75b599538d38e1a2f"
  },
  {
    "url": "assets/js/app.2d1aa66e.js",
    "revision": "7af1198b988401b854298f09e23beba6"
  },
  {
    "url": "docs/设计模式手册/index.html",
    "revision": "bb79f92e934234d7ec6b2e9c4061add8"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "en/index.html",
    "revision": "c44caef0a998544c9503d6d795783241"
  },
  {
    "url": "friends/index.html",
    "revision": "14a50c46b73c3908b68d5f65509924f4"
  },
  {
    "url": "guide/index.html",
    "revision": "10970e09bdf7ffda562843d89cc2a9a2"
  },
  {
    "url": "index.html",
    "revision": "e442afd9e46f4600025c4aacbc0792e0"
  },
  {
    "url": "passages/2018-05-23-es-promise/index.html",
    "revision": "1fd8c17bf1734b5532713444a7e97883"
  },
  {
    "url": "passages/2018-05-29-promise-async-await-order/index.html",
    "revision": "eb56cbdbe34399177bd333f70b72b1ac"
  },
  {
    "url": "passages/2018-05-29-scss-fisrt-step/index.html",
    "revision": "657d19777b81e3844fe309ca20f820b9"
  },
  {
    "url": "passages/2018-05-29-scss-more/index.html",
    "revision": "125e73b019d401baa5d40efe51e5789d"
  },
  {
    "url": "passages/2018-06-05-border-sizing/index.html",
    "revision": "6447c2a1c5c9f06a9ce870849c9716ad"
  },
  {
    "url": "passages/2018-06-19-batch-edit-log/index.html",
    "revision": "6d50db30e6d07bd383ceff9997e1edc3"
  },
  {
    "url": "passages/2018-07-29-webpack-demos-introduction/index.html",
    "revision": "33d25449b5eb2cefdaf044721de3c7aa"
  },
  {
    "url": "passages/2018-07-30-webpack-pack-js/index.html",
    "revision": "2357978481c9a1318dc20dafb4e5201c"
  },
  {
    "url": "passages/2018-07-31-webpack-compile-es6/index.html",
    "revision": "a747651643e8cfe800006b1f2b795935"
  },
  {
    "url": "passages/2018-08-06-webpack-mutiple-pages/index.html",
    "revision": "62b225256fab187b86c2fa14d31e58e9"
  },
  {
    "url": "passages/2018-08-08-webpack-spa-split-lazy/index.html",
    "revision": "8c88357dee5abe5be9db07ef754812e5"
  },
  {
    "url": "passages/2018-08-17-webpack-css/index.html",
    "revision": "7eadcf48324edd12f0d81f7359160637"
  },
  {
    "url": "passages/2018-08-18-webpack-scss/index.html",
    "revision": "6ab5f44ed776d6fe8ce137edea40d69e"
  },
  {
    "url": "passages/2018-08-19-websocket-group-chat/index.html",
    "revision": "58b48f840ed19b20b63729553ab9d137"
  },
  {
    "url": "passages/2018-08-20-canvas-beauty-filter/index.html",
    "revision": "4bd68e1f56d88f628a39e99ef38bc941"
  },
  {
    "url": "passages/2018-08-21-momentjs/index.html",
    "revision": "06bf17c2c03ae4230d5732db12f6a7cc"
  },
  {
    "url": "passages/2018-08-26-ssl/index.html",
    "revision": "0c5ec08e3fed127fb3e4d1d9b8807236"
  },
  {
    "url": "passages/2018-08-28-webpack-scss-lazy/index.html",
    "revision": "f08e26662d6dbc4a3b2f25ece684d987"
  },
  {
    "url": "passages/2018-08-30-canvas-off-screen/index.html",
    "revision": "a1b4fcc4dc8f6680a35d61623486e9eb"
  },
  {
    "url": "passages/2018-09-01-js-tree-shaking/index.html",
    "revision": "3a732da8b34d0f8ffa66b8bb5f80956b"
  },
  {
    "url": "passages/2018-09-02-css-tree-shaking/index.html",
    "revision": "c44bf049becb05df4248b43aaa7102ac"
  },
  {
    "url": "passages/2018-09-06-git-tag-and-version/index.html",
    "revision": "8fc6f143e10a69ee5a7a9ef776e855f7"
  },
  {
    "url": "passages/2018-09-07-git-stash/index.html",
    "revision": "3defba815b722fc5a7075efa8b2773a0"
  },
  {
    "url": "passages/2018-09-09-mysql-blog-ui/index.html",
    "revision": "a755072c661a52dd6f847e94ab50649d"
  },
  {
    "url": "passages/2018-09-11-webpack-image/index.html",
    "revision": "df2b17e350028d4043eba8fd1829875a"
  },
  {
    "url": "passages/2018-10-03-js-mathjax/index.html",
    "revision": "6653c7e15df672d630653a02c38ef29d"
  },
  {
    "url": "passages/2018-10-09-webpack-chracter-file/index.html",
    "revision": "7a415299dbaf98ca4783c97eae125ff2"
  },
  {
    "url": "passages/2018-10-09-webpack-js-pacakge/index.html",
    "revision": "b80a8f0415c4f8f64c6d2be0af9f5c61"
  },
  {
    "url": "passages/2018-10-17-automatic-html/index.html",
    "revision": "f0ef8eb5ab9cc9611fea1e4a650d1e7e"
  },
  {
    "url": "passages/2018-10-18-webpack-clean-and-watch-mode/index.html",
    "revision": "b52ae648788537c341d61761c3efadf6"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-and-prod/index.html",
    "revision": "dd635478510e66eecd32289867f1e408"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-server/index.html",
    "revision": "2af7fdc65d60ba127278d761c8097b60"
  },
  {
    "url": "passages/2018-10-23-singleton-pattern/index.html",
    "revision": "5ca5cf8892f96e931869c825c1f80bb9"
  },
  {
    "url": "passages/2018-10-25-stragegy-pattern/index.html",
    "revision": "3c2bf6ff611b69b842796435fd0b940b"
  },
  {
    "url": "passages/2018-11-01-proxy-pattern/index.html",
    "revision": "4f87fe9320217fd27a5820699be7cb6e"
  },
  {
    "url": "passages/2018-11-06-iter-pattern/index.html",
    "revision": "bcad4c00f2330b45581f28afed59b7cc"
  },
  {
    "url": "passages/2018-11-18-publish-subscribe-pattern/index.html",
    "revision": "dd0822331238124565fa80751b6ae4da"
  },
  {
    "url": "passages/2018-11-25-command-pattern/index.html",
    "revision": "1e8d516dca08870c5eab5627dfbb5e69"
  },
  {
    "url": "passages/2018-12-08-weekly-share-1/index.html",
    "revision": "34d83293859737586553d5906d751f80"
  },
  {
    "url": "passages/2018-12-12-composite-pattern/index.html",
    "revision": "bb8639d48dd7b51da80e9999bd275492"
  },
  {
    "url": "passages/2018-12-16-flyweight-pattern/index.html",
    "revision": "be14a7865819cbb3075a7709fed3d64a"
  },
  {
    "url": "passages/2018-12-24-weekly-share-2/index.html",
    "revision": "172195309c33a1b021e4dc70ccb44d8b"
  },
  {
    "url": "passages/2019-01-07-chain-of-responsibility-pattern/index.html",
    "revision": "0fe1f5cb7b164e54fb1efc3cf56f69f6"
  },
  {
    "url": "passages/2019-01-12-decorator-pattern/index.html",
    "revision": "37cd9e06313ca51eac9e12512279cef6"
  },
  {
    "url": "passages/2019-01-16-state-pattern/index.html",
    "revision": "93eb0227a5eac6610dc9fef01c587201"
  },
  {
    "url": "passages/2019-01-17-adapter-pattern/index.html",
    "revision": "c725f71f51634fd9ddb16b45accc4063"
  },
  {
    "url": "passages/2019-01-19-bridge-pattern/index.html",
    "revision": "8cb0d02aa12bbcebbc504e9395258e75"
  },
  {
    "url": "passages/2019-01-25-interpreter-pattern/index.html",
    "revision": "768e7fb6a7f83ef5748ead9f829d6cf1"
  },
  {
    "url": "passages/2019-01-26-memento-pattern/index.html",
    "revision": "9dd3fdf13a225944c54cedcf610c4f8c"
  },
  {
    "url": "passages/2019-01-31-template-pattern/index.html",
    "revision": "ea87898b74ae900b480f2ef2c24b454d"
  },
  {
    "url": "passages/2019-03-18-interview-js-code/index.html",
    "revision": "f5fc98ac16fa553b625b8b5acba93e76"
  },
  {
    "url": "passages/2019-03-19-css3-nth-child/index.html",
    "revision": "715a3b69655e58565d73361346ae2f0c"
  },
  {
    "url": "passages/2019-03-20-css3-flex/index.html",
    "revision": "4d8d28ee34ee93cff2be4c0a90c1a180"
  },
  {
    "url": "passages/2019-03-21-js-re/index.html",
    "revision": "c808f6bacd071c860f39d096a6fbaa0d"
  },
  {
    "url": "passages/2019-03-26-javascript-first/index.html",
    "revision": "695eae36bf08a056d2b17bc61355df4a"
  },
  {
    "url": "passages/2019-03-27-javascript-second/index.html",
    "revision": "c5b50dc8cfd0d9a79da3f522ae040680"
  },
  {
    "url": "passages/2019-03-31-factory-pattern/index.html",
    "revision": "fa3e71927b48fabe3c31f127cc6a839d"
  },
  {
    "url": "passages/2019-04-01-abstract-factory-pattern/index.html",
    "revision": "936026c5b3c809317bccb9cc8fd5bafd"
  },
  {
    "url": "passages/2019-04-02-pwa-service-worker/index.html",
    "revision": "2b065d8d2a23a233654a909be786c303"
  },
  {
    "url": "passages/2019-04-08-react-components-communication/index.html",
    "revision": "fde5a66bf645b02f4bd142329c13fdbc"
  },
  {
    "url": "passages/2019-04-09-es6/index.html",
    "revision": "41d45888679bbc02cc6801b33db2a884"
  },
  {
    "url": "passages/2019-04-10-html5-drag-drop/index.html",
    "revision": "d96ddcc19775e9c5ddacf9896946ad67"
  },
  {
    "url": "passages/2019-04-15-wechat-h5-login/index.html",
    "revision": "7f2cbb5a77c08a02121e27e898ba4974"
  },
  {
    "url": "passages/2019-04-16-axios/index.html",
    "revision": "782ddaf6324778ae14ea041df09a4e6c"
  },
  {
    "url": "passages/2019-04-23-vemojs/index.html",
    "revision": "c1f96e9371919aae2163de9fc8f04b7b"
  },
  {
    "url": "passages/2019-05-02-node-block-chain/index.html",
    "revision": "38a88ff4f72be6f31259f64a15d72447"
  },
  {
    "url": "passages/2019-05-04-deep-in-jest/index.html",
    "revision": "949046413a058a090c141c555bb814a8"
  },
  {
    "url": "passages/2019-05-04-jest-base/index.html",
    "revision": "0f48bb505be3301ab96f1e01e36f3f5f"
  },
  {
    "url": "passages/2019-05-04-rr/index.html",
    "revision": "8b388e9285cc38447db56a2de3763578"
  },
  {
    "url": "passages/2019-05-07-play-node-shell/index.html",
    "revision": "a36bf4cb7f7c4c94e443100c8497dbcd"
  },
  {
    "url": "passages/2019-05-15-browser/index.html",
    "revision": "3f9fc87a3038860b4f0a921ad2c6c00e"
  },
  {
    "url": "passages/2019-05-15-web-safety/index.html",
    "revision": "ea89c1e61f4eb889dad154a93b17ad47"
  },
  {
    "url": "passages/2019-05-17-why-i-stopped-using-sass/index.html",
    "revision": "1090bf6f20263459e6dea0735b289d58"
  },
  {
    "url": "passages/2019-05-18-serverless-page-counter/index.html",
    "revision": "fc8510a997d3026cd11d9bbc391ed47e"
  },
  {
    "url": "passages/2019-05-28-professional-js-notes/index.html",
    "revision": "ee4c0398f19fdecf563efedeaa2b3257"
  },
  {
    "url": "passages/2019-06-10-weekly-share/index.html",
    "revision": "607e9b6a54708b587d332527a7ace918"
  },
  {
    "url": "passages/2019-06-18-deep-in-koa/index.html",
    "revision": "b2ae2b8804cc1510a809fae24c410c88"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa-3/index.html",
    "revision": "9e088fc21bb1d10dacdc2772fc59527f"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa/index.html",
    "revision": "c2ce677d18b2cdea39ab3deabace1842"
  },
  {
    "url": "passages/2019-06-23-algorithm-offer/index.html",
    "revision": "d7883088e2318179245430393394340a"
  },
  {
    "url": "passages/2019-06-23-array-change-location/index.html",
    "revision": "16803a131d564b33722132a9d9f4b3e3"
  },
  {
    "url": "passages/2019-06-23-array-find/index.html",
    "revision": "2b2e3145e7ce472c6d3a21dc5e6bb33c"
  },
  {
    "url": "passages/2019-06-23-array-inverse-pair/index.html",
    "revision": "dae24719a73e10ad1695346617e03884"
  },
  {
    "url": "passages/2019-06-23-array-min-numbers/index.html",
    "revision": "ff59ea1988d8afd052fbc621efbe2d3d"
  },
  {
    "url": "passages/2019-06-23-bit-first-one/index.html",
    "revision": "8d859bcb74673ca683c0f4540b56c5a6"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one-more/index.html",
    "revision": "feb18565196b174d039e13c77f93796a"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one/index.html",
    "revision": "a9721cde788d61b5ae00f3670f30795a"
  },
  {
    "url": "passages/2019-06-23-find-min-num/index.html",
    "revision": "d9fed6c12db18323933c457376700d84"
  },
  {
    "url": "passages/2019-06-23-find-times-in-sorted/index.html",
    "revision": "dc4b6247cea88850e4c1ca75b8e30f6f"
  },
  {
    "url": "passages/2019-06-23-hash-first-no-repeat-char/index.html",
    "revision": "adc1545358dffdbcea513488b49d309b"
  },
  {
    "url": "passages/2019-06-23-hash-ugly/index.html",
    "revision": "f36347ef99b7f52b39ea88fcb3931970"
  },
  {
    "url": "passages/2019-06-23-heap-kth-numbers/index.html",
    "revision": "a62d192dea318a13542d7f735fe91041"
  },
  {
    "url": "passages/2019-06-23-list-clone/index.html",
    "revision": "4e63d35f91f83d2c36d3e0d214d7b9e8"
  },
  {
    "url": "passages/2019-06-23-list-delete-node/index.html",
    "revision": "991586fa17451bf87f56baf53070ed76"
  },
  {
    "url": "passages/2019-06-23-list-first-same-node/index.html",
    "revision": "f3c21c6abd52797b4860e5ae617a5a5e"
  },
  {
    "url": "passages/2019-06-23-list-last-kth-node/index.html",
    "revision": "513449ed5283ad7ca0ce655d3c8a9512"
  },
  {
    "url": "passages/2019-06-23-list-merge/index.html",
    "revision": "2c587d9bb4a3fc47f8becb23f0f4a89c"
  },
  {
    "url": "passages/2019-06-23-list-print/index.html",
    "revision": "1fb435029bd26c92fdc75e3a20f6fa7b"
  },
  {
    "url": "passages/2019-06-23-list-reverse/index.html",
    "revision": "00a36f74b94155f9a464725051a28e35"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-and-number-is-s/index.html",
    "revision": "c84508ed0b3b2b678f9639595b5e646c"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-fibonacci/index.html",
    "revision": "8500461087f9e430434aa17807625d99"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-from-one-to-one/index.html",
    "revision": "f76fdbd3fad8a19374b4c48e1f2261d6"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-joseph-ring/index.html",
    "revision": "cb6a26ac2848edbd82866639a54615fb"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-min-kth/index.html",
    "revision": "44ce4d4c7cba3cf43daede47a47b67e4"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-n-probability/index.html",
    "revision": "8c16805927d1c2ffb78365e51051125d"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-playing-cards/index.html",
    "revision": "404b7e7d01519585ecd7c1993b456158"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-pow/index.html",
    "revision": "8973e7ad330c7d1017e4d713e562fa51"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-print-matrix/index.html",
    "revision": "4751e6d7f3d85b219cc8cf0eed7c4597"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-s-sequence/index.html",
    "revision": "0332b48199d73eda346712016ba1778f"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-times-more-than-half/index.html",
    "revision": "cc49352a8b8be7f0150f38313a48d640"
  },
  {
    "url": "passages/2019-06-23-stack-queue-exchange/index.html",
    "revision": "fa3c1ec091d2db8d47ff9724fbbd69b3"
  },
  {
    "url": "passages/2019-06-23-stack-queue-min-stack/index.html",
    "revision": "6ccc00a64e1b423b0603f1948cb16281"
  },
  {
    "url": "passages/2019-06-23-stack-queue-push-pop-order/index.html",
    "revision": "9c8b93f11d13e5334d0c871aadf48176"
  },
  {
    "url": "passages/2019-06-23-str-atoi/index.html",
    "revision": "1f4de6e01469aa5482a8a534a56bd7ea"
  },
  {
    "url": "passages/2019-06-23-str-perm/index.html",
    "revision": "ad2cce60cf00f705b3ed2f416ce16612"
  },
  {
    "url": "passages/2019-06-23-str-replace-empty/index.html",
    "revision": "962ad6a5f4be79669ae1a8f28c730f72"
  },
  {
    "url": "passages/2019-06-23-str-reverse-sentence/index.html",
    "revision": "908b6cea622af224f3ccd66bf29a3448"
  },
  {
    "url": "passages/2019-06-23-tree-convert-to-list/index.html",
    "revision": "451c19e07eef2285d8f52b8ce5af4377"
  },
  {
    "url": "passages/2019-06-23-tree-is-balance/index.html",
    "revision": "d99f87c34ed5c2269f26c7e312cf5016"
  },
  {
    "url": "passages/2019-06-23-tree-level-travel/index.html",
    "revision": "935265696a0201cf03c3c2f933c5b2f0"
  },
  {
    "url": "passages/2019-06-23-tree-mirror/index.html",
    "revision": "7ba1a897efcda05b5dd65c7b2d6b33fd"
  },
  {
    "url": "passages/2019-06-23-tree-path-with-number/index.html",
    "revision": "8b99ee60ce953720ec77d7d60876a598"
  },
  {
    "url": "passages/2019-06-23-tree-rebuild/index.html",
    "revision": "5cb6e52d52e9ae271ff1d42f7f9c1e8c"
  },
  {
    "url": "passages/2019-06-23-tree-subtree/index.html",
    "revision": "73e5e90ef3d21b8900464a55080138dd"
  },
  {
    "url": "passages/2019-06-23-tree-tail-order/index.html",
    "revision": "953020c3ddd571e95998d01242f651fd"
  },
  {
    "url": "passages/2019-07-15-file-api/index.html",
    "revision": "2929eeb09ebf0f382935db164a41b0f5"
  },
  {
    "url": "passages/2019-07-16-font-animation/index.html",
    "revision": "77591854bd9bddf73e6a7b6f04b98ebd"
  },
  {
    "url": "passages/2019-07-22-input-animation/index.html",
    "revision": "a218a32ad145c5588370f5263238e12d"
  },
  {
    "url": "passages/2019-07-24-button-animation/index.html",
    "revision": "d2f5fa82c6642e3d2f9d20191f8c8f26"
  },
  {
    "url": "passages/2019-07-25-loader-animation-first/index.html",
    "revision": "6b9c1177757b642f5c02bde4d23056a2"
  },
  {
    "url": "passages/2019-07-26-loader-animation-second/index.html",
    "revision": "dbd173589f43c0b737d2ab8e36ffc94a"
  },
  {
    "url": "passages/2019-08-14-game-gomoku/index.html",
    "revision": "6a8c163073a6f7f006040b0b672ef920"
  },
  {
    "url": "passages/2019-08-27-koa-meet-typescript/index.html",
    "revision": "df3f3a73c9f4f4a759cc7f57eea460e5"
  },
  {
    "url": "passages/2019-08-27-typescript-notes/index.html",
    "revision": "475616504517108f2ade5bbfd9c3f4fe"
  },
  {
    "url": "passages/2019-08-31-chain-of-responsibility-patterns/index.html",
    "revision": "2103ac85cdbb3e497d54c944ee597e0f"
  },
  {
    "url": "passages/2019-08-31-command-patterns/index.html",
    "revision": "b4830a6e9fb7ec931a9214dba7d7edb1"
  },
  {
    "url": "passages/2019-08-31-design-patterns/index.html",
    "revision": "fa587adb1e80d52780fe06d48826c85b"
  },
  {
    "url": "passages/2019-08-31-state-patterns/index.html",
    "revision": "5fca8b547ea50cca7e5ee05308ff9cac"
  },
  {
    "url": "passages/2019-09-02-node.js-basics/index.html",
    "revision": "71756aea01a0c3c059860d4662eaeff1"
  },
  {
    "url": "passages/2019-09-02-nodejs-callback/index.html",
    "revision": "f81b105f39143f9b9e2078815accb5ca"
  },
  {
    "url": "passages/2019-09-03-node.js-event-loop/index.html",
    "revision": "d3bc4b9d8b60a1e65d3e4f79359c6451"
  },
  {
    "url": "together/index.html",
    "revision": "1a470fedbf9d8c9001c8021068ab0cf4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
