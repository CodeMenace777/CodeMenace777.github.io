'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1da6c07cef8601036ee32a7414489242",
"assets/AssetManifest.bin.json": "88267173bb6133b2ec4ad1fde3263cd3",
"assets/AssetManifest.json": "ca585511c38db2929dcbf58de53bf5d5",
"assets/assets/images/anandraj/a1.jpg": "c9e06e0263b0e12d6c1fbdfcede8eaf6",
"assets/assets/images/anandraj/a10.jpg": "a4ce4dc218cf31b103a85e90dfb6a48f",
"assets/assets/images/anandraj/a11.jpg": "3ca7ad96dc2295992bc486d3e055aea5",
"assets/assets/images/anandraj/a12.jpg": "34d02719cd1d77df17888b11e80c7c8b",
"assets/assets/images/anandraj/a2.jpg": "983fe596a199b4f2333e26af23443519",
"assets/assets/images/anandraj/a3.jpg": "4776c428ce31151f68e55033668f35a5",
"assets/assets/images/anandraj/a4.jpg": "8c8e55433c373db1503a87d12dc54796",
"assets/assets/images/anandraj/a5.jpg": "27cc96292180443fef8592a3c9bd2eb8",
"assets/assets/images/anandraj/a6.jpg": "413d88e3c9098dd75e3a1c69df1157dc",
"assets/assets/images/anandraj/a7.jpg": "a2946c910b7b17e365a01686a7eb0bc8",
"assets/assets/images/anandraj/a8.jpg": "1846dd982456b81ba702732e5f11e62d",
"assets/assets/images/anandraj/a9.jpg": "0dac04a7a55b91878bbadee045327e19",
"assets/assets/images/bharosa/bharosa1.png": "bf847fe62323ac8de342121c2f37bf4e",
"assets/assets/images/bharosa/bharosa2.png": "98682560e479dd6d46659c03a742f053",
"assets/assets/images/bharosa/bharosa3.png": "a3e8763fc7ac6edbd98549eff4f708c9",
"assets/assets/images/bharosa/bharosa4.png": "d512586b9f4a5b98a651320f95c9cb09",
"assets/assets/images/bharosa/bharosa5.png": "5238d119edac519384e39429a1131c1e",
"assets/assets/images/bharosa/bharosa6.png": "c0cecb6ff2c3100034c27f37fa66a841",
"assets/assets/images/bharosa/bharosa7.png": "480d384f99ae09717840d83eec7ca7ba",
"assets/assets/images/chelsea_website/1.jpg": "6dd593c786ea7cec07347df3511ecdee",
"assets/assets/images/chelsea_website/2.jpg": "91dec68662643dde6959e244a1174b13",
"assets/assets/images/chelsea_website/3.jpg": "92a1088795836cf880dbb03d1f2ef335",
"assets/assets/images/chelsea_website/4.jpg": "3b77694df2001306c4a553c0b2322872",
"assets/assets/images/chelsea_website/5.jpg": "4b553176a96cf2833ea8400074edb7e5",
"assets/assets/images/chelsea_website/6.jpg": "e5d19090ee6d0ede37f865d058524960",
"assets/assets/images/chelsea_website/7.jpg": "2b9064bc724c99a51ac62fdfa4046656",
"assets/assets/images/chelsea_website/8.jpg": "de7c10327f5b532f19d737ffe5d7a7cd",
"assets/assets/images/flutter_logo.webp": "5bb1cd73c9378ff20191b4e9026edaef",
"assets/assets/images/portfolio/protfolio1.png": "ea5570d34cecd6eeb8a6aa058c18a622",
"assets/assets/images/portfolio/protfolio2.png": "84d18db6ec6a7be4371cb08196efeb8f",
"assets/assets/images/portfolio/protfolio3.png": "026117a6a2a04d174fc46ebd79f1a7dc",
"assets/assets/images/portfolio/protfolio4.png": "69149322bb6ecf4426595a6f0cc6c8f4",
"assets/assets/images/portfolio/protfolio5.png": "8aa57cd03daf2d3686314f16763de6a5",
"assets/assets/images/portfolio/protfolio6.png": "c5001343476ed349fa5c0f9257ed4f55",
"assets/assets/images/profile.jpg": "4d15c2f993a15881f0c9b95120ca657a",
"assets/assets/images/rocket.png": "a5dadb213795f2951284b69bdf69f92f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a7fa3704ade8eec372626f93dd837e3a",
"assets/NOTICES": "fcf94b829ee2ce269220b097be182e96",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "c9a3c9edf4997abb532605c09e7cec76",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e3d442f8eb92e49e67cb9a6ac4bda28a",
"/": "e3d442f8eb92e49e67cb9a6ac4bda28a",
"main.dart.js": "1ec7e5cff44a5aec38ac75e142b5f444",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
