window.onload = function() {
    var gallery = document.querySelector(".gallery");
    var msnry = new Masonry(gallery, {
        itemSelector: '.image',
        columnWidth: '.image',
        gutter: 20, // 每張圖片之間的間距
        percentPosition: true
    });

    // 加載圖片後重新佈局
    msnry.layout();
}

window.addEventListener("resize", function() {
    var gallery = document.querySelector(".gallery");
    var msnry = new Masonry(gallery, {
        itemSelector: '.image',
        columnWidth: '.image',
        gutter: 20, // 每張圖片之間的間距
        percentPosition: true
    });

    msnry.layout();
});
