webpackJsonp([0,3],{356:function(n,t){function e(n){throw new Error("Cannot find module '"+n+"'.")}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id=356},357:function(n,t,e){"use strict";var o=e(467),i=(e.n(o),e(444)),r=e(0),a=e(466),c=e(465);a.a.production&&e.i(r._37)(),e.i(i.a)().bootstrapModule(c.a)},464:function(n,t,e){"use strict";var o=e(0),i=e(349);e.d(t,"a",function(){return c});var r=this&&this.__decorate||function(n,t,e,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,e,o);else for(var c=n.length-1;c>=0;c--)(i=n[c])&&(a=(r<3?i(a):r>3?i(t,e,a):i(t,e))||a);return r>3&&a&&Object.defineProperty(t,e,a),a},a=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)},c=function(){function n(n){this.fb=n,console.log("Initializing Facebook"),n.init({appId:"1927971220769787",version:"v2.8"})}return n.prototype.login=function(){this.fb.login().then(function(n){console.log("Logged in",n)}).catch(this.handleError)},n.prototype.loginWithOptions=function(){var n={enable_profile_selector:!0,return_scopes:!0,scope:"public_profile,user_friends,email,pages_show_list"};this.fb.login(n).then(function(n){console.log("Logged in",n)}).catch(this.handleError)},n.prototype.getLoginStatus=function(){this.fb.getLoginStatus().then(console.log.bind(console)).catch(console.error.bind(console))},n.prototype.getProfile=function(){this.fb.api("/me").then(function(n){console.log("Got the users profile",n)}).catch(this.handleError)},n.prototype.getFriends=function(){this.fb.api("/me/friends").then(function(n){console.log("Got the users friends",n)}).catch(this.handleError)},n.prototype.share=function(){var n={method:"share",href:"https://github.com/zyramedia/ng2-facebook-sdk"};this.fb.ui(n).then(function(n){console.log("Got the users profile",n)}).catch(this.handleError)},n.prototype.playVideo=function(){this.video.play()},n.prototype.onVideoEvent=function(n){console.log("Video event fired: "+n)},n.prototype.pauseVideo=function(){this.video.pause()},n.prototype.handleError=function(n){console.error("Error processing action",n)},r([e.i(o._1)(i.a),a("design:type","function"==typeof(t="undefined"!=typeof i.a&&i.a)&&t||Object)],n.prototype,"video",void 0),n=r([e.i(o.G)({selector:"app-root",template:e(621),styles:[".container { max-width: 700px; background: #f7f7f7; margin: 50px auto; padding: 30px; border-radius: 15px; }","h2 { margin-bottom: 20px; }","h4 { margin-top: 40px; margin-bottom: 10px; }"]}),a("design:paramtypes",["function"==typeof(c="undefined"!=typeof i.b&&i.b)&&c||Object])],n);var t,c}()},465:function(n,t,e){"use strict";var o=e(192),i=e(0),r=e(434),a=e(440),c=e(464),s=e(349);e.d(t,"a",function(){return h});var f=this&&this.__decorate||function(n,t,e,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,e,o);else for(var c=n.length-1;c>=0;c--)(i=n[c])&&(a=(r<3?i(a):r>3?i(t,e,a):i(t,e))||a);return r>3&&a&&Object.defineProperty(t,e,a),a},b=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)},h=function(){function n(){}return n=f([e.i(i.I)({declarations:[c.a],imports:[o.b,r.a,a.a,s.c.forRoot()],bootstrap:[c.a]}),b("design:paramtypes",[])],n)}()},466:function(n,t,e){"use strict";e.d(t,"a",function(){return o});var o={production:!0}},467:function(n,t,e){"use strict";var o=e(481),i=(e.n(o),e(474)),r=(e.n(i),e(470)),a=(e.n(r),e(476)),c=(e.n(a),e(475)),s=(e.n(c),e(473)),f=(e.n(s),e(472)),b=(e.n(f),e(480)),h=(e.n(b),e(469)),p=(e.n(h),e(468)),l=(e.n(p),e(478)),u=(e.n(l),e(471)),d=(e.n(u),e(479)),g=(e.n(d),e(477)),m=(e.n(g),e(482)),y=(e.n(m),e(632));e.n(y)},621:function(n,t){n.exports='<div class="container">\n\n  <h1>\n    Ng2-Facebook-SDK Example\n  </h1>\n\n  <p>\n    This is a basic example on how to use the ng2-facebook-sdk package. Please check your console for responses. There will be no visual feedback here.\n  </p>\n\n</div>\n\n<div class="container">\n\n  <h2>Facebook Service</h2>\n\n  <button (click)="login()" class="btn btn-lg btn-primary btn-block">\n    Login\n  </button>\n\n  <button (click)="loginWithOptions()" class="btn btn-lg btn-primary btn-block">\n    Login with Options\n  </button>\n\n  <button class="btn btn-lg btn-primary btn-block" (click)="getLoginStatus()">\n    Get login status\n  </button>\n\n  <button (click)="getProfile()" class="btn btn-lg btn-primary btn-block">\n    Get profile\n  </button>\n\n  <button (click)="getFriends()" class="btn btn-lg btn-primary btn-block">\n    Get friends\n  </button>\n\n  <button (click)="share()" class="btn btn-lg btn-primary btn-block">\n    Share dialog\n  </button>\n\n</div>\n\n<div class="container">\n  <h2>Components</h2>\n\n  <h4>fb-like</h4>\n  <fb-like href="https://zyramedia.com"></fb-like>\n\n  <h4>fb-follow</h4>\n  <fb-follow href="https://www.facebook.com/zuck"></fb-follow>\n\n  <h4>fb-page</h4>\n  <fb-page href="https://facebook.com/zyramedia"></fb-page>\n\n  <h4>fb-quote</h4>\n  <fb-quote href="https://github.com/zyramedia/ng2-facebook-sdk"></fb-quote>\n  <p>Highlight any text on this page and see what happens.</p>\n\n  <h4>fb-save</h4>\n  <fb-save uri="https://github.com/zyramedia/ng2-facebook-sdk/"></fb-save>\n\n  <h4>fb-send</h4>\n  <fb-send href="https://github.com/zyramedia/ng2-facebook-sdk/"></fb-send>\n\n  <h4>fb-share</h4>\n  <fb-share href="https://github.com/zyramedia/ng2-facebook-sdk/"></fb-share>\n\n  <h4>fb-video</h4>\n  <fb-video href="https://www.facebook.com/SpaceX/videos/10157486010400131/"\n            (startPlaying)="onVideoEvent(\'startedPlaying\')"\n            (paused)="onVideoEvent(\'paused\')"\n            (finishedPlaying)="onVideoEvent(\'finishedPlaying\')"\n            (startedBuffering)="onVideoEvent(\'startedBuffering\')"\n            (finishedBuffering)="onVideoEvent(\'finishedBuffering\')"\n            (error)="onVideoEvent(\'error\')"\n  ></fb-video>\n  <br>\n  <button class="btn btn-primary" (click)="playVideo()">Play</button>\n  <button class="btn btn-primary" (click)="pauseVideo()">Pause</button>\n\n  <h4>fb-comments</h4>\n  <fb-comments numposts="3"></fb-comments>\n\n  <h4>fb-comment-embed</h4>\n  <fb-comment-embed href="https://www.facebook.com/zuck/posts/10102735452532991?comment_id=1070233703036185" width="500"></fb-comment-embed>\n\n  <h4>fb-post</h4>\n  <fb-post href="https://www.facebook.com/20531316728/posts/10154009990506729/"></fb-post>\n\n\n</div>\n'},633:function(n,t,e){n.exports=e(357)}},[633]);
//# sourceMappingURL=main.0659ad53a6b749006cf5.bundle.map