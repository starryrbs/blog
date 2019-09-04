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
    "revision": "b42b9e8b9e45eb45da9afa75c1a2b541"
  },
  {
    "url": "about/index.html",
    "revision": "8a1301b9f44d345bd5ca7e7a847ae6c7"
  },
  {
    "url": "assets/css/0.styles.3248a01a.css",
    "revision": "ac4503a5dc375e0465a06dd5fcd91463"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.72ff0717.js",
    "revision": "0cd726841c27096ee25197eae465749d"
  },
  {
    "url": "assets/js/100.5ff2ecbc.js",
    "revision": "666bf268d7174824cd6a68b5eb7b6238"
  },
  {
    "url": "assets/js/101.420ab874.js",
    "revision": "e7079b79b5841f4a24ed3d5cfca9a71d"
  },
  {
    "url": "assets/js/102.6b511fe2.js",
    "revision": "8f22d7fb39caf674ad2059db378935ee"
  },
  {
    "url": "assets/js/103.ab58b299.js",
    "revision": "91b86b3a9bd760d92533696554343ae3"
  },
  {
    "url": "assets/js/104.0112a491.js",
    "revision": "ca6e5184ef2cbf40197333e2f9a71bfe"
  },
  {
    "url": "assets/js/105.7b1a6395.js",
    "revision": "1c2689c3f39bc5abb760a4e12b06d913"
  },
  {
    "url": "assets/js/106.3a0e8683.js",
    "revision": "259ef219402db32cf543e523e3d919c5"
  },
  {
    "url": "assets/js/107.81b0b46c.js",
    "revision": "eaccf17c50c7a5f603c83de55058092b"
  },
  {
    "url": "assets/js/108.85f295ad.js",
    "revision": "d42e4406d6de750caa0f3e1a7212506b"
  },
  {
    "url": "assets/js/109.22ec03ca.js",
    "revision": "bba4cfe4e62f4f7aff0207bc28afd0f3"
  },
  {
    "url": "assets/js/11.75c1d0a4.js",
    "revision": "143f36a22e2ef36206e9fa57aeac42ff"
  },
  {
    "url": "assets/js/110.c6be97f7.js",
    "revision": "cf243d19c51d59bc7da7505165a4728b"
  },
  {
    "url": "assets/js/111.d9f72a9b.js",
    "revision": "54ffdcbeffab636bc0df617ea15d1fc7"
  },
  {
    "url": "assets/js/112.aa829e5e.js",
    "revision": "5f327db69e65c26ac8df0cfc6204c313"
  },
  {
    "url": "assets/js/113.c3a98669.js",
    "revision": "bbed5da0c0112acc37e5f11755aadb5f"
  },
  {
    "url": "assets/js/114.d3322913.js",
    "revision": "8ed029eec318e4eb031a8b2045e9958a"
  },
  {
    "url": "assets/js/115.04c9ff86.js",
    "revision": "4d2018091c0b5b16fc2c52311caf755a"
  },
  {
    "url": "assets/js/116.65f18b07.js",
    "revision": "0b49127774a6ef756cc66c1852806cb3"
  },
  {
    "url": "assets/js/117.dec3d086.js",
    "revision": "0e64799f6b4225f5551c6c7e5dbed357"
  },
  {
    "url": "assets/js/118.9140c45f.js",
    "revision": "8f2ad7973ba889170492d0c570b34ae8"
  },
  {
    "url": "assets/js/119.a17d7f8c.js",
    "revision": "9629d1a57d7a470babdd46d64ad48a25"
  },
  {
    "url": "assets/js/12.f5049345.js",
    "revision": "860959f084e6bfe5a2301e83aa19e737"
  },
  {
    "url": "assets/js/120.dd68dbd8.js",
    "revision": "134d4b7c7025e0b30c1b5f571a19cd56"
  },
  {
    "url": "assets/js/121.8c066f28.js",
    "revision": "42715fce0809459e3c502f29d099feae"
  },
  {
    "url": "assets/js/122.819e733e.js",
    "revision": "fdfc1d3fa7720098c66caaed4e5da837"
  },
  {
    "url": "assets/js/123.3cfb0af8.js",
    "revision": "f56b1605cc6632f36120594e343a61d5"
  },
  {
    "url": "assets/js/124.5c06ce44.js",
    "revision": "9d7cbb5d583b7d2bf633698e9173a463"
  },
  {
    "url": "assets/js/125.0e8d5f4c.js",
    "revision": "38dc91d1024c0bb702f896bcdbdb85c3"
  },
  {
    "url": "assets/js/126.90921661.js",
    "revision": "a86c24a729b43dcc73cc726ebd97f864"
  },
  {
    "url": "assets/js/127.c5c9df04.js",
    "revision": "c220d650aadcb2ea2c7d104d3806d0d0"
  },
  {
    "url": "assets/js/128.6fb012f0.js",
    "revision": "93ebb24898064f92a47c1f59544c141c"
  },
  {
    "url": "assets/js/129.75bf2c9c.js",
    "revision": "fe9539622e4e6f95a497e5b494b080d0"
  },
  {
    "url": "assets/js/13.b5d7ca3e.js",
    "revision": "77a1c7c068ec29fcf68432f29a750286"
  },
  {
    "url": "assets/js/130.9ceb1994.js",
    "revision": "bc718b39fcb2de5717f22d2b6544c50e"
  },
  {
    "url": "assets/js/131.dccbff57.js",
    "revision": "0e3bf2a5316255583f2c95f3f95adf22"
  },
  {
    "url": "assets/js/132.405e4f6a.js",
    "revision": "722ab9c3eb1be7f2f4ef9d898f879d4b"
  },
  {
    "url": "assets/js/133.bf8753da.js",
    "revision": "29ee477078e4a6de04574771a17f857a"
  },
  {
    "url": "assets/js/134.68724db3.js",
    "revision": "d9261dae1f702d68a66be6221ba4602a"
  },
  {
    "url": "assets/js/135.6b90a896.js",
    "revision": "2c23147db3fe372336e88429e55af717"
  },
  {
    "url": "assets/js/136.aef6e8dd.js",
    "revision": "91b199d6350870af2847950a5df1fe57"
  },
  {
    "url": "assets/js/137.633cc951.js",
    "revision": "2d976756d451a2bba3a9f7c5de86d1a6"
  },
  {
    "url": "assets/js/138.12d6d557.js",
    "revision": "01655dea75a64d0cfd4c062d85162aa6"
  },
  {
    "url": "assets/js/139.513b13c3.js",
    "revision": "d1683000ae59657d44d1811573137c38"
  },
  {
    "url": "assets/js/14.6f06e0ad.js",
    "revision": "00ca7cbb29aa2cf3fbea56fe4584e991"
  },
  {
    "url": "assets/js/140.86eb3758.js",
    "revision": "e4fb62f72ea313c23276b6915a169119"
  },
  {
    "url": "assets/js/141.ab6ae37c.js",
    "revision": "426d1d123a53a7a03b1a4731cd508d7f"
  },
  {
    "url": "assets/js/142.a2e1e6d6.js",
    "revision": "f4dc1ce22c73f95befb13de0c1ce1e29"
  },
  {
    "url": "assets/js/143.310ea995.js",
    "revision": "b24f8ba556a4d4c0ddeb5eb34b1b7b6e"
  },
  {
    "url": "assets/js/144.cdb95fc5.js",
    "revision": "ef867e1cff14785d115c258041eb47bd"
  },
  {
    "url": "assets/js/145.e88bb5da.js",
    "revision": "1848f14df0a25b47ccfd6c3f15f58da9"
  },
  {
    "url": "assets/js/146.25d0a836.js",
    "revision": "5eb6c997426c637aae51ef488f0f7c85"
  },
  {
    "url": "assets/js/147.ff12639c.js",
    "revision": "d5b09cd4e894a14ee372bfced78f3ea3"
  },
  {
    "url": "assets/js/148.b087bc4a.js",
    "revision": "2e57c45b7762124466b72748d4d5f4e0"
  },
  {
    "url": "assets/js/149.41370af7.js",
    "revision": "378b436713b72b53bd5716ea75ff5ff3"
  },
  {
    "url": "assets/js/15.5573efdc.js",
    "revision": "32f261f5d4a3e3f0fea868a076e5570a"
  },
  {
    "url": "assets/js/150.16712b27.js",
    "revision": "a8976eee41e7a172a1194d9d8b57cb7a"
  },
  {
    "url": "assets/js/151.497f2a05.js",
    "revision": "3881fc81341c3b15507052c2dddfa7b0"
  },
  {
    "url": "assets/js/152.cd8c9f3d.js",
    "revision": "71c399f216e2f43d7d87c58cb1d7adb0"
  },
  {
    "url": "assets/js/153.dc97cb28.js",
    "revision": "dbb85aa89a0bc4b05e90bab220140a0b"
  },
  {
    "url": "assets/js/16.f9c9d972.js",
    "revision": "70f97f505b26fa3ce0d62db83a13e3a1"
  },
  {
    "url": "assets/js/17.7a99eb83.js",
    "revision": "129e8bacad36fe1be96482a4f46bb447"
  },
  {
    "url": "assets/js/18.f413b4eb.js",
    "revision": "077bd15ea472d53206e75ec855df3ad5"
  },
  {
    "url": "assets/js/19.7b7a6ac4.js",
    "revision": "483c34ac4f3ce6ac80a7f7de00fdc54e"
  },
  {
    "url": "assets/js/2.87c12698.js",
    "revision": "791c2379dbc682cc0dd4dd177179707b"
  },
  {
    "url": "assets/js/20.34eb098f.js",
    "revision": "4c513d6baa1f115ccd9ed0862b1448cf"
  },
  {
    "url": "assets/js/21.a26e7dbf.js",
    "revision": "7451c2baf15753a1677b0fdadfd8c1e0"
  },
  {
    "url": "assets/js/22.4b13c064.js",
    "revision": "1fb4705bdc417785ea0fe977ccab7d16"
  },
  {
    "url": "assets/js/23.63d29c0e.js",
    "revision": "ee0ce5b3a3c56d9412f0e5c8f2019866"
  },
  {
    "url": "assets/js/24.c757c5c4.js",
    "revision": "33f4aff4567fa23f268e39f974d9da60"
  },
  {
    "url": "assets/js/25.a7507f5c.js",
    "revision": "9f88109d738cc1722649366cbee538d4"
  },
  {
    "url": "assets/js/26.57123a7f.js",
    "revision": "540e8880122e5bf3d605914c3640b047"
  },
  {
    "url": "assets/js/27.b3d318c3.js",
    "revision": "7a21f60ae2eb9944840c3636b1495f0e"
  },
  {
    "url": "assets/js/28.60d7f3fb.js",
    "revision": "f2febe64b32c720785a9ae65248db0d0"
  },
  {
    "url": "assets/js/29.ce77cc0a.js",
    "revision": "3098ba2a4106a64c79b794f63dddbff4"
  },
  {
    "url": "assets/js/3.e9e2aadc.js",
    "revision": "57ac75eea2104ea03eb5519f6f73b0d1"
  },
  {
    "url": "assets/js/30.2893dffc.js",
    "revision": "be3a6405c0a4911c97f854b6a1ad69e0"
  },
  {
    "url": "assets/js/31.fc2d86e3.js",
    "revision": "914bbd52011342ef65547bd6dcdf00cc"
  },
  {
    "url": "assets/js/32.0106adcc.js",
    "revision": "b4309d039ca36279efa885cdea96f3e6"
  },
  {
    "url": "assets/js/33.47bca4d3.js",
    "revision": "9fc61642b06b02ec8c9535079f84785d"
  },
  {
    "url": "assets/js/34.8008455f.js",
    "revision": "b7723c255a952be0b1a97c178b02ac30"
  },
  {
    "url": "assets/js/35.0a097d4e.js",
    "revision": "90ebd7a57f3f7739092e61a86da3a853"
  },
  {
    "url": "assets/js/36.4d0156c3.js",
    "revision": "5f94ba157c25386660e4d3025b203bb7"
  },
  {
    "url": "assets/js/37.d16200a6.js",
    "revision": "492d3033401ea66ef6e64f865de7be01"
  },
  {
    "url": "assets/js/38.88716d85.js",
    "revision": "8096f6063037024dc3cd93c04efe8099"
  },
  {
    "url": "assets/js/39.f9d67e03.js",
    "revision": "d9b0e3b55d10fbc8b626ce3c13c81ce3"
  },
  {
    "url": "assets/js/4.d62f2c4b.js",
    "revision": "161b0048840bdfc7efb97bf9abb767df"
  },
  {
    "url": "assets/js/40.96b4f082.js",
    "revision": "791442d6f4f37ee46328a769f4a97649"
  },
  {
    "url": "assets/js/41.7d80a352.js",
    "revision": "4bb356e996702103ae79649a1104d04b"
  },
  {
    "url": "assets/js/42.cec367ee.js",
    "revision": "cfec5233ed696e23163b917aea6dada3"
  },
  {
    "url": "assets/js/43.63c0b495.js",
    "revision": "27112dfb4da6de8a40a18c9ce086101b"
  },
  {
    "url": "assets/js/44.5d6e6a38.js",
    "revision": "2208b90ce725913575d3eb4716096733"
  },
  {
    "url": "assets/js/45.4e04e434.js",
    "revision": "08b1106b51c7d00b5d4e7eb7733585e2"
  },
  {
    "url": "assets/js/46.b04ba71f.js",
    "revision": "8da1ccb164dc6523156a46fa96d00c38"
  },
  {
    "url": "assets/js/47.a12a5ac8.js",
    "revision": "6db4522105889cd170d8e81b67786b7d"
  },
  {
    "url": "assets/js/48.e1a8565b.js",
    "revision": "aa2fbde4cb01c9be23c1e0c747d2167e"
  },
  {
    "url": "assets/js/49.cd060854.js",
    "revision": "e68411808bd61dd5086844a54bfde033"
  },
  {
    "url": "assets/js/5.9eef1725.js",
    "revision": "53bc23e2ee168afb83a940fd4ef95018"
  },
  {
    "url": "assets/js/50.4f9d1748.js",
    "revision": "60bd88a3c695004ae54ba24ef2250aa4"
  },
  {
    "url": "assets/js/51.cf121585.js",
    "revision": "e72beeafdc799f6f1305cecaf1fe4fd6"
  },
  {
    "url": "assets/js/52.46c715c3.js",
    "revision": "ab231c85b99f3926d7fb1e81796b9ad5"
  },
  {
    "url": "assets/js/53.8504c5e2.js",
    "revision": "fda3e0d0092572995bc5cb7ce5b837cb"
  },
  {
    "url": "assets/js/54.c600599b.js",
    "revision": "fa176f82973ee0dc68c7c8d18a8edf1b"
  },
  {
    "url": "assets/js/55.537e97c2.js",
    "revision": "86d66cf5acc04b1350105c66c8182ec7"
  },
  {
    "url": "assets/js/56.4938cc97.js",
    "revision": "d75fd3d99009cc9934f18d54d8ca1435"
  },
  {
    "url": "assets/js/57.908347b9.js",
    "revision": "d0da520f5c3b8eba3605a117edb5884f"
  },
  {
    "url": "assets/js/58.44f59b7d.js",
    "revision": "173e04eef32257305e4da6116046f687"
  },
  {
    "url": "assets/js/59.ea78610a.js",
    "revision": "e67bda6e81af4a415276c6101e2ddad8"
  },
  {
    "url": "assets/js/6.e7748397.js",
    "revision": "f1290c0af85b2f55b33129d043444743"
  },
  {
    "url": "assets/js/60.985ed267.js",
    "revision": "1b113afb9bd65ea077b360fc3e2cb29c"
  },
  {
    "url": "assets/js/61.8703fc58.js",
    "revision": "318919dab74ae4ed9a930b058826c387"
  },
  {
    "url": "assets/js/62.651c237a.js",
    "revision": "29ab1a4f8a7b1ae48433ab2188d211e3"
  },
  {
    "url": "assets/js/63.094572f3.js",
    "revision": "35012eccea4f909e0649f0608b7eb2f4"
  },
  {
    "url": "assets/js/64.0ad3129c.js",
    "revision": "1c7ef2f8a26f1343a8ce43e9750f335f"
  },
  {
    "url": "assets/js/65.8051f8de.js",
    "revision": "f0099ebc20f6cb909ad940a516b5c065"
  },
  {
    "url": "assets/js/66.4a2d047d.js",
    "revision": "710724535ead8ed34d38538a70520d13"
  },
  {
    "url": "assets/js/67.0530073b.js",
    "revision": "997fc258f20d45e593004bfd66bb2d1e"
  },
  {
    "url": "assets/js/68.6759aae6.js",
    "revision": "b09a7c04f7470f32b1b19e7f3a837114"
  },
  {
    "url": "assets/js/69.fdbfa856.js",
    "revision": "ea8d23d4abe177dc0a6cd3dd7a2f0918"
  },
  {
    "url": "assets/js/7.a86bf640.js",
    "revision": "9af677e705b6b524b09c1f60db37c0bf"
  },
  {
    "url": "assets/js/70.f5ef7696.js",
    "revision": "4bf6496bab19097f16614b291de0f8e2"
  },
  {
    "url": "assets/js/71.46876be2.js",
    "revision": "2723f5ac9caa7d53729af9fdffad3194"
  },
  {
    "url": "assets/js/72.03208fb4.js",
    "revision": "01de97929d0b8c442d1fb1d2cba7d019"
  },
  {
    "url": "assets/js/73.edb9f661.js",
    "revision": "b9f8135f1a65a2155824e3cb494e7fb4"
  },
  {
    "url": "assets/js/74.7d1df263.js",
    "revision": "fe64307481633ac4ad6658f6a630c242"
  },
  {
    "url": "assets/js/75.156105e2.js",
    "revision": "ee5591680fd6843730bfcbf0683aef45"
  },
  {
    "url": "assets/js/76.09559a5c.js",
    "revision": "5fc49976e61c8136ea064498335d1ec6"
  },
  {
    "url": "assets/js/77.86d517e9.js",
    "revision": "f4c566050d2e7553e6c3354f38248a11"
  },
  {
    "url": "assets/js/78.645bf766.js",
    "revision": "a3b8157657bc19e6f6079521a23626f9"
  },
  {
    "url": "assets/js/79.5b9992d8.js",
    "revision": "d621889cae2bef9cde4d549d9c2c2b43"
  },
  {
    "url": "assets/js/8.f591b77d.js",
    "revision": "8e56f1bfe9a278b0745462a1da2d74f9"
  },
  {
    "url": "assets/js/80.7096f12b.js",
    "revision": "3522ddcd0beaf6c45fa683cab1ba6f00"
  },
  {
    "url": "assets/js/81.e185a697.js",
    "revision": "853c381bdc2eeafb09bfda958fea5311"
  },
  {
    "url": "assets/js/82.7a923fae.js",
    "revision": "1a8ec3cf4829a21e348d74af57fdb705"
  },
  {
    "url": "assets/js/83.48598323.js",
    "revision": "b5cee89cb179a52e514379e9d8a3652f"
  },
  {
    "url": "assets/js/84.271cd421.js",
    "revision": "27045d5638779b115b8fcbc538214df6"
  },
  {
    "url": "assets/js/85.d2bc47ed.js",
    "revision": "dc1d07df31aff7101e9106c5ec5f12c5"
  },
  {
    "url": "assets/js/86.02b169be.js",
    "revision": "17f1ca8ad5cc38dd7b7f3b7c54c2c848"
  },
  {
    "url": "assets/js/87.8fb62f40.js",
    "revision": "57ab8ff307ebaf7d79f830bd57d680ad"
  },
  {
    "url": "assets/js/88.32951c5d.js",
    "revision": "fc8bad5a6dcc500b0cba45ecfcb0a843"
  },
  {
    "url": "assets/js/89.3eaf074f.js",
    "revision": "323259551400d7f24db4f6e4c54404ca"
  },
  {
    "url": "assets/js/9.e815aa1c.js",
    "revision": "bbd5323638c789515602546bd003c9d5"
  },
  {
    "url": "assets/js/90.ef1e73ba.js",
    "revision": "dce766abeef7c23424f1366a8340c9fa"
  },
  {
    "url": "assets/js/91.ecf8c9ff.js",
    "revision": "36b0268ae2856a0e8c691b9526226a42"
  },
  {
    "url": "assets/js/92.b8d1ec8f.js",
    "revision": "b1ef5533fae9bc1bcebdd3cd36184fdc"
  },
  {
    "url": "assets/js/93.b3c9b9cb.js",
    "revision": "ededeb19d6740e1aafb7554754ad571d"
  },
  {
    "url": "assets/js/94.300f756b.js",
    "revision": "7316028a716dd9269f8c2685f4b5e9b7"
  },
  {
    "url": "assets/js/95.06fdb62f.js",
    "revision": "b1e39a18de4a4f9ed4fb5a51a108f994"
  },
  {
    "url": "assets/js/96.ec66d03e.js",
    "revision": "094bee1a833e1c0c676079fa359b0a72"
  },
  {
    "url": "assets/js/97.6d059b05.js",
    "revision": "039a2ab6c4d11dd261839fa235c58c2f"
  },
  {
    "url": "assets/js/98.92efadb7.js",
    "revision": "9728022b34b1556a707e1e4fbc7b9b7d"
  },
  {
    "url": "assets/js/99.7a6dc787.js",
    "revision": "73fec13b60b9b1427c695e9954af7e2f"
  },
  {
    "url": "assets/js/app.1e82df55.js",
    "revision": "163c6682f02eef61f7284e992d0fc777"
  },
  {
    "url": "docs/设计模式手册/index.html",
    "revision": "2a31fe080a70de35c7e454ab246d6d93"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "en/index.html",
    "revision": "6b8f5789fd7ed801bff5bcaacd9db091"
  },
  {
    "url": "friends/index.html",
    "revision": "ce0fce7b7e9cdc36af95fd0bdbe726e7"
  },
  {
    "url": "guide/index.html",
    "revision": "46ef4dcdcd22e4bf1d53979ccc6b551c"
  },
  {
    "url": "index.html",
    "revision": "0382e8429a9675b565640f952d43baa4"
  },
  {
    "url": "passages/2018-05-23-es-promise/index.html",
    "revision": "fd82c0d3e5c448a56d96d6fc6536620c"
  },
  {
    "url": "passages/2018-05-29-promise-async-await-order/index.html",
    "revision": "f4f2546771c464c1cfd3adf7d73c98b6"
  },
  {
    "url": "passages/2018-05-29-scss-fisrt-step/index.html",
    "revision": "26a172923280c2012de091c9d0b176e8"
  },
  {
    "url": "passages/2018-05-29-scss-more/index.html",
    "revision": "b4b2f394892293d1cb1ef84c56a04a6e"
  },
  {
    "url": "passages/2018-06-05-border-sizing/index.html",
    "revision": "b268d4e10a6fde1547084f7e411e8fc0"
  },
  {
    "url": "passages/2018-06-19-batch-edit-log/index.html",
    "revision": "0e11564ddd45978bd551c4bed34071b1"
  },
  {
    "url": "passages/2018-07-29-webpack-demos-introduction/index.html",
    "revision": "3f4cebca507c330846c8eeee653109ea"
  },
  {
    "url": "passages/2018-07-30-webpack-pack-js/index.html",
    "revision": "6003619ea4974cbf9bfe14d89c3f466b"
  },
  {
    "url": "passages/2018-07-31-webpack-compile-es6/index.html",
    "revision": "5413cb04222db87d6ed735313a38bef7"
  },
  {
    "url": "passages/2018-08-06-webpack-mutiple-pages/index.html",
    "revision": "aa10100f9cc3ac6c904c4bfad83fdb0c"
  },
  {
    "url": "passages/2018-08-08-webpack-spa-split-lazy/index.html",
    "revision": "b20bb92579d9f9b0fe1b6fa62758dea2"
  },
  {
    "url": "passages/2018-08-17-webpack-css/index.html",
    "revision": "7b9118f283947c721d0bfabcc5b2038c"
  },
  {
    "url": "passages/2018-08-18-webpack-scss/index.html",
    "revision": "9900c39a59a4b5d750fe16837f9a4932"
  },
  {
    "url": "passages/2018-08-19-websocket-group-chat/index.html",
    "revision": "c2d9ce13bd9738e6efb9a38e4e68d947"
  },
  {
    "url": "passages/2018-08-20-canvas-beauty-filter/index.html",
    "revision": "2cb66bc30e40c38c922b571b426dd798"
  },
  {
    "url": "passages/2018-08-21-momentjs/index.html",
    "revision": "1071ab76f1e4fab78397be2cabf0bcc5"
  },
  {
    "url": "passages/2018-08-26-ssl/index.html",
    "revision": "5eb6f04fde9f0c580913729491b0cb94"
  },
  {
    "url": "passages/2018-08-28-webpack-scss-lazy/index.html",
    "revision": "c7b727ad09ce7c4de83909ed0db54d0c"
  },
  {
    "url": "passages/2018-08-30-canvas-off-screen/index.html",
    "revision": "1637d60420dcb48484e6658bae31583d"
  },
  {
    "url": "passages/2018-09-01-js-tree-shaking/index.html",
    "revision": "771577c8831a0dea5059c7ad9315725e"
  },
  {
    "url": "passages/2018-09-02-css-tree-shaking/index.html",
    "revision": "ed0e146279b137e0c3ec04b6568953db"
  },
  {
    "url": "passages/2018-09-06-git-tag-and-version/index.html",
    "revision": "21e15b77726b4d7de8e02e265246f6b2"
  },
  {
    "url": "passages/2018-09-07-git-stash/index.html",
    "revision": "d0c475a55622aea4b9a7b94d55240185"
  },
  {
    "url": "passages/2018-09-09-mysql-blog-ui/index.html",
    "revision": "8048e8cab6a3b80bc78515de890a330a"
  },
  {
    "url": "passages/2018-09-11-webpack-image/index.html",
    "revision": "a9336500b2ae5a44bf81b7b0119374ba"
  },
  {
    "url": "passages/2018-10-03-js-mathjax/index.html",
    "revision": "f8c84a65d2bcc6c9bc9aec3a0706d608"
  },
  {
    "url": "passages/2018-10-09-webpack-chracter-file/index.html",
    "revision": "5a4c417596ca6db1c0f3b2ff006332a8"
  },
  {
    "url": "passages/2018-10-09-webpack-js-pacakge/index.html",
    "revision": "b5035c4a7d03ac5720b726c14b2d2c82"
  },
  {
    "url": "passages/2018-10-17-automatic-html/index.html",
    "revision": "a6d467d06abc0c4ed9c0a97c79401453"
  },
  {
    "url": "passages/2018-10-18-webpack-clean-and-watch-mode/index.html",
    "revision": "5fe539ed9132d942bb6413bbb3a4784e"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-and-prod/index.html",
    "revision": "ec4041e5df5c9b6dca151be05549a89b"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-server/index.html",
    "revision": "7c6333e49197d81e3bb6b3709fa5b505"
  },
  {
    "url": "passages/2018-10-23-singleton-pattern/index.html",
    "revision": "cd0bdd609f8e5d4b321dae1439d22749"
  },
  {
    "url": "passages/2018-10-25-stragegy-pattern/index.html",
    "revision": "04a14f3209b0d92fa67477b72fa62341"
  },
  {
    "url": "passages/2018-11-01-proxy-pattern/index.html",
    "revision": "efacbe3081fbae2a63bf22163f5c2257"
  },
  {
    "url": "passages/2018-11-06-iter-pattern/index.html",
    "revision": "5de9d74975b3a832a5f81ef517356f20"
  },
  {
    "url": "passages/2018-11-18-publish-subscribe-pattern/index.html",
    "revision": "e0114bdc34550729cf27d33e31ced466"
  },
  {
    "url": "passages/2018-11-25-command-pattern/index.html",
    "revision": "ccd2e257f0854126558bec3092a1dc47"
  },
  {
    "url": "passages/2018-12-08-weekly-share-1/index.html",
    "revision": "0c3f70c7aef02df77b25e72b228ad6a5"
  },
  {
    "url": "passages/2018-12-12-composite-pattern/index.html",
    "revision": "8081a70dc2497bafdf912378c47cb032"
  },
  {
    "url": "passages/2018-12-16-flyweight-pattern/index.html",
    "revision": "78774f963604446c588e665d808ce5f7"
  },
  {
    "url": "passages/2018-12-24-weekly-share-2/index.html",
    "revision": "4b32af2d02d2ec1be07045e524359aaf"
  },
  {
    "url": "passages/2019-01-07-chain-of-responsibility-pattern/index.html",
    "revision": "e990b0cd8f950cba7254396b1f36b655"
  },
  {
    "url": "passages/2019-01-12-decorator-pattern/index.html",
    "revision": "a39bcbab90875c93e7488d586618a961"
  },
  {
    "url": "passages/2019-01-16-state-pattern/index.html",
    "revision": "f08916e1a2480714352631e9da9451bf"
  },
  {
    "url": "passages/2019-01-17-adapter-pattern/index.html",
    "revision": "82d5c53615bfabcb8ee40e2d9353829a"
  },
  {
    "url": "passages/2019-01-19-bridge-pattern/index.html",
    "revision": "635da0e2d769ada63aa54772de655ec1"
  },
  {
    "url": "passages/2019-01-25-interpreter-pattern/index.html",
    "revision": "fe923ebb74c3a3fd800c0d39ca1461cb"
  },
  {
    "url": "passages/2019-01-26-memento-pattern/index.html",
    "revision": "90b67735712bc5999108833fdafc3453"
  },
  {
    "url": "passages/2019-01-31-template-pattern/index.html",
    "revision": "0f0e931d2837a81cb171f329e3f6bcd4"
  },
  {
    "url": "passages/2019-03-18-interview-js-code/index.html",
    "revision": "5b7664341023f7153d0c3796c4c1c4fe"
  },
  {
    "url": "passages/2019-03-19-css3-nth-child/index.html",
    "revision": "d89e0476efc440fd695ad342c1f283c9"
  },
  {
    "url": "passages/2019-03-20-css3-flex/index.html",
    "revision": "37c407ee9039fd6f8b0a435abf798931"
  },
  {
    "url": "passages/2019-03-21-js-re/index.html",
    "revision": "cc26e66e8f2d1e0e4d4f4c30b3076c6f"
  },
  {
    "url": "passages/2019-03-26-javascript-first/index.html",
    "revision": "5347d413c688fa25fa8a917444410760"
  },
  {
    "url": "passages/2019-03-27-javascript-second/index.html",
    "revision": "e8c94e7c84c5dc4b99eba6e96abd7c85"
  },
  {
    "url": "passages/2019-03-31-factory-pattern/index.html",
    "revision": "674487e428774325dd3bdadc9a056cfb"
  },
  {
    "url": "passages/2019-04-01-abstract-factory-pattern/index.html",
    "revision": "4c5848f16aacab356d41c75dddad771d"
  },
  {
    "url": "passages/2019-04-02-pwa-service-worker/index.html",
    "revision": "b3df324d59f2fcad5436c25a159650dd"
  },
  {
    "url": "passages/2019-04-08-react-components-communication/index.html",
    "revision": "bc0ef9c04e388312cbdc1bc4e5100bc3"
  },
  {
    "url": "passages/2019-04-09-es6/index.html",
    "revision": "67f1f662d98bf113aa9aa6691ad8849c"
  },
  {
    "url": "passages/2019-04-10-html5-drag-drop/index.html",
    "revision": "7de93fedf133075907307b9c8af29775"
  },
  {
    "url": "passages/2019-04-15-wechat-h5-login/index.html",
    "revision": "75bd588d0bbdeec4aaf092a05d2b4cd7"
  },
  {
    "url": "passages/2019-04-16-axios/index.html",
    "revision": "8aca49d4b303503d40fdef5b5767d192"
  },
  {
    "url": "passages/2019-04-23-vemojs/index.html",
    "revision": "f2f1232b885852df0c27944ccfe3a4d7"
  },
  {
    "url": "passages/2019-05-02-node-block-chain/index.html",
    "revision": "da8c98ffb0f13a5cd8262c030f8a26f6"
  },
  {
    "url": "passages/2019-05-04-deep-in-jest/index.html",
    "revision": "2ff159ea72d9ce314860c161576c9105"
  },
  {
    "url": "passages/2019-05-04-jest-base/index.html",
    "revision": "7a130f2c2999ffe5bb0e9044ed0e327a"
  },
  {
    "url": "passages/2019-05-04-rr/index.html",
    "revision": "00e8cce2f42745aa9c1fa16f3f07934c"
  },
  {
    "url": "passages/2019-05-07-play-node-shell/index.html",
    "revision": "bb8123d71f76716f4e06e85dfc72a488"
  },
  {
    "url": "passages/2019-05-15-browser/index.html",
    "revision": "82875ee74b904e5f74bb55689a014015"
  },
  {
    "url": "passages/2019-05-15-web-safety/index.html",
    "revision": "f3743fd8ee2526f609cd49cf48446296"
  },
  {
    "url": "passages/2019-05-17-why-i-stopped-using-sass/index.html",
    "revision": "25804d3088e8daf028e036a62e52fbd6"
  },
  {
    "url": "passages/2019-05-18-serverless-page-counter/index.html",
    "revision": "832ac90a4a3b9c7a24548b5c5e076fe7"
  },
  {
    "url": "passages/2019-05-28-professional-js-notes/index.html",
    "revision": "381b36bd60ada74deacc1025d005386f"
  },
  {
    "url": "passages/2019-06-10-weekly-share/index.html",
    "revision": "c9146d8a677b3db6ad1089d48f7bc1a9"
  },
  {
    "url": "passages/2019-06-18-deep-in-koa/index.html",
    "revision": "da7c1adcfdeae3cb81e9c0f7222afb4a"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa-3/index.html",
    "revision": "72ac0eafa4a286dca19f2e2a1180a1e1"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa/index.html",
    "revision": "8b619d978939122b2307a1e064e53f08"
  },
  {
    "url": "passages/2019-06-23-algorithm-offer/index.html",
    "revision": "bee752d9ee43725bd1849ec9b0c1591f"
  },
  {
    "url": "passages/2019-06-23-array-change-location/index.html",
    "revision": "ea084f27bd1533689df33425fad8991b"
  },
  {
    "url": "passages/2019-06-23-array-find/index.html",
    "revision": "5bba3eec66c1467d9c52264b4bd84b3c"
  },
  {
    "url": "passages/2019-06-23-array-inverse-pair/index.html",
    "revision": "f8b9fa0ad439e97858bc1824e75cc5df"
  },
  {
    "url": "passages/2019-06-23-array-min-numbers/index.html",
    "revision": "1050daf90906a409585cf923759a3307"
  },
  {
    "url": "passages/2019-06-23-bit-first-one/index.html",
    "revision": "0fc33fee6ba5d53f6492e0049470842f"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one-more/index.html",
    "revision": "844f193072884b502addfce424b9eede"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one/index.html",
    "revision": "815b047f8832749b461c4b3acbe87636"
  },
  {
    "url": "passages/2019-06-23-find-min-num/index.html",
    "revision": "fa6c636a7f61d935b20b4f2b2fee396e"
  },
  {
    "url": "passages/2019-06-23-find-times-in-sorted/index.html",
    "revision": "0dc451135cace84111cad9c59912681a"
  },
  {
    "url": "passages/2019-06-23-hash-first-no-repeat-char/index.html",
    "revision": "00d082e8a8b932b7f13ffb7445296d25"
  },
  {
    "url": "passages/2019-06-23-hash-ugly/index.html",
    "revision": "7dd0f17587f661c9c758978a0f4a8b96"
  },
  {
    "url": "passages/2019-06-23-heap-kth-numbers/index.html",
    "revision": "9418f415b64fe7f28cd529c952c9a5fa"
  },
  {
    "url": "passages/2019-06-23-list-clone/index.html",
    "revision": "15f44605fa301e351bdb5ebe5812685c"
  },
  {
    "url": "passages/2019-06-23-list-delete-node/index.html",
    "revision": "5c9d00d587640b2f9b34ca02c5cedf22"
  },
  {
    "url": "passages/2019-06-23-list-first-same-node/index.html",
    "revision": "9ab38243bc64b48f3a4c67c908b6a83f"
  },
  {
    "url": "passages/2019-06-23-list-last-kth-node/index.html",
    "revision": "0fcfeb894012e003eee37a8cf78a0136"
  },
  {
    "url": "passages/2019-06-23-list-merge/index.html",
    "revision": "bfa77861b109ba02d1cded45d1a1363d"
  },
  {
    "url": "passages/2019-06-23-list-print/index.html",
    "revision": "bb88bb49c63b2adb41236ae39ee61e9a"
  },
  {
    "url": "passages/2019-06-23-list-reverse/index.html",
    "revision": "812edc4dbc753178a48034f16b3905e1"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-and-number-is-s/index.html",
    "revision": "4da1228732ae6a6383b64b0a2ca8d28e"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-fibonacci/index.html",
    "revision": "3aa5f825020e8c100ea6bc8c0ebe5d29"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-from-one-to-one/index.html",
    "revision": "01749fe05831c2e216e22aa59acd21c4"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-joseph-ring/index.html",
    "revision": "4a7b73d1e47b4a71eeb2cb207d5074f6"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-min-kth/index.html",
    "revision": "c1cd2d5b4ef5a58d0a85457f9442e83d"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-n-probability/index.html",
    "revision": "1cf7553e84a5492d7383b0078b42a96c"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-playing-cards/index.html",
    "revision": "53f77dad8d913cb002d3a72162729176"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-pow/index.html",
    "revision": "163bb8ce62617b073027ebb33cc0e414"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-print-matrix/index.html",
    "revision": "84257c714f5a7d8b40b0983e30fbda78"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-s-sequence/index.html",
    "revision": "a0379d5d68bbf7f22fc5c50ba22207e4"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-times-more-than-half/index.html",
    "revision": "9fa8987ef8b438217ee9077e14771be9"
  },
  {
    "url": "passages/2019-06-23-stack-queue-exchange/index.html",
    "revision": "77152dfc4e9a2bfebb48ea1970a2625d"
  },
  {
    "url": "passages/2019-06-23-stack-queue-min-stack/index.html",
    "revision": "f76f6d50772b12c9bb06fcb9e873c77a"
  },
  {
    "url": "passages/2019-06-23-stack-queue-push-pop-order/index.html",
    "revision": "b36109aa8a9d7665054708350f8a8c3c"
  },
  {
    "url": "passages/2019-06-23-str-atoi/index.html",
    "revision": "d534a80fa06ab4939e57e6e5ca0c9f91"
  },
  {
    "url": "passages/2019-06-23-str-perm/index.html",
    "revision": "43f8c56b0b7d7105e4ef9c5877dcb3b3"
  },
  {
    "url": "passages/2019-06-23-str-replace-empty/index.html",
    "revision": "96dc63a46de70fb6a70b5fc15ba244d3"
  },
  {
    "url": "passages/2019-06-23-str-reverse-sentence/index.html",
    "revision": "a7edabedbf24523931586e986256e3ad"
  },
  {
    "url": "passages/2019-06-23-tree-convert-to-list/index.html",
    "revision": "c1f43e1dc23b76f4e21adc92a046447d"
  },
  {
    "url": "passages/2019-06-23-tree-is-balance/index.html",
    "revision": "cdc6ffd794c32f7c3329fb040e2be0f9"
  },
  {
    "url": "passages/2019-06-23-tree-level-travel/index.html",
    "revision": "79b903cd8c72ec30dc8e5a04d236f015"
  },
  {
    "url": "passages/2019-06-23-tree-mirror/index.html",
    "revision": "0442ae73a702153ac32dce2b10138546"
  },
  {
    "url": "passages/2019-06-23-tree-path-with-number/index.html",
    "revision": "14e8881ca77f2b280e022f574fe6d188"
  },
  {
    "url": "passages/2019-06-23-tree-rebuild/index.html",
    "revision": "68155918aea8c162c40cc84228af6a8b"
  },
  {
    "url": "passages/2019-06-23-tree-subtree/index.html",
    "revision": "c08a103091103f44c8f983f23a6e368b"
  },
  {
    "url": "passages/2019-06-23-tree-tail-order/index.html",
    "revision": "88b447de4297cf0d10aabc51d838d3c5"
  },
  {
    "url": "passages/2019-07-15-file-api/index.html",
    "revision": "67ca3c377d9eda85e6f58dd376e8156f"
  },
  {
    "url": "passages/2019-07-16-font-animation/index.html",
    "revision": "9e8fbab8597c0fd59626ecc232de7f67"
  },
  {
    "url": "passages/2019-07-22-input-animation/index.html",
    "revision": "58a0b7ce5257e10ec5edb037f74cd3a4"
  },
  {
    "url": "passages/2019-07-24-button-animation/index.html",
    "revision": "2b490ccaa7ae5ac8356a146620c20899"
  },
  {
    "url": "passages/2019-07-25-loader-animation-first/index.html",
    "revision": "81ad1f74e1dfad19b392fc5a6219a405"
  },
  {
    "url": "passages/2019-07-26-loader-animation-second/index.html",
    "revision": "541c69dfc7ef62d6f4ed8204e6d9faa6"
  },
  {
    "url": "passages/2019-08-14-game-gomoku/index.html",
    "revision": "aba57bd9e695ee5443bcf7e4879298ee"
  },
  {
    "url": "passages/2019-08-27-koa-meet-typescript/index.html",
    "revision": "01ff4f134725336bbd15674e3ed53123"
  },
  {
    "url": "passages/2019-08-27-typescript-notes/index.html",
    "revision": "21504c8bbd8ee9a102cbad2e00a9c7e3"
  },
  {
    "url": "passages/2019-08-31-chain-of-responsibility-patterns/index.html",
    "revision": "f1ff5f4fe074334edaf876912c681d82"
  },
  {
    "url": "passages/2019-08-31-design-patterns/index.html",
    "revision": "9d0d16866f7ce88339e093f1524d31f9"
  },
  {
    "url": "passages/2019-08-31-state-patterns/index.html",
    "revision": "4029ff83dea753a9dbcd30e4f420f728"
  },
  {
    "url": "passages/2019-09-02-node.js-basics/index.html",
    "revision": "c0c2849f3d099adb1353f40b98c36b70"
  },
  {
    "url": "passages/2019-09-02-nodejs-callback/index.html",
    "revision": "4c759c022ce4606384fa5ecca5c2c781"
  },
  {
    "url": "passages/2019-09-03-node.js-event-loop/index.html",
    "revision": "32cb85ba3d2290c4934d75fc024bf7fe"
  },
  {
    "url": "together/index.html",
    "revision": "39fb12cd4047aea5d4055d03043b3d39"
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
