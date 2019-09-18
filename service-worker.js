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
    "revision": "52b580ebffdada2b4084423042e00967"
  },
  {
    "url": "about/index.html",
    "revision": "79205f09dde4a45f92655614c8a4aca0"
  },
  {
    "url": "assets/css/0.styles.5456f46b.css",
    "revision": "f5c0ee13e60c92ab1080c698a95f3935"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5abc6661.js",
    "revision": "952a29cc455f8a0317cc693b1ea57740"
  },
  {
    "url": "assets/js/100.01f7e173.js",
    "revision": "42417e55ceeeb11602a47ad96af7a99f"
  },
  {
    "url": "assets/js/101.dcb3bc00.js",
    "revision": "192a5825bb15661bbffc7bbea89524a7"
  },
  {
    "url": "assets/js/102.906bd0e2.js",
    "revision": "6c39ad3ca8596fca7e77f7d1a6ef67cb"
  },
  {
    "url": "assets/js/103.0cb16ad1.js",
    "revision": "cf6046d4be0b343e572cd3ee463ce3c4"
  },
  {
    "url": "assets/js/104.e3500ff6.js",
    "revision": "a448bad8f6211bba33f9f1e0a02bb3fd"
  },
  {
    "url": "assets/js/105.b35468a3.js",
    "revision": "4e7800ae79165b0ab0c205400fce0896"
  },
  {
    "url": "assets/js/106.bbd958c6.js",
    "revision": "2c054a3a31638e95fc0203615348410d"
  },
  {
    "url": "assets/js/107.d6daf285.js",
    "revision": "76abfd3a80e8bcb10013b694283f22ae"
  },
  {
    "url": "assets/js/108.f5f2d2ea.js",
    "revision": "108cc32da3631f3c90ad4880f2b30d21"
  },
  {
    "url": "assets/js/109.440ada0f.js",
    "revision": "ea5de98308dad5789e9987432f277093"
  },
  {
    "url": "assets/js/11.abca3b22.js",
    "revision": "4f7724cc16e686969cebb0133b27e97f"
  },
  {
    "url": "assets/js/110.2f6bcfa8.js",
    "revision": "d8da8eb221eab0ed81aa5aab9d85b1fd"
  },
  {
    "url": "assets/js/111.ebd7cd5e.js",
    "revision": "5979801a0787c286185c9bb6abdc39a7"
  },
  {
    "url": "assets/js/112.54d7b16f.js",
    "revision": "17a9bd871146ae2bae364b62979c624d"
  },
  {
    "url": "assets/js/113.1cc63809.js",
    "revision": "ffedd7e7cbec8db72238d6adf89d4d5c"
  },
  {
    "url": "assets/js/114.b716ed9d.js",
    "revision": "e3d0d5a0871d53805add6306b51caac3"
  },
  {
    "url": "assets/js/115.b20e44db.js",
    "revision": "4d408b5fdf4b824883b44df1482b8d72"
  },
  {
    "url": "assets/js/116.9266ea50.js",
    "revision": "dd5330d40dca9a4ebb3a7ac9525e90b4"
  },
  {
    "url": "assets/js/117.007998d8.js",
    "revision": "60518dfa11c76fe86b41d1f25478d20c"
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
    "url": "assets/js/12.17496147.js",
    "revision": "dbbb7f420c0346289ecd0f2f5c55ec8b"
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
    "url": "assets/js/124.d7475b11.js",
    "revision": "659d292320d77bd2f6cac5d8bb0de2b4"
  },
  {
    "url": "assets/js/125.4bea5fce.js",
    "revision": "258654f210443a6fa5c25c4f3fe85541"
  },
  {
    "url": "assets/js/126.f44c1dc3.js",
    "revision": "73a2f0d90880626f3a49babd2fc9c2c8"
  },
  {
    "url": "assets/js/127.bf312370.js",
    "revision": "4f637b0c9cf14374c7246d851cd71ea1"
  },
  {
    "url": "assets/js/128.97b9469e.js",
    "revision": "c91efcef4834fac4cefaadd959830ba1"
  },
  {
    "url": "assets/js/129.542fec41.js",
    "revision": "25cdb47346ad5c3df48a2b6f5207bb12"
  },
  {
    "url": "assets/js/13.02539e33.js",
    "revision": "b776fccd46a8aa0599c8569ff64ad0b0"
  },
  {
    "url": "assets/js/130.53128d80.js",
    "revision": "577df80bca300c7b766b9dc97cddeccf"
  },
  {
    "url": "assets/js/131.a8e090dc.js",
    "revision": "da2862674572e6ca9281c64d58e6bd06"
  },
  {
    "url": "assets/js/132.e9260d83.js",
    "revision": "62c567846b63cee8d75f019fb0bc9053"
  },
  {
    "url": "assets/js/133.5c5203d6.js",
    "revision": "b44bd9a9b23989d0af524144c00c46bf"
  },
  {
    "url": "assets/js/134.e34579cc.js",
    "revision": "1bfc7e3301588c5be92f639dec0305a4"
  },
  {
    "url": "assets/js/135.4139623f.js",
    "revision": "215e1787bb7661ba8e14fd2bf79a8043"
  },
  {
    "url": "assets/js/136.3fcfacdf.js",
    "revision": "cf13e54043085fc172571b4544bb12cc"
  },
  {
    "url": "assets/js/137.eb80c84f.js",
    "revision": "52fe6e9bf6248f128201cb401d5dcd0e"
  },
  {
    "url": "assets/js/138.a1bece43.js",
    "revision": "c76e50f90e8f0eb54ab43783bb5a5148"
  },
  {
    "url": "assets/js/139.52319898.js",
    "revision": "b7cceac8b70e110789833cd96ae565c0"
  },
  {
    "url": "assets/js/14.f3713367.js",
    "revision": "f680f8865f91860a983562418e9b0218"
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
    "url": "assets/js/142.58918c5f.js",
    "revision": "5d4bc13519d3db6c53823abffa7ac0fb"
  },
  {
    "url": "assets/js/143.f46c5482.js",
    "revision": "56f0af533d554f25958383e6f4022a5f"
  },
  {
    "url": "assets/js/144.e831d7c5.js",
    "revision": "3b29804434415c02699809855c061a22"
  },
  {
    "url": "assets/js/145.52b9dcf2.js",
    "revision": "d70ec701bc804e4044cff4ab3ee0b1a2"
  },
  {
    "url": "assets/js/146.645387dc.js",
    "revision": "a1586209f2dfd6dabc0fd2decafc24d4"
  },
  {
    "url": "assets/js/147.9b84d73c.js",
    "revision": "20ecfa84d37376bcb92ef8652f2e7f09"
  },
  {
    "url": "assets/js/148.91e550ec.js",
    "revision": "c49f6fa6c15410758a0623383f635da5"
  },
  {
    "url": "assets/js/149.4f342c69.js",
    "revision": "62a73f82b3426910626ec053451dd6e6"
  },
  {
    "url": "assets/js/15.3af8a374.js",
    "revision": "d9c48d6c693b981135e4832ef22466ab"
  },
  {
    "url": "assets/js/150.2ff19a50.js",
    "revision": "a84985e4c4f80c25d68095c3ee145abd"
  },
  {
    "url": "assets/js/151.7072a328.js",
    "revision": "a602d838b53aee73875409b49eab7c6e"
  },
  {
    "url": "assets/js/152.d9951894.js",
    "revision": "17627b2777b9f979455f7e8103fc125e"
  },
  {
    "url": "assets/js/16.da334be0.js",
    "revision": "70d3a93030c210a0b4260d187c4b2d39"
  },
  {
    "url": "assets/js/17.b5889bfa.js",
    "revision": "9e3899b9cca86df3df48a69afaf1c371"
  },
  {
    "url": "assets/js/18.5365071b.js",
    "revision": "8fa2f500b2b6292f9446560bcbec5741"
  },
  {
    "url": "assets/js/19.8fbe7cbb.js",
    "revision": "8036c781bdb6659e5185ca9dc6c9ff02"
  },
  {
    "url": "assets/js/2.4c3af1c0.js",
    "revision": "791c2379dbc682cc0dd4dd177179707b"
  },
  {
    "url": "assets/js/20.e291b198.js",
    "revision": "c0d857f63642d94f8eaea2d1584ac5b0"
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
    "url": "assets/js/25.cf7c5dc7.js",
    "revision": "5bdffe14ceccff8ffe28390e962c8288"
  },
  {
    "url": "assets/js/26.4e4c8eff.js",
    "revision": "86bb23626f2b791b70e6efde6212781d"
  },
  {
    "url": "assets/js/27.5a197895.js",
    "revision": "ed1186e74ee7a95cd394467ca3da4a3a"
  },
  {
    "url": "assets/js/28.08b36805.js",
    "revision": "302951803913a79b82f64577316c7ae8"
  },
  {
    "url": "assets/js/29.a7ae9a2a.js",
    "revision": "1785b97040933e05f6d9383049669ebf"
  },
  {
    "url": "assets/js/3.7be4b745.js",
    "revision": "ab903ea298622e97369732f7c93a82d7"
  },
  {
    "url": "assets/js/30.b0492471.js",
    "revision": "b877a287a36d282a30d383f35c4959b3"
  },
  {
    "url": "assets/js/31.63dff282.js",
    "revision": "f326bba83125af5000f55d280a8fed75"
  },
  {
    "url": "assets/js/32.e7bd586a.js",
    "revision": "afbe8a0356fed0a7adecdd4ed32b589f"
  },
  {
    "url": "assets/js/33.57c64524.js",
    "revision": "ae121dd740f9ff321ad05d47041d7ff4"
  },
  {
    "url": "assets/js/34.35966e99.js",
    "revision": "3dfa8c65a5771e72666e3c372852a0af"
  },
  {
    "url": "assets/js/35.fba33702.js",
    "revision": "a66c85a05a2b8301e683dbdf6998b4bf"
  },
  {
    "url": "assets/js/36.dcab37cd.js",
    "revision": "ba4fd95a38f8c4bb196ec052a8e2098e"
  },
  {
    "url": "assets/js/37.65eafb1e.js",
    "revision": "12ee0d45f417faa8425521e9349feb87"
  },
  {
    "url": "assets/js/38.7c77ec4c.js",
    "revision": "5797e42e5abc8d61d9dbb9d40a858b04"
  },
  {
    "url": "assets/js/39.d81b04a2.js",
    "revision": "37141c9dabd19d73f7446c9a831a9b87"
  },
  {
    "url": "assets/js/4.d62f2c4b.js",
    "revision": "161b0048840bdfc7efb97bf9abb767df"
  },
  {
    "url": "assets/js/40.41a8c3c5.js",
    "revision": "f0d6807d2480ce3431395e33cec9673a"
  },
  {
    "url": "assets/js/41.7c034001.js",
    "revision": "80c8761da72fdbac31f50431d716c161"
  },
  {
    "url": "assets/js/42.bc336307.js",
    "revision": "c716067d55fe406b53044259ecaffad1"
  },
  {
    "url": "assets/js/43.3ba39e49.js",
    "revision": "33c294e1daccb505004c2e980265d931"
  },
  {
    "url": "assets/js/44.be9e3f96.js",
    "revision": "467ccb0c5f625320603ee8ab004b8cdd"
  },
  {
    "url": "assets/js/45.7f9bb702.js",
    "revision": "c4cea61ef0ee8bf5eea6f898ecdc8e92"
  },
  {
    "url": "assets/js/46.878b6e28.js",
    "revision": "e41d697aa84fd44f7aba80d02aa8ac46"
  },
  {
    "url": "assets/js/47.80ed39b5.js",
    "revision": "c1ce71cb49abab5cbd3e8742c2c064d1"
  },
  {
    "url": "assets/js/48.7372000e.js",
    "revision": "2df847206451ba775676d9203e900eaf"
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
    "url": "assets/js/55.40bf463c.js",
    "revision": "96f28adc06433ade2f608810ba5150c1"
  },
  {
    "url": "assets/js/56.15c82f26.js",
    "revision": "2282c136c2908372eb115645f4a83be9"
  },
  {
    "url": "assets/js/57.c7c617c6.js",
    "revision": "c5bb5a7b861e4d3ce4e33a998cad43b7"
  },
  {
    "url": "assets/js/58.f7b2ddaa.js",
    "revision": "df896256f33662960adc28ec38e862b3"
  },
  {
    "url": "assets/js/59.d0b2b8d8.js",
    "revision": "09fb2a5265646628af5974f756a3027b"
  },
  {
    "url": "assets/js/6.0a05868f.js",
    "revision": "0ae9776808e4de8d8d418db4242d0333"
  },
  {
    "url": "assets/js/60.32c0470c.js",
    "revision": "58cf4a7fb301270cbc8fb2e607bca420"
  },
  {
    "url": "assets/js/61.307fd04c.js",
    "revision": "5d33f7fa511a9ac33bdd40ca97898717"
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
    "url": "assets/js/64.685af2a0.js",
    "revision": "f82ef6f2af0674dc72ac37bca2ff5692"
  },
  {
    "url": "assets/js/65.ba85f699.js",
    "revision": "698723b4c1156f80adcca073978a72a0"
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
    "url": "assets/js/68.e3321e2f.js",
    "revision": "f3da1a2b0df1ba5406ccad5aac2aa2cd"
  },
  {
    "url": "assets/js/69.3fd3a5f1.js",
    "revision": "75b1c1a3d54aadf3db6d88b365b2590b"
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
    "url": "assets/js/72.c8884384.js",
    "revision": "6d45cf77a4d7dc398e071d5316d538d2"
  },
  {
    "url": "assets/js/73.1d20db73.js",
    "revision": "a49ec54952f9db537ff7a05f0b069269"
  },
  {
    "url": "assets/js/74.fc7ab74c.js",
    "revision": "221d2610246515234382bd53395de3ef"
  },
  {
    "url": "assets/js/75.6f5c877e.js",
    "revision": "2e68a4593bf193615fdb5f4ffccbd81c"
  },
  {
    "url": "assets/js/76.537b04cb.js",
    "revision": "76366ce63ea71213d88bd232fdde85fd"
  },
  {
    "url": "assets/js/77.c701372f.js",
    "revision": "c06c09a7c728d8f22d4dd8377a35496c"
  },
  {
    "url": "assets/js/78.015e460c.js",
    "revision": "3a50c4fb35656c1bb982e70dd4ef24a8"
  },
  {
    "url": "assets/js/79.9ca9559a.js",
    "revision": "3be0c3eab05845f15fe9f16974aa0de0"
  },
  {
    "url": "assets/js/8.34e4aa45.js",
    "revision": "c92a899c58832659d27c37008b9dca09"
  },
  {
    "url": "assets/js/80.7a428f95.js",
    "revision": "f1765087968639927728206e81245a57"
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
    "url": "assets/js/83.eacc86c7.js",
    "revision": "5be5cb696d6a2cb313431dc70beee66a"
  },
  {
    "url": "assets/js/84.ccc228e3.js",
    "revision": "a46fac27fde8032ca0b45d130a8af75e"
  },
  {
    "url": "assets/js/85.3f163d4b.js",
    "revision": "c19f6f3eba7d222e1c1f618930f532cb"
  },
  {
    "url": "assets/js/86.5bbd413e.js",
    "revision": "508547c3f95495f532d798e03322d7c8"
  },
  {
    "url": "assets/js/87.b9f98b7b.js",
    "revision": "890380ba96dda4574e9941c078772848"
  },
  {
    "url": "assets/js/88.413046b2.js",
    "revision": "dd2e8b8686041cff4cc99f583f98c593"
  },
  {
    "url": "assets/js/89.0f9ab247.js",
    "revision": "04aea4612a280ef7d40b4a6aa6abd76f"
  },
  {
    "url": "assets/js/9.e6e6774e.js",
    "revision": "1986f1643120e9d509b88f4aa9e2622b"
  },
  {
    "url": "assets/js/90.be5efee2.js",
    "revision": "7c293cf9e8614cd88b2db20e4c4b9f50"
  },
  {
    "url": "assets/js/91.756ee822.js",
    "revision": "34fdfd730204c5b27c25d6ab405aee22"
  },
  {
    "url": "assets/js/92.0b9a6230.js",
    "revision": "f881ff51c252afb868c4d8d7b5afcb88"
  },
  {
    "url": "assets/js/93.c242bfaf.js",
    "revision": "75dd4433de412bcbbbfc7ac7686990fd"
  },
  {
    "url": "assets/js/94.82ea1e8f.js",
    "revision": "f50c2a2267d74edd3591ab43593062c1"
  },
  {
    "url": "assets/js/95.6853110a.js",
    "revision": "20f5ec2c61922eabe261d21179aab79d"
  },
  {
    "url": "assets/js/96.d39657a7.js",
    "revision": "80c4db512aade144b922e3a56a8e294f"
  },
  {
    "url": "assets/js/97.8bc32a40.js",
    "revision": "ce9c2374f14c83f29236d43701ba4471"
  },
  {
    "url": "assets/js/98.e99e5ffb.js",
    "revision": "729a83513c6b0363f49cc497ee7ee478"
  },
  {
    "url": "assets/js/99.2e91b724.js",
    "revision": "0aaec33b2d91eee97a7b65711cb2387f"
  },
  {
    "url": "assets/js/app.f843c952.js",
    "revision": "be3477ac10b81728b17f6ccae1ff63dc"
  },
  {
    "url": "docs/python/设计模式/行为型模式/命令模式.html",
    "revision": "ab8496a568b837985fd1b57107ecc96c"
  },
  {
    "url": "docs/设计模式手册/index.html",
    "revision": "0a6073f17d72b58999da93a5c4551c7d"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "en/index.html",
    "revision": "834ecdcfc17459350ea5447a4aad9e94"
  },
  {
    "url": "friends/index.html",
    "revision": "f8504bec47f492374055fc116b90a622"
  },
  {
    "url": "guide/index.html",
    "revision": "89b3ca040e28c3b43cd6b637a2a2fa43"
  },
  {
    "url": "index.html",
    "revision": "3df221e9627737388066c35bded9513f"
  },
  {
    "url": "passages/2018-05-23-es-promise/index.html",
    "revision": "5bdf9191cc542f717bc8ab04be8f9247"
  },
  {
    "url": "passages/2018-05-29-promise-async-await-order/index.html",
    "revision": "a8fc51b4c119484ec064463ddeb2b8e5"
  },
  {
    "url": "passages/2018-05-29-scss-fisrt-step/index.html",
    "revision": "84344e6ba93eac1874ea8f26010c421f"
  },
  {
    "url": "passages/2018-05-29-scss-more/index.html",
    "revision": "00c851e8a49236bb272f1b4a0fd720e7"
  },
  {
    "url": "passages/2018-06-05-border-sizing/index.html",
    "revision": "663db04c4bb45f4682b1d4edd75b7a3d"
  },
  {
    "url": "passages/2018-06-19-batch-edit-log/index.html",
    "revision": "211a1d54e1ce4b000ce7da2427d98508"
  },
  {
    "url": "passages/2018-07-29-webpack-demos-introduction/index.html",
    "revision": "3bc65fb0b1107bcc876196821578e669"
  },
  {
    "url": "passages/2018-07-30-webpack-pack-js/index.html",
    "revision": "4af21429d396d37e19f85c6822dadf5a"
  },
  {
    "url": "passages/2018-07-31-webpack-compile-es6/index.html",
    "revision": "bbe8b3b6391f1bdab2fe28bef908b4f7"
  },
  {
    "url": "passages/2018-08-06-webpack-mutiple-pages/index.html",
    "revision": "6853ab841a47f6ec094c4cedfa502c21"
  },
  {
    "url": "passages/2018-08-08-webpack-spa-split-lazy/index.html",
    "revision": "b6b4aa85196c5eac459e2c8d111dbe0d"
  },
  {
    "url": "passages/2018-08-17-webpack-css/index.html",
    "revision": "753ea136e7e451904160d39ebc9798cc"
  },
  {
    "url": "passages/2018-08-18-webpack-scss/index.html",
    "revision": "645007d93bde170c7fe15e7b22184e2f"
  },
  {
    "url": "passages/2018-08-19-websocket-group-chat/index.html",
    "revision": "c179782bdccd896791b1d27effb8ed68"
  },
  {
    "url": "passages/2018-08-20-canvas-beauty-filter/index.html",
    "revision": "f0297a2f1f465826e8152245cc2f3703"
  },
  {
    "url": "passages/2018-08-21-momentjs/index.html",
    "revision": "21431f9f6018ef9669a618ccb965e60c"
  },
  {
    "url": "passages/2018-08-26-ssl/index.html",
    "revision": "cd6bbdd54b6fd197403c4d1e49f9b5ba"
  },
  {
    "url": "passages/2018-08-28-webpack-scss-lazy/index.html",
    "revision": "39e0eeb9f9199df8e9110a1f1a8b2864"
  },
  {
    "url": "passages/2018-08-30-canvas-off-screen/index.html",
    "revision": "e80c51192bff3a4997fd2faeff374dda"
  },
  {
    "url": "passages/2018-09-01-js-tree-shaking/index.html",
    "revision": "0d9b3c4ed37e202c692d106f58eb406a"
  },
  {
    "url": "passages/2018-09-02-css-tree-shaking/index.html",
    "revision": "e70a4b91fb0051fc15cefb2756aa4503"
  },
  {
    "url": "passages/2018-09-06-git-tag-and-version/index.html",
    "revision": "b0c6c6cf4d248299b787e20adf25590a"
  },
  {
    "url": "passages/2018-09-07-git-stash/index.html",
    "revision": "c7b04c13f281eb26dd320a054da75400"
  },
  {
    "url": "passages/2018-09-09-mysql-blog-ui/index.html",
    "revision": "110ab43c2f82dc0c9ee3baa21b30a3ec"
  },
  {
    "url": "passages/2018-09-11-webpack-image/index.html",
    "revision": "7889ada29260abed1b4dd8ce184ae787"
  },
  {
    "url": "passages/2018-10-03-js-mathjax/index.html",
    "revision": "5303e84f6e465f8933e23030a63e425c"
  },
  {
    "url": "passages/2018-10-09-webpack-chracter-file/index.html",
    "revision": "a47a6df278059efa775eda7635e235b8"
  },
  {
    "url": "passages/2018-10-09-webpack-js-pacakge/index.html",
    "revision": "c084387fb49ab0dba295e40af4fc4622"
  },
  {
    "url": "passages/2018-10-17-automatic-html/index.html",
    "revision": "50a2fe933edf8a4881d1ced57575d5b5"
  },
  {
    "url": "passages/2018-10-18-webpack-clean-and-watch-mode/index.html",
    "revision": "f83da6d0cdda9dbea3965cd6ef30f73f"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-and-prod/index.html",
    "revision": "30d9281d025f63ee529f1b7bfa4409c2"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-server/index.html",
    "revision": "402107f6ec8af3e79b8b908c5039c907"
  },
  {
    "url": "passages/2018-10-23-singleton-pattern/index.html",
    "revision": "eab1c47d11d3c0762582d38fc134ccc5"
  },
  {
    "url": "passages/2018-10-25-stragegy-pattern/index.html",
    "revision": "7af05e1585454f2d69dd2e059b03989f"
  },
  {
    "url": "passages/2018-11-01-proxy-pattern/index.html",
    "revision": "9866125ba0d020159120e3ee8ccb86b9"
  },
  {
    "url": "passages/2018-11-06-iter-pattern/index.html",
    "revision": "fa296ec7e9419a2180e7c9cab061041c"
  },
  {
    "url": "passages/2018-11-18-publish-subscribe-pattern/index.html",
    "revision": "ea5cd189de6132a983b34913a8840fd7"
  },
  {
    "url": "passages/2018-11-25-command-pattern/index.html",
    "revision": "f41f44cec2c997282c4507cf03b06544"
  },
  {
    "url": "passages/2018-12-08-weekly-share-1/index.html",
    "revision": "cf1495863b6b957f44716fcf4f061bdf"
  },
  {
    "url": "passages/2018-12-12-composite-pattern/index.html",
    "revision": "36df7547a6f7a7e96da7283fe4042c20"
  },
  {
    "url": "passages/2018-12-16-flyweight-pattern/index.html",
    "revision": "16c486ade7083ca6c2468d762736765f"
  },
  {
    "url": "passages/2018-12-24-weekly-share-2/index.html",
    "revision": "b53f9da7fe6452347d7ff655d511ecfa"
  },
  {
    "url": "passages/2019-01-07-chain-of-responsibility-pattern/index.html",
    "revision": "7ba60431c649ca764c749a0149e1952c"
  },
  {
    "url": "passages/2019-01-12-decorator-pattern/index.html",
    "revision": "8c36736b9095e935397dbb6cd7f33bd5"
  },
  {
    "url": "passages/2019-01-16-state-pattern/index.html",
    "revision": "0c6971a6734a2affc8c077f66bcb574e"
  },
  {
    "url": "passages/2019-01-17-adapter-pattern/index.html",
    "revision": "c7957e1860c24a1e0357516d04348643"
  },
  {
    "url": "passages/2019-01-19-bridge-pattern/index.html",
    "revision": "9dab7f3286a4c0b511b72ed5197ba6ca"
  },
  {
    "url": "passages/2019-01-25-interpreter-pattern/index.html",
    "revision": "72c2048137a1a3d9f2b65ea2fb5516e3"
  },
  {
    "url": "passages/2019-01-26-memento-pattern/index.html",
    "revision": "bbe142fffd00bbca1fa60a40fc2b37be"
  },
  {
    "url": "passages/2019-01-31-template-pattern/index.html",
    "revision": "f462e576b39e287e7c2f073b0ff71fc8"
  },
  {
    "url": "passages/2019-03-18-interview-js-code/index.html",
    "revision": "fb1733ef03eec983d921dafcf1acf81c"
  },
  {
    "url": "passages/2019-03-19-css3-nth-child/index.html",
    "revision": "77c7c8e9a38ed655c496dc7e37baf934"
  },
  {
    "url": "passages/2019-03-20-css3-flex/index.html",
    "revision": "301e5177de78835407e575436f422d02"
  },
  {
    "url": "passages/2019-03-21-js-re/index.html",
    "revision": "2a5ddae497c00759120d46a8b262dedf"
  },
  {
    "url": "passages/2019-03-26-javascript-first/index.html",
    "revision": "e2528e39531f0bedc328854477cf6456"
  },
  {
    "url": "passages/2019-03-27-javascript-second/index.html",
    "revision": "da954f0074f0a3f18cd539dad164b5ac"
  },
  {
    "url": "passages/2019-03-31-factory-pattern/index.html",
    "revision": "f5a956d2b64eafee8fa29f0fa2e341eb"
  },
  {
    "url": "passages/2019-04-01-abstract-factory-pattern/index.html",
    "revision": "edc5622e2968170889c5140798bb2e02"
  },
  {
    "url": "passages/2019-04-02-pwa-service-worker/index.html",
    "revision": "857c280cc1c0d18bf0621cf8fa5b3a50"
  },
  {
    "url": "passages/2019-04-08-react-components-communication/index.html",
    "revision": "1ffc9cd43fbc35f7c924476aa231be80"
  },
  {
    "url": "passages/2019-04-09-es6/index.html",
    "revision": "d201c7caba0fd27402a81d20f103adf2"
  },
  {
    "url": "passages/2019-04-10-html5-drag-drop/index.html",
    "revision": "d95aaebbe9d44d31908a5990edce562d"
  },
  {
    "url": "passages/2019-04-15-wechat-h5-login/index.html",
    "revision": "0c4428038a678c0f1cad9c156a83baa4"
  },
  {
    "url": "passages/2019-04-16-axios/index.html",
    "revision": "0db96ee6861d6601695d8ce995b083e6"
  },
  {
    "url": "passages/2019-04-23-vemojs/index.html",
    "revision": "b85697bca65f62a182a4bf70adff755c"
  },
  {
    "url": "passages/2019-05-02-node-block-chain/index.html",
    "revision": "f67534b7e4daa69a8779bf27606bc8a0"
  },
  {
    "url": "passages/2019-05-04-deep-in-jest/index.html",
    "revision": "79128f9d62d61adb28a18651d535e743"
  },
  {
    "url": "passages/2019-05-04-jest-base/index.html",
    "revision": "79d2d0d693103ddbb2fa76d658614cdf"
  },
  {
    "url": "passages/2019-05-04-rr/index.html",
    "revision": "dac30d56024911cbf005456b3977449c"
  },
  {
    "url": "passages/2019-05-07-play-node-shell/index.html",
    "revision": "e34c36e3145e511cb0ae2e8c68d4583b"
  },
  {
    "url": "passages/2019-05-15-browser/index.html",
    "revision": "d147d7666a7fa893636e7c93b40b8069"
  },
  {
    "url": "passages/2019-05-15-web-safety/index.html",
    "revision": "57b2fda2d88083fc201278b027753247"
  },
  {
    "url": "passages/2019-05-17-why-i-stopped-using-sass/index.html",
    "revision": "7ce1a68c2b16517c072381de8b6e8920"
  },
  {
    "url": "passages/2019-05-18-serverless-page-counter/index.html",
    "revision": "da7023090ed985a40991afdffab48b8e"
  },
  {
    "url": "passages/2019-05-28-professional-js-notes/index.html",
    "revision": "e34c98b9b8063846befefa4e1679f7b6"
  },
  {
    "url": "passages/2019-06-18-deep-in-koa/index.html",
    "revision": "77e13aec09c1001de9a9ba04b1331db6"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa-3/index.html",
    "revision": "60888e92418383b3ddf0d62f7b7d4fbf"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa/index.html",
    "revision": "1bc128333d7c68908dc8e525ab2b2d89"
  },
  {
    "url": "passages/2019-06-23-algorithm-offer/index.html",
    "revision": "dc1bb8ac29e2fc0d66c36437a81d1f0c"
  },
  {
    "url": "passages/2019-06-23-array-change-location/index.html",
    "revision": "bba4a65a5dad85014d3e0bcb63a7cc44"
  },
  {
    "url": "passages/2019-06-23-array-find/index.html",
    "revision": "fe6971873cb35c8247bd4515a00d6872"
  },
  {
    "url": "passages/2019-06-23-array-inverse-pair/index.html",
    "revision": "a69e391c4cec039dd9e8151c304894c3"
  },
  {
    "url": "passages/2019-06-23-array-min-numbers/index.html",
    "revision": "bc3392d52a14f5e7956fa0478ef49e42"
  },
  {
    "url": "passages/2019-06-23-bit-first-one/index.html",
    "revision": "9a9208f9531ce0dd3d4dcef2c00783c2"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one-more/index.html",
    "revision": "ae101fecafd5222f8861bfa26c5690f8"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one/index.html",
    "revision": "0cb5e8290f111ccc148db9b8e68feca4"
  },
  {
    "url": "passages/2019-06-23-find-min-num/index.html",
    "revision": "aa734ddcda200d2f43aaa4d4737349d6"
  },
  {
    "url": "passages/2019-06-23-find-times-in-sorted/index.html",
    "revision": "90d50825fcb301bd0338e7b822623f4e"
  },
  {
    "url": "passages/2019-06-23-hash-first-no-repeat-char/index.html",
    "revision": "94aad655ffac7510d1d444f21d68bfab"
  },
  {
    "url": "passages/2019-06-23-hash-ugly/index.html",
    "revision": "43e01fb62af90c1ce3b58a21cc75e3a7"
  },
  {
    "url": "passages/2019-06-23-heap-kth-numbers/index.html",
    "revision": "105ba0707e9f4db44d5320cc2f1676ed"
  },
  {
    "url": "passages/2019-06-23-list-clone/index.html",
    "revision": "e9712dd50ce198bf127fc29311cd14cc"
  },
  {
    "url": "passages/2019-06-23-list-delete-node/index.html",
    "revision": "5e34d20b7ea567db652e4b91b8aa2d4c"
  },
  {
    "url": "passages/2019-06-23-list-first-same-node/index.html",
    "revision": "564f56374ca6352b9ec4c87653db0a08"
  },
  {
    "url": "passages/2019-06-23-list-last-kth-node/index.html",
    "revision": "e3a8dd5f87dd4a856b8998ff5bd34397"
  },
  {
    "url": "passages/2019-06-23-list-merge/index.html",
    "revision": "d578fe80aa8a2ee38f6df1bf4354df84"
  },
  {
    "url": "passages/2019-06-23-list-print/index.html",
    "revision": "7227a3ecf0f22882a618962dd62ad855"
  },
  {
    "url": "passages/2019-06-23-list-reverse/index.html",
    "revision": "f3684c376fe199699c2a74b1d79c6bf1"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-and-number-is-s/index.html",
    "revision": "b3ab869318379be753f088f4cf34647e"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-fibonacci/index.html",
    "revision": "8242598cf89c22733a9b78ecebfea592"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-from-one-to-one/index.html",
    "revision": "f1e864d0b954c1f1051fcb42356e5329"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-joseph-ring/index.html",
    "revision": "6cd4b45d89f3c445e26220b8cc228dbf"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-min-kth/index.html",
    "revision": "bb08a42fbd7f6f70095cde987610c8bb"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-n-probability/index.html",
    "revision": "e422364103c5625d062d74cdf6a9e2dc"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-playing-cards/index.html",
    "revision": "15ace447896c2839e7bca4369bb2ac24"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-pow/index.html",
    "revision": "f2c314a6184591c6d88e3379e193a3e5"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-print-matrix/index.html",
    "revision": "60c890f284c106033e9cf0c121e02814"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-s-sequence/index.html",
    "revision": "1c309d21cea119610fa638a42d954583"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-times-more-than-half/index.html",
    "revision": "414409b28cc8057ba2000d1cb1a70ba2"
  },
  {
    "url": "passages/2019-06-23-stack-queue-exchange/index.html",
    "revision": "18f5a0db5f5072d9d20c84f8faee04de"
  },
  {
    "url": "passages/2019-06-23-stack-queue-min-stack/index.html",
    "revision": "14202d69bb9b646daf1613431c226706"
  },
  {
    "url": "passages/2019-06-23-stack-queue-push-pop-order/index.html",
    "revision": "4ee89537a2de47395bb887f67f5f08e4"
  },
  {
    "url": "passages/2019-06-23-str-atoi/index.html",
    "revision": "9f02f15fa38fb0a645841a42d2afb557"
  },
  {
    "url": "passages/2019-06-23-str-perm/index.html",
    "revision": "1457be9712a62e6e15f9fda20088119d"
  },
  {
    "url": "passages/2019-06-23-str-replace-empty/index.html",
    "revision": "3dd8733633fcc57930e5aaae987c8a90"
  },
  {
    "url": "passages/2019-06-23-str-reverse-sentence/index.html",
    "revision": "ccc93572544f8c7cd471b8427876eb37"
  },
  {
    "url": "passages/2019-06-23-tree-convert-to-list/index.html",
    "revision": "b091afddfa473ad5197994abaae5476b"
  },
  {
    "url": "passages/2019-06-23-tree-is-balance/index.html",
    "revision": "b3bd9b1d9c6051e76b7dd359212ee5dc"
  },
  {
    "url": "passages/2019-06-23-tree-level-travel/index.html",
    "revision": "01b7a16056ebd3c7cd8af4f1075c69d3"
  },
  {
    "url": "passages/2019-06-23-tree-mirror/index.html",
    "revision": "c54e33908206ae73ad0c3e8749048160"
  },
  {
    "url": "passages/2019-06-23-tree-path-with-number/index.html",
    "revision": "df0a67309ccdce1918f898cdab77a225"
  },
  {
    "url": "passages/2019-06-23-tree-rebuild/index.html",
    "revision": "b4f4c2eeb7dc02cb8ad88f6efde30ce9"
  },
  {
    "url": "passages/2019-06-23-tree-subtree/index.html",
    "revision": "fb994c0b9b1f67b83286d41f38e98e75"
  },
  {
    "url": "passages/2019-06-23-tree-tail-order/index.html",
    "revision": "1ec4569dd320b4467132fef07f7da903"
  },
  {
    "url": "passages/2019-07-15-file-api/index.html",
    "revision": "108941bdd0af5b6c26b75a90953ae7d5"
  },
  {
    "url": "passages/2019-07-16-font-animation/index.html",
    "revision": "baff129846c7aa83dd58359b70f1512e"
  },
  {
    "url": "passages/2019-07-22-input-animation/index.html",
    "revision": "e14c32bd6fa22ff00b5ee9ab4cda9adf"
  },
  {
    "url": "passages/2019-07-24-button-animation/index.html",
    "revision": "fbc334bc30bd10308540f0991e546993"
  },
  {
    "url": "passages/2019-07-25-loader-animation-first/index.html",
    "revision": "563a1a23f71939528c53831ffa21a9d8"
  },
  {
    "url": "passages/2019-07-26-loader-animation-second/index.html",
    "revision": "98be32686497ef7547ea2c06a55ac8a2"
  },
  {
    "url": "passages/2019-08-14-game-gomoku/index.html",
    "revision": "184c297be087eaa854abe3efec47bda1"
  },
  {
    "url": "passages/2019-08-27-koa-meet-typescript/index.html",
    "revision": "8b71df0a47e45d9970f595b440b697a6"
  },
  {
    "url": "passages/2019-08-27-typescript-notes/index.html",
    "revision": "3f7b2a349c6cb55bb970dc9ed1cbff2e"
  },
  {
    "url": "passages/2019-08-31-chain-of-responsibility-patterns/index.html",
    "revision": "3f4b750757153aec7a23fce4e53dfd88"
  },
  {
    "url": "passages/2019-08-31-design-patterns/index.html",
    "revision": "e47a90d54cd0e489beae159c25df49cd"
  },
  {
    "url": "passages/2019-08-31-state-patterns/index.html",
    "revision": "d838d8741c481635dd77238c1196f8ce"
  },
  {
    "url": "passages/2019-09-18-typescript-sharing/index.html",
    "revision": "73e8892c6b90abb9ef1e1868b858a0a1"
  },
  {
    "url": "passages/2019-09-18-weekly-sharing/index.html",
    "revision": "24da60a6d9f9348fbda25f44bfb0f0ba"
  },
  {
    "url": "together/index.html",
    "revision": "b103ee7cf51f2d2b612c93d11b92cc2a"
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
