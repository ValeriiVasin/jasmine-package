About
-----

Jasmine package is a simpe project that allows you to include [jasmine](http://pivotal.github.io/jasmine/) as a simple line of code.

```html
    <script src="jasmine-package.js"></script>
```
After that you're able to include your own specs that will execute on document load:

```html
    <script>
        describe('My first suite', function () {
            it('should work', function () {
                expect(jasmine).toBeDefined();
            });
        });
    </script>
```

And that is all you should do to start test something.
