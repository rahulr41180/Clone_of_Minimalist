
let data=JSON.parse(localStorage.getItem("MinimalistProductData"));
let arr=[];
arr.push(data);
console.log(data);
function image(data1){
    data1.map(function(el){
    let img=document.createElement("img");
    img.src=el.Image.Image1;
    document.getElementById("Image").append(img);

    let alert=document.createElement("p");
    alert.innerHTML=el.Alert;
    document.getElementById("Alert").append(alert);

    let heading=document.createElement("h3");
    heading.innerHTML=el.ChemicalUnit;
    document.getElementById("ChemicalUnit").append(heading);
    
    document.getElementById("pageName").append(el.ChemicalUnit);

    let chemp=document.createElement("p");
    chemp.innerHTML=el.ChemicalComposition;
    document.getElementById("ChemicalComposition").append(chemp);

    let review=document.createElement("p");
    review.innerHTML=el.Reviews;
    document.getElementById("review").append(review);

    let sp=document.createElement("p");
    sp.innerHTML=el.Price;
    document.getElementById("selling_price").append(sp);

    let mrp=document.createElement("p");
    mrp.innerHTML=el.StrickPrice;
    document.getElementById("mrp").append(mrp);

    for(let i=1;i<el.WhatItIs.lenght;i++){
        let ul=document.createElement("ul");
        let list=document.createElement("li");
        list.innerHTML=el.WhatItIs.WhyitIsAwesome1;
        ul.append(list);
        document.getElementById("WhyitIsAwesome").append(ul);
    }
    let key=document.createElement("p");
    key.innerHTML=el.Keyhighlights.Heading;
    document.getElementById("Keyhighlights").append(key);

    let key_data1=document.createElement("p");
    key_data1.innerHTML=el.Keyhighlights.Keyhighlights1;
    document.getElementById("Keyhighlights1").append(key_data1);

    let key_data2=document.createElement("p");
    key_data2.innerHTML=el.Keyhighlights.Keyhighlights2;
    document.getElementById("Keyhighlights2").append(key_data2);

    let key_data3=document.createElement("p");
    key_data3.innerHTML=el.Keyhighlights.Keyhighlights3;
    document.getElementById("Keyhighlights3").append(key_data3);

    let key_data4=document.createElement("p");
    key_data4.innerHTML=el.Keyhighlights.Keyhighlights4;
    document.getElementById("Keyhighlights4").append(key_data4);

    let key_data5=document.createElement("p");
    key_data5.innerHTML=el.Keyhighlights.Keyhighlights5;
    document.getElementById("Keyhighlights5").append(key_data5);

    let key_data6=document.createElement("p");
    key_data6.innerHTML=el.Keyhighlights.Keyhighlights6;
    document.getElementById("Keyhighlights6").append(key_data6);

    let p=document.createElement("p");
    p.innerHTML=el.Consumertestingresults.Consumertestingresults1;
    document.getElementById("Consumertestingresults_data").append(p);

    let science2=document.createElement("p");
    science2.innerHTML=el.Sciencebehindthisproduct.Sciencebehindthisproduct2;
    document.getElementById("Sciencebehindthisproduct2").append(science2);

    let science1=document.createElement("p");
    science1.innerHTML=el.Sciencebehindthisproduct.Sciencebehindthisproduct1;
    document.getElementById("Sciencebehindthisproduct1").append(science1);

    let science3=document.createElement("p");
    science3.innerHTML=el.Sciencebehindthisproduct.Sciencebehindthisproduct3;
    document.getElementById("Sciencebehindthisproduct3").append(science3);

    let science4=document.createElement("p");
    science4.innerHTML=el.Sciencebehindthisproduct.Sciencebehindthisproduct4;
    document.getElementById("Sciencebehindthisproduct4").append(science4);

    let science5=document.createElement("p");
    science5.innerHTML=el.Sciencebehindthisproduct.Sciencebehindthisproduct5;
    document.getElementById("Sciencebehindthisproduct5").append(science5);

    let div_image=document.createElement("div");
    let img3=document.createElement("img");
    img3.src=el.Image.Image3;
    div_image.append(img3);
    document.getElementById("image_details").append(div_image);

    let how_li1=document.createElement("li");
    how_li1.innerHTML=el.Howtouse.Howtouse1;
    let how_li2=document.createElement("li");
    how_li2.innerHTML=el.Howtouse.Howtouse2;
    let how_li3=document.createElement("li");
    how_li3.innerHTML=el.Howtouse.Howtouse3;
    let how_li4=document.createElement("li");
    how_li4.innerHTML=el.Howtouse.Howtouse4;
    document.getElementById("howToUse_data").append(how_li1,how_li2,how_li3,how_li4);

    let ing=document.createElement("p");
    ing.innerHTML=el.Ingredients;
    document.getElementById("Ingredients").append(ing)

    let faq1=document.createElement("p");
    faq1.innerHTML=el.FAQs.FAQs1;
    document.getElementById("Q1").append(faq1)

    let faq2=document.createElement("p");
    faq2.innerHTML=el.FAQs.FAQs2;
    document.getElementById("Q2").append(faq2)

    let faq3=document.createElement("p");
    faq3.innerHTML=el.FAQs.FAQs3;
    document.getElementById("Q3").append(faq3)

    let faq4=document.createElement("p");
    faq4.innerHTML=el.FAQs.FAQs4;
    document.getElementById("Q4").append(faq4)

    let faq5=document.createElement("p");
    faq5.innerHTML=el.FAQs.FAQs5;
    document.getElementById("Q5").append(faq5)

    let a1=document.createElement("p");
    a1.innerHTML=el.FAQs.FAQs11;
    document.getElementById("A1").append(a1);

    let a2=document.createElement("p");
    a2.innerHTML=el.FAQs.FAQs22;
    document.getElementById("A2").append(a2);

    let a3=document.createElement("p");
    a3.innerHTML=el.FAQs.FAQs33;
    document.getElementById("A3").append(a3);

    let a4=document.createElement("p");
    a4.innerHTML=el.FAQs.FAQs44;
    document.getElementById("A4").append(a4);

    let a5=document.createElement("p");
    a5.innerHTML=el.FAQs.FAQs55;
    document.getElementById("A5").append(a5);

    let product=document.createElement("p");
    product.innerHTML=el.Productdetails.Producttype;
    document.getElementById("Producttype").append(product);

    let qty=document.createElement("p");
    qty.innerHTML=el.Productdetails.Netquantity
    document.getElementById("Netquantity").append(qty)

    let life=document.createElement("p");
    life.innerHTML=el.Productdetails.Shelflife;
    document.getElementById("Shelflife").append(life)

    let dim=document.createElement("p");
    dim.innerHTML=el.Productdetails.Productdimensions;
    document.getElementById("Productdimensions").append(dim);

    let country=document.createElement("p");
    country.innerHTML=el.Productdetails.Countryoforigin;
    document.getElementById("Countryoforigin").append(country);

    let sku=document.createElement("p");
    sku.innerHTML=el.Productdetails.SKUcode
    document.getElementById("SKUcode").append(sku);

    let add=document.createElement("p");
    add.innerHTML=el.Productdetails.Manufacturedmarketedby;
    document.getElementById("Manufacturedmarketedby").append(add);
});
}   
image(arr);

function openSearch()
{
    document.querySelector("#NavbarContainer").style.zIndex = "0";
    document.querySelector("#myOverlay").style.display = "block";
}
function closeSearch()
{
    document.querySelector("#NavbarContainer").style.zIndex = "1";
    document.querySelector("#myOverlay").style.display = "none";
}
function OurProductPage()
{
    window.location.href = "ourproduct.html";
}
function GoToHomePage()
{
    window.location.href = "index.html";
}
function MinimalistAddToCartPage()
{
    console.log(1);
    window.location.href = "cart.html";
}
function LoginSignUpPage()
{
    console.log(1);
    window.location.href = "login.html";
}
function concernpage()
{
    window.location.href = "concern.html";
}
function knowleadgepage()
{
    window.location.href = "knowledge.html";
}
function TrackerOrder()
{
    window.location.href = "track.html";
}