var posts=["2023/08/28/wm/","2023/08/28/adobe/","2023/08/29/aecs6/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};