$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3, // عدد العناصر التي ستظهر في كل مرة
        loop: true, // يجعل الحركة دائرية
        autoplay: true, // تفعيل الحركة التلقائية
        autoplayTimeout: 2000, // زمن الانتقال بين الصور (بالملي ثانية)
        autoplayHoverPause: true, // إيقاف الحركة عند تمرير الفأرة
        responsive: {
            0: {
                items: 1 // في الشاشات الصغيرة
            },
            600: {
                items: 2 // في الشاشات المتوسطة
            },
            1000: {
                items: 3 // في الشاشات الكبيرة
            }
        }
    });
});
