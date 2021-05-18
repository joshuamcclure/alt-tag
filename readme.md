# img-alt: THE MISSING ELEMENT

Have you ever referred to alternative text as an "alt tag"? Technically, "alt" tags do not exist in hypertext markup language... UNTIL NOW.

## Usage
Include this script in your HTML `<head>` tag.

```html
<script src="index.js" defer></script>
```

Then, create a new HTML elememt like so...

```html
<img-alt for="image-id-selector">
    My alternative text goes here!
</img-alt>
```

Be sure you have provided a valid ID selector using the `for` attribute. Also, provide some great descriptive text that will adequately describe what is going on in the image.

---
This is a somewhat useless library since you can simply add your alternative text directly on the `<img/>` element. If you find it useful however, more power to you. Thanks for helping make the web slightly more accessible!