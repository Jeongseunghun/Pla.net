import "../scss/styles.scss";
import html2canvas from "html2canvas";

const dlBtn = document.querySelector(".download-btn");

dlBtn.addEventListener("click", function () {
    const charecter = document.querySelectorAll(".active_base")
    const cap = document.querySelector("#cap");
    charecter.forEach(element => {
        const img = document.createElement("img");
        img.src = element.src;
        img.classList.add("capImg_hair");
        cap.appendChild(img);
    }); 
    cap.classList.add("result");
    html2canvas(cap).then(canvas => {
        saveAs(canvas);
    })
})

function saveAs(canvas) {
    var imgDataUrl = canvas.toDataURL("image/png");
    var blobBin = atob(imgDataUrl.split(',')[1]);	// base64 데이터 디코딩
    var array = [];
    for (var i = 0; i < blobBin.length; i++) {
        array.push(blobBin.charCodeAt(i));
    }
    var file = new Blob([new Uint8Array(array)], { type: 'image/png' });	// Blob 생성
    var formdata = new FormData();	// formData 생성
    formdata.append("file", file);

    var name = $('input[name=characterName]').val();

    $.ajax({
        type: "POST",
        url: "/custom",
        data: formdata,
        dataType:"JSON",
        processData: false,
        contentType: false,
    });

    $.ajax({
        type: "POST",
        url: "/custom",
        data: {"name": name},
        dataType:"JSON",
    })
}
