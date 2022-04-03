
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
    window.location.href = "/ourproduct/mains";
}
function GoToHomePage()
{
    window.location.href = "/index";
}
function MinimalistAddToCartPage()
{
    console.log(1);
    window.location.href = "/cart";
}
function LoginSignUpPage()
{
    console.log(1);
    window.location.href = "/login";
}
function concernpage()
{
    window.location.href = "/concern";
}
function knowleadgepage()
{
    window.location.href = "/knowledge";
}
function TrackerOrder()
{
    window.location.href = "/tracker";
}
document.querySelector(".ProTipsImage").addEventListener("click",function()
{
    window.location.href = "/ourproduct"
})
document.querySelector("#ProTipsContainer").addEventListener("click",function()
{
    window.location.href = "/ourproduct"
})


function ShowSomeProductDetails(element,index,count)
{
    console.log("ShowSomeProductDetails");
    console.log('element:', element)
    element = JSON.parse(element);
    console.log('element:', element)
    console.log('index:', index)
    console.log('count:', count)
    let ChangeColor = ShowSomeDetails(element,index);
    Recentalyview(element);
}


function ShowSomeDetails(element,index)
{
    let ShowBoxContainer = document.querySelector("#id01");
    ShowBoxContainer.style.display = "block";
    console.log("element :",element);
    console.log('element.Saleoff:', element.Saleoff)
    document.querySelector(".PercentageOffBox").innerHTML = `${element.Saleoff} % Off`;
    document.querySelector(".GridImage1").src = element.Image.Image1;
    document.querySelector(".GridImage1").addEventListener("click",function()
    {
        ProductDetailsPage(element._id);
    })
    document.querySelector(".TitleBox").innerHTML = element.Title;
    document.querySelector(".CompositionUnit").innerHTML = element.ChemicalUnit;
    document.querySelector(".reviews").innerHTML = element.Reviews;
    document.querySelector(".PriceBox").innerHTML = `₹ : ${element.Price}`;
    document.querySelector(".StrickPriceBox").innerHTML = `₹ : ${element.StrickPrice}`;
    document.querySelector("#DecreaseBox").addEventListener("click",function()
    {
        if(element.ItemQuantity == 0)
        {
            return;
        }
        let value2 = Item1(element);
        document.querySelector("#ShowQuantityBoxInDetails").innerHTML = value2.ItemQuantity;
        console.log("element :",element);
    })
    document.querySelector("#IncreaseBox").addEventListener("click",function()
    {
        let value4 = Item(element);
        document.querySelector("#ShowQuantityBoxInDetails").innerHTML = value4.ItemQuantity;
        console.log("element :",element);
    })
    document.querySelector(".AddToCart").addEventListener("click",function()
    {
        console.log('element:', element)
        AddToCartFromProductDetails(element);

        // console.log("AddToCart :",element)
        // // document.querySelector(".GridBox").style.backgroundColor = "rgb(207, 206, 218)"
        // Recentalyview(element);
        // AddToCartSave(element,index);
        // console.log("color :","color");
        // // color[0] = "rgb(207, 206, 218)";
    })
    document.querySelector("#TitleDetails").innerHTML = `<b>Title :</b> ${element.Title}`;
    document.querySelector("#ChemicalCompositionDetails").innerHTML = `${element.ChemicalComposition}`;
    document.querySelector("#ChemicalUnitDetails").innerHTML = element.ChemicalUnit;
    document.querySelector("#IngredientsDetails").innerHTML = `<b>Ingrdients :</b> ${element.Ingredients}`;
    document.querySelector("#WhatItIsHeadingDetails").innerHTML = `<b>What It Is :</b> ${element.WhatItIs.Heading}`;
    console.log("element :",element);
}

async function AddToCartFromProductDetails(product) 
{

    // var product = JSON.parse(product);
    var productId = product._id;
    fetch("/cart/allproduct")
    .then((res) => 
    {
        return res.json();
    })
    .then((res) => 
    {
        var result = findproduct(res, productId);
        if (!result) // --> false
        {
          post_product(productId);
        }
        else // --> true
        {
          patch_product(result);
        }
    });
}

function findproduct(Carts, id) 
{
    for (var i = 0; i < Carts.length; i++) 
    {
      if (Carts[i].productId == id) 
      {
        return [Carts[i]._id, Carts[i].quantity];
      }
    }
    return false;
}

async function post_product(productId) 
{
    const result = await fetch("/cart", 
    {
      method: "POST",
      headers: 
      {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId,
      }),
    }).then((res) => res.json());
    // alert("post method");
    window.location.reload();
}

function patch_product(Cart) 
{
    var quantity = Cart[1] + 1;
    fetch("/cart/" + Cart[0], 
    {
      method: "PATCH",
      headers: 
      {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity,
      }),
    })
    .then((res) => 
    {
        return res.json();
    })
    .then((res) => console.log(res));

    window.location.reload();
}

function Item(element)
{
    element.ItemQuantity += 1;
    return element;
}
function Item1(element)
{
    element.ItemQuantity -= 1;
    return element;
}
var RecentalyViewArray = JSON.parse(localStorage.getItem("RecentalyViewProduct"))||[];
function Recentalyview(element)
{
    RecentalyViewArray.push(element);
    localStorage.setItem("RecentalyViewProduct",JSON.stringify(RecentalyViewArray));
    // window.location.href = "index.html";
}
function AddToCartSave(element,index)
{
    AddToCartArray.push(element);
    localStorage.setItem("MiniMalistAddToCart",JSON.stringify(AddToCartArray));
    setTimeout(function()
    {
        alert("Your Product Save In Your Cart Thank You");
    },4000);
    console.log('AddToCartArray:', AddToCartArray)
}
function ProductPageData(element)
{
    localStorage.setItem("MinimalistProductData",JSON.stringify(element));
    window.location.href = "product.html";
}
function ProductDetailsPage(product_id) 
{
    console.log('product_id:', product_id)
    window.location.href = `/productdetails/${product_id}`;
}

function QuantityIncreaseDecrease(element,boolean)
{
    element = JSON.parse(element);
    if(boolean === true)
    {
        console.log(boolean);
        let value = ItemFromHomeForIncrease(element);
        console.log("value :",value);
        console.log('value.ItemQuantity:', value.ItemQuantity)
        // document.querySelector("#ShowQuantityBoxInHome").innerHTML = value.ItemQuantity;
        document.querySelector("#ShowQuantityBoxInHome").innerHTML = "Hello";
        // console.log('document.querySelector(".ShowQuantityBox").innerHTML:', document.querySelector(".ShowQuantityBox").innerHTML)
    }
    if(boolean === false)
    {
        console.log(boolean);
        console.log("false");
        if(element.ItemQuantity == 0)
        {
            return;
        }
        let value1 = ItemFromHomeForDecrease(element);
        console.log("value :",value1);
        console.log('value1.ItemQuantity:', value1.ItemQuantity)
        // document.querySelector(".ShowQuantityBox").innerHTML = value1.ItemQuantity;
        document.querySelector("#ShowQuantityBoxInHome").innerHTML = "World";
        // ShowQuantityBox.innerHTML = value1.ItemQuantity;
    }

    function ItemFromHomeForIncrease(element)
    {
        element.ItemQuantity += 1;
        console.log('element.ItemQuantity:', element.ItemQuantity)
        return element;
    }
    function ItemFromHomeForDecrease(element)
    {
        element.ItemQuantity -= 1;
        console.log('element.ItemQuantity:', element.ItemQuantity)
        return element;
    }
}

// function decreasequantity(element)
// {
//     element = JSON.parse(element);
    // if(element.ItemQuantity == "0")
    // {
    //     return;
    // }
    // let value1 = ItemFromHomeForDecrease(element);
    // console.log("value :",value1);
    // console.log('value1.ItemQuantity:', value1.ItemQuantity)
    // document.querySelector(".ShowQuantityBox").innerHTML = value1.ItemQuantity;
    // // ShowQuantityBox.innerHTML = value1.ItemQuantity;
// }

// function increasequantity(element)
// {
    // element = JSON.parse(element);
    // let value = ItemFromHomeForIncrease(element);
    // console.log("value :",value);
    // console.log('value.ItemQuantity:', value.ItemQuantity)
    // document.querySelector(".ShowQuantityBox").innerHTML = value.ItemQuantity;
    
//     // ShowQuantityBox.innerHTML = value.ItemQuantity;
// }
let MiniMalistData = JSON.parse(localStorage.getItem("MiniMalistData"));
AddToCartArray = JSON.parse(localStorage.getItem("MiniMalistAddToCart"))||[];
let RecentalyViewData = JSON.parse(localStorage.getItem("RecentalyViewProduct"));

// AppendData(MiniMalistData,0);
function AppendData(Data,count)
{

    document.querySelector(".main").innerHTML = "";

    Data.map(function(element,index)
    {
        let GridBox = document.createElement("div");
        GridBox.setAttribute("class","carousel-cell item1");

        let EachProductItemBox = document.createElement("div");
        EachProductItemBox.setAttribute("class","EachProductItemBox");

        let SaleViewBox = document.createElement("div");
        SaleViewBox.setAttribute("class","SaleViewBox");

        let SaleIcon = document.createElement("div");
        SaleIcon.setAttribute("class","SaleIcon");
        SaleIcon.innerHTML = "Sale"
        let ViewIcon = document.createElement("div");
        ViewIcon.setAttribute("class","ViewIcon");
        ViewIcon.addEventListener("click",function()
        {
            let ChangeColor = ShowSomeDetails(element,index,count);
            Recentalyview(element);
            console.log('ChangeColor:', ChangeColor)
        })
        let ViewImage = document.createElement("img");
        ViewImage.setAttribute("class","ViewImage");
        ViewImage.src = "https://cdn-icons-png.flaticon.com/512/709/709724.png";

        let PercentageOffBox = document.createElement("div");
        PercentageOffBox.setAttribute("class","PercentageOffBox");
        PercentageOffBox.innerHTML = `${element.Saleoff} % Off`

        let ImageBox = document.createElement("div");
        ImageBox.setAttribute("class","ImageBox");
        ImageBox.addEventListener("click",function()
        {
            ProductPageData(element);
        })

        let GridImage = document.createElement("img");
        GridImage.setAttribute("class","GridImage");
        GridImage.src = element.Image.Image1;

        let TitleBox = document.createElement("div");
        TitleBox.setAttribute("class","TitleBox");
        TitleBox.innerHTML = element.Title;

        let CompositionUnit = document.createElement("div");
        CompositionUnit.setAttribute("class","CompositionUnit");
        CompositionUnit.innerHTML = element.ChemicalUnit;
        let StarsBox = document.createElement("div");
        StarsBox.setAttribute("class","StarsBox");

        let checked1 = document.createElement("span");
        checked1.setAttribute("class","fa fa-star checked");
        let checked2 = document.createElement("span");
        checked2.setAttribute("class","fa fa-star checked");
        let checked3 = document.createElement("span");
        checked3.setAttribute("class","fa fa-star checked");
        let checked4 = document.createElement("span");
        checked4.setAttribute("class","fa fa-star checked");
        let checked5 = document.createElement("span");
        checked5.setAttribute("class","fa fa-star");

        let reviews = document.createElement("div");
        reviews.setAttribute("class","reviews");
        reviews.innerHTML = element.Reviews;
        let PriceStrickPriceBox = document.createElement("div");
        PriceStrickPriceBox.setAttribute("class","PriceStrickPriceBox");

        let PriceBox = document.createElement("div");
        PriceBox.setAttribute("class","PriceBox");
        PriceBox.innerHTML = `₹ : ${element.Price}`;

        let StrickPriceBox = document.createElement("div");
        StrickPriceBox.setAttribute("class","StrickPriceBox");
        StrickPriceBox.innerHTML = `₹ : ${element.StrickPrice}`

        let AddToCartQunatityBox = document.createElement("div");
        AddToCartQunatityBox.setAttribute("class","AddToCartQunatityBox");
        let ShowQuantityBox = document.createElement("div");
        ShowQuantityBox.setAttribute("class","ShowQuantityBox");
        ShowQuantityBox.innerHTML = count;

        let DecreaseBox = document.createElement("div");
        DecreaseBox.setAttribute("class","DecreaseBox");
        DecreaseBox.innerHTML = "-";
        DecreaseBox.addEventListener("click",function()
        {
            if(element.ItemQuantity == "0")
            {
                return;
            }
            let value1 = Item1(element);
            console.log("value :",value1);
            ShowQuantityBox.innerHTML = value1.ItemQuantity;
        })
        let IncreaseBox = document.createElement("div");
        IncreaseBox.setAttribute("class","IncreaseBox");
        IncreaseBox.innerHTML = "+";
        IncreaseBox.addEventListener("click",function()
        {
            // count++;
            // console.log(count);
            // element.ItemQuantity += 1
            // console.log("ItemQunatity :", element.ItemQuantity);
            // ShowQuantityBox.innerHTML = element.ItemQuantity;
            let value = Item(element);
            console.log("value :",value);
            ShowQuantityBox.innerHTML = value.ItemQuantity;
        });

        let AddToCartButtonImage = document.createElement("div");
        AddToCartButtonImage.setAttribute("class","AddToCartButtonImage");

        let AddToCartIcon = document.createElement("div");
        AddToCartIcon.setAttribute("class","AddToCartIcon");

        let AddToImage = document.createElement("img");
        AddToImage.setAttribute("class","AddToImage");
        AddToImage.src = "https://cdn-icons-png.flaticon.com/512/6713/6713649.png";
        
        let AddToCartButton = document.createElement("div");
        AddToCartButton.setAttribute("class","AddToCartButton");

        let AddToCart = document.createElement("button");
        AddToCart.setAttribute("class","AddToCart");
        AddToCart.innerHTML = "ADD TO CART";
        AddToCart.addEventListener("click",function()
        {
            console.log("AddToCart :",element);
            GridBox.style.backgroundColor = "rgb(207, 206, 218)";
            AddToCartSave(element,index);
            Recentalyview(element);
        })


        // document.querySelector(".main").append(GridBox)
        GridBox.append(EachProvductItemBox);
        EachProductItemBox.append(SaleViewBox,ImageBox,TitleBox,PriceStrickPriceBox,AddToCartQunatityBox);
        // GridBox.append(SaleViewBox,PercentageOffBox,ImageBox,TitleBox,CompositionUnit,StarsBox,PriceStrickPriceBox,AddToCartQunatityBox)
        SaleViewBox.append(SaleIcon,ViewIcon)
        ViewIcon.append(ViewImage);
        ImageBox.append(GridImage);
        // StarsBox.append(checked1,checked2,checked3,checked4,checked5,reviews);
        PriceStrickPriceBox.append(StrickPriceBox,PriceBox);
        AddToCartQunatityBox.append(DecreaseBox,ShowQuantityBox,IncreaseBox,AddToCartButtonImage);
        AddToCartButtonImage.append(AddToCartIcon,AddToCartButton)
        AddToCartIcon.append(AddToImage);
        AddToCartButton.append(AddToCart);
    })
    function ShowSomeDetails(element,index,count)
    {
        let ShowBoxContainer = document.querySelector("#id01");
        ShowBoxContainer.style.display = "block";
        console.log("element :",element);

        document.querySelector(".PercentageOffBox").innerHTML = `${element.Saleoff} % Off`;
        document.querySelector(".GridImage1").src = element.Image.Image1;
        document.querySelector(".GridImage1").addEventListener("click",function()
        {
            ProductPageData(element);
        })
        document.querySelector(".TitleBox").innerHTML = element.Title;
        document.querySelector(".CompositionUnit").innerHTML = element.ChemicalUnit;
        document.querySelector(".reviews").innerHTML = element.Reviews;
        document.querySelector(".PriceBox").innerHTML = `₹ : ${element.Price}`;
        document.querySelector(".StrickPriceBox").innerHTML = `₹ : ${element.StrickPrice}`;
        document.querySelector(".ShowQuantityBox").innerHTML = count;
        document.querySelector(".DecreaseBox").addEventListener("click",function()
        {
            if(element.ItemQuantity == "0")
            {
                return;
            }
            let value2 = Item1(element);
            document.querySelector(".ShowQuantityBox").innerHTML = value2.ItemQuantity;
            console.log("element :",element);
        })
        document.querySelector(".IncreaseBox").addEventListener("click",function()
        {
            let value4 = Item(element);
            document.querySelector(".ShowQuantityBox").innerHTML = value4.ItemQuantity;
            console.log("element :",element);
        })
        document.querySelector(".AddToCart").addEventListener("click",function()
        {
            console.log("AddToCart :",element)
            // document.querySelector(".GridBox").style.backgroundColor = "rgb(207, 206, 218)"
            Recentalyview(element);
            AddToCartSave(element,index);
            console.log("color :","color");
            // color[0] = "rgb(207, 206, 218)";
        })
        document.querySelector("#TitleDetails").innerHTML = `<b>Title :</b> ${element.Title}`;
        document.querySelector("#ChemicalCompositionDetails").innerHTML = `${element.ChemicalComposition}`;
        document.querySelector("#ChemicalUnitDetails").innerHTML = element.ChemicalUnit;
        document.querySelector("#IngredientsDetails").innerHTML = `<b>Ingrdients :</b> ${element.Ingredients}`;
        document.querySelector("#WhatItIsHeadingDetails").innerHTML = `<b>What It Is :</b> ${element.WhatItIs.Heading}`;
        console.log("element :",element);
    }
    function Item(element)
    {
        element.ItemQuantity += 1;
        return element;
    }
    function Item1(element)
    {
        element.ItemQuantity -= 1;
        return element;
    }
    var RecentalyViewArray = JSON.parse(localStorage.getItem("RecentalyViewProduct"))||[];
    function Recentalyview(element)
    {
        RecentalyViewArray.push(element);
        localStorage.setItem("RecentalyViewProduct",JSON.stringify(RecentalyViewArray));
        // window.location.href = "index.html";
    }
    function AddToCartSave(element,index)
    {
        AddToCartArray.push(element);
        localStorage.setItem("MiniMalistAddToCart",JSON.stringify(AddToCartArray));
        setTimeout(function()
        {
            alert("Your Product Save In Your Cart Thank You");
        },4000);
        console.log('AddToCartArray:', AddToCartArray)
    }
    function ProductPageData(element)
    {
        localStorage.setItem("MinimalistProductData",JSON.stringify(element));
        window.location.href = "product.html";
    }
}




slideArray(RecentalyViewData,0);
function slideArray(data,count)
{
  // let i = 1;
  
  console.log("data1 :",data);
    if(data == null)
    {
        document.querySelector("#Heading").innerHTML = "No Recentaly See Product";
        return;
    }
    document.querySelector("#Heading").innerHTML = "Recentaly See Product";
    document.querySelector(".my-slider").innerHTML = "";
    data.map(function(element)
    {
        let Box1 = document.createElement("div");

        let SaleViewBox = document.createElement("div");
        SaleViewBox.setAttribute("class","SaleViewBox");

        let SaleIcon = document.createElement("div");
        SaleIcon.setAttribute("class","SaleIcon");
        SaleIcon.innerHTML = "Sale"
        let ViewIcon = document.createElement("div");
        ViewIcon.setAttribute("class","ViewIcon");
        ViewIcon.addEventListener("click",function()
        {
            ShowSomeDetails(element,index,count);
            // Recentalyview(element);
        })
        let ViewImage = document.createElement("img");
        ViewImage.setAttribute("class","ViewImage");
        ViewImage.src = "https://cdn-icons-png.flaticon.com/512/709/709724.png";

        let PercentageOffBox = document.createElement("div");
        PercentageOffBox.setAttribute("class","PercentageOffBox");
        PercentageOffBox.innerHTML = `${element.Saleoff} % Off`

        let ImageBox = document.createElement("div");
        ImageBox.setAttribute("class","ImageBox");

        let GridImage = document.createElement("img");
        GridImage.setAttribute("class","GridImage");
        GridImage.src = element.Image.Image1;

        let TitleBox = document.createElement("div");
        TitleBox.setAttribute("class","TitleBox");
        TitleBox.innerHTML = element.Title;

        let CompositionUnit = document.createElement("div");
        CompositionUnit.setAttribute("class","CompositionUnit");
        CompositionUnit.innerHTML = element.ChemicalUnit;
        let StarsBox = document.createElement("div");
        StarsBox.setAttribute("class","StarsBox");

        let checked1 = document.createElement("span");
        checked1.setAttribute("class","fa fa-star checked");
        let checked2 = document.createElement("span");
        checked2.setAttribute("class","fa fa-star checked");
        let checked3 = document.createElement("span");
        checked3.setAttribute("class","fa fa-star checked");
        let checked4 = document.createElement("span");
        checked4.setAttribute("class","fa fa-star checked");
        let checked5 = document.createElement("span");
        checked5.setAttribute("class","fa fa-star");

        let reviews = document.createElement("div");
        reviews.setAttribute("class","reviews");
        reviews.innerHTML = element.Reviews;
        let PriceStrickPriceBox = document.createElement("div");
        PriceStrickPriceBox.setAttribute("class","PriceStrickPriceBox");

        let PriceBox = document.createElement("div");
        PriceBox.setAttribute("class","PriceBox");
        PriceBox.innerHTML = `₹ : ${element.Price}`;

        let StrickPriceBox = document.createElement("div");
        StrickPriceBox.setAttribute("class","StrickPriceBox");
        StrickPriceBox.innerHTML = `₹ : ${element.StrickPrice}`

        let AddToCartQunatityBox = document.createElement("div");
        AddToCartQunatityBox.setAttribute("class","AddToCartQunatityBox");
        let ShowQuantityBox = document.createElement("div");
        ShowQuantityBox.setAttribute("class","ShowQuantityBox");
        ShowQuantityBox.innerHTML = count;

        let DecreaseBox = document.createElement("div");
        DecreaseBox.setAttribute("class","DecreaseBox");
        DecreaseBox.innerHTML = "-";
        DecreaseBox.addEventListener("click",function()
        {
            if(element.ItemQuantity == "0")
            {
                return;
            }
            let value1 = Item5(element);
            console.log("value :",value1);
            ShowQuantityBox.innerHTML = value1.ItemQuantity;
        })
        let IncreaseBox = document.createElement("div");
        IncreaseBox.setAttribute("class","IncreaseBox");
        IncreaseBox.innerHTML = "+";
        IncreaseBox.addEventListener("click",function()
        {
            // count++;
            // console.log(count);
            // element.ItemQuantity += 1
            // console.log("ItemQunatity :", element.ItemQuantity);
            // ShowQuantityBox.innerHTML = element.ItemQuantity;
            let value = Ite6(element);
            console.log("value :",value);
            ShowQuantityBox.innerHTML = value.ItemQuantity;
        });

        let AddToCartButtonImage = document.createElement("div");
        AddToCartButtonImage.setAttribute("class","AddToCartButtonImage");

        let AddToCartIcon = document.createElement("div");
        AddToCartIcon.setAttribute("class","AddToCartIcon");

        let AddToImage = document.createElement("img");
        AddToImage.setAttribute("class","AddToImage");
        AddToImage.src = "https://cdn-icons-png.flaticon.com/512/6713/6713649.png";
        
        let AddToCartButton = document.createElement("div");
        AddToCartButton.setAttribute("class","AddToCartButton");

        let AddToCart = document.createElement("button");
        AddToCart.setAttribute("class","AddToCart");
        AddToCart.innerHTML = "ADD TO CART";
        AddToCart.addEventListener("click",function()
        {
            console.log("AddToCart :",element);
            AddToCartSave1(element,index);
            // Recentalyview(element);
        })


        document.querySelector(".my-slider").append(Box1);
        Box1.append(SaleViewBox,PercentageOffBox,ImageBox,TitleBox,CompositionUnit,StarsBox,PriceStrickPriceBox,AddToCartQunatityBox)
        SaleViewBox.append(SaleIcon,ViewIcon)
        ViewIcon.append(ViewImage);
        ImageBox.append(GridImage);
        StarsBox.append(checked1,checked2,checked3,checked4,checked5,reviews);
        PriceStrickPriceBox.append(StrickPriceBox,PriceBox);
        // AddToCartQunatityBox.append(DecreaseBox,ShowQuantityBox,IncreaseBox);
        // AddToCartButtonImage.append(AddToCartIcon,AddToCartButton)
        // AddToCartIcon.append(AddToImage);
        // AddToCartButton.append(AddToCart);

        document.querySelector(".my-slider").append(Box1);
    })
    function Ite6(element)
    {
        element.ItemQuantity += 1;
        return element;
    }
    function Item5(element)
    {
        element.ItemQuantity -= 1;
        return element;
    }
    // var RecentalyViewArray = JSON.parse(localStorage.getItem("RecentalyViewProduct"))||[];
    // function Recentalyview(element)
    // {
    //     RecentalyViewArray.push(element);
    //     localStorage.setItem("RecentalyViewProduct",JSON.stringify(RecentalyViewArray));
    // }
    function AddToCartSave1(element,index)
    {
        AddToCartArray.push(element);
        localStorage.setItem("MiniMalistAddToCart",JSON.stringify(AddToCartArray));
        setTimeout(function()
        {
            alert("Your Product Save In Your Cart Thank You");
        },4000);
        console.log('AddToCartArray:', AddToCartArray)
    }
}
let slider = tns({
    container : ".my-slider",
    "slideBy" : "1",
    "speed" : 6500,
    "nav" : false,
    autoplay : true,
    control : false,
    autoplayButtonOutput : false,
    responsive : {
        1600 : {
            items : 4,
            gutter : 20
        },

        1024 : {
            items : 4,
            gutter : 20
        },

        768 : {
            items : 2,
            gutter : 20
        },

        400 : {
            items : 1,
        }
    }
})