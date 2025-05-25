'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "17a1e2acfaa00009751283e70b95629c",
"assets/AssetManifest.bin.json": "bcb7e6c0c5977e64add73aa88e145a3f",
"assets/AssetManifest.json": "7f6df2a0126075ddb426f45f1d87b6b0",
"assets/assets/images/anandraj/a1.jpg": "ef724f5f215da3b44fa0c5ca6acdf9e3",
"assets/assets/images/anandraj/a10.jpg": "2007c0adca31164671651730a3e42664",
"assets/assets/images/anandraj/a11.jpg": "fbc11d48e13012522a30ca4e3f1430be",
"assets/assets/images/anandraj/a12.jpg": "377bc49d97390fe47a0ab9519c724112",
"assets/assets/images/anandraj/a2.jpg": "8d46173e98d1113983855207c60e6cf6",
"assets/assets/images/anandraj/a3.jpg": "391bb7ed64592b8ea57a08910fbfe003",
"assets/assets/images/anandraj/a4.jpg": "14e9595e60b19f9eb5424e30cb4485ff",
"assets/assets/images/anandraj/a5.jpg": "10c80dd4d6958d8e1d41b1a0e00c9531",
"assets/assets/images/anandraj/a6.jpg": "b2beddf2866d29cac0cd90234d45131e",
"assets/assets/images/anandraj/a7.jpg": "383df1c2e28620dd5740e844817c36a9",
"assets/assets/images/anandraj/a8.jpg": "05750e2de2816446fd813044df8cddb9",
"assets/assets/images/anandraj/a9.jpg": "70fafa0c08c7172ae351d432f01e1268",
"assets/assets/images/bharosa/bharosa1.png": "5f2c739d0e8964c183964d8b5ae95100",
"assets/assets/images/bharosa/bharosa2.png": "91173f7ecfabe1aa2c5a2fd5cd8e8edb",
"assets/assets/images/bharosa/bharosa3.png": "164f223fc05c61f0bd946c54323c6a63",
"assets/assets/images/bharosa/bharosa4.png": "9f55b51975ebefafdc9d0648821f9251",
"assets/assets/images/bharosa/bharosa5.png": "f801bd8bbf06603f3d36212ab3cf895d",
"assets/assets/images/bharosa/bharosa6.png": "1eb9fdef4ccc93d0a546e20a546081aa",
"assets/assets/images/bharosa/bharosa7.png": "05ee53ff2be43a2640b8158eede4f638",
"assets/assets/images/chelsea_website/1.jpg": "92fc4d7e679eceaf572795b8bf1e0166",
"assets/assets/images/chelsea_website/2.jpg": "4fac449be94a28aef799bd4807dbcebf",
"assets/assets/images/chelsea_website/3.jpg": "b3e9ad5ec640f2c99ea247a177374261",
"assets/assets/images/chelsea_website/4.jpg": "cf8abc5388d221410472c48351253e8c",
"assets/assets/images/chelsea_website/5.jpg": "69ad7377a431c805e6a673e61548bbe2",
"assets/assets/images/chelsea_website/6.jpg": "351071ae16ebcfe41f220ba0757a32ab",
"assets/assets/images/chelsea_website/7.jpg": "305e1acfa13e459b93ce90d1613b2544",
"assets/assets/images/chelsea_website/8.jpg": "de3e2175b904a82f625f1e61e6a0b7d9",
"assets/assets/images/flutter_logo.webp": "5bb1cd73c9378ff20191b4e9026edaef",
"assets/assets/images/profile.jpg": "4d15c2f993a15881f0c9b95120ca657a",
"assets/assets/images/rocket.png": "a5dadb213795f2951284b69bdf69f92f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a7fa3704ade8eec372626f93dd837e3a",
"assets/NOTICES": "dc937d75a3c58b75a6acacd0bc5c8a79",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "be9d87694e22d8cc75711009684305f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e3d442f8eb92e49e67cb9a6ac4bda28a",
"/": "e3d442f8eb92e49e67cb9a6ac4bda28a",
"main.dart.js": "b4b3f876a948f224bde1195ace55355d",
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
