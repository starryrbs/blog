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
    "revision": "78dfc62526c8cef9437a390731ce6869"
  },
  {
    "url": "about/index.html",
    "revision": "fe6cb65d7ec4b506e8f17f45b581308c"
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
    "url": "assets/js/10.5f74f994.js",
    "revision": "6aa2fe7fb33448cefd962c70be312594"
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
    "url": "assets/js/11.70892067.js",
    "revision": "696aae395fb52b2de711f213edf7c01e"
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
    "url": "assets/js/12.8631e435.js",
    "revision": "a574a61ccc9f0f9b75240b5a051dbf5b"
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
    "url": "assets/js/124.2ff4e9ad.js",
    "revision": "0c8075a66712df380612c69d7ad04404"
  },
  {
    "url": "assets/js/125.78e342d2.js",
    "revision": "0923c03d1f950a6e5802a3b0945b911a"
  },
  {
    "url": "assets/js/126.eeb1010d.js",
    "revision": "36a2d0819114573faca98c83b763f47c"
  },
  {
    "url": "assets/js/127.bb0eaf49.js",
    "revision": "9da3a1c8325d6dde948b9f144147082b"
  },
  {
    "url": "assets/js/128.9b8f710e.js",
    "revision": "7169d09174cf8c8b8df1f4bd453b0404"
  },
  {
    "url": "assets/js/129.bb4d10c7.js",
    "revision": "176cd464e01e969eaa0a3bbb8912755c"
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
    "url": "assets/js/137.15f460c4.js",
    "revision": "409defe6063b5555b89b15caead8ef0b"
  },
  {
    "url": "assets/js/138.db8df590.js",
    "revision": "98ee6a4e3c6fc88e65b0c69118d7ed8d"
  },
  {
    "url": "assets/js/139.12af36f6.js",
    "revision": "3b1107eeba9e94ed41cfae766f449646"
  },
  {
    "url": "assets/js/14.155a1b72.js",
    "revision": "9219dfa691d35771b9e9c5740a3655c4"
  },
  {
    "url": "assets/js/140.7861bb9d.js",
    "revision": "84a1df116888039d037b462e7adcb314"
  },
  {
    "url": "assets/js/141.bfc210e4.js",
    "revision": "8d8d736c5be1b7deecdef39ed607c7d8"
  },
  {
    "url": "assets/js/142.985296dc.js",
    "revision": "0dd044183d9b226a9cb66f79a589947c"
  },
  {
    "url": "assets/js/143.64731b3f.js",
    "revision": "fe916b9e23db1cbf5df8ece316e61297"
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
    "url": "assets/js/19.1e6fa856.js",
    "revision": "7137205e4764a6727f5c40d96f2889f5"
  },
  {
    "url": "assets/js/2.87c12698.js",
    "revision": "791c2379dbc682cc0dd4dd177179707b"
  },
  {
    "url": "assets/js/20.83db829e.js",
    "revision": "16bb18eaf43ce11608efc524ec2ddeba"
  },
  {
    "url": "assets/js/21.7433c232.js",
    "revision": "891e57c6cb718b575f76680f6b0a9b1e"
  },
  {
    "url": "assets/js/22.dc98dbcf.js",
    "revision": "c9a20b7ef1d0e61b75297948bc22c321"
  },
  {
    "url": "assets/js/23.08eb7597.js",
    "revision": "b0af5a506089132e97e3e63b99fcfe00"
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
    "url": "assets/js/29.c89342b6.js",
    "revision": "973ce1668ad2d51621cc1438d0c2b464"
  },
  {
    "url": "assets/js/3.26717ae3.js",
    "revision": "ab903ea298622e97369732f7c93a82d7"
  },
  {
    "url": "assets/js/30.a772dbfc.js",
    "revision": "98cb0f1414c6b6dc8fc7ab1813b347b9"
  },
  {
    "url": "assets/js/31.67c78cfe.js",
    "revision": "8fc811ac2a96acb45a211f6ad3ea020f"
  },
  {
    "url": "assets/js/32.ef8ca86d.js",
    "revision": "fdcd4616a2998a6f520d8aa0b961d098"
  },
  {
    "url": "assets/js/33.6a53a589.js",
    "revision": "3b4fedfc84114d2c41b30b72f6c55fc8"
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
    "url": "assets/js/36.8f003be2.js",
    "revision": "bb8b62a44383def8626764a1a7e99099"
  },
  {
    "url": "assets/js/37.39bc0983.js",
    "revision": "bb0b776d4313cc0ed033a97184f32f05"
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
    "url": "assets/js/43.1513d9f5.js",
    "revision": "e3772a44596ea33d741ec7cad447ed16"
  },
  {
    "url": "assets/js/44.e3d5c386.js",
    "revision": "57cbb94b1c2c5ff4d3750264e3c724fa"
  },
  {
    "url": "assets/js/45.a8984cd4.js",
    "revision": "4725c86682b1348201b5ff3e8f120594"
  },
  {
    "url": "assets/js/46.67713998.js",
    "revision": "eb14a4856b2f863cfc0c1be32ca43908"
  },
  {
    "url": "assets/js/47.8042ead9.js",
    "revision": "c0aa282915c0fae29b7273a4bf00f864"
  },
  {
    "url": "assets/js/48.13f0ce7f.js",
    "revision": "8ffc40d8b6a25bad05ed5f57648e9432"
  },
  {
    "url": "assets/js/49.7748e9be.js",
    "revision": "bab5e61b88190f981308426acb8c0013"
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
    "url": "assets/js/55.e484b4a0.js",
    "revision": "fbf56bc75255e47ff73c515e63632155"
  },
  {
    "url": "assets/js/56.5a331051.js",
    "revision": "531b4c3baf31bcf97fb5a82473507a6d"
  },
  {
    "url": "assets/js/57.8c7c8e5e.js",
    "revision": "414d1202e26a5c6b14ef0a1ec52b7b04"
  },
  {
    "url": "assets/js/58.53108330.js",
    "revision": "ce64520d74cad913a2c98dc8d6afdc8a"
  },
  {
    "url": "assets/js/59.0dc449b6.js",
    "revision": "729c22516ff5011f8ef71ef8386df6f7"
  },
  {
    "url": "assets/js/6.85125b4d.js",
    "revision": "d230a174e194538acf19d92911d334b3"
  },
  {
    "url": "assets/js/60.118e8d47.js",
    "revision": "b9b4b84a09e0dcd1cdabdc8602584aca"
  },
  {
    "url": "assets/js/61.7923090a.js",
    "revision": "79877c07d1e56d3544aadd27d9073e03"
  },
  {
    "url": "assets/js/62.661b2a78.js",
    "revision": "41acde76746a9ff1d338abefbc6301cd"
  },
  {
    "url": "assets/js/63.f8e09e1d.js",
    "revision": "ab8528f9ecb35d8ca1119367147ad07b"
  },
  {
    "url": "assets/js/64.9f56663a.js",
    "revision": "2a610d182cd707e2544b149215253f74"
  },
  {
    "url": "assets/js/65.3062eefa.js",
    "revision": "1e49cbf8bff4b004288b9bef70263f0c"
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
    "url": "assets/js/69.3766c240.js",
    "revision": "cc87ce797831333637d122b541ca16e1"
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
    "url": "assets/js/71.d538fe4f.js",
    "revision": "5f707925d4e93c9b67a4e84dbb5172bb"
  },
  {
    "url": "assets/js/72.6aae11a1.js",
    "revision": "7c74acb071b91f7a2c16c46546f217f8"
  },
  {
    "url": "assets/js/73.4e4f6e45.js",
    "revision": "e2afa8900c7e764a432e99294e7cc6b7"
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
    "url": "assets/js/76.7e57f87a.js",
    "revision": "bf48759995bd9c8a4000be8189873434"
  },
  {
    "url": "assets/js/77.ad42636d.js",
    "revision": "9c8be61c012b5e60e8f6c937df06796c"
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
    "url": "assets/js/84.acad0291.js",
    "revision": "2204a67ec12ce1bbe654e3205e918107"
  },
  {
    "url": "assets/js/85.361a4ea4.js",
    "revision": "3cc1b24575c2a9940f26bd0f1e604220"
  },
  {
    "url": "assets/js/86.06bddcfe.js",
    "revision": "7a0d6f9a0bebf9906489b0c997d9e446"
  },
  {
    "url": "assets/js/87.deb5aa94.js",
    "revision": "5c732edada47d29472aba9e9a69f377e"
  },
  {
    "url": "assets/js/88.c404969f.js",
    "revision": "9b0cc2b572130e18f5f24d55abc53ff1"
  },
  {
    "url": "assets/js/89.dec0ff14.js",
    "revision": "ea19c8cbe47abdbff6af3098341a2ea2"
  },
  {
    "url": "assets/js/9.cb5aadd3.js",
    "revision": "d028c55fc342aa259d182cc66d5d7286"
  },
  {
    "url": "assets/js/90.e6a43423.js",
    "revision": "6589eda76f090275ecbcc58cfc20cdea"
  },
  {
    "url": "assets/js/91.22e7f4f1.js",
    "revision": "a36fcfe5ade55de084f52980b715c48c"
  },
  {
    "url": "assets/js/92.432c600a.js",
    "revision": "eca4887eeb8662f03d3b2ce4dbdb9cf0"
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
    "url": "assets/js/app.c5dee5fb.js",
    "revision": "981ed00d21a59ef5ba845f6cc6bddfae"
  },
  {
    "url": "docs/设计模式手册/index.html",
    "revision": "1f47029cfd7392c9ca4eb419b6bb96e1"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "en/index.html",
    "revision": "1bcb2dbde3b5f23e82e027105bcab002"
  },
  {
    "url": "friends/index.html",
    "revision": "bc6e4548b786aa13919a903c80a0a9f1"
  },
  {
    "url": "guide/index.html",
    "revision": "52a9a65d4aee0d7653c0353e79692eea"
  },
  {
    "url": "index.html",
    "revision": "b1a0cf90eabc2b869d2ee77ab518cd0c"
  },
  {
    "url": "passages/2018-05-23-es-promise/index.html",
    "revision": "4757b45f8b79e9b36bd1a3c14a1c8c60"
  },
  {
    "url": "passages/2018-05-29-promise-async-await-order/index.html",
    "revision": "87e17808953f88d7d4b879843186d288"
  },
  {
    "url": "passages/2018-05-29-scss-fisrt-step/index.html",
    "revision": "9f179a6173c2d30e394f73f7baa81887"
  },
  {
    "url": "passages/2018-05-29-scss-more/index.html",
    "revision": "8f89d6cf425f702a85566e1421456466"
  },
  {
    "url": "passages/2018-06-05-border-sizing/index.html",
    "revision": "b2f5a933031ccc9ced5524bb9d26f2ac"
  },
  {
    "url": "passages/2018-06-19-batch-edit-log/index.html",
    "revision": "083d9efcdc14c222958555b501a8a5e4"
  },
  {
    "url": "passages/2018-07-29-webpack-demos-introduction/index.html",
    "revision": "3f2406553c0692e8b99c4509b2ec38bd"
  },
  {
    "url": "passages/2018-07-30-webpack-pack-js/index.html",
    "revision": "675955d1d1663a2aec01596a5b50aa29"
  },
  {
    "url": "passages/2018-07-31-webpack-compile-es6/index.html",
    "revision": "71c58294373b21df9fae4e43344d8774"
  },
  {
    "url": "passages/2018-08-06-webpack-mutiple-pages/index.html",
    "revision": "3a43ccfb780717f202c051e829f22ccc"
  },
  {
    "url": "passages/2018-08-08-webpack-spa-split-lazy/index.html",
    "revision": "bad667fb0fcfcec944e71228b1b74fa8"
  },
  {
    "url": "passages/2018-08-17-webpack-css/index.html",
    "revision": "f5cf8e57149240f2004931c9ea90dc65"
  },
  {
    "url": "passages/2018-08-18-webpack-scss/index.html",
    "revision": "588a45549c77dd030cbf0eecffd992e7"
  },
  {
    "url": "passages/2018-08-19-websocket-group-chat/index.html",
    "revision": "be57278987ea88b8d5043c3e5ea74b70"
  },
  {
    "url": "passages/2018-08-20-canvas-beauty-filter/index.html",
    "revision": "7d4f026f5b29fc0e5b8450585ee180ea"
  },
  {
    "url": "passages/2018-08-21-momentjs/index.html",
    "revision": "73a25fb5da2722eb4b2abeffeb5ae518"
  },
  {
    "url": "passages/2018-08-26-ssl/index.html",
    "revision": "e1dd3c401da21f0ff51d53b2a0fbc95b"
  },
  {
    "url": "passages/2018-08-28-webpack-scss-lazy/index.html",
    "revision": "a0bb3b6740fddcb4310335e12e33d207"
  },
  {
    "url": "passages/2018-08-30-canvas-off-screen/index.html",
    "revision": "b40ef8f6e0b96fa4b2dc37b9809dd56e"
  },
  {
    "url": "passages/2018-09-01-js-tree-shaking/index.html",
    "revision": "db8fb139ded0374b25100e20f0a55088"
  },
  {
    "url": "passages/2018-09-02-css-tree-shaking/index.html",
    "revision": "d95966f4d9aca54b1784c00ef3e55855"
  },
  {
    "url": "passages/2018-09-06-git-tag-and-version/index.html",
    "revision": "caeb72589173bc2166fe187dd6574873"
  },
  {
    "url": "passages/2018-09-07-git-stash/index.html",
    "revision": "241a6176d1474b35592a065bc2f6f63b"
  },
  {
    "url": "passages/2018-09-09-mysql-blog-ui/index.html",
    "revision": "057f3c2fb016bc597dc08d39f42aeb76"
  },
  {
    "url": "passages/2018-09-11-webpack-image/index.html",
    "revision": "a44e06cc6d030e8ba8e80ee0928e9a68"
  },
  {
    "url": "passages/2018-10-03-js-mathjax/index.html",
    "revision": "cb806d97c0c5481d117a53706a0533ea"
  },
  {
    "url": "passages/2018-10-09-webpack-chracter-file/index.html",
    "revision": "2130c5b00376b1302901c4d2c380baa9"
  },
  {
    "url": "passages/2018-10-09-webpack-js-pacakge/index.html",
    "revision": "3e100c6a182996669b556932bf9f797b"
  },
  {
    "url": "passages/2018-10-17-automatic-html/index.html",
    "revision": "0c7bb58e3cf68dec93b7b6b2f1250762"
  },
  {
    "url": "passages/2018-10-18-webpack-clean-and-watch-mode/index.html",
    "revision": "0018d44a132e8a4fcda7303b300558b7"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-and-prod/index.html",
    "revision": "644c0d7922b81c9aad9680a167faf77e"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-server/index.html",
    "revision": "33d82056e52f46c870b2e65a7a10176a"
  },
  {
    "url": "passages/2018-10-23-singleton-pattern/index.html",
    "revision": "fde80faec1775523c9e50adb84c6ce3e"
  },
  {
    "url": "passages/2018-10-25-stragegy-pattern/index.html",
    "revision": "ac118a84fd85665a3bab2ee850a05314"
  },
  {
    "url": "passages/2018-11-01-proxy-pattern/index.html",
    "revision": "19aec179d2fa63eb3b2cbef14e3e5bbb"
  },
  {
    "url": "passages/2018-11-06-iter-pattern/index.html",
    "revision": "c86359d3b2667b9062103e312d489951"
  },
  {
    "url": "passages/2018-11-18-publish-subscribe-pattern/index.html",
    "revision": "bf94e45d46541e59488636ec824b6537"
  },
  {
    "url": "passages/2018-11-25-command-pattern/index.html",
    "revision": "4e4db45655864e4f6648669bcb69832a"
  },
  {
    "url": "passages/2018-12-08-weekly-share-1/index.html",
    "revision": "3da700eae4bf6341f3ec8f3a118d4c0a"
  },
  {
    "url": "passages/2018-12-12-composite-pattern/index.html",
    "revision": "d167511ca5a40534481ec9ed2bf83583"
  },
  {
    "url": "passages/2018-12-16-flyweight-pattern/index.html",
    "revision": "9cc69f9c50cbb7ac2d36280ffe83cdbe"
  },
  {
    "url": "passages/2018-12-24-weekly-share-2/index.html",
    "revision": "d5750767f27271a4e9f4213e4d301109"
  },
  {
    "url": "passages/2019-01-07-chain-of-responsibility-pattern/index.html",
    "revision": "d2c43428b80d20404277db91e59a1cff"
  },
  {
    "url": "passages/2019-01-12-decorator-pattern/index.html",
    "revision": "55e301f23ca719e8c2399335356f5c68"
  },
  {
    "url": "passages/2019-01-16-state-pattern/index.html",
    "revision": "b7f394a069a3b114cec66357e3d919fe"
  },
  {
    "url": "passages/2019-01-17-adapter-pattern/index.html",
    "revision": "c39ffa5ffa874610c61e26ce235dd6a7"
  },
  {
    "url": "passages/2019-01-19-bridge-pattern/index.html",
    "revision": "747e9e1b65103c7e93e190c2fec4b9b7"
  },
  {
    "url": "passages/2019-01-25-interpreter-pattern/index.html",
    "revision": "caf7a47d042b79a4f72fdf00a1fc7a55"
  },
  {
    "url": "passages/2019-01-26-memento-pattern/index.html",
    "revision": "4dd4d92e2c6c79f781f10c7b9d95eb5b"
  },
  {
    "url": "passages/2019-01-31-template-pattern/index.html",
    "revision": "f1f03737cbde840ee0ff616499c3960f"
  },
  {
    "url": "passages/2019-03-18-interview-js-code/index.html",
    "revision": "67bd3eb6cc49922c04532c9735b9326b"
  },
  {
    "url": "passages/2019-03-19-css3-nth-child/index.html",
    "revision": "9a964972b483e8e45dff61ea9a60ad00"
  },
  {
    "url": "passages/2019-03-20-css3-flex/index.html",
    "revision": "dcb12755c3a3428b50c1f18a93a8b017"
  },
  {
    "url": "passages/2019-03-21-js-re/index.html",
    "revision": "62d7dfc8bf37ed685df36a25b4fa5931"
  },
  {
    "url": "passages/2019-03-26-javascript-first/index.html",
    "revision": "ad77099072ebf97c155219f8364bf3f4"
  },
  {
    "url": "passages/2019-03-27-javascript-second/index.html",
    "revision": "91841e96a6585eaa30c7cc2affd129cb"
  },
  {
    "url": "passages/2019-03-31-factory-pattern/index.html",
    "revision": "db6426b8f24384306ec554dbd5275d1d"
  },
  {
    "url": "passages/2019-04-01-abstract-factory-pattern/index.html",
    "revision": "cfc489cf4a29663995d6c9be503a89d2"
  },
  {
    "url": "passages/2019-04-02-pwa-service-worker/index.html",
    "revision": "3ce92c9c7477b640ae1d98a4f7acbfe4"
  },
  {
    "url": "passages/2019-04-08-react-components-communication/index.html",
    "revision": "f40d14cfedca8cae300c698f7cd32c71"
  },
  {
    "url": "passages/2019-04-09-es6/index.html",
    "revision": "f3b08e26de78f3661df53f9de4530fa8"
  },
  {
    "url": "passages/2019-04-10-html5-drag-drop/index.html",
    "revision": "28470e4bbea28373683d349605c73f99"
  },
  {
    "url": "passages/2019-04-15-wechat-h5-login/index.html",
    "revision": "4ad2dd4adbd4c3c24aa8b7cd52fec675"
  },
  {
    "url": "passages/2019-04-16-axios/index.html",
    "revision": "977a22289e5b46cc5d04a29866d14105"
  },
  {
    "url": "passages/2019-04-23-vemojs/index.html",
    "revision": "23701275fa006bb8c02b09f65d0606e8"
  },
  {
    "url": "passages/2019-05-02-node-block-chain/index.html",
    "revision": "4dfa5812ed44b3944b707f08e665a3d1"
  },
  {
    "url": "passages/2019-05-04-deep-in-jest/index.html",
    "revision": "723c8915b0d3bab3d176940fda080bd4"
  },
  {
    "url": "passages/2019-05-04-jest-base/index.html",
    "revision": "80a5a6fdb60997cd54a2713c126cd228"
  },
  {
    "url": "passages/2019-05-04-rr/index.html",
    "revision": "1eb0d490b75f9cc9e6e9c5bb0d2f2a5f"
  },
  {
    "url": "passages/2019-05-07-play-node-shell/index.html",
    "revision": "933eb5ab33af81170cae279c008e8968"
  },
  {
    "url": "passages/2019-05-15-browser/index.html",
    "revision": "34b2f95a4ccbf3ed044fad828f4920df"
  },
  {
    "url": "passages/2019-05-15-web-safety/index.html",
    "revision": "7d2c866823d872dee5a42fb8eecd915c"
  },
  {
    "url": "passages/2019-05-17-why-i-stopped-using-sass/index.html",
    "revision": "6e83eddb6058997cb3b23d2a28f2e556"
  },
  {
    "url": "passages/2019-05-18-serverless-page-counter/index.html",
    "revision": "34431943ec03dc7f001c52cd3c6cae49"
  },
  {
    "url": "passages/2019-05-28-professional-js-notes/index.html",
    "revision": "03bb193a5041d702bec2aa86346028d3"
  },
  {
    "url": "passages/2019-06-10-weekly-share/index.html",
    "revision": "4817700d1d8174c6cb53291af493648c"
  },
  {
    "url": "passages/2019-06-18-deep-in-koa/index.html",
    "revision": "b0c0c2c473e63dda1870e87801f3d576"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa-3/index.html",
    "revision": "f38f0012ffcdea68e7a00206b1aff459"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa/index.html",
    "revision": "e01b376878d87af0fdb1b6a3480bab77"
  },
  {
    "url": "passages/2019-06-23-algorithm-offer/index.html",
    "revision": "2be8e6efeb76a1b866d6f7c2c0aff0b9"
  },
  {
    "url": "passages/2019-06-23-array-change-location/index.html",
    "revision": "f85d78c29b9d2b095e46fb3293fe135c"
  },
  {
    "url": "passages/2019-06-23-array-find/index.html",
    "revision": "39993be2ba25681e6dc5f4dc3c5ff3e3"
  },
  {
    "url": "passages/2019-06-23-array-inverse-pair/index.html",
    "revision": "79561bf76c941cc6db18c81a414ce978"
  },
  {
    "url": "passages/2019-06-23-array-min-numbers/index.html",
    "revision": "3f996c6f0780056954e060ae3fac00ec"
  },
  {
    "url": "passages/2019-06-23-bit-first-one/index.html",
    "revision": "c3e8e25c17f3222dbd9f3849136fcf18"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one-more/index.html",
    "revision": "0d6fa67d7bd2232cbd99c8e8ca06e03d"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one/index.html",
    "revision": "e2f9b7ab576c4a23696fc5ed73d5ac1c"
  },
  {
    "url": "passages/2019-06-23-find-min-num/index.html",
    "revision": "f55429db4c7694cae3da295bb5bab8c1"
  },
  {
    "url": "passages/2019-06-23-find-times-in-sorted/index.html",
    "revision": "fc45623c812703029eebb99f6ced746c"
  },
  {
    "url": "passages/2019-06-23-hash-first-no-repeat-char/index.html",
    "revision": "3302f5cdea605feb55c7b106cbe90925"
  },
  {
    "url": "passages/2019-06-23-hash-ugly/index.html",
    "revision": "c9607c599367f2519f7e94c3811179ca"
  },
  {
    "url": "passages/2019-06-23-heap-kth-numbers/index.html",
    "revision": "b303512c57414ce88f2fe083f8992f78"
  },
  {
    "url": "passages/2019-06-23-list-clone/index.html",
    "revision": "871686267a70b34365a3c43c64779eed"
  },
  {
    "url": "passages/2019-06-23-list-delete-node/index.html",
    "revision": "afafdb4dd10fdf553279fa1c749d0f80"
  },
  {
    "url": "passages/2019-06-23-list-first-same-node/index.html",
    "revision": "a880aae681e8f46ec91026c086c64f83"
  },
  {
    "url": "passages/2019-06-23-list-last-kth-node/index.html",
    "revision": "1181e47dddbeaa542fb87e40882ba9ab"
  },
  {
    "url": "passages/2019-06-23-list-merge/index.html",
    "revision": "dcae2cca120c10c5c45f7fe05d7ffabe"
  },
  {
    "url": "passages/2019-06-23-list-print/index.html",
    "revision": "24b3ca931dc82bb688899457b5d9815c"
  },
  {
    "url": "passages/2019-06-23-list-reverse/index.html",
    "revision": "8c4eb64436256bb2549fde33887e3975"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-and-number-is-s/index.html",
    "revision": "861017c08309d116c8949a4c0da1ed63"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-fibonacci/index.html",
    "revision": "d0bcb86a5f8ab0595b1788339096df1a"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-from-one-to-one/index.html",
    "revision": "1e2360216eb0dd27ada614cfd493b80e"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-joseph-ring/index.html",
    "revision": "7c378ab37277a2dbcec028ef0d840784"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-min-kth/index.html",
    "revision": "a49ea9f6940a2957d388547429a3abd0"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-n-probability/index.html",
    "revision": "fb03d14f2cb43b46c7e05a73b00712ad"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-playing-cards/index.html",
    "revision": "73f6e932fea9fcfa265a2b12a1fb2409"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-pow/index.html",
    "revision": "d25f9fa6a2584da6394fb907ee042941"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-print-matrix/index.html",
    "revision": "8a2ba9f3bbef2934e344649fb45f5f15"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-s-sequence/index.html",
    "revision": "3ae29eaf26409fda12f3fd3ccafb38a0"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-times-more-than-half/index.html",
    "revision": "b653b4227e3a526ca14a306487e8cb9a"
  },
  {
    "url": "passages/2019-06-23-stack-queue-exchange/index.html",
    "revision": "5587e55c937751f98ff29615a2722260"
  },
  {
    "url": "passages/2019-06-23-stack-queue-min-stack/index.html",
    "revision": "eeb2f5bccc6979bbdede4bd5d77167d8"
  },
  {
    "url": "passages/2019-06-23-stack-queue-push-pop-order/index.html",
    "revision": "6642968c1f4fa831007a2ebe90830e04"
  },
  {
    "url": "passages/2019-06-23-str-atoi/index.html",
    "revision": "5e1afb179374d9e100b629c5a48d306a"
  },
  {
    "url": "passages/2019-06-23-str-perm/index.html",
    "revision": "11c8331f7565db371245ba077a69c3e5"
  },
  {
    "url": "passages/2019-06-23-str-replace-empty/index.html",
    "revision": "b59aba8a9e8b6e286cc68f822b30dc6d"
  },
  {
    "url": "passages/2019-06-23-str-reverse-sentence/index.html",
    "revision": "58fac1000ec9adae2e2325219b3983c3"
  },
  {
    "url": "passages/2019-06-23-tree-convert-to-list/index.html",
    "revision": "bdf92d8d3b15184c6aaedf8ec56d4e60"
  },
  {
    "url": "passages/2019-06-23-tree-is-balance/index.html",
    "revision": "483d63b2fb501185e38ff5354bc1f68f"
  },
  {
    "url": "passages/2019-06-23-tree-level-travel/index.html",
    "revision": "36189b33bbc3854f0f768382f953d731"
  },
  {
    "url": "passages/2019-06-23-tree-mirror/index.html",
    "revision": "a9485aaf4ed7ae8866f0370886f5acd1"
  },
  {
    "url": "passages/2019-06-23-tree-path-with-number/index.html",
    "revision": "ab2e9f3db2a20d95112eef80e24e27e0"
  },
  {
    "url": "passages/2019-06-23-tree-rebuild/index.html",
    "revision": "af8f55b5c6c0342bd64f1eb3ae6ed635"
  },
  {
    "url": "passages/2019-06-23-tree-subtree/index.html",
    "revision": "d1f987ba7bffa16d72578a32a5289d96"
  },
  {
    "url": "passages/2019-06-23-tree-tail-order/index.html",
    "revision": "0ae4187c30164089359eea5b498cd927"
  },
  {
    "url": "passages/2019-07-15-file-api/index.html",
    "revision": "b24fd03d4e77a296a5f569cb017b4642"
  },
  {
    "url": "passages/2019-07-16-font-animation/index.html",
    "revision": "f31b264c72cfa306aba37a38a5e444ab"
  },
  {
    "url": "passages/2019-07-22-input-animation/index.html",
    "revision": "f2bb05a9cb183552b6bce6c81abb79f5"
  },
  {
    "url": "passages/2019-07-24-button-animation/index.html",
    "revision": "4c12a357e58db20797b7c2ce8f5d84a7"
  },
  {
    "url": "passages/2019-07-25-loader-animation-first/index.html",
    "revision": "c5f2f34a2eb5080deb78ee138d8f646e"
  },
  {
    "url": "passages/2019-07-26-loader-animation-second/index.html",
    "revision": "712b2bbde5cb94a44c96755c74984442"
  },
  {
    "url": "passages/2019-08-14-game-gomoku/index.html",
    "revision": "15d173d93e82dca0f9d63f5856dffa75"
  },
  {
    "url": "passages/2019-08-27-koa-meet-typescript/index.html",
    "revision": "f6cc000997115ac57c705866e382577f"
  },
  {
    "url": "passages/2019-08-27-typescript-notes/index.html",
    "revision": "38395ff98767d0d235a238fd70950164"
  },
  {
    "url": "passages/2019-08-31-chain-of-responsibility-patterns/index.html",
    "revision": "d12ad9ebb47e3f8edec1d7661fe66197"
  },
  {
    "url": "passages/2019-08-31-command-patterns/index.html",
    "revision": "8ae11686794c63bf374543c8d9a9b316"
  },
  {
    "url": "passages/2019-08-31-design-patterns/index.html",
    "revision": "bde610b8c3794cc10a1e6478b68e3478"
  },
  {
    "url": "passages/2019-08-31-state-patterns/index.html",
    "revision": "f5a3443feaa7b35de588a56fba6faa8f"
  },
  {
    "url": "passages/2019-09-02-node.js-basics/index.html",
    "revision": "540846de2a43e2a3a829cf544477b779"
  },
  {
    "url": "passages/2019-09-02-nodejs-callback/index.html",
    "revision": "05351bd94fb680b65102197facd3cb1b"
  },
  {
    "url": "passages/2019-09-03-node.js-event-loop/index.html",
    "revision": "e947da2f12bc31a7a99fa619c3407311"
  },
  {
    "url": "together/index.html",
    "revision": "2bf89ff684bb52b625c1d8c5c3065608"
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
