ng-elgg
=======

[![Build Status](https://travis-ci.org/ewinslow/ng-elgg.png?branch=master)](https://travis-ci.org/ewinslow/ng-elgg)

An AngularJS-based implementation of [Elgg](http://elgg.org)'s UI with an offline-first and mobile-first philosophy.

Demo
----

http://ewinslow.github.io/ng-elgg/

Installation
------

```sh
npm install -g volo grunt-cli
git clone https://github.com/ewinslow/ng-elgg
cd ng-elgg
npm install
```

Looking forward to Elgg 2.0
------

Evan's advice on how we can make Elgg a 10x better development and end-user
experience than Elgg 1.x and any of our existing competitors else currently out
there:

 * Develop apps, not sites
 * Code for the future
 * Take advantage of modern tools
 * Embrace dependencies

These are radical changes I'm proposing, but I don't think they are
fundamentally unreasonable. They are guided by the following, very pragmatic,
values:

 * Performance
 * Security
 * Productivity

I want 2.0 to move Elgg forward leaps and bounds compared to the current
state of affairs and compared to other, similar projects (BuddyPress,
Drupal Commons, JomSocial, Boonex, SocialEngine, PHPFox, Idno, etc.). We have a
responsibility to bring something valuable to the table I think that's
only possible if we make radical, but reasonable, changes that do not carry
the baggage of legacy with us.

Let me expound on each bit of advice one at a time. Then I'll go over why I
think embracing this advice lends itself to the values outlined above.

### Develop apps, not sites
I want Elgg 2.0 to completely split frontend and backend development. Anything
that requires PHP logic (sending emails, DBAL, etc.) should be in a separate
git repo from the UI code. Frontend logic (JS), templates (HTML), and theme
(CSS) should be completely static and **not mingled with PHP at all**. This
allows them to ship straight from a webserver that's great at managing static
files.

In other words, the Elgg 2.0 UI should be hostable on GitHub pages.

To do this we need a paradigm shift in our thinking away from the traditional
model of shipping HTML documents to the user and toward a model of delivering
applications. These applications then request data from an API and render a UI
to the user.


### Code for the future
We should write code against the latest web standards and rely on tools and 
polyfills to plug in the gaps for old-browser compatibility. A prime example
of this is writing css prefixes manually. We should never do that again.
Instead, we should just write against a stable standard and rely on tooling to 
add whatever prefixes are necessary to support older browsers.

Working around browser compatibility issues should be considered out-of-scope
for the project. Any polyfills that we need to develop that don't yet exist
should be contributed to an existing project external project for whom these
issues are in scope.


### Take advantage of modern tools
We need to stop reinventing wheels and pawn off development effort to more
focused and well-funded communities.

Here is a list of tools that we are not using that could easily make us more
productive and help keep us on the cutting edge:

 - r.js -- The optimizer for RequireJS
 - grunt.js -- A JS-based build tool with a large community + many plugins
 - bower -- A package manager for front end components
 - composer -- The defacto PHP package manager


### Embrace dependencies
As long as we choose dependencies wisely and can remain in control of our API,
this can only result in a more modern framework that is easier to keep up to
date (because there's less code for us to maintain!):

 - PHP
   - Symfony
   - Zend
   - etc...
 - JS
   - AngularJS
   - momentjs
   - underscore
   - etc...
 - CSS
   - Bootstrap
   - Foundation
   - etc...

### Performance
The performance of a system is second in importance only to correctness. I'll
focus mainly on frontend performance here because (IMHO) that's where most of
the gains can be had for the least investment.

#### Startup latency
Client-rendered UI with aggressive caching (AppCache) must become the new normal
in order for us to keep up with user expectations. I'm shooting for a 10x
improvement in startup time. That means going from 3 seconds to 300ms. This
can't happen with our current model of full-page-refresh per action as the
standard.

Forcing all web client content to be static (i.e. not generated on the fly by
PHP templates) opens up the possibility of using AppCache to build an offline
experience on par with native mobile apps. Using AppCache in Elgg is impossible
now because we are delivering our HTML pages differently depending on who is
logged in/etc. Pushing the logic and templates to the client would allow us
eagerly ship all of this logic to the client and cache it there instead of
making the server do all that work.

There is a 0-latency startup time for web apps that have been AppCached. Like,
zero! This cannot be acheived with just HTTP caching because the index.html file
still needs to be fetched on refresh. Consider the implications of this
for apps which try to render quickly on first load by inlining their css/JS
content. Without AppCache, that content is uncacheable. With AppCache, it's
*still cacheable* even after a page refresh. Normally in SPA's you can get a lot
out of inlining content on the first page load because there is no full page
refresh after that (for the duration of the session), so you don't have to pay
that download tax for every navigation. However, if the user ever does a full
page refresh, you have to pay the download tax again because that inlined
content is not cached. With AppCache this isn't so. Even inlined content is
cached because all master files are served from cache and only update in the
background (think Chrome-style silent updates).

In the good old days, teams like Gmail came up with crazy hacks to download
scripts in comments or strings and then eval them only once necessary. This is
a really cool hack to shave a lot of parse time off the initial app load, but it
adds an insane amount of complexity both to your frontend code and requires
server cooperation. Instead, we can use AppCache to download javascript eagerly
without executing it. And with AMD managing dependencies, we can be sure that
only the minimum amount of javascript actually needed will be parsed and
evaluated. We actually have real browser support for this hack and nobody has
realized it because Jake Archibald destroyed AppCache's reputation with 
[his 2012 "A List Apart" article][1] on the subject. This is a travesty, and I
think we should fix it (or at least rely on a framework that fixes it -- this
goes back to the "embracing dependencies" comment I made before).

 [1]: http://alistapart.com/article/application-cache-is-a-douchebag

#### Backend performance
Moving all rendering to the UI means we can ditch Elgg's views system. It has
served us well for a long time but its time has come. Elgg views are often slow,
hard to cache, insecure, and don't do a good job of separating concerns.

It has also been suggested that starting up PHP just to serve static content
hampers performance significantly after a certain load. See the discussion at:
http://community.elgg.org/discussion/view/880800/elgg-optimizations-report

Finally, pushing all UI logic to the client gets you free CPU cycles. The user's
machine is the one doing the work to render the UI instead of the server doing
that. It's faster for them and cheaper for you. Everybody wins, what's not to
love?


### Security
Currently it is possible to do the right thing with Elgg concerning security.
We need to move past that and make it really hard to do the wrong thing.

Lots of people have asked for CDN support in the past wherein static content
could be served from a different domain for performance. I propose going the
opposite direction: keep the static content on your vanity domain
(www.example.org) and move the API server to a different domain
(api.example.org). This has some nice security benefits.

####  OAuth, OpenId, BrowserID (Authentication)
We can eliminate entire classes of authentication vulnerabilities by dropping
our reliance on cookies and pawning off auth management to someone else.

Authentication in Elgg 2.0 could happen ONLY via OAuth/OpenId/BrowserID. This
eliminates XSRF vulerabilities completely (!!!) and ensures we're set up to
interoperate with other clients (Android, iOS, third parties) in a
secure way (i.e. don't have to ask for passwords on the client).

If we can switch our default authentication to a standard like BrowserID,
Elgg sites by default won't be contributing to the yet-another-password problem,
which is a security issue (Elgg databases are surely less well-guarded than
Google or Facebook databases) in addition to a UX problem (users hate creating
new usernames and passwords and forget them all the time). Furthermore, when
Elgg is used in any existing community, there is typically already an identity
solution so getting Elgg and that provider to play well can be significant extra
work. If you did want your Elgg site to be an identity provider, that could
still be an option through a plugin or something, but the default should be an
auth-as-a-service model. At the end of the day, you just make your site one of
the services if you need to revert back to the legacy behavior of Elgg 1.x.

No more dealing with:
 * email verification
 * password resets
 * storing user passwords

Letting someone else do that hard work and integrating with them
in a standards-based and federated way (BrowserID), seems like
exactly the right way to go. If there any more identity bridges that need
building, we can just support the BrowserID project instead of
defaulting to building/maintaining our own thing.

#### Content-Security-Policy and strict contextual escaping (XSS)
With a ground-up rewrite of the frontend code, we're free to set up a strict
default CSP and only open up permissions as needed. That allows us to ban inline
scripts effectively eliminating XSS vulnerabilities for all browsers that
support the standard (Firefox, Chrome, Safari). Couple that with a great
security-conscious templating library (Angular with strict contextual escaping),
and we can have some a much higher confidence that XSS is behind us, rather than
hoping that any existing XSS vulnerability gets discovered and reported before
it gets exploited.


### Community
The Elgg community is enthusiastic, but rather small. The more stuff we try to
implement on our own, the thinner we'll be spread and the less we'll be able
to contribute to the things that actually make us unique. There are huge
communities out there solving a lot of the basic problems we're having and it
would simply be foolish not to depend on them. Elgg 2.0 should be less about
developing new features and more about pulling together all the latest best
practices for frontend development into one cohesive unit.

Take the developer tooling for example: great tools are out there these days for
managing (npm, bower), building (gruntjs) client-side apps that simply didn't
exist 2 or 3 years ago. Grunt seems to be the de-facto javascript task runner.
Bower is a great package manager built on npm. Composer does a perfectly fine
job of PHP package management. Do we really want to create our own packaging
system and plugin distribution system just for Elgg, or would we rather
interoperate with the rest of the ecosystem and take advantage of all the great
work that's going ithose efforts.

### Future
Furthermore, this split completely separates the frontend code from any
knowledge of how the backend is implemented. The fact that PHP is being used is
irrelevant and it could be easily replaced with Java, Ruby, Go, etc. This allows
the frontend code to stand on its own merits instead of standing or falling with
the PHP/MySQL choice.

#### Development/developer convenience
This also provides some development conveniences in that we don't need to hack
around existing tools to support the dual-environment setup that we have. For
example, Travis, the continuous testing service, only really supports one
execution environment at a time and we have had to come up with workarounds to
get our tests to run correctly and efficiently in the dual PHP/JS environment.

#### Server becomes client agnostic and vice-versa
Providing a server with a robust API means that we are not tied to
whatever client implementation we provide. If someone decides to reimplement the
client in Ember/Browserify instead of Angular/AMD, they are completely free to
do that without needing to give up on the server component. More likely is that
someone will want to implement a native iOS/Android app for their site, which we
would be able to wholeheartedly encourage since we would already have a
battle-tested API that they can draw from (and a standard way to contribute back
changes that they may have needed to make).

Finally, there are yet other app environments like Chrome packaged apps that
lend themselves to this kind of development model. With the current state of
affairs it would be non-trivial to create a Chrome packaged app for an
Elgg-based site. With the proposed model, creating such a thing should be a
fairly trivial matter of adding some extra build rules since all the assets are
already static and perhaps we just need to generate the manifest file or
whatever Chrome requires for a packaged app these days.

