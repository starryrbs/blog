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
    "revision": "1b6d1e6bf1fb732c55bb947f7a566ff5"
  },
  {
    "url": "about/index.html",
    "revision": "40b7f32be182cb40f67f24f53e78f946"
  },
  {
    "url": "assets/css/0.styles.688f190a.css",
    "revision": "6248b629e242c731bba59cf2aba8b18c"
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
    "url": "assets/js/100.b63de684.js",
    "revision": "ff5d989954faac915cb2a9e6d98087ca"
  },
  {
    "url": "assets/js/101.3ad5f02b.js",
    "revision": "8f3d669cac4b20fa4f6327d8e6a0653b"
  },
  {
    "url": "assets/js/102.5a5525a4.js",
    "revision": "bc6df4f8e30ebc361241e9610c2b4785"
  },
  {
    "url": "assets/js/103.b0691b9b.js",
    "revision": "f36fd29574fbcbdb8bb51a0be8536cd7"
  },
  {
    "url": "assets/js/104.60fccbfd.js",
    "revision": "128364f8dece7b276d93e3deef14cf75"
  },
  {
    "url": "assets/js/105.b2b289af.js",
    "revision": "4e40d42e10c04448115660f6eca64237"
  },
  {
    "url": "assets/js/106.182066ac.js",
    "revision": "60bb2c223615a154fae86f68474df953"
  },
  {
    "url": "assets/js/107.91bda89f.js",
    "revision": "c7a84ab5c6f1023b644ecc3d381c7a9b"
  },
  {
    "url": "assets/js/108.872c37c0.js",
    "revision": "46c152c2358e0ea69083bfeef059d888"
  },
  {
    "url": "assets/js/109.885b0c85.js",
    "revision": "9b123616104c4b413c5f831180c328a4"
  },
  {
    "url": "assets/js/11.358cc064.js",
    "revision": "f2478ae32104a87c24e04e19b744b97b"
  },
  {
    "url": "assets/js/110.1492fd9b.js",
    "revision": "6127a71c54ce9e07258884138d67de0f"
  },
  {
    "url": "assets/js/111.bb24da1f.js",
    "revision": "75358cb70442593cd6c213983799b4c7"
  },
  {
    "url": "assets/js/112.0aead55d.js",
    "revision": "5fe738905dae155ce7e12c59df9c03ba"
  },
  {
    "url": "assets/js/113.8b743b25.js",
    "revision": "d75669bace199bacb60468b754f97532"
  },
  {
    "url": "assets/js/114.c1e5f0e4.js",
    "revision": "ea57b40f4e07783a6b2ec43f58655e91"
  },
  {
    "url": "assets/js/115.e0203f65.js",
    "revision": "3d9d4efa1a70421122ee17127f2b086d"
  },
  {
    "url": "assets/js/116.8d260f3f.js",
    "revision": "cd5a849ad414cf2b947a631286ffabaa"
  },
  {
    "url": "assets/js/117.01280bcf.js",
    "revision": "05765b8354183782dd192e8a2e5bf602"
  },
  {
    "url": "assets/js/118.2b1f142a.js",
    "revision": "d9941d637003e044128cc135feafdd65"
  },
  {
    "url": "assets/js/119.ff627413.js",
    "revision": "089d2c7b13e600ada314ce8e6c5b3450"
  },
  {
    "url": "assets/js/12.1c63af57.js",
    "revision": "3b7c48178d6da98e5079a462ff0a47fb"
  },
  {
    "url": "assets/js/120.daa62a88.js",
    "revision": "d0c6a97badf2ab11b5ce509d56abd224"
  },
  {
    "url": "assets/js/121.9e186930.js",
    "revision": "86515d28f1238d3351ebd2e602b0a53b"
  },
  {
    "url": "assets/js/122.75ed33a8.js",
    "revision": "2c2286c8378703895ee281f4ca1c57a7"
  },
  {
    "url": "assets/js/123.ad55cad4.js",
    "revision": "3ddfee7f689f504a19ceff52733ffc9d"
  },
  {
    "url": "assets/js/124.fa7edc7e.js",
    "revision": "8dba7801cbed72b92a1c8957d335144a"
  },
  {
    "url": "assets/js/125.778b3770.js",
    "revision": "9d286c4b78d7942f60ce6b4aeed8af62"
  },
  {
    "url": "assets/js/126.430f85f1.js",
    "revision": "c6c4f6c81a9499c4c540b148996498bb"
  },
  {
    "url": "assets/js/127.823ba987.js",
    "revision": "966e01db7384bd105c8f82d53cd6dab8"
  },
  {
    "url": "assets/js/128.946da208.js",
    "revision": "5455bdb122c4c37509a3a77ab6cf07b1"
  },
  {
    "url": "assets/js/129.48b6840e.js",
    "revision": "6b6e1497d264d36bb4f3cfab8c25604e"
  },
  {
    "url": "assets/js/13.70a72c28.js",
    "revision": "74a1c5398ca8ef68f94e4fbae3561c82"
  },
  {
    "url": "assets/js/130.b4b0a8cf.js",
    "revision": "0a0a4ae4363913e5262830796c958008"
  },
  {
    "url": "assets/js/131.2ae89f09.js",
    "revision": "385825696ed5bb802b6e1583cae6f9a1"
  },
  {
    "url": "assets/js/132.726ea225.js",
    "revision": "9e66bf03d1b91c7b409e36fad2df84ae"
  },
  {
    "url": "assets/js/133.1f0cc2ae.js",
    "revision": "870f5425e5900f01466f7f44c76f2fca"
  },
  {
    "url": "assets/js/134.4d472ccd.js",
    "revision": "aa375ce2b8958de8d9be3ec97f7d77a4"
  },
  {
    "url": "assets/js/135.ed14996e.js",
    "revision": "fc251ebc79e302a53e92fc04c3aaaea1"
  },
  {
    "url": "assets/js/136.bb16081d.js",
    "revision": "c4e23549b0e7343a92d8153cf4ec168d"
  },
  {
    "url": "assets/js/137.9b50167e.js",
    "revision": "360bf930b6bdae35b27fefc267655b8d"
  },
  {
    "url": "assets/js/138.b029ba8a.js",
    "revision": "ea83522aab9084c61e844be30d7823f4"
  },
  {
    "url": "assets/js/139.ba1fc193.js",
    "revision": "47af3b203519f11f92abc50bbdf0700d"
  },
  {
    "url": "assets/js/14.3c04483a.js",
    "revision": "4715793f9cd14edaa37e807132110e9a"
  },
  {
    "url": "assets/js/140.0f034a3c.js",
    "revision": "fa482d390d8c1c084e947ca9c0d76ecf"
  },
  {
    "url": "assets/js/141.228b7240.js",
    "revision": "52bb149bebfa7cc880c2d61ad7560801"
  },
  {
    "url": "assets/js/142.e79021d7.js",
    "revision": "512b3d96e627c001360221797278f043"
  },
  {
    "url": "assets/js/143.4752d54b.js",
    "revision": "5a93406f9fcd3d250b3c4a78c3d4c879"
  },
  {
    "url": "assets/js/144.c2c9a1c0.js",
    "revision": "81d43912910188707e33752604f63000"
  },
  {
    "url": "assets/js/145.71edaa92.js",
    "revision": "0035997ab938e4ecdf22dc6a16ab61ee"
  },
  {
    "url": "assets/js/146.d786607d.js",
    "revision": "099a63ff0dbca62ced732121b45eea50"
  },
  {
    "url": "assets/js/147.d59787e2.js",
    "revision": "d792a0e1bebc9f7a8373bbbb0261f02b"
  },
  {
    "url": "assets/js/148.c4d3e3da.js",
    "revision": "39f3ea1f8892e7536acc8a6782e7e489"
  },
  {
    "url": "assets/js/149.b90c1439.js",
    "revision": "690695f4d336244f48978fb0d47e073d"
  },
  {
    "url": "assets/js/15.2c03960d.js",
    "revision": "087968410cbe5383069aa5f0fa61de63"
  },
  {
    "url": "assets/js/150.ce5cccb5.js",
    "revision": "d219e08bf0e4de5457663276d414fe18"
  },
  {
    "url": "assets/js/151.228da48b.js",
    "revision": "fde5e80efc7e5f298708cb536aea42f0"
  },
  {
    "url": "assets/js/152.05c08a0c.js",
    "revision": "7851bde0387c95174ba2fb0e1f9f1281"
  },
  {
    "url": "assets/js/153.5e69db61.js",
    "revision": "44441597854355edf2956cf249f4e9ec"
  },
  {
    "url": "assets/js/154.a3080272.js",
    "revision": "60ce8fc5e668bb462d55c2a2fc8620ff"
  },
  {
    "url": "assets/js/155.17d0c876.js",
    "revision": "3027c183fe478b37c7ba55fd7a70b10b"
  },
  {
    "url": "assets/js/156.d8b12a2f.js",
    "revision": "3744d6f08e3cf86a2f84be2bdc9ebfdd"
  },
  {
    "url": "assets/js/16.280a276c.js",
    "revision": "bc8c8069cb975ad204b96ed4f330bacd"
  },
  {
    "url": "assets/js/17.11ada7f5.js",
    "revision": "19b3f43821eae611139db18d3dfee059"
  },
  {
    "url": "assets/js/18.04913462.js",
    "revision": "7a105c625ccb2e84585b93489c0f5011"
  },
  {
    "url": "assets/js/19.846b5ade.js",
    "revision": "50ecae85e39cff544f3c6072d1455175"
  },
  {
    "url": "assets/js/2.4c3af1c0.js",
    "revision": "791c2379dbc682cc0dd4dd177179707b"
  },
  {
    "url": "assets/js/20.f7be9738.js",
    "revision": "1a828a5e84d5442b2c776ac079ef61ee"
  },
  {
    "url": "assets/js/21.3408f5c7.js",
    "revision": "ef9ab2253e810c9762ff379ed102b978"
  },
  {
    "url": "assets/js/22.dc98dbcf.js",
    "revision": "c9a20b7ef1d0e61b75297948bc22c321"
  },
  {
    "url": "assets/js/23.399a1afd.js",
    "revision": "2890374694fa4396fc8a8a7ee8dc37a9"
  },
  {
    "url": "assets/js/24.bc2eac98.js",
    "revision": "c0898f5b1210f146f3fe6854c7df6ed8"
  },
  {
    "url": "assets/js/25.861f5f70.js",
    "revision": "ea2f67c26d54d2c4b5aec48b3244a378"
  },
  {
    "url": "assets/js/26.05c6c818.js",
    "revision": "f0d9c5836cd61f59f9e39d4ecd927c3f"
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
    "url": "assets/js/3.7be4b745.js",
    "revision": "ab903ea298622e97369732f7c93a82d7"
  },
  {
    "url": "assets/js/30.e4ea0ac6.js",
    "revision": "777990ace6cce2f01f0f5ec48063f8f2"
  },
  {
    "url": "assets/js/31.63bdbfaf.js",
    "revision": "6a5fec57d39dea190de2c69a28992dc8"
  },
  {
    "url": "assets/js/32.ef8ca86d.js",
    "revision": "fdcd4616a2998a6f520d8aa0b961d098"
  },
  {
    "url": "assets/js/33.b06f20bc.js",
    "revision": "068726c348926dfc85241c3597770577"
  },
  {
    "url": "assets/js/34.4bb4b587.js",
    "revision": "bf5ca368f8369468245ed3f63f17c811"
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
    "url": "assets/js/37.5ca4d0db.js",
    "revision": "10b4997d81b080317b22a1e6f271aad4"
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
    "url": "assets/js/40.a1ae628e.js",
    "revision": "5bbd566edbb17157296287bc1e84f1ef"
  },
  {
    "url": "assets/js/41.3ee07ad4.js",
    "revision": "71a344ee37272b697f03db17d97c3254"
  },
  {
    "url": "assets/js/42.b1cd7093.js",
    "revision": "6a833a41c3c66f99d7e2162b299fa1ad"
  },
  {
    "url": "assets/js/43.12ec3055.js",
    "revision": "ac8c7660fff40b429d7472443725b1c1"
  },
  {
    "url": "assets/js/44.f42adddc.js",
    "revision": "27791cf0686cb288480d5269bdb07315"
  },
  {
    "url": "assets/js/45.0bc3b10f.js",
    "revision": "7822ddbae1921868083da4f789b461f4"
  },
  {
    "url": "assets/js/46.c646e561.js",
    "revision": "ffc15ef910a5ae1ad6baf5d9bbd8d942"
  },
  {
    "url": "assets/js/47.522bb89d.js",
    "revision": "1618a393aa5d680728b211f542521659"
  },
  {
    "url": "assets/js/48.b3d7a88e.js",
    "revision": "ea67ee63835feab07106d05669b65375"
  },
  {
    "url": "assets/js/49.4e5bb451.js",
    "revision": "b1099b5faf5d41f965f68b4293855734"
  },
  {
    "url": "assets/js/5.d47c6c44.js",
    "revision": "ec6fb2abe99cdbc72ef65293df7f0042"
  },
  {
    "url": "assets/js/50.6c31937d.js",
    "revision": "ff01896fe2bf56db242ed2d0a8b9e855"
  },
  {
    "url": "assets/js/51.f42fae99.js",
    "revision": "196ef6c28fa2022e2403d6f4ef3d90cb"
  },
  {
    "url": "assets/js/52.7826cb34.js",
    "revision": "a597d285ca35e15de2ff3318519748fc"
  },
  {
    "url": "assets/js/53.5b39e6e5.js",
    "revision": "f59bb357be82713181f1fb1db997b40e"
  },
  {
    "url": "assets/js/54.3fb057b9.js",
    "revision": "48717911b35cfb976e5a6af4c1180d7b"
  },
  {
    "url": "assets/js/55.98e882d1.js",
    "revision": "45972763e6b8859735754042eb9fa28e"
  },
  {
    "url": "assets/js/56.b57503e6.js",
    "revision": "ff2dffd8bf5deeeb6826640ae3299bef"
  },
  {
    "url": "assets/js/57.138f291a.js",
    "revision": "f80d363f46fc4363ecc04fb942baf84f"
  },
  {
    "url": "assets/js/58.56cef690.js",
    "revision": "b23c0add9654a799482a8f6478f6a47c"
  },
  {
    "url": "assets/js/59.4b98e608.js",
    "revision": "5ede8bf6bfdf1fadb12f0587da13ab8b"
  },
  {
    "url": "assets/js/6.0a05868f.js",
    "revision": "0ae9776808e4de8d8d418db4242d0333"
  },
  {
    "url": "assets/js/60.a5405acb.js",
    "revision": "92c94086fe6dc5ace0446c876930feb3"
  },
  {
    "url": "assets/js/61.557fb09a.js",
    "revision": "01af5de7bc0867f370afd697dbd67fc3"
  },
  {
    "url": "assets/js/62.5d7beca1.js",
    "revision": "ac55f9ca514ae1633d37201cfe8175a1"
  },
  {
    "url": "assets/js/63.69e42b44.js",
    "revision": "2f35fae56ccb6514e7d27eeb901af694"
  },
  {
    "url": "assets/js/64.0a20ff34.js",
    "revision": "677cc884e9f00baa464585913a77d78b"
  },
  {
    "url": "assets/js/65.866fbc20.js",
    "revision": "91d30db29525aea0c8a0953799439b66"
  },
  {
    "url": "assets/js/66.252d07cf.js",
    "revision": "f655177a563ad0e23e075b3b5a11b4a9"
  },
  {
    "url": "assets/js/67.7838dd13.js",
    "revision": "07d98c665dd5beed99704894db828507"
  },
  {
    "url": "assets/js/68.b11ef390.js",
    "revision": "fc887dd5b134c19479db90dddfb853f4"
  },
  {
    "url": "assets/js/69.e4d06243.js",
    "revision": "210fe27252a24dfdfd73443b2ad52676"
  },
  {
    "url": "assets/js/7.5c6c9618.js",
    "revision": "7c50956e07275fba5476a615359f6deb"
  },
  {
    "url": "assets/js/70.4559cced.js",
    "revision": "cde60e41b2dd9ad6593fd5dd15e48e78"
  },
  {
    "url": "assets/js/71.802820ee.js",
    "revision": "f0148ed081608c02b8d4ccbc7af53694"
  },
  {
    "url": "assets/js/72.c461e957.js",
    "revision": "919740ecd864d31be114dc8b1a3db2ba"
  },
  {
    "url": "assets/js/73.8689b713.js",
    "revision": "f93edb53ac5d0bb8c7e429d55b7e3739"
  },
  {
    "url": "assets/js/74.8e6747ec.js",
    "revision": "09a74a0dd4a7922540cc45dc2889e318"
  },
  {
    "url": "assets/js/75.52c987a8.js",
    "revision": "dbbb19a4320f10f6fd4e5579c486fdad"
  },
  {
    "url": "assets/js/76.33e1bff3.js",
    "revision": "e85e37bf0f7e764657daceb6cbfe616e"
  },
  {
    "url": "assets/js/77.a531c930.js",
    "revision": "31b3c61bc3dee9664ac8bb5de19d210c"
  },
  {
    "url": "assets/js/78.b927b612.js",
    "revision": "b8a8f78c60eab166ba23569eea72c780"
  },
  {
    "url": "assets/js/79.9b51b956.js",
    "revision": "bdd40be2418557db64e530c67825602e"
  },
  {
    "url": "assets/js/8.34e4aa45.js",
    "revision": "c92a899c58832659d27c37008b9dca09"
  },
  {
    "url": "assets/js/80.d30efc05.js",
    "revision": "12c3e239df17ecf361ec41f3de56a703"
  },
  {
    "url": "assets/js/81.a0c86309.js",
    "revision": "19c5682d704b96d25771d04475f6fdb3"
  },
  {
    "url": "assets/js/82.17b723be.js",
    "revision": "7b1803fbda87208a53d36b9393a8e160"
  },
  {
    "url": "assets/js/83.9a26afff.js",
    "revision": "ee58e1904fe1ee45a7d442834569952e"
  },
  {
    "url": "assets/js/84.275670d0.js",
    "revision": "7871fd11f2d843c7da9c076aacea8a78"
  },
  {
    "url": "assets/js/85.8235dbcd.js",
    "revision": "7f0ed8bc4b756206d1546a1f84c8953d"
  },
  {
    "url": "assets/js/86.867b8959.js",
    "revision": "75dfd2eb508ffdb268f4dade6124e827"
  },
  {
    "url": "assets/js/87.965360cd.js",
    "revision": "50ffa6c404c4244284ee912a1f53786a"
  },
  {
    "url": "assets/js/88.bf6727bb.js",
    "revision": "499f1bbac0999b2c8864f23c4c770c27"
  },
  {
    "url": "assets/js/89.a19e4360.js",
    "revision": "2269aa1396cefd9504969886b9079ad6"
  },
  {
    "url": "assets/js/9.e6e6774e.js",
    "revision": "1986f1643120e9d509b88f4aa9e2622b"
  },
  {
    "url": "assets/js/90.453c18b9.js",
    "revision": "d28ff9e039e806844a0766e500f3fef3"
  },
  {
    "url": "assets/js/91.4c90337e.js",
    "revision": "d51a5a1f84b75a5df16947b3410e7577"
  },
  {
    "url": "assets/js/92.2f6d0c27.js",
    "revision": "0f7c28dd15a8454c2eaa48859dce4432"
  },
  {
    "url": "assets/js/93.d25142b6.js",
    "revision": "2a5e5306e0006be3bbdc4c1be1e6511f"
  },
  {
    "url": "assets/js/94.c940e991.js",
    "revision": "d8da7d0e8f13c19afd68111a1cec7d85"
  },
  {
    "url": "assets/js/95.8d1740af.js",
    "revision": "73bafbb5bc7e1481fba86d73fcaf7961"
  },
  {
    "url": "assets/js/96.c92b6f63.js",
    "revision": "821951239a8a7d3427be3908e0260e97"
  },
  {
    "url": "assets/js/97.bfbfd183.js",
    "revision": "52ddfe528b8c07d82662a4fa5c065ddc"
  },
  {
    "url": "assets/js/98.d613e919.js",
    "revision": "09d9ae971e3c14109ad4ecda327ed809"
  },
  {
    "url": "assets/js/99.3d8d7f91.js",
    "revision": "12dbb9fae6a33a34ce47b7fa9cc761fc"
  },
  {
    "url": "assets/js/app.90b8ec28.js",
    "revision": "6297865f7d779d769d1cb7dc1469cc47"
  },
  {
    "url": "docs/python/设计模式/行为型模式/命令模式.html",
    "revision": "4b6553a788adcf3c7071a33dd9e8d541"
  },
  {
    "url": "docs/设计模式手册/index.html",
    "revision": "aee817f58e9db0ac3ee9a498f2021974"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "en/index.html",
    "revision": "5d2d9678a597c16d47501deb4084ac63"
  },
  {
    "url": "friends/index.html",
    "revision": "2cc4b8bea9db3632daea62450967f024"
  },
  {
    "url": "guide/index.html",
    "revision": "e9695378e1b9888086770f031716b385"
  },
  {
    "url": "index.html",
    "revision": "083731bfd70f8de44b6d3f3578d97afb"
  },
  {
    "url": "passages/2018-05-23-es-promise/index.html",
    "revision": "9b7cf63cbc8712de345ff9be4519d17e"
  },
  {
    "url": "passages/2018-05-29-promise-async-await-order/index.html",
    "revision": "3c540265d0769b7a556fbb56a2fd94b4"
  },
  {
    "url": "passages/2018-05-29-scss-fisrt-step/index.html",
    "revision": "c1d4989d9bb63b3ac62e48137cd9a392"
  },
  {
    "url": "passages/2018-05-29-scss-more/index.html",
    "revision": "cfc7a7a596df9e50b71ec17ddbec2a77"
  },
  {
    "url": "passages/2018-06-05-border-sizing/index.html",
    "revision": "f695c88112455362d5a6c59b06d3a344"
  },
  {
    "url": "passages/2018-06-19-batch-edit-log/index.html",
    "revision": "7752a270ab8e82860ac70ed58c9749bc"
  },
  {
    "url": "passages/2018-07-29-webpack-demos-introduction/index.html",
    "revision": "3dd411bfb7a7db642239332f0ede2a19"
  },
  {
    "url": "passages/2018-07-30-webpack-pack-js/index.html",
    "revision": "6ebd2b0d9bde66710772d5aa68bcdd4b"
  },
  {
    "url": "passages/2018-07-31-webpack-compile-es6/index.html",
    "revision": "eef6407320381443a5b4e6bdfda84ae4"
  },
  {
    "url": "passages/2018-08-06-webpack-mutiple-pages/index.html",
    "revision": "f41b90c253cc2f397e0a0a94c3d9922c"
  },
  {
    "url": "passages/2018-08-08-webpack-spa-split-lazy/index.html",
    "revision": "a8b149dc7b999e40a658312a61007044"
  },
  {
    "url": "passages/2018-08-17-webpack-css/index.html",
    "revision": "77a024bf0cac509f5708636230570a62"
  },
  {
    "url": "passages/2018-08-18-webpack-scss/index.html",
    "revision": "9513b227f12c2f83f427b6dcfe3962c5"
  },
  {
    "url": "passages/2018-08-19-websocket-group-chat/index.html",
    "revision": "8a51abd83327e92f2949615adc3b3e4c"
  },
  {
    "url": "passages/2018-08-20-canvas-beauty-filter/index.html",
    "revision": "eb15f50598acad1fd5b2dd148b23718b"
  },
  {
    "url": "passages/2018-08-21-momentjs/index.html",
    "revision": "cca33fabfe35af8db7c04a7c82058f55"
  },
  {
    "url": "passages/2018-08-26-ssl/index.html",
    "revision": "2ab4d8edfb91dcee9d2d9b071bdff0d1"
  },
  {
    "url": "passages/2018-08-28-webpack-scss-lazy/index.html",
    "revision": "59818b32166e065443000cbac2bceda0"
  },
  {
    "url": "passages/2018-08-30-canvas-off-screen/index.html",
    "revision": "8799de73bdb773448e75b19d3bd21316"
  },
  {
    "url": "passages/2018-09-01-js-tree-shaking/index.html",
    "revision": "8889f11a2b34d286148eede6db4de084"
  },
  {
    "url": "passages/2018-09-02-css-tree-shaking/index.html",
    "revision": "e862906d6e62595770945da86d94c1e3"
  },
  {
    "url": "passages/2018-09-06-git-tag-and-version/index.html",
    "revision": "1a1ac45df54c62003d84ef5fbedf04cd"
  },
  {
    "url": "passages/2018-09-07-git-stash/index.html",
    "revision": "eb68ac53ef5ddf5e998333d82f874a59"
  },
  {
    "url": "passages/2018-09-09-mysql-blog-ui/index.html",
    "revision": "0eef5a2b3ee43e8740530fd6c3f130b6"
  },
  {
    "url": "passages/2018-09-11-webpack-image/index.html",
    "revision": "d92f842e3a9ac12a17bb06578ee4bd90"
  },
  {
    "url": "passages/2018-10-03-js-mathjax/index.html",
    "revision": "10ea95cd0f5c7615be660cd5c5fa464e"
  },
  {
    "url": "passages/2018-10-09-webpack-chracter-file/index.html",
    "revision": "75e4593488ed162d2953b0d9f4d3c916"
  },
  {
    "url": "passages/2018-10-09-webpack-js-pacakge/index.html",
    "revision": "b26463a97daab8c042cc66bad3d87cfa"
  },
  {
    "url": "passages/2018-10-17-automatic-html/index.html",
    "revision": "c850bec7a4739d2ff89ac42ecc83a820"
  },
  {
    "url": "passages/2018-10-18-webpack-clean-and-watch-mode/index.html",
    "revision": "02501c209f5beb328cb8345545154df9"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-and-prod/index.html",
    "revision": "90dac68addf8dc6c7bd72b93728906df"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-server/index.html",
    "revision": "2bc3845df603b762d5feb1addf1a3a2d"
  },
  {
    "url": "passages/2018-10-23-singleton-pattern/index.html",
    "revision": "eb1991760a7931e1587e2783aece1fa6"
  },
  {
    "url": "passages/2018-10-25-stragegy-pattern/index.html",
    "revision": "26e77de767949f2efaafea91130462f3"
  },
  {
    "url": "passages/2018-11-01-proxy-pattern/index.html",
    "revision": "48f6b98dc5e7ca6f73f35686cff66a4f"
  },
  {
    "url": "passages/2018-11-06-iter-pattern/index.html",
    "revision": "efe019c6c344374b481f26bd800d0fcf"
  },
  {
    "url": "passages/2018-11-18-publish-subscribe-pattern/index.html",
    "revision": "14a689b5d476653276352ce103dae1df"
  },
  {
    "url": "passages/2018-11-25-command-pattern/index.html",
    "revision": "27b6e02b2f0b9675087f015a8af402f1"
  },
  {
    "url": "passages/2018-12-08-weekly-share-1/index.html",
    "revision": "d8b2acea06084d5cca790ce848f83efd"
  },
  {
    "url": "passages/2018-12-12-composite-pattern/index.html",
    "revision": "7dbc1b19fcfeca4ba29ed39c4ec0d504"
  },
  {
    "url": "passages/2018-12-16-flyweight-pattern/index.html",
    "revision": "64729fb476cdbea39ae807ac627cb8e9"
  },
  {
    "url": "passages/2018-12-24-weekly-share-2/index.html",
    "revision": "99ee55413f88f5bd85e788fb67804060"
  },
  {
    "url": "passages/2019-01-07-chain-of-responsibility-pattern/index.html",
    "revision": "2d84af702c1a09a5b32b1b3cd6e5ab21"
  },
  {
    "url": "passages/2019-01-12-decorator-pattern/index.html",
    "revision": "2009818ed74d0647c4781175fa729f87"
  },
  {
    "url": "passages/2019-01-16-state-pattern/index.html",
    "revision": "b9acaeed568d983eb09f153969e864dc"
  },
  {
    "url": "passages/2019-01-17-adapter-pattern/index.html",
    "revision": "dce31b0d1e7da831639fd81cb87cc50e"
  },
  {
    "url": "passages/2019-01-19-bridge-pattern/index.html",
    "revision": "4e4cdfef1f1300e72c6b8c110ee05f99"
  },
  {
    "url": "passages/2019-01-25-interpreter-pattern/index.html",
    "revision": "d8d1d1974f448564364ffd0eed432ba1"
  },
  {
    "url": "passages/2019-01-26-memento-pattern/index.html",
    "revision": "273e78ec95514a1a34f82b31d71430e9"
  },
  {
    "url": "passages/2019-01-31-template-pattern/index.html",
    "revision": "19da88585ece15f14f569424984c88e2"
  },
  {
    "url": "passages/2019-03-18-interview-js-code/index.html",
    "revision": "972701480c1cfeb1763ed722909a11c8"
  },
  {
    "url": "passages/2019-03-19-css3-nth-child/index.html",
    "revision": "cecf6ed648ebee1ee83a8ffab6009e13"
  },
  {
    "url": "passages/2019-03-20-css3-flex/index.html",
    "revision": "b19a20a618b322d9a37fd48bf5468383"
  },
  {
    "url": "passages/2019-03-21-js-re/index.html",
    "revision": "1ddb1f2f7c9a931b92b2c30161a1e486"
  },
  {
    "url": "passages/2019-03-26-javascript-first/index.html",
    "revision": "9f717a54cca16b9e159f1fea772adee3"
  },
  {
    "url": "passages/2019-03-27-javascript-second/index.html",
    "revision": "0202ac66958a2aa2ef69bc816e3c4cee"
  },
  {
    "url": "passages/2019-03-31-factory-pattern/index.html",
    "revision": "2df35da33140c9febb5d57213cf25b75"
  },
  {
    "url": "passages/2019-04-01-abstract-factory-pattern/index.html",
    "revision": "f6b08a1f89a9266e3457937ec63142ff"
  },
  {
    "url": "passages/2019-04-02-pwa-service-worker/index.html",
    "revision": "b784dbeedd038fc6df04a24a81f3e1ba"
  },
  {
    "url": "passages/2019-04-08-react-components-communication/index.html",
    "revision": "d55d2a00bd9ef36b66f5e3cb98c2b150"
  },
  {
    "url": "passages/2019-04-09-es6/index.html",
    "revision": "e64f8b549dc9ab12fcb97355d8d5030e"
  },
  {
    "url": "passages/2019-04-10-html5-drag-drop/index.html",
    "revision": "867477df274245fe1d0d697c28971cac"
  },
  {
    "url": "passages/2019-04-15-wechat-h5-login/index.html",
    "revision": "6b4f9b044ab7d6dbbdf9c0b7d1ba8b27"
  },
  {
    "url": "passages/2019-04-16-axios/index.html",
    "revision": "ef61b01a89c73a97098b8949beb5e7d6"
  },
  {
    "url": "passages/2019-04-23-vemojs/index.html",
    "revision": "98473635754687e696fba24b29313e36"
  },
  {
    "url": "passages/2019-05-02-node-block-chain/index.html",
    "revision": "fe7686feee0c4849a11954f2d3c086f3"
  },
  {
    "url": "passages/2019-05-04-deep-in-jest/index.html",
    "revision": "2f2246cbd7e5ede56fef67dfa57588bd"
  },
  {
    "url": "passages/2019-05-04-jest-base/index.html",
    "revision": "c4f48d767767803c0fdccb1737dc4344"
  },
  {
    "url": "passages/2019-05-04-rr/index.html",
    "revision": "d2d788f186ba0b4f403137ca93756622"
  },
  {
    "url": "passages/2019-05-07-play-node-shell/index.html",
    "revision": "afb3f494c06ccceb71ddd7a29a37ce04"
  },
  {
    "url": "passages/2019-05-15-browser/index.html",
    "revision": "e5e76f033cf976c549dbc6182924d278"
  },
  {
    "url": "passages/2019-05-15-web-safety/index.html",
    "revision": "083ad1bbd1b9104bd5c4cafab265ebe8"
  },
  {
    "url": "passages/2019-05-17-why-i-stopped-using-sass/index.html",
    "revision": "8436da5df595715a0a4872a59392d87f"
  },
  {
    "url": "passages/2019-05-18-serverless-page-counter/index.html",
    "revision": "784e5b4a747d4491f3975622b3b5af62"
  },
  {
    "url": "passages/2019-05-28-professional-js-notes/index.html",
    "revision": "3e51346cd67a6cc8f4efa2bde9fd2b95"
  },
  {
    "url": "passages/2019-06-18-deep-in-koa/index.html",
    "revision": "2731db51f380f5a36879a28b72d7b840"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa-3/index.html",
    "revision": "d6f6874e109018c14ac52eebaadbd5ab"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa/index.html",
    "revision": "79d7c21765d6ab93c439ea4cc63a7e32"
  },
  {
    "url": "passages/2019-06-23-algorithm-offer/index.html",
    "revision": "1bb93e3d8e4d450d760baab695a4bd1d"
  },
  {
    "url": "passages/2019-06-23-array-change-location/index.html",
    "revision": "1e97f1be45e1c4ae8006fab887fd57d2"
  },
  {
    "url": "passages/2019-06-23-array-find/index.html",
    "revision": "669c604e0a9f6a35d8ac394130496192"
  },
  {
    "url": "passages/2019-06-23-array-inverse-pair/index.html",
    "revision": "691d88269717b4106fef48d1c6ef22a6"
  },
  {
    "url": "passages/2019-06-23-array-min-numbers/index.html",
    "revision": "fe807174e0833c53da977f9b6984c6d6"
  },
  {
    "url": "passages/2019-06-23-bit-first-one/index.html",
    "revision": "43d8c44a2f00e3ef212f704f65354584"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one-more/index.html",
    "revision": "f879b9e05d1383363c517352db96a07d"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one/index.html",
    "revision": "e6f6474ca350ad36d2934f66f8ece987"
  },
  {
    "url": "passages/2019-06-23-find-min-num/index.html",
    "revision": "0d6a8db81b18071fd1a412fbe97e1bd2"
  },
  {
    "url": "passages/2019-06-23-find-times-in-sorted/index.html",
    "revision": "fbc2c930cf03df8cca8c432f06f269ee"
  },
  {
    "url": "passages/2019-06-23-hash-first-no-repeat-char/index.html",
    "revision": "526f2f70f77b9fee9380f2d3178774c1"
  },
  {
    "url": "passages/2019-06-23-hash-ugly/index.html",
    "revision": "97cc43299216317063109628220b9b7b"
  },
  {
    "url": "passages/2019-06-23-heap-kth-numbers/index.html",
    "revision": "11a80d0d27cecc04bb9dbea7c3be6ae6"
  },
  {
    "url": "passages/2019-06-23-list-clone/index.html",
    "revision": "d5f351386fb4448edf0689617d7ef080"
  },
  {
    "url": "passages/2019-06-23-list-delete-node/index.html",
    "revision": "577df93d0ab021238eeb6b2938eddd9a"
  },
  {
    "url": "passages/2019-06-23-list-first-same-node/index.html",
    "revision": "ef50024a0e6c859c2f4ebb498f04cc44"
  },
  {
    "url": "passages/2019-06-23-list-last-kth-node/index.html",
    "revision": "f76e114b58f8be3bd0793ab47b9b7d28"
  },
  {
    "url": "passages/2019-06-23-list-merge/index.html",
    "revision": "764fd4e1181f8d02b9d9cd7f68eeb6ea"
  },
  {
    "url": "passages/2019-06-23-list-print/index.html",
    "revision": "5f24899bfa56e244d96ac6e96df4b465"
  },
  {
    "url": "passages/2019-06-23-list-reverse/index.html",
    "revision": "69ef00cc2352f021db203f4657a55a89"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-and-number-is-s/index.html",
    "revision": "c45d650dceceec45e4f2c28223d0d5e7"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-fibonacci/index.html",
    "revision": "2a640ffe0ad58138ea3719417dbd9e62"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-from-one-to-one/index.html",
    "revision": "4ec714178bd6a6d8647b5923e0411b66"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-joseph-ring/index.html",
    "revision": "c5304dc5069af66f36a3c74c3fe7485a"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-min-kth/index.html",
    "revision": "7445fc4f433d68a3045118e8859d4eb3"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-n-probability/index.html",
    "revision": "3008a2a2092349f15491d12773eb9eef"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-playing-cards/index.html",
    "revision": "fa722dcdd9c88f6ee62ea4e70044dd62"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-pow/index.html",
    "revision": "d8622405c18c9d724cca935b24002f19"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-print-matrix/index.html",
    "revision": "2a725a2fb8ba1b1dbb628b8570fada37"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-s-sequence/index.html",
    "revision": "14b6af11172681669858f9dbf2415c4d"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-times-more-than-half/index.html",
    "revision": "ca448102876f9acfa8be9665d7416bd8"
  },
  {
    "url": "passages/2019-06-23-stack-queue-exchange/index.html",
    "revision": "df38a47873556755a585867318056cf8"
  },
  {
    "url": "passages/2019-06-23-stack-queue-min-stack/index.html",
    "revision": "a0947d6809675c0c58f499cb965bb706"
  },
  {
    "url": "passages/2019-06-23-stack-queue-push-pop-order/index.html",
    "revision": "760cf42b6170be04f32665b181ede89a"
  },
  {
    "url": "passages/2019-06-23-str-atoi/index.html",
    "revision": "5c3824c5f811a2b6f9d9dfa154fafe3a"
  },
  {
    "url": "passages/2019-06-23-str-perm/index.html",
    "revision": "753fb51e40bc4449a33d04107d0b56aa"
  },
  {
    "url": "passages/2019-06-23-str-replace-empty/index.html",
    "revision": "2548785c46fce81c7f64adbcc8868e7d"
  },
  {
    "url": "passages/2019-06-23-str-reverse-sentence/index.html",
    "revision": "5bb174db8103960e80fb603a222f7be7"
  },
  {
    "url": "passages/2019-06-23-tree-convert-to-list/index.html",
    "revision": "b0898470ea9298fb9cf92ba632dd50c5"
  },
  {
    "url": "passages/2019-06-23-tree-is-balance/index.html",
    "revision": "aff05a053765123617f77298ae5de2cc"
  },
  {
    "url": "passages/2019-06-23-tree-level-travel/index.html",
    "revision": "b4a87cbf6fb64f8f42296241c1bd4987"
  },
  {
    "url": "passages/2019-06-23-tree-mirror/index.html",
    "revision": "73792c99d25a9a7c32ea8aac7fae31e9"
  },
  {
    "url": "passages/2019-06-23-tree-path-with-number/index.html",
    "revision": "d165a4e94b657c7f629f00215a338a44"
  },
  {
    "url": "passages/2019-06-23-tree-rebuild/index.html",
    "revision": "c491fe2d823072ba30c781281392020d"
  },
  {
    "url": "passages/2019-06-23-tree-subtree/index.html",
    "revision": "9145590850c345fc0dd70c31e39f99b4"
  },
  {
    "url": "passages/2019-06-23-tree-tail-order/index.html",
    "revision": "67fd1bfb7752b7aca8857c365b6e3142"
  },
  {
    "url": "passages/2019-07-15-file-api/index.html",
    "revision": "ef69ca6b47adb810f6d0be9122e34b5b"
  },
  {
    "url": "passages/2019-07-16-font-animation/index.html",
    "revision": "6d210fd7b86569b2e55872502df449af"
  },
  {
    "url": "passages/2019-07-22-input-animation/index.html",
    "revision": "8a0654e95d651f8ae13d3b065817a9ed"
  },
  {
    "url": "passages/2019-07-24-button-animation/index.html",
    "revision": "6765f22a74b19f4f51acc9a5891ba1a0"
  },
  {
    "url": "passages/2019-07-25-loader-animation-first/index.html",
    "revision": "c61b1f4fcfe44e5ba853ec309c24a7a4"
  },
  {
    "url": "passages/2019-07-26-loader-animation-second/index.html",
    "revision": "3bde57fd5961e0f4bdf849316b98a889"
  },
  {
    "url": "passages/2019-08-14-game-gomoku/index.html",
    "revision": "1b08a45e2e472f99e59db38a0031d2d9"
  },
  {
    "url": "passages/2019-08-27-koa-meet-typescript/index.html",
    "revision": "2e552a9ca80210c8928ca37b7910c057"
  },
  {
    "url": "passages/2019-08-27-typescript-notes/index.html",
    "revision": "803d93dca8dd4cb42495d1acf813095f"
  },
  {
    "url": "passages/2019-08-31-chain-of-responsibility-patterns/index.html",
    "revision": "6d4f676a790df18b7efda3265b2b1a2c"
  },
  {
    "url": "passages/2019-08-31-design-patterns/index.html",
    "revision": "8b90e17260d8f1b9d43d1a261ab6afeb"
  },
  {
    "url": "passages/2019-08-31-state-patterns/index.html",
    "revision": "8bef061cf3578db03fd5f2b53460791a"
  },
  {
    "url": "passages/2019-09-02-node.js-basics/index.html",
    "revision": "30364e153ffcd9b07df86ab241e251d0"
  },
  {
    "url": "passages/2019-09-02-nodejs-callback/index.html",
    "revision": "c0fa167fe68fc0f75e8df12392845177"
  },
  {
    "url": "passages/2019-09-03-node.js-event-loop/index.html",
    "revision": "6fb42eb842c92cbf65278b99c1d51f72"
  },
  {
    "url": "passages/2019-09-04-typescript-vue/index.html",
    "revision": "145aacfb0035e3c41328a00352d4c37b"
  },
  {
    "url": "passages/2019-09-18-typescript-sharing/index.html",
    "revision": "ee5110d91e56bf48a212fd51b74ef4e9"
  },
  {
    "url": "passages/2019-09-18-weekly-sharing/index.html",
    "revision": "ccc864727479a35c3fbab9a18b0bc4a7"
  },
  {
    "url": "together/index.html",
    "revision": "fa3e1693a02e8469735806e732ef3039"
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
