# Öğrenci Bilgilerini Listeleme Projesi

## Proje Amacı
Bu proje, JavaScript'te nesne yapısını ve diziler üzerinde `forEach` döngüsünü kullanarak öğrenci bilgilerini listelemeyi amaçlamaktadır. Projede her öğrencinin bilgilerini içeren nesnelerden oluşan bir dizi oluşturulacak ve bu bilgiler `forEach` döngüsü ile ekrana yazdırılacaktır.

## Proje Detayları

### Kullanılan Yapılar ve Anahtar Kelimeler
- **Dizi (Array)**: Öğrenci bilgilerini bir arada tutmak için kullanılır.
- **Nesne (Object)**: Her öğrencinin bilgilerini (isim, yaş, sınıf) içeren yapıdır.
- **forEach Döngüsü**: Dizi elemanlarını teker teker işleyerek her bir öğrencinin bilgisini ekrana yazdırmak için kullanılır.

### Değişkenler
- `ogrenciler`: Öğrencilerin bilgilerini tutan dizi. Her elemanı, `isim`, `yas`, ve `sinif` anahtarlarını içeren bir nesne olacaktır.

### Proje Adımları

1. **Öğrenci Dizisini Oluşturma**:
   - Bir `ogrenciler` dizisi tanımlayın.
   - Her elemanında `isim`, `yas`, ve `sinif` anahtarlarını içeren nesneler tanımlayın.
   - Örneğin:
     ```javascript
     const ogrenciler = [
       { isim: "Ali", yas: 15, sinif: "9. sınıf" },
       { isim: "Ayşe", yas: 16, sinif: "10. sınıf" },
       { isim: "Mehmet", yas: 17, sinif: "11. sınıf" }
     ];
     ```

2. **forEach Döngüsü ile Öğrenci Bilgilerini Yazdırma**:
   - `ogrenciler` dizisini `forEach` döngüsü ile dolaşın.
   - Her öğrencinin bilgilerini `console.log` kullanarak ekrana yazdırın.
   - Örneğin:
     ```javascript
     ogrenciler.forEach(ogrenci => {
       console.log(`İsim: ${ogrenci.isim}, Yaş: ${ogrenci.yas}, Sınıf: ${ogrenci.sinif}`);
     });
     ```

## Örnek Çıktı
