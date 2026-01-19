# ZC-Test-Case



## Başlamadan Önce

Repoyu indirdikten sonra 
```
npm install
npm run dev
```

yapmanız yeterlidir.

Aşağıda masaüstü ve mobil cihazlar için [Google PageSpeedInsights](https://pagespeed.web.dev/analysis/https-zc-test-case-vercel-app/tivmr7xjh6?form_factor=desktop) sonuçları bulunmaktadır.

## Masaüstü değerlendirme sonuçları
![Masaüstü değerlendirme sonuçları](https://github.com/FlyingTurkman/zc-test-case/blob/main/desktop.png "")
[Sonuç linki](https://pagespeed.web.dev/analysis/https-zc-test-case-vercel-app/tivmr7xjh6?form_factor=desktop)

## Mobil değerlendirme sonuçları
![Masaüstü değerlendirme sonuçları](https://github.com/FlyingTurkman/zc-test-case/blob/main/mobile.png "")
[Sonuç linki](https://pagespeed.web.dev/analysis/https-zc-test-case-vercel-app/tivmr7xjh6?form_factor=mobile)

## Değerlendirme yorumları
- Erişebilirlik kısmında 95 puan alınmasının sebebi bir butonun contrasının uygun olmamasıdır. Figma dosyasına sadık kalabilmek için renk paletini olduğu gibi kullandığımdan dolayı erişilebilirlik puanı 5 puan düşüktür. Yeşil butonun rengi biraz daha koyu bir ton seçilirse bu sorun ortadan kalkacaktır.
- Bazı iconların içerisindeki boşlukların yanlış hazırlanması sebebiyle elle konumlandırma yapmam gerekti bu yüzden bazı durumda icon pozisyonlarında hatalar olabilir ancak gerçek bir projede rahatlıkla halledebileceğim bir durum.
- Test case olduğu için 3. parti component veya hook kullanmadan hazırlamaya özen gösterdim o yüzden bazı bootstrap stillerini de kullanmayıp kendim hazırladım.
