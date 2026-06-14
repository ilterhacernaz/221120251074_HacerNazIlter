// İletişim sayfasındaki formu seçiyoruz
document.getElementById('iletisimFormu').addEventListener('submit', function(event) {
    // Formun doğrudan gönderilmesini engelliyoruz
    event.preventDefault();
    
    // Kutulardaki yazıları alıyoruz
    var adSoyad = document.getElementById('adSoyad').value.trim();
    var mesaj = document.getElementById('mesaj').value.trim();
    
    // Eğer alanlar boşsa uyarı veriyoruz
    if (adSoyad === "" || mesaj === "") {
        alert("Lütfen tüm alanları doldurunuz!");
    } else {
        alert("Mesajınız başarıyla alındı! Teşekkür ederiz.");
        // Formu temizliyoruz
        document.getElementById('iletisimFormu').reset();
    }
});
