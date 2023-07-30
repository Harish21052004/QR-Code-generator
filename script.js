let image_block = document.getElementById("image-block");
let input_value = document.getElementById("input-value");
let qr_img = document.getElementById("qr-img");

const hideImage = () =>{
    image_block.style.display = "none";
}
const showImage = () =>{
    if(input_value.value === "")
    {
        alert("Input field is empty!...");
    }

    else{
        qr_img.setAttribute("src",`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input_value.value}`);
        image_block.style.display = "flex";
    }
}
