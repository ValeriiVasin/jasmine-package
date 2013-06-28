About
=====
Jasmine-package is a tiny project that helps you to include [jasmine](http://pivotal.github.io/jasmine) using one line of code.

*Jasmine version: 1.3.1 revision 1354556913.*

Links
=====
Source codes:
```
http://valeriivasin.com/projects/jasmine-package/build/jasmine-package.js
http://valeriivasin.com/projects/jasmine-package/build/jasmine-package.min.js
```
Live Demo snippets:
* [JS Bin](http://jsbin.com/ipafox/1/edit)
* [JS Fiddle](http://jsfiddle.net/InviS/LZ2RE)
* [Plunker](http://plnkr.co/edit/aRoi9DNGOxopuq3X9LEk?p=preview)

How does it work
================
All Jasmine sources including CSS, JavaScript core and HTMLReporter are compiled into a single JavaScript file. And all that you need to start testing - just include it.

Basic functionality
===================

```html
<script src='jasmine-package.js'></script>
<script>
    describe('Basic suite example', function () {
        it('should be awesome', function () {
            expect('Jasmine is awesome.')
                .toBe('Jasmine is awesome.');
        });
    });
</script>
```

Async mode
==========
If some of your test suites are loading asyncronously (for example, using [RequireJS](http://requirejs.org)), you should turn async mode on using `data-async` attribute. When all async stuff will be done you should invoke global function `jasmineAsyncDone` to start jasmine suites execution.

```html
<script data-async src='jasmine-package.js'></script>
<script>
    setTimeout(function () {
        describe('Async suite example', function () {
            it('should be awesome', function () {
                expect('Jasmine is awesome.')
                    .toBe('Jasmine is awesome.');
            });
        });

        jasmineAsyncDone();
    }, 1000);
</script>
```

Jasmine-package has been tested in IE8+, Firefox 21, Chrome 27, Safari 6, Opera 12.15.

[Original idea and inspiration](https://github.com/searls/jasmine-all)
