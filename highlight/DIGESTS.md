## Subresource Integrity

If you are loading Highlight.js via CDN you may wish to use [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) to guarantee that you are using a legimitate build of the library.

To do this you simply need to add the `integrity` attribute for each JavaScript file you download via CDN. These digests are used by the browser to confirm the files downloaded have not been modified.

```html
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"
  integrity="sha384-9mu2JKpUImscOMmwjm1y6MA2YsW3amSoFNYwKeUHxaXYKQ1naywWmamEGMdviEen"></script>
<!-- including any other grammars you might need to load -->
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/go.min.js"
  integrity="sha384-WmGkHEmwSI19EhTfO1nrSk3RziUQKRWg3vO0Ur3VYZjWvJRdRnX4/scQg+S2w1fI"></script>
```

The full list of digests for every file can be found below.

### Digests

```
sha384-DA5ii4oN8R2fsamNkHOanSjuN4v7j5RIuheQqnxMQ4cFnfekeuhwu4IdNXiCf+UU /es/languages/css.js
sha384-OBugjfIr093hFCxTRdVfKH8Oe3yiBrS58bhyYYTUQJVobk6SUEjD7pnV8BPwsr8a /es/languages/css.min.js
sha384-WCznKe2n87QvV/L1MlXN+S8R6NPUQGU34+AqogMuWGZJswSD6rt3Mgih+xuKlDgm /es/languages/javascript.js
sha384-eGsBtetyKPDKaLiTnxTzhSzTFM6A/yjHBQIj4rAMVaLPKW5tJb8U6XLr/AikCPd+ /es/languages/javascript.min.js
sha384-+5oyk7Ed3OlvEWGj8xracq/6e52BScKUN4kxcreNwB7kfRTVsAMs/aAJM58dzIFN /es/languages/python.js
sha384-ND/UH2UkaeWiej5v/oJspfKDz9BGUaVpoDcz4cof0jaiv/mCigjvy7RQ7e+3S6bg /es/languages/python.min.js
sha384-z/hrHNlwMcvvjzudTkjlwSX/Udx/GbAKyhbvs7cjfYAS8l600ckGWLDqj/eM1peW /es/languages/vbscript-html.js
sha384-7rzHs2v9fu5E3xKT9BbxDXT4GNQvENpY8IWOVCKnwNvogY6AGwl92Ij/rt8Omiyq /es/languages/vbscript-html.min.js
sha384-OFoR8IZ+CFwcY8plx8HSDZNoCwLxc701CwdNGfoIEhSgwAbwhvInaxnEi3HYTt2Q /es/languages/xml.js
sha384-yFd3InBtG6WtAVgIl6iIdFKis8HmMC7GbbronB4lHJq3OLef3U8K9puak6MuVZqx /es/languages/xml.min.js
sha384-r9czyL17/ovexTOK33dRiTbHrtaMDzpUXW4iRpetdu1OhhckHXiFzpgZyni2t1PM /languages/css.js
sha384-HpHXnyEqHVbcY+nua3h7/ajfIrakWJxA3fmIZ9X9kbY45N6V+DPfMtfnLBeYEdCx /languages/css.min.js
sha384-vJxw3XlwaqOQr8IlRPVIBO6DMML5W978fR21/GRI5PAF7yYi2WstLYNG1lXk6j9u /languages/javascript.js
sha384-44q2s9jxk8W5N9gAB0yn7UYLi9E2oVw8eHyaTZLkDS3WuZM/AttkAiVj6JoZuGS4 /languages/javascript.min.js
sha384-zdZio5RcGiKQJCpe/1IXujPle3bIY8sbmvCabSU5G5GzWAzZtoRZfg9QAQXCL08q /languages/python.js
sha384-IP4vv4Aoh9Lyg8QyzVkAmn2JGoDCpgVHzVSrD3Z+rVyn7+s4wx4pRjv+go3TEwfj /languages/python.min.js
sha384-RpvvJQk66YBOljKOySvSU+gwYHonkGw4nWKedZumV6kEi48+GejKPAUHKUPlTkVE /languages/vbscript-html.js
sha384-Q2pUgWvb2tvXq+8kfdAdSGQFgjcgBh46AFq4OzvGQTDptWTry+4Y9erDzpdag6vi /languages/vbscript-html.min.js
sha384-+PuZYFfVX2UQZU2yKt/FsJUZNUPzZWxW7auXltsaecr1xLvzBYF3c5gYoyOs1++x /languages/xml.js
sha384-jgkY4GMNWfQcLLIoP1vg3FWXflDrRhcSXGBW6ONIWC2SOIv5H1Pa57sXs+aomCuZ /languages/xml.min.js
sha384-9jyg83FZCUgOeiT8zWcohFA/CKRy5HCzLlK0jH5wpl8AWJ7KJaO+IA7AAFuDt98l /highlight.js
sha384-nn6vqRraaHnwXpnHuSVcf3Cmm3tn1nCQ6Z2yQKycp01CoLFBBF3HJUJAzIRTrAkA /highlight.min.js
```

