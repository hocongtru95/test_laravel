(function (c, b) {
    var a = document.createElement("script");
    a.src = c;
    null !== b && (a.readyState ? a.onreadystatechange = function () {
        if ("loaded" == a.readyState || "complete" == a.readyState) a.onreadystatechange = null, b()
    } : a.onload = function () {
        b()
    });
    document.getElementsByTagName("head")[0].appendChild(a)
})("https://logging.niwzi.com/cdn/js/logging.min.js?v=1.0.2", function () {
    (new SOS_Logging({
        "id": 512,
        "name": "verfaillie"
    }, 1, "B99B9531-7F5B-4810-BF40-11D62E5F6C8D")).push("views", {
        "prod_id": "165968",
        "prod_name": "WAW32592FG Bosch",
        "path": "index.php?route=product\/product&product_id=165968",
        "price": "742.9752",
        "merk_id": "2651",
        "merk_name": "Bosch",
        "category": [{"id": "1000194", "name": "Was &amp; Droog"}, {
            "id": "1000203",
            "name": "Huishouden &amp; verzorging"
        }, {"id": "98", "name": "Wasmachine"}]
    });
});
