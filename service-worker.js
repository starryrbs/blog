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
    "revision": "81946191a8318591987455031d5597e0"
  },
  {
    "url": "about/index.html",
    "revision": "2df312b65ac99a076cdf0122d6ce0580"
  },
  {
    "url": "assets/css/0.styles.1f91a654.css",
    "revision": "0f990316e5821791ef797e5802a20a8b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a6fe4f27.js",
    "revision": "99a4edf809c5fa4dec4e1a066d9a0ba9"
  },
  {
    "url": "assets/js/100.c83e4e7b.js",
    "revision": "83c810a99b81b1d66aac898b0ee8d36d"
  },
  {
    "url": "assets/js/101.0586a9cd.js",
    "revision": "2fe9d9be1a989829c4904d9dba7e880f"
  },
  {
    "url": "assets/js/102.02f6a27c.js",
    "revision": "58b104c9132d86987062129b06cb6859"
  },
  {
    "url": "assets/js/103.176dfa7c.js",
    "revision": "6b7a412a4acf850505c69ffa9cc14a33"
  },
  {
    "url": "assets/js/104.e3500ff6.js",
    "revision": "a448bad8f6211bba33f9f1e0a02bb3fd"
  },
  {
    "url": "assets/js/105.3b492ef3.js",
    "revision": "08eabe553a549a7c2cbfaa36aaea0a53"
  },
  {
    "url": "assets/js/106.bbd958c6.js",
    "revision": "2c054a3a31638e95fc0203615348410d"
  },
  {
    "url": "assets/js/107.66d15a9c.js",
    "revision": "eec31f227ae3946c28a51782b1b67eba"
  },
  {
    "url": "assets/js/108.b1a95276.js",
    "revision": "1cf213ad09dc163f6a082de1e38a3449"
  },
  {
    "url": "assets/js/109.2262d525.js",
    "revision": "5e8182282e25cf0220a7a33af46b7697"
  },
  {
    "url": "assets/js/11.b1423aba.js",
    "revision": "ea8d31c6f21da8288cc5c32f45f858aa"
  },
  {
    "url": "assets/js/110.2f6bcfa8.js",
    "revision": "d8da8eb221eab0ed81aa5aab9d85b1fd"
  },
  {
    "url": "assets/js/111.27affa05.js",
    "revision": "3c79d94b30951699cb442b52946fae68"
  },
  {
    "url": "assets/js/112.0193e2a8.js",
    "revision": "ba889b36c2abe2ae0ffcbd4c3d749257"
  },
  {
    "url": "assets/js/113.640f259d.js",
    "revision": "da78ad832066e146939dd55106c44df5"
  },
  {
    "url": "assets/js/114.a5177ac0.js",
    "revision": "429bdabb23513dc5339b21cd79cc3175"
  },
  {
    "url": "assets/js/115.25024f5f.js",
    "revision": "aa85f7c31712c28773f3b135bea44412"
  },
  {
    "url": "assets/js/116.95cbab6b.js",
    "revision": "114175c5fe651e5ef4cbff890e422306"
  },
  {
    "url": "assets/js/117.28b6cbd4.js",
    "revision": "2d597bf2b3e6abf9f6f931d17be77a6d"
  },
  {
    "url": "assets/js/118.cb55f05c.js",
    "revision": "ae070dc28734fd36c5cc3db5e877d4ca"
  },
  {
    "url": "assets/js/119.ac46e010.js",
    "revision": "e1bed6a9bbf97cb707d53d3fc5bcfd5c"
  },
  {
    "url": "assets/js/12.f3e3f81b.js",
    "revision": "bdc28a7f6f8cec93b4b48190dbb1baae"
  },
  {
    "url": "assets/js/120.20123481.js",
    "revision": "3a9ceb7360a5b89d9a9cd18ed35dcb9d"
  },
  {
    "url": "assets/js/121.63c04184.js",
    "revision": "092b64689e8e5540c57a6e2103f0a213"
  },
  {
    "url": "assets/js/122.2ed08cd7.js",
    "revision": "46075edaeced401590e20f63dda580f6"
  },
  {
    "url": "assets/js/123.3452d6d2.js",
    "revision": "a8a5bd782f8414968e919826cdab0896"
  },
  {
    "url": "assets/js/124.04a02677.js",
    "revision": "55562abb870dceca8b1052e1d89eb330"
  },
  {
    "url": "assets/js/125.6c1db3f1.js",
    "revision": "a3ae59315d8b99395e7dfbced19caa10"
  },
  {
    "url": "assets/js/126.0789226b.js",
    "revision": "30b3f4646d9742e85ad008fa2ec9c2b8"
  },
  {
    "url": "assets/js/127.f76ed6b4.js",
    "revision": "6ea9fce16db5ac36eae09ed6222cffa0"
  },
  {
    "url": "assets/js/128.a6d32bed.js",
    "revision": "123c7e52273cf8166a10e0571b7d9488"
  },
  {
    "url": "assets/js/129.cca55897.js",
    "revision": "0a0d7a1297b6e19013dc69aa193093bc"
  },
  {
    "url": "assets/js/13.52ad48c1.js",
    "revision": "1966f2c0ac5fbfb419596c2145d2f37a"
  },
  {
    "url": "assets/js/130.00143659.js",
    "revision": "340e9b681e4a33e87cda652fbb1f1e86"
  },
  {
    "url": "assets/js/131.00521366.js",
    "revision": "0a0ab6ba34ef0361d515a77a603e9359"
  },
  {
    "url": "assets/js/132.499207b5.js",
    "revision": "7b7cd55b92d417949a905aa295f9f559"
  },
  {
    "url": "assets/js/133.889a5e26.js",
    "revision": "f9d3881fe91aad936254da544559e968"
  },
  {
    "url": "assets/js/134.aa4714ba.js",
    "revision": "50f1332f10ca3d2e4686193833a477fb"
  },
  {
    "url": "assets/js/135.4139623f.js",
    "revision": "215e1787bb7661ba8e14fd2bf79a8043"
  },
  {
    "url": "assets/js/136.8972ae3b.js",
    "revision": "992ae56d8c31b703ad9790c9760b15bb"
  },
  {
    "url": "assets/js/137.9e86e937.js",
    "revision": "7e2c14315ad23fd087a83be589ac0c8c"
  },
  {
    "url": "assets/js/138.5eff1e56.js",
    "revision": "3a5700bc5a4ae9b48e0125abaa0fd97b"
  },
  {
    "url": "assets/js/139.10bb827b.js",
    "revision": "8f75b448251f9e0f410c777fc644a52a"
  },
  {
    "url": "assets/js/14.0d43c33c.js",
    "revision": "3ab245ea286a0b55c2f4105ba3a6b558"
  },
  {
    "url": "assets/js/140.f50c6727.js",
    "revision": "9603579efe0a5611792a4b93ced5dc7c"
  },
  {
    "url": "assets/js/141.c8531b54.js",
    "revision": "8833f2dc389da62416078d174710c7c5"
  },
  {
    "url": "assets/js/142.89a0bffa.js",
    "revision": "a4ae680344d1c5e7d4f15f39402fad69"
  },
  {
    "url": "assets/js/143.49f762a5.js",
    "revision": "71d260c0b6c8a4d96da45f179ac9a4fb"
  },
  {
    "url": "assets/js/144.116d8653.js",
    "revision": "6be5e8a969fd8a0d7fb7e76f281c115a"
  },
  {
    "url": "assets/js/145.2774a633.js",
    "revision": "77bfd92c51551ab12e61382af266a387"
  },
  {
    "url": "assets/js/146.cb514761.js",
    "revision": "66af186ba73d9f6dda848eaa45f36de0"
  },
  {
    "url": "assets/js/147.6c06e05d.js",
    "revision": "758cfd71b9ad34f51ff633331535cc61"
  },
  {
    "url": "assets/js/148.e04ca7bb.js",
    "revision": "477bb2082676d97e10d89841b53ca7ee"
  },
  {
    "url": "assets/js/149.4f342c69.js",
    "revision": "62a73f82b3426910626ec053451dd6e6"
  },
  {
    "url": "assets/js/15.f8c53fdb.js",
    "revision": "1f33b8d8c3d05ea464a03890fd40ced5"
  },
  {
    "url": "assets/js/150.2563dc6e.js",
    "revision": "31103cc1ade4bd4b1b93e81aa8ab0db1"
  },
  {
    "url": "assets/js/151.ac20a867.js",
    "revision": "65bf5fafecbadaca0774255390ec86df"
  },
  {
    "url": "assets/js/152.d9951894.js",
    "revision": "17627b2777b9f979455f7e8103fc125e"
  },
  {
    "url": "assets/js/16.97c98df0.js",
    "revision": "c1fd50a59e272b3bd789becee360ac99"
  },
  {
    "url": "assets/js/17.c86ab333.js",
    "revision": "fc8d97e09a7e5621e0e1928e98fe7052"
  },
  {
    "url": "assets/js/18.250558fa.js",
    "revision": "bab02a976e8e6a5ebe5255ae13070b60"
  },
  {
    "url": "assets/js/19.4c82d36b.js",
    "revision": "164d341338109c1a23929183d2a57028"
  },
  {
    "url": "assets/js/2.4c3af1c0.js",
    "revision": "791c2379dbc682cc0dd4dd177179707b"
  },
  {
    "url": "assets/js/20.fcbad0af.js",
    "revision": "939fab74a724a217c9b622f1263128ee"
  },
  {
    "url": "assets/js/21.d77b00d6.js",
    "revision": "63874fab641e3293b2214f7c2cea4fba"
  },
  {
    "url": "assets/js/22.ce379d43.js",
    "revision": "ad4dad5833c5f0afab36e75b7430ef25"
  },
  {
    "url": "assets/js/23.3911505a.js",
    "revision": "1a5d3e0d81b1dfe6e03c34ade862dde2"
  },
  {
    "url": "assets/js/24.20373ba7.js",
    "revision": "58bd718fa67821689b3c81dac38c4c0b"
  },
  {
    "url": "assets/js/25.2721ac13.js",
    "revision": "22a4bd0bb461e1676fdc2b50279e736f"
  },
  {
    "url": "assets/js/26.d10a3a52.js",
    "revision": "fcf9b154015bde126fd099976ebb8a45"
  },
  {
    "url": "assets/js/27.c2737516.js",
    "revision": "4685123044992740a533871ac256b518"
  },
  {
    "url": "assets/js/28.e368c1dd.js",
    "revision": "52573f879526a41108f85abdbda62346"
  },
  {
    "url": "assets/js/29.8e92877b.js",
    "revision": "6ac39c3e40edadfa6b117bd8fca82f15"
  },
  {
    "url": "assets/js/3.7be4b745.js",
    "revision": "ab903ea298622e97369732f7c93a82d7"
  },
  {
    "url": "assets/js/30.aa2d58a6.js",
    "revision": "e1999a11bac46e79158f85f9786b86e9"
  },
  {
    "url": "assets/js/31.63dff282.js",
    "revision": "f326bba83125af5000f55d280a8fed75"
  },
  {
    "url": "assets/js/32.b688f677.js",
    "revision": "5e19f04d565f2e4ec4cf59238ef18705"
  },
  {
    "url": "assets/js/33.044bbe59.js",
    "revision": "186fb0458148fa574dbca0be664f3494"
  },
  {
    "url": "assets/js/34.fbf30048.js",
    "revision": "984dcdea2aff2b2581afbccdb3a6cd0c"
  },
  {
    "url": "assets/js/35.f997b5ae.js",
    "revision": "91cd5e71747a0734ee938c82b968fc00"
  },
  {
    "url": "assets/js/36.8a9d2085.js",
    "revision": "47eae7bdb6287144d0483555c381664a"
  },
  {
    "url": "assets/js/37.65eafb1e.js",
    "revision": "12ee0d45f417faa8425521e9349feb87"
  },
  {
    "url": "assets/js/38.52818a9a.js",
    "revision": "18a41455d71e523af831dce81a03e3ad"
  },
  {
    "url": "assets/js/39.692d65fd.js",
    "revision": "49e365d76389b424328bc33e1da1c4eb"
  },
  {
    "url": "assets/js/4.d62f2c4b.js",
    "revision": "161b0048840bdfc7efb97bf9abb767df"
  },
  {
    "url": "assets/js/40.e4afda9f.js",
    "revision": "6e10fdeb81b5a3337a0d13cd041cef69"
  },
  {
    "url": "assets/js/41.6c42fe9e.js",
    "revision": "1d9f3f5fd7b5a4602df415f8edee3a2b"
  },
  {
    "url": "assets/js/42.a63b3cff.js",
    "revision": "df41e69efc18d1de74101fcf274ad9ed"
  },
  {
    "url": "assets/js/43.d0b6d957.js",
    "revision": "beed7f3da0cd28f90ba83a49d79d4c21"
  },
  {
    "url": "assets/js/44.ba21cba0.js",
    "revision": "17f72bdf675fd66e75c303ad64c36aef"
  },
  {
    "url": "assets/js/45.38f80182.js",
    "revision": "ea8cd7fd307377cb56f3e7f01b5e1996"
  },
  {
    "url": "assets/js/46.70753e3e.js",
    "revision": "1f6c22d639dd6550474510f633e97a74"
  },
  {
    "url": "assets/js/47.09e70961.js",
    "revision": "77e16faa13303d104c9f07e03705d222"
  },
  {
    "url": "assets/js/48.d37dc41a.js",
    "revision": "1b69a66a459e93faf03f7542a0b59b11"
  },
  {
    "url": "assets/js/49.00264c7e.js",
    "revision": "de99447248ec68aa3b42ee6449061258"
  },
  {
    "url": "assets/js/5.a995ed34.js",
    "revision": "c4042aa30b5fed3985e0a25ac58c37b5"
  },
  {
    "url": "assets/js/50.2fca45db.js",
    "revision": "bee814b5f714c404dd74f3873f6188ea"
  },
  {
    "url": "assets/js/51.fa8713d5.js",
    "revision": "1ae930a4822bc4687c0f011c89d6a26d"
  },
  {
    "url": "assets/js/52.f5c35f25.js",
    "revision": "94cf48d47b64ef00beb0e359f4b3c467"
  },
  {
    "url": "assets/js/53.36db8ec7.js",
    "revision": "7413fd18eda05c46a25ae4ed4ec36803"
  },
  {
    "url": "assets/js/54.ed7d81af.js",
    "revision": "c4df9e847df0da3bded664242f55a237"
  },
  {
    "url": "assets/js/55.71dbb370.js",
    "revision": "8ccec3cf0b525bd17b9e0e3798353ea1"
  },
  {
    "url": "assets/js/56.b6f4ebd0.js",
    "revision": "f5e317ab411db1f65385a1df2f3c3b48"
  },
  {
    "url": "assets/js/57.a1f14b71.js",
    "revision": "fd8e01162e25b6406156cf789ecb1bc3"
  },
  {
    "url": "assets/js/58.c1ccb7a1.js",
    "revision": "d754f44b98eb194a8f251472d86c2d47"
  },
  {
    "url": "assets/js/59.255663f4.js",
    "revision": "998b08e9579cb012bd3f3a6920ef83f2"
  },
  {
    "url": "assets/js/6.0a05868f.js",
    "revision": "0ae9776808e4de8d8d418db4242d0333"
  },
  {
    "url": "assets/js/60.bded4da7.js",
    "revision": "261921082638ed881e534e0ed8fd13e3"
  },
  {
    "url": "assets/js/61.2d0d5291.js",
    "revision": "db54e00826bce5f7723bb1d535784e74"
  },
  {
    "url": "assets/js/62.570e1365.js",
    "revision": "00e3f847efd5c1efbd8ec6495393b0a2"
  },
  {
    "url": "assets/js/63.6725299e.js",
    "revision": "ce64b5605cb5d9f10daf389fdf3f1415"
  },
  {
    "url": "assets/js/64.a07f166c.js",
    "revision": "ea99ffd2c0935081dc4d93acd22d8d57"
  },
  {
    "url": "assets/js/65.bfd64c97.js",
    "revision": "b9dfe6c4ad30267a3f1ff181493ebc5e"
  },
  {
    "url": "assets/js/66.c798a666.js",
    "revision": "308adaa438a51efaef0dd9447f7050db"
  },
  {
    "url": "assets/js/67.09e1ce1c.js",
    "revision": "60a8bc6e50530591f8991b230eaaf266"
  },
  {
    "url": "assets/js/68.6762f2ca.js",
    "revision": "34a7a45e6ea1507400b4ab4b59f16390"
  },
  {
    "url": "assets/js/69.6058b33b.js",
    "revision": "cb3d595935aa4837ef51961010cf7508"
  },
  {
    "url": "assets/js/7.5c6c9618.js",
    "revision": "7c50956e07275fba5476a615359f6deb"
  },
  {
    "url": "assets/js/70.1edc9b26.js",
    "revision": "bc2f704608d5903a1a6575475cbc4e65"
  },
  {
    "url": "assets/js/71.94d7c5b0.js",
    "revision": "08691be2a349fd0f5736d74f0b0ab179"
  },
  {
    "url": "assets/js/72.6cf019c1.js",
    "revision": "9e84910cdcf2483d0ffa560c8d36cd04"
  },
  {
    "url": "assets/js/73.1d20db73.js",
    "revision": "a49ec54952f9db537ff7a05f0b069269"
  },
  {
    "url": "assets/js/74.6f7a0ff5.js",
    "revision": "5d5b77a22c8a3a2e40fe8fb301d800cf"
  },
  {
    "url": "assets/js/75.cbc84581.js",
    "revision": "d3209c77970a1c3147fa8ca983196253"
  },
  {
    "url": "assets/js/76.af59cf5e.js",
    "revision": "2d717617341d8e0a2fe05eafce0321b4"
  },
  {
    "url": "assets/js/77.dd013dde.js",
    "revision": "6f5f6ba78eb3a0bada6cd60b1ea13b0e"
  },
  {
    "url": "assets/js/78.55f68f6e.js",
    "revision": "5bc48dc44a5bc1c683663c1734542fb0"
  },
  {
    "url": "assets/js/79.9ca9559a.js",
    "revision": "3be0c3eab05845f15fe9f16974aa0de0"
  },
  {
    "url": "assets/js/8.bce9dcfe.js",
    "revision": "13bbdac786f244533dfa7517221e4b66"
  },
  {
    "url": "assets/js/80.d8f31304.js",
    "revision": "d71a3bfafebe9ec4ffa37b4efcd4fb34"
  },
  {
    "url": "assets/js/81.86c5f74c.js",
    "revision": "6a211e6a679369d828b2881a0035ea47"
  },
  {
    "url": "assets/js/82.12e9c67c.js",
    "revision": "b91fc35f832cb844602f94ef27d36167"
  },
  {
    "url": "assets/js/83.948272a8.js",
    "revision": "ea3faf7ecff82faea83a8c7f93ad88fa"
  },
  {
    "url": "assets/js/84.9a2e064c.js",
    "revision": "4f60eca84c5cb6563e4eacf0cc386a63"
  },
  {
    "url": "assets/js/85.3f163d4b.js",
    "revision": "c19f6f3eba7d222e1c1f618930f532cb"
  },
  {
    "url": "assets/js/86.3dd17d75.js",
    "revision": "60f9afa362807bb4af42724df518af78"
  },
  {
    "url": "assets/js/87.0b878e46.js",
    "revision": "d6326b0068a116134989aff2cbac9b54"
  },
  {
    "url": "assets/js/88.1270a46b.js",
    "revision": "fac252956e39310efdbd5b1379637ef2"
  },
  {
    "url": "assets/js/89.31ae87c0.js",
    "revision": "cae6c29a90d8f0ead71079c1062ecab4"
  },
  {
    "url": "assets/js/9.0a65244d.js",
    "revision": "8c90bdb67d3e7fa489f3d608a5a468b9"
  },
  {
    "url": "assets/js/90.2a0950a2.js",
    "revision": "9a61c676cf8d8d156c3e9ab0555d4a4b"
  },
  {
    "url": "assets/js/91.f79d8262.js",
    "revision": "e73a91cbb561887932d98d76b95bc08d"
  },
  {
    "url": "assets/js/92.2a95a89a.js",
    "revision": "b1a2c255dd49262d968874d62fb2e853"
  },
  {
    "url": "assets/js/93.72a1733b.js",
    "revision": "d2b9d326390c40c6bee2d9a1be6b0fed"
  },
  {
    "url": "assets/js/94.83ada293.js",
    "revision": "4c474001423063c6cb53128b394302e5"
  },
  {
    "url": "assets/js/95.14f740d2.js",
    "revision": "d6576e60743f1e692284a2c0d4c8a745"
  },
  {
    "url": "assets/js/96.d39657a7.js",
    "revision": "80c4db512aade144b922e3a56a8e294f"
  },
  {
    "url": "assets/js/97.04fb79a8.js",
    "revision": "8e76caa45d8e1903e7f225e56aa08fbc"
  },
  {
    "url": "assets/js/98.a8fb058c.js",
    "revision": "98d76fb969ccf37128d2e413c0037830"
  },
  {
    "url": "assets/js/99.e61ec2e8.js",
    "revision": "5953b0616dcdb8fe4fe3ff06fb73d434"
  },
  {
    "url": "assets/js/app.f960f086.js",
    "revision": "bd93d4ec6d84955a34a5b945002000a6"
  },
  {
    "url": "docs/python/设计模式/行为型模式/命令模式.html",
    "revision": "5a63977d2a6401a3ca755a01becb36df"
  },
  {
    "url": "docs/设计模式手册/index.html",
    "revision": "05009e1c1cb26e952177fce28d7eaa83"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "en/index.html",
    "revision": "392975d339ace641c7e2515b87998874"
  },
  {
    "url": "friends/index.html",
    "revision": "199746dc58444aadd980becb1522ed02"
  },
  {
    "url": "guide/index.html",
    "revision": "e5e9ab00822d60c979dfc81aa7a44fbd"
  },
  {
    "url": "index.html",
    "revision": "1175f2ee59090ac335156d3c5d8d1816"
  },
  {
    "url": "passages/2018-05-23-es-promise/index.html",
    "revision": "114e37d990fea5adb40f417fc708cc12"
  },
  {
    "url": "passages/2018-05-29-promise-async-await-order/index.html",
    "revision": "9b721dfa80a655a5f87ccf853d74613e"
  },
  {
    "url": "passages/2018-05-29-scss-fisrt-step/index.html",
    "revision": "94283e7e08e49650cee4a95dd4b1e9c4"
  },
  {
    "url": "passages/2018-05-29-scss-more/index.html",
    "revision": "c0c0f48205b77ceb33b6c3b98e11ddd6"
  },
  {
    "url": "passages/2018-06-05-border-sizing/index.html",
    "revision": "70d2f5abf116645f2bbe8cf76da7d7f9"
  },
  {
    "url": "passages/2018-06-19-batch-edit-log/index.html",
    "revision": "4eb7b2993ae24ec1d4ad9a363478bcdd"
  },
  {
    "url": "passages/2018-07-29-webpack-demos-introduction/index.html",
    "revision": "46f7cdce34197a5ff4e8811c514d0360"
  },
  {
    "url": "passages/2018-07-30-webpack-pack-js/index.html",
    "revision": "3c2c6708967948c49ce3f78af3568610"
  },
  {
    "url": "passages/2018-07-31-webpack-compile-es6/index.html",
    "revision": "d7756e15e047e4e3c8035c0e21bea2b6"
  },
  {
    "url": "passages/2018-08-06-webpack-mutiple-pages/index.html",
    "revision": "a56d2482f06c31067d4776272759a585"
  },
  {
    "url": "passages/2018-08-08-webpack-spa-split-lazy/index.html",
    "revision": "679e4fdc72c74c94d34e45fed6f16e00"
  },
  {
    "url": "passages/2018-08-17-webpack-css/index.html",
    "revision": "557ebdb29765b6b3223008ac96a76e79"
  },
  {
    "url": "passages/2018-08-18-webpack-scss/index.html",
    "revision": "c2646b95a4f7064d37497ec5a6396dde"
  },
  {
    "url": "passages/2018-08-19-websocket-group-chat/index.html",
    "revision": "393c5578da4ffedf06aea0db934e5e1c"
  },
  {
    "url": "passages/2018-08-20-canvas-beauty-filter/index.html",
    "revision": "15aac5b97fcdd6c0b5866bb1f8c0cfd1"
  },
  {
    "url": "passages/2018-08-21-momentjs/index.html",
    "revision": "11001479283a3c148be568b4b43f9a70"
  },
  {
    "url": "passages/2018-08-26-ssl/index.html",
    "revision": "b07128296eb5e5f1c5704c0b7c7512bb"
  },
  {
    "url": "passages/2018-08-28-webpack-scss-lazy/index.html",
    "revision": "9cba417fb301350ce2c3a3f178c399cd"
  },
  {
    "url": "passages/2018-08-30-canvas-off-screen/index.html",
    "revision": "68250c53701e4f634aca73be4d43aa3e"
  },
  {
    "url": "passages/2018-09-01-js-tree-shaking/index.html",
    "revision": "ed05c941208abbb75b2e1231a24c5ff9"
  },
  {
    "url": "passages/2018-09-02-css-tree-shaking/index.html",
    "revision": "f3248707746d5a8cbb7a6ed868ecfb0b"
  },
  {
    "url": "passages/2018-09-06-git-tag-and-version/index.html",
    "revision": "770b1f540dedb42dfd212e3dcaddf108"
  },
  {
    "url": "passages/2018-09-07-git-stash/index.html",
    "revision": "6e778aa58acdd20da7990b7251bcd894"
  },
  {
    "url": "passages/2018-09-09-mysql-blog-ui/index.html",
    "revision": "37e63a557b318d3c4d902d347b94002a"
  },
  {
    "url": "passages/2018-09-11-webpack-image/index.html",
    "revision": "4c485df75f8203ba75460618dca89236"
  },
  {
    "url": "passages/2018-10-03-js-mathjax/index.html",
    "revision": "6a892215f2d6379b3d451e9f321d1d27"
  },
  {
    "url": "passages/2018-10-09-webpack-chracter-file/index.html",
    "revision": "9f173477a6f9bc6a96cdcc34784e6bc4"
  },
  {
    "url": "passages/2018-10-09-webpack-js-pacakge/index.html",
    "revision": "fe55eb62cf03b91748ba58c49f2e6978"
  },
  {
    "url": "passages/2018-10-17-automatic-html/index.html",
    "revision": "3a7caf6321626d282eb1af7e25b1a4cc"
  },
  {
    "url": "passages/2018-10-18-webpack-clean-and-watch-mode/index.html",
    "revision": "4dc22631607e819b2d5c4c39921f4973"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-and-prod/index.html",
    "revision": "f4bc77b2f5513bb75f66b20d17365509"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-server/index.html",
    "revision": "e32a88d52d75eeeeb136589174d6c406"
  },
  {
    "url": "passages/2018-10-23-singleton-pattern/index.html",
    "revision": "d36997dbedb62c08ca45af700fa042e4"
  },
  {
    "url": "passages/2018-10-25-stragegy-pattern/index.html",
    "revision": "251a4ff6784884cc98c3d99a4245655e"
  },
  {
    "url": "passages/2018-11-01-proxy-pattern/index.html",
    "revision": "9aeb8973cd9b98c725fb668f320474aa"
  },
  {
    "url": "passages/2018-11-06-iter-pattern/index.html",
    "revision": "6d889f431fef2fe03e66e903ffef6427"
  },
  {
    "url": "passages/2018-11-18-publish-subscribe-pattern/index.html",
    "revision": "04dbcd2ac86c25586e65967bc93975bb"
  },
  {
    "url": "passages/2018-11-25-command-pattern/index.html",
    "revision": "5a17c2e79bbcbbe63dd58d380ca0f3e6"
  },
  {
    "url": "passages/2018-12-08-weekly-share-1/index.html",
    "revision": "0c65201e7863244448bec3b91425b549"
  },
  {
    "url": "passages/2018-12-12-composite-pattern/index.html",
    "revision": "56b1681e5648f8ddf4ff00601a5157fe"
  },
  {
    "url": "passages/2018-12-16-flyweight-pattern/index.html",
    "revision": "1bee50d210991e0f29b631e0ea88b859"
  },
  {
    "url": "passages/2018-12-24-weekly-share-2/index.html",
    "revision": "38faf9d5d767e8428396691d621ff964"
  },
  {
    "url": "passages/2019-01-07-chain-of-responsibility-pattern/index.html",
    "revision": "0c483e7991ac9c99ee5bdef8c3b414ee"
  },
  {
    "url": "passages/2019-01-12-decorator-pattern/index.html",
    "revision": "63b681b0288df0a25881112e44c70260"
  },
  {
    "url": "passages/2019-01-16-state-pattern/index.html",
    "revision": "7fce0eae1c0d6fa35e0f8c879f591b2a"
  },
  {
    "url": "passages/2019-01-17-adapter-pattern/index.html",
    "revision": "fc1afd31c2730d7a030942cd3670567f"
  },
  {
    "url": "passages/2019-01-19-bridge-pattern/index.html",
    "revision": "7c1c2d5272b5054467bfa818511f3292"
  },
  {
    "url": "passages/2019-01-25-interpreter-pattern/index.html",
    "revision": "78f15508f96393e70a229a96649bd25f"
  },
  {
    "url": "passages/2019-01-26-memento-pattern/index.html",
    "revision": "a10de6ffee76afd6ec658c926bdeb75e"
  },
  {
    "url": "passages/2019-01-31-template-pattern/index.html",
    "revision": "f1e866f39212a99e26480abb8b26f5f8"
  },
  {
    "url": "passages/2019-03-18-interview-js-code/index.html",
    "revision": "f5996832defad4bbfb4d57d7043a196c"
  },
  {
    "url": "passages/2019-03-19-css3-nth-child/index.html",
    "revision": "aef3d564ff2398e2ade32a7bc00eeca5"
  },
  {
    "url": "passages/2019-03-20-css3-flex/index.html",
    "revision": "9ff9ea2616c5c5e337b6f2563d18a0b5"
  },
  {
    "url": "passages/2019-03-21-js-re/index.html",
    "revision": "fb9e84b8de1603af83d43f49c3da9cc7"
  },
  {
    "url": "passages/2019-03-26-javascript-first/index.html",
    "revision": "76830a5b0ffc041a3ef05667b8ca903b"
  },
  {
    "url": "passages/2019-03-27-javascript-second/index.html",
    "revision": "8d278ba0109ed72850cd79403486091c"
  },
  {
    "url": "passages/2019-03-31-factory-pattern/index.html",
    "revision": "a6e5944a3a37e36df5ea82672cae8f4a"
  },
  {
    "url": "passages/2019-04-01-abstract-factory-pattern/index.html",
    "revision": "0f3767c7dadd2ca517a08a790c877039"
  },
  {
    "url": "passages/2019-04-02-pwa-service-worker/index.html",
    "revision": "caec8f44953e81848027f551a874941a"
  },
  {
    "url": "passages/2019-04-08-react-components-communication/index.html",
    "revision": "6805cf86e1a2d576e34a35105f1d3124"
  },
  {
    "url": "passages/2019-04-09-es6/index.html",
    "revision": "36e39af42861ebc1d79e6586f439a373"
  },
  {
    "url": "passages/2019-04-10-html5-drag-drop/index.html",
    "revision": "c2b02772e15a556709ddda33c76780bf"
  },
  {
    "url": "passages/2019-04-15-wechat-h5-login/index.html",
    "revision": "3444dabd7d576e6d161854aa91add573"
  },
  {
    "url": "passages/2019-04-16-axios/index.html",
    "revision": "03e413440acf9dde73c2ef3ca2f778da"
  },
  {
    "url": "passages/2019-04-23-vemojs/index.html",
    "revision": "81f13973442816a5a51102161b4f832f"
  },
  {
    "url": "passages/2019-05-02-node-block-chain/index.html",
    "revision": "d531144ddc790ff0b1f5fa0e8662ff68"
  },
  {
    "url": "passages/2019-05-04-deep-in-jest/index.html",
    "revision": "aae0c3e8d88a987540714bd14190a97f"
  },
  {
    "url": "passages/2019-05-04-jest-base/index.html",
    "revision": "9253da09253f635b06e9dcd53ae4de1b"
  },
  {
    "url": "passages/2019-05-04-rr/index.html",
    "revision": "8b53bee2ed8c7e837a317bbc3cba930b"
  },
  {
    "url": "passages/2019-05-07-play-node-shell/index.html",
    "revision": "3415b9edffc8c9a4f237e3d324eb2cef"
  },
  {
    "url": "passages/2019-05-15-browser/index.html",
    "revision": "7dde0dba23b350e95c9291a27dd8de59"
  },
  {
    "url": "passages/2019-05-15-web-safety/index.html",
    "revision": "b091068c936c5bf08ce5e4d5089d67a1"
  },
  {
    "url": "passages/2019-05-17-why-i-stopped-using-sass/index.html",
    "revision": "54bb8178d11f45b62f13d684fcc40d2a"
  },
  {
    "url": "passages/2019-05-18-serverless-page-counter/index.html",
    "revision": "96c53200758dfda2ebea802c4c45409a"
  },
  {
    "url": "passages/2019-05-28-professional-js-notes/index.html",
    "revision": "050763ddb4c2085f96004e788c3a96d0"
  },
  {
    "url": "passages/2019-06-18-deep-in-koa/index.html",
    "revision": "7717925aef68bd344e0edeff297c5215"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa-3/index.html",
    "revision": "9dc38b0e1cc0534023e51121b211dfb4"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa/index.html",
    "revision": "be8fd0fd7d6e08a44f8fa63b9cabb115"
  },
  {
    "url": "passages/2019-06-23-algorithm-offer/index.html",
    "revision": "99a7a89554842010d0154ccd1dbe55c7"
  },
  {
    "url": "passages/2019-06-23-array-change-location/index.html",
    "revision": "641662a964cafaa277fff68ec846f40a"
  },
  {
    "url": "passages/2019-06-23-array-find/index.html",
    "revision": "9d118bde497fab58037cf3b50b98aaff"
  },
  {
    "url": "passages/2019-06-23-array-inverse-pair/index.html",
    "revision": "04a8129c2ac7f30f54bee7f639167068"
  },
  {
    "url": "passages/2019-06-23-array-min-numbers/index.html",
    "revision": "d6257bb528ed826cbd02f027161c040f"
  },
  {
    "url": "passages/2019-06-23-bit-first-one/index.html",
    "revision": "ec43f5bf693a569557b4a72c0dc48253"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one-more/index.html",
    "revision": "9d868be7358e43481f76ea8ba8ba809a"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one/index.html",
    "revision": "e4227b1554e50ddf43f0137774a668be"
  },
  {
    "url": "passages/2019-06-23-find-min-num/index.html",
    "revision": "7e0665d5eae06e82c28062db906cf98b"
  },
  {
    "url": "passages/2019-06-23-find-times-in-sorted/index.html",
    "revision": "0b90872722702c3de1a7342832a3c871"
  },
  {
    "url": "passages/2019-06-23-hash-first-no-repeat-char/index.html",
    "revision": "546f651d47b3aca9d548d25f5575cc31"
  },
  {
    "url": "passages/2019-06-23-hash-ugly/index.html",
    "revision": "0f96c2894ed61c024e88e850941291c8"
  },
  {
    "url": "passages/2019-06-23-heap-kth-numbers/index.html",
    "revision": "33f43da4a8aceafd7e7ea960f1f85925"
  },
  {
    "url": "passages/2019-06-23-list-clone/index.html",
    "revision": "0cde6666f3ac00520a0cf545d285bbe0"
  },
  {
    "url": "passages/2019-06-23-list-delete-node/index.html",
    "revision": "43c84c5d03c3f47636e0dfa548265b0c"
  },
  {
    "url": "passages/2019-06-23-list-first-same-node/index.html",
    "revision": "e293c6290f3e79c41a1264390e6af310"
  },
  {
    "url": "passages/2019-06-23-list-last-kth-node/index.html",
    "revision": "5bdaa613b45b311c6e761bfb9fbce3ce"
  },
  {
    "url": "passages/2019-06-23-list-merge/index.html",
    "revision": "645482f279ffe55cc6236083f30f42b3"
  },
  {
    "url": "passages/2019-06-23-list-print/index.html",
    "revision": "33e1f591c0665af0e9ae8c0e2e21d22b"
  },
  {
    "url": "passages/2019-06-23-list-reverse/index.html",
    "revision": "507a0bee5e6ae9dec787ea6a1e0231a9"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-and-number-is-s/index.html",
    "revision": "a584cf1d3d806fbb20a5fb66a9bd4ade"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-fibonacci/index.html",
    "revision": "eace9639bf22af57688c83384557f9a4"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-from-one-to-one/index.html",
    "revision": "2cf520d4ee0ef803c6765027ebc40d95"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-joseph-ring/index.html",
    "revision": "d311fcf143c63a767418abfa8735b677"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-min-kth/index.html",
    "revision": "0b99c5979991d169798cd39a881aefd1"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-n-probability/index.html",
    "revision": "02c7a76a5eea94200664960b29b83efa"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-playing-cards/index.html",
    "revision": "8d300d7cbfa491c9a1d7964f67e8554c"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-pow/index.html",
    "revision": "a7e5cff7d48d7a8380124b4839244fce"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-print-matrix/index.html",
    "revision": "8a5449f83b7c3e77a496d495c2e8b86e"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-s-sequence/index.html",
    "revision": "4f9cbfac5e252f2bba5f19b6e82a116b"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-times-more-than-half/index.html",
    "revision": "598c64117342c241e7303bddfc5e3966"
  },
  {
    "url": "passages/2019-06-23-stack-queue-exchange/index.html",
    "revision": "60f3f4033fa069f9acefbe100d11446a"
  },
  {
    "url": "passages/2019-06-23-stack-queue-min-stack/index.html",
    "revision": "38edcddfff5009a512581b2513ced44b"
  },
  {
    "url": "passages/2019-06-23-stack-queue-push-pop-order/index.html",
    "revision": "05749bbd701d2ccbe5dd8ee1e431b2c8"
  },
  {
    "url": "passages/2019-06-23-str-atoi/index.html",
    "revision": "4a96f906eeb74ecb00a480a58f005b6b"
  },
  {
    "url": "passages/2019-06-23-str-perm/index.html",
    "revision": "e482d976ba6b2a93efdfb9d845142c72"
  },
  {
    "url": "passages/2019-06-23-str-replace-empty/index.html",
    "revision": "a2f878e7e32dfb2e610dbedad296b49d"
  },
  {
    "url": "passages/2019-06-23-str-reverse-sentence/index.html",
    "revision": "48a4fbe79ef8160e76365f5fe4410bc1"
  },
  {
    "url": "passages/2019-06-23-tree-convert-to-list/index.html",
    "revision": "a292f5af2c63964c1b37024695c95917"
  },
  {
    "url": "passages/2019-06-23-tree-is-balance/index.html",
    "revision": "2f6b286f37af7935bf55dbf1c9e5fa5e"
  },
  {
    "url": "passages/2019-06-23-tree-level-travel/index.html",
    "revision": "d4875ed4ab09c7f524c20d6cf12885f9"
  },
  {
    "url": "passages/2019-06-23-tree-mirror/index.html",
    "revision": "8d25a170f68dc8b94c6299d70645b499"
  },
  {
    "url": "passages/2019-06-23-tree-path-with-number/index.html",
    "revision": "31b4c606c314c63e596abe3dbbdb71b8"
  },
  {
    "url": "passages/2019-06-23-tree-rebuild/index.html",
    "revision": "f725b07edb0cf2667d6d726823e9c688"
  },
  {
    "url": "passages/2019-06-23-tree-subtree/index.html",
    "revision": "75d299d6ae60d321d82259409596a120"
  },
  {
    "url": "passages/2019-06-23-tree-tail-order/index.html",
    "revision": "eb023e81b8ec87b54ee657222fce304f"
  },
  {
    "url": "passages/2019-07-15-file-api/index.html",
    "revision": "23dbfd3393de5e32af4f30e0d791490e"
  },
  {
    "url": "passages/2019-07-16-font-animation/index.html",
    "revision": "75d1197dcb290e863d08871334b33047"
  },
  {
    "url": "passages/2019-07-22-input-animation/index.html",
    "revision": "f2d32e56e15ae312ed9f1253afec5a81"
  },
  {
    "url": "passages/2019-07-24-button-animation/index.html",
    "revision": "658f3c22ec4327db6c1dbf8d4cf64f01"
  },
  {
    "url": "passages/2019-07-25-loader-animation-first/index.html",
    "revision": "88f261d6dee3a327ec3e3c8435465c3b"
  },
  {
    "url": "passages/2019-07-26-loader-animation-second/index.html",
    "revision": "033b09e755b9ae5b6d12f577168808a4"
  },
  {
    "url": "passages/2019-08-14-game-gomoku/index.html",
    "revision": "6f5cb8e938e0c2b81eb3eda0d025eb2f"
  },
  {
    "url": "passages/2019-08-27-koa-meet-typescript/index.html",
    "revision": "d22493969b6af99316aa430c833086a4"
  },
  {
    "url": "passages/2019-08-27-typescript-notes/index.html",
    "revision": "29f03c5187364fbfed4d3ef80c054b82"
  },
  {
    "url": "passages/2019-08-31-chain-of-responsibility-patterns/index.html",
    "revision": "de3fb8d2cc7e0f249490a9bad9754414"
  },
  {
    "url": "passages/2019-08-31-design-patterns/index.html",
    "revision": "b8e17231da7d9dcc9b6972ae009154ac"
  },
  {
    "url": "passages/2019-08-31-state-patterns/index.html",
    "revision": "82d1fda078fd230b6257b9af2824d43e"
  },
  {
    "url": "passages/2019-09-18-typescript-sharing/index.html",
    "revision": "aea6ba5fc6797173cc24281d30ed7e88"
  },
  {
    "url": "passages/2019-09-18-weekly-sharing/index.html",
    "revision": "08ee7821d4fe707ce06ea8c7f9807c1a"
  },
  {
    "url": "together/index.html",
    "revision": "df174700dccb9ff51234e45afc30fa78"
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
