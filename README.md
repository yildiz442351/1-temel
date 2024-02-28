# State Yönetimi

- State: Uygulamadaki bileşenlerimizin sahip olduğu bilgi ve özelliklerdir.

- Prop Drilling: Bileşenlerin tularından aşağıya veri taşması

- Context API: Uygulamadaki state'i , oluşturduğumuz merkezlereden yönettiğimiz
  state yönetim aracı.

- Redux: Bileşenlerin sahip olduğu ve merkezi olarak tutulması gereken
  state'lerin yönetildiği merkezi state yönetim aracı

# Neden Redux

- Kod Tekrarını önler
- Performansı arttırır
- Bileşen içerisindeki karışıklığı azaltır
- Hata ayıklama daha kolaydır.
- Orta ve büyük ölçekli projeler de state'i yönetimi daha kolay hale getirir.

# Redux ile ilgili bilinmesi gerekenler

1. Store: Uygulamanın bütün bileşenleri tarafından erişilebilen ve
   yönetilebilen state deposudur

2. Reducer: Aksiyondan aldığı talimata göre store'da tutulan state'in nasıl
   değişeceğine karar veren fonksiyon

3. Action: Store'daki state'i güncellemek için reducer'a gönderdiğimiz emir/
   haber.

- - Action iki değere sahip bir objedir.
- - type: Action'un görevini tanımlayan string ("TODO_EKLE")
- - payload: gönderilen eylemin verisi

4. Dispatch (sevketmek): Action gerçekleştiğini reducer'a haber veren method.

5. Subscribe (Abone olma): Bileşenlerin store'da tutulan verilere erişimini sağlama
   (useContext, useSelector)

   6. Provider (Sağlayıcı): Store'da tutulan verileri uygulamayı sağlar

# Gerçek Hayattan Örnek

1. Store: Okul binası.

2. Reducer: Okulun yöneti mekibi (Müdür, Müdür Yardımcısı.)

3. Action: Öğrencinin sınavı geçmesi / YEni kayıt yapması /Okuldan atılması

4. Dispatch (sevketmek): Sekreter / Nöbetçi öğrenci / Öğretmen. Sınıf Annesi. Olayları bildirir. 

5. Subscribe (Abone olma): E-okul. veriler erişim sağlar.

   6. Provider (Sağlayıcı): Okuldaki organizasyon veya hizmet sağlayıcı.

   # Redux Kurulum Aşamaları:

   - `redux` `react-redux` paketlerini indir 
   - reducer/reducer'ların kurulurumunu yap
   - Storue'un kurulumunu yap
   - Store'u projeye tanıt# 1-temel
