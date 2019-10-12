import $ from 'jquery';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
window.html2canvas = html2canvas;



$(document).ready(function () {
    $('.btn-download').click(function () {
            var HTML_Width = $(".pageCvo").width();
            var HTML_Height = $(".pageCvo").height();
            var top_left_margin = 0;
            var PDF_Width = HTML_Width+(top_left_margin*2);
            var PDF_Height = (PDF_Width)+(top_left_margin*2);
            var canvas_image_width = HTML_Width;
            var canvas_image_height = HTML_Height;

            console.log($(".pageCvo"));

            html2canvas($(".pageCvo")[0], {}).then(function(canvas) {
                // canvas.getContext('2d');
                 console.log(canvas.height+"  "+canvas.width+" "+PDF_Height);
                // var imgData = canvas.toDataURL("image/png", 1.0);
                //
                // pdf.addImage(imgData, 'PNG', top_left_margin, top_left_margin);
                // pdf.save("abc.pdf");

                var imgData = canvas.toDataURL('image/jpeg', 1.0);
                console.log('Report Image URL: '+ imgData);
                var doc = new jsPDF({
                    orientation: 'landscape',
                    unit: 'px',
                    format: [1115, 640]
                }); //210mm wide and 297mm high
                //var doc = new jsPDF('p', 'pt', 'a4', true);
                doc.addImage(imgData, 'jpeg', 10, -30);
                doc.save('sample.pdf');
            });

    });
});


