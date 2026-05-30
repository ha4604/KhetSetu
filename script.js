function cropAdded(){
    alert("Crop Added Successfully");
}

function orderPlaced(){
    alert("Order Placed Successfully");
}

function searchProducts(){

    let input = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

    let cards = document
    .getElementsByClassName("product-card");

    for(let i = 0; i < cards.length; i++){

        let productName = cards[i]
        .getElementsByTagName("h2")[0]
        .innerText
        .toLowerCase();

        if(productName.includes(input)){
            cards[i].style.display = "block";
        }

        else{
            cards[i].style.display = "none";
        }

    }

}