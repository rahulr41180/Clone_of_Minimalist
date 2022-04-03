
//------------------------------------------- Navbar start ----------------------------------------

var modal = document.querySelector("#id01");
window.onclick = function(event)
{
    if(event.target == modal)
    {
        modal.style.display = "none";
    }
}
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
    window.location.href = "/ourproduct";
}
function GoToHomePage()
{
    window.location.href = "/index";
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




// --------------------------------------------Navbar End--------------------------------------------------

// --------------------------------------------Second Search Input Start ----------------------------------------

function active1()
{
    document.querySelector(".active1").style.backgroundColor = "blue";
    document.querySelector(".active2").style.backgroundColor = "white";
    AppendData(MiniMalist11ItemArray,0);
}
function active2()
{
    document.querySelector(".active2").style.backgroundColor = "blue";
    document.querySelector(".active1").style.backgroundColor = "white";
    AppendData(MiniMalist12ItemArray,0)
}
let searchinput = document.createElement("input");
searchinput.setAttribute("id","SearchInput2");
searchinput.type = "search";
searchinput.placeholder = "Search Product...."
searchinput.addEventListener("keyup",function(event)
{
    console.log(1);
    console.log("event :",event);
    if(event.key == "Enter")
    {
        console.log("Enter");
        let EnterValue = document.querySelector("#SearchInput2").value;
        console.log('EnterValue:', EnterValue)
        
        let FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
        {
            if(element[EnterValue] != undefined)
            {
                return element;
            }
        })
        console.log("FeaturedProduct :",FeaturedProduct);
        if(FeaturedProduct.length == 0)
        {
            document.querySelector("#GridContainer").innerHTML = "Sorry Data Not Found Please Try Again"
        }
        else
        {
            AppendData(FeaturedProduct,0);
        }

    }
    let EnterValue = document.querySelector("#SearchInput2").value;
    console.log('EnterValue:', EnterValue)
    if(EnterValue == "")
    {
        AppendData(MiniMalist11ItemArray,0);
    }
    
});
document.querySelector("#SearchInputBox").append(searchinput);
document.querySelector("#SearchInput").addEventListener("keyup",function(event)
{
    if(event.key == "Enter")
    {
        console.log("Enter2");
        console.log("Enter");
        let EnterValue1 = document.querySelector("#SearchInput").value;
        console.log('EnterValue:', EnterValue1)
        
        let FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
        {
            if(element[EnterValue1] != undefined)
            {
                return element;
            }
        })
        console.log("FeaturedProduct :",FeaturedProduct);
        if(FeaturedProduct.length == 0)
        {
            document.querySelector("#GridContainer").innerHTML = "Sorry Data Not Found Please Try Again"
        }
        else
        {
            console.log('FeaturedProduct:', FeaturedProduct)
            AppendData(FeaturedProduct,0);
        }
    }
    let EnterValue1 = document.querySelector("#SearchInput").value;
    console.log('EnterValue1:', EnterValue1)
    if(EnterValue1 == "")
    {
        AppendData(MiniMalist11ItemArray,0);
    }
})

// ---------------------------------------------Second Search Input End -----------------------------------------




// ------------------------------------------ Add To Cart Start -----------------------------------------------------

// ----------------------------------------------------------- Add To Cart End -----------------------------------------------


    let count = 0;
    window.onload = function(){
    slideOne();
    slideTwo();
    }
    let sliderOne = document.getElementById("slider-1");
    let sliderTwo = document.getElementById("slider-2");
    let displayValOne = document.getElementById("Minimum");
    displayValOne.value = 5
    let displayValTwo = document.getElementById("Maximum");
    displayValTwo.value = 10;

    let minGap = 0;
    let sliderTrack = document.querySelector(".slider-track");
    let sliderMaxValue = document.getElementById("slider-1").max;

    function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
        console.log('sliderOne.value:', sliderOne.value)
    }
    displayValOne.value = sliderOne.value;
    localStorage.setItem("Min",sliderOne.value);
    console.log('sliderOne.value:', sliderOne.value)
    //console.log('displayValOne.textContent:', displayValOne.textContent)
    fillColor();
    Minvalue();
    }

    function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.value = sliderTwo.value;
    localStorage.setItem("Max",sliderTwo.value);
    console.log('sliderTwo.value:', sliderTwo.value)
    //console.log('displayValTwo.textContent:', displayValTwo.textContent)
    fillColor();
    Maxvalue();
    }

    function fillColor(){
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    // sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
    }

    // console.log('displayValOne1:', displayValOne.value);
    // console.log('displayValTwo2:', displayValTwo.value);
    // console.log("Min :",Min);
    // console.log("Max :",Max);
    function Minvalue()
    {
        let value1 = localStorage.getItem("Min");
        console.log('value1:', value1)
    }
    function Maxvalue()
    {
        let value2 = localStorage.getItem("Max");
        console.log('value2:', value2)
    }
let PriceFilteringData;
function PriceFiltering()
{
    console.log(11111);
    let value11 = localStorage.getItem("Min");
    console.log('value11:', value11)
    let value22 = localStorage.getItem("Max");
    console.log('value22:', value22)
    FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
    {
        if((element.Price >=value11) && (element.Price <= value22))
        {
            return element;
        }
    });
    console.log('FeaturedProduct:', FeaturedProduct)
    PriceFilteringData = FeaturedProduct
    console.log('PriceFilteringData:', PriceFilteringData)
    AppendData(PriceFilteringData,0)
}
function FirstSorting()
{

    let MiniMalistDataForSorting = JSON.parse(localStorage.getItem("MiniMalistData"));
    console.log('MiniMalistDataForSorting:', MiniMalistDataForSorting);
    let FilteringArray = [];

    let value1 = localStorage.getItem("Min");
    console.log('value1:', value1)
    let value2 = localStorage.getItem("Max");
    console.log('value2:', value2)

    var parent = document.querySelector("#CollectionFilterBox");
    var item = parent.querySelectorAll('input[type ="checkbox"]');
    console.log('item:', item)
    OrderFood();
    var order = [];
    function OrderFood()
    {
        order = [];
        item.forEach(function(element)
        {
            if(element.checked)
            {
                let Data = element.value;
                order.push(Data);
                console.log(order);
            }
        });
        // GivePromise(order);
        console.log("order1 :",order);
        for(var i = 0; i<order.length; i++)
        {
            FilteringArray.push(order[i]);
        }
    }
    console.log("FilteringArray :",FilteringArray);

    var parent1 = document.querySelector("#VendorFilterBox");
    var item1 = parent1.querySelectorAll('input[type ="checkbox"]');
    console.log('item1:', item1)
    OrderFood1();
    var order1 = [];
    function OrderFood1()
    {
        order1 = [];
        item1.forEach(function(element)
        {
            if(element.checked)
            {
                let Data = element.value;
                order1.push(Data);
                console.log(order1);
            }
        });
        // GivePromise(order);
        console.log("order1 :",order1);
        for(var i = 0; i<order1.length; i++)
        {
            FilteringArray.push(order1[i]);
        }
    }
    console.log("FilteringArray :",FilteringArray);

    var parent2 = document.querySelector("#TagsFilterBox");
    var item2 = parent2.querySelectorAll('input[type ="checkbox"]');
    console.log('item2:', item2)
    OrderFood2();
    var order2 = [];
    function OrderFood2()
    {
        order2 = [];
        item2.forEach(function(element)
        {
            if(element.checked)
            {
                let Data = element.value;
                order2.push(Data);
                console.log(order2);
            }
        });
        // GivePromise(order);
        console.log("order2 :",order2);
        for(var i = 0; i<order2.length; i++)
        {
            FilteringArray.push(order2[i]);
        }
    }
    console.log("FilteringArray :",FilteringArray);

    var parent3 = document.querySelector("#DiscountFilterBox");
    var item3 = parent3.querySelectorAll('input[type ="checkbox"]');
    console.log('item3:', item3)
    OrderFood3();
    var order3 = [];
    function OrderFood3()
    {
        order3 = [];
        item3.forEach(function(element)
        {
            if(element.checked)
            {
                let Data = element.value;
                order3.push(Data);
                console.log(order3);
            }
        });
        // GivePromise(order);
        console.log("order3 :",order3);
        for(var i = 0; i<order3.length; i++)
        {
            FilteringArray.push(order3[i]);
        }
    }
    console.log("FilteringArray :",FilteringArray);

    let FirstSortingvalue = document.querySelector("#SelectSortProduct").value;
    let SecondSortingvalue = document.querySelector("#ShowItems").value;
    console.log('SecondSortingvalue5:', SecondSortingvalue)
    let ThirdSortingvalue = document.querySelector("#SelectSortProduct2").value;
    if(FirstSortingvalue == "SortProduct")
    {
        console.log("FirstSortingvalue :",FirstSortingvalue);
    }
    else
    {
        console.log("FirstSortingvalue :",FirstSortingvalue);
        if((FirstSortingvalue != "SortProduct") && (SecondSortingvalue == "SHOW") && (FilteringArray.length == 0) && (value1 == "250") && (value2 == "800"))
        {

            console.log('FirstSortingvalue55:', FirstSortingvalue)
            if(FirstSortingvalue == "Featured")
            {
                let FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                {
                    if(element.Featured != undefined)
                    {
                        return element;
                    }
                })
                console.log("FeaturedProduct :",FeaturedProduct);
                AppendData(FeaturedProduct,count);
            }
            if(FirstSortingvalue == "BestSelling")
            {
                let FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                {
                    if(element.BestSelling != undefined)
                    {
                        return element;
                    }
                })
                console.log("FeaturedProduct :",FeaturedProduct);
                AppendData(FeaturedProduct,count);
            }
            if(FirstSortingvalue == "AlphabeticallyAZ")
            {
                let FeaturedProduct = MiniMalist11ItemArray.sort(function(a,b)
                {
                    if (a.Title < b.Title) return -1;
                    if (a.Title > b.Title) return  1;
                    return 0;
                })
                console.log("FeaturedProduct :",FeaturedProduct);
                AppendData(FeaturedProduct,count);
            }
            if(FirstSortingvalue == "AlphabeticallyZA")
            {
                let FeaturedProduct = MiniMalist11ItemArray.sort(function(a,b)
                {
                    if (a.Title > b.Title) return -1;
                    if (a.Title < b.Title) return  1;
                    return 0;
                })
                console.log("FeaturedProduct :",FeaturedProduct);
                AppendData(FeaturedProduct,count);
            }
            if(FirstSortingvalue == "Pricehightolow")
            {
                let FeaturedProduct = MiniMalist11ItemArray.sort(function(a,b)
                {
                    return Number(b.Price) - Number(a.Price);
                })
                console.log("FeaturedProduct :",FeaturedProduct);
                AppendData(FeaturedProduct,count);
            }
            if(FirstSortingvalue == "Procelowtohigh")
            {
                let FeaturedProduct = MiniMalist11ItemArray.sort(function(a,b)
                {
                    return Number(a.Price) - Number(b.Price);
                })
                console.log("FeaturedProduct :",FeaturedProduct);
                AppendData(FeaturedProduct,count);
            }
            if(FirstSortingvalue == "Dateoldtonew")
            {
                let FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                {
                    if(element.Dateoldtonew != undefined)
                    {
                        return element;
                    }
                })
                console.log("FeaturedProduct :",FeaturedProduct);
                AppendData(FeaturedProduct,count);
            }
            if(FirstSortingvalue == "Datenewtoold")
            {
                let FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                {
                    if(element.Datenewtoold != undefined)
                    {
                        return element;
                    }
                })
                console.log("FeaturedProduct :",FeaturedProduct);
                AppendData(FeaturedProduct,count);
            }
        }
        if((FirstSortingvalue != "SortProduct") && (SecondSortingvalue != "SHOW") && (FilteringArray.length == 0) && (value1 == "250") && (value2 == "800"))
        {
            console.log('FirstSortingvalue22:', FirstSortingvalue)
            console.log('SecondSortingvalue11:', SecondSortingvalue)
            if((FirstSortingvalue == "Featured"))
            {   
                console.log('SecondSortingvalue1111:', SecondSortingvalue)
                if(SecondSortingvalue == "6")
                {
                    let FeaturedProduct = MiniMalist6ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct6 :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "12")
                {
                    let FeaturedProduct = MiniMalist12ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct12 :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "18")
                {
                    let FeaturedProduct = MiniMalist18ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct18 :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "22")
                {
                    let FeaturedProduct = MiniMalist22ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct22 :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
            }
            if((FirstSortingvalue == "BestSelling"))
            {   
                if(SecondSortingvalue == "6")
                {
                    let FeaturedProduct = MiniMalist6ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "12")
                {
                    let FeaturedProduct = MiniMalist12ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "18")
                {
                    let FeaturedProduct = MiniMalist18ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "22")
                {
                    let FeaturedProduct = MiniMalist22ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
            }
            if((FirstSortingvalue == "AlphabeticallyAZ"))
            {   
                if(SecondSortingvalue == "6")
                {
                    let FeaturedProduct = MiniMalist6ItemArray.sort(function(a,b)
                    {
                        if (a.Title < b.Title) return -1;
                        if (a.Title > b.Title) return  1;
                        return 0;
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "12")
                {
                    let FeaturedProduct = MiniMalist12ItemArray.sort(function(a,b)
                    {
                        if (a.Title < b.Title) return -1;
                        if (a.Title > b.Title) return  1;
                        return 0;
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "18")
                {
                    let FeaturedProduct = MiniMalist18ItemArray.sort(function(a,b)
                    {
                        if (a.Title < b.Title) return -1;
                        if (a.Title > b.Title) return  1;
                        return 0;
                    })
                    console.log("FeaturedProductabcd :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "22")
                {
                    let FeaturedProduct = MiniMalist22ItemArray.sort(function(a,b)
                    {
                        if (a.Title < b.Title) return -1;
                        if (a.Title > b.Title) return  1;
                        return 0;
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
            }
            if((FirstSortingvalue == "AlphabeticallyZA"))
            {   
                if(SecondSortingvalue == "6")
                {
                    let FeaturedProduct = MiniMalist6ItemArray.sort(function(a,b)
                    {
                        if (a.Title > b.Title) return -1;
                        if (a.Title < b.Title) return  1;
                        return 0;
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "12")
                {
                    let FeaturedProduct = MiniMalist12ItemArray.sort(function(a,b)
                    {
                        if (a.Title > b.Title) return -1;
                        if (a.Title < b.Title) return  1;
                        return 0;
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "18")
                {
                    let FeaturedProduct = MiniMalist18ItemArray.sort(function(a,b)
                    {
                        if (a.Title > b.Title) return -1;
                        if (a.Title < b.Title) return  1;
                        return 0;
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "22")
                {
                    let FeaturedProduct = MiniMalist22ItemArray.sort(function(a,b)
                    {
                        if (a.Title > b.Title) return -1;
                        if (a.Title < b.Title) return  1;
                        return 0;
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
            }
            if((FirstSortingvalue == "Procelowtohigh"))
            {   
                if(SecondSortingvalue == "6")
                {
                    let FeaturedProduct = MiniMalist6ItemArray.sort(function(a,b)
                    {
                        return Number(a.Price) - Number(b.Price);
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "12")
                {
                    let FeaturedProduct = MiniMalist12ItemArray.sort(function(a,b)
                    {
                        return Number(a.Price) - Number(b.Price);
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "18")
                {
                    let FeaturedProduct = MiniMalist18ItemArray.sort(function(a,b)
                    {
                        return Number(a.Price) - Number(b.Price);
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "22")
                {
                    let FeaturedProduct = MiniMalist22ItemArray.sort(function(a,b)
                    {
                        return Number(a.Price) - Number(b.Price);
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
            }
            if((FirstSortingvalue == "Pricehightolow"))
            {   
                if(SecondSortingvalue == "6")
                {
                    let FeaturedProduct = MiniMalist6ItemArray.sort(function(a,b)
                    {
                        return Number(b.Price) - Number(a.Price);
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "12")
                {
                    let FeaturedProduct = MiniMalist12ItemArray.sort(function(a,b)
                    {
                        return Number(b.Price) - Number(a.Price);
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "18")
                {
                    let FeaturedProduct = MiniMalist18ItemArray.sort(function(a,b)
                    {
                        return Number(b.Price) - Number(a.Price);
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "22")
                {
                    let FeaturedProduct = MiniMalist22ItemArray.sort(function(a,b)
                    {
                        return Number(b.Price) - Number(a.Price);
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
            }
            if((FirstSortingvalue == "Dateoldtonew"))
            {   
                if(SecondSortingvalue == "6")
                {
                    let FeaturedProduct = MiniMalist6ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "12")
                {
                    let FeaturedProduct = MiniMalist12ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "18")
                {
                    let FeaturedProduct = MiniMalist18ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "22")
                {
                    let FeaturedProduct = MiniMalist22ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
            }
            if((FirstSortingvalue == "Datenewtoold"))
            {   
                if(SecondSortingvalue == "6")
                {
                    let FeaturedProduct = MiniMalist6ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "12")
                {
                    let FeaturedProduct = MiniMalist12ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "18")
                {
                    let FeaturedProduct = MiniMalist18ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "22")
                {
                    let FeaturedProduct = MiniMalist22ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
            }
        }
        if((FirstSortingvalue != "SortProduct") && (SecondSortingvalue == "SHOW") && (FilteringArray.length != 0) && (value1 == "250") && (value2 == "800"))
        {
            let data1 = [];
            let data = FilteringArray;
            console.log('data22:', data)
            
            for(var i = 0; i<data.length; i++)
            {
                if(data[i] == "5%10%")
                {
                    FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                    {
                        if((element.Saleoff >=1) && (element.Saleoff <= 5))
                        {
                            return element;
                        }
                    });
                    data1.push(FeaturedProduct);
                }
                else if(data[i] == "10%15%")
                {
                    FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                    {
                        if((element.Saleoff >=6) && (element.Saleoff <= 10))
                        {
                            return element;
                        }
                    });
                    data1.push(FeaturedProduct);
                }
                else if(data[i] == "15%20%")
                {
                    FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                    {
                        if((element.Saleoff >=11) && (element.Saleoff <= 15))
                        {
                            return element;
                        }
                    });
                    data1.push(FeaturedProduct);
                }
                else if(data[i] == "20%25%")
                {
                    FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                    {
                        if((element.Saleoff >=16) && (element.Saleoff <= 20))
                        {
                            return element;
                        }
                    });
                    data1.push(FeaturedProduct);
                }
                else if(data[i] == "25%30%")
                {
                    FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                    {
                        if((element.Saleoff >=21) && (element.Saleoff <= 22))
                        {
                            return element;
                        }
                    });
                    data1.push(FeaturedProduct);
                }
                else
                {
                    let FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                    {
                        if(element[data[i]] != undefined)
                        {
                            return element;
                        }
                    });
                    console.log("FeaturedProduct :",FeaturedProduct);
                    data1.push(FeaturedProduct);
                }
            }
            console.log("data1 :",data1);
            for(var j = 0; j<data1.length; j++)
            {
                let data2 = data1[j];
                console.log('data2:', data2)
                if(FirstSortingvalue == "Featured")
                {
                    let FeaturedProduct = data2.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(FirstSortingvalue == "BestSelling")
                {
                    let FeaturedProduct = data2.filter(function(element)
                    {
                        if(element.BestSelling != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(FirstSortingvalue == "AlphabeticallyAZ")
                {
                    let FeaturedProduct = data2.sort(function(a,b)
                    {
                        if (a.Title < b.Title) return -1;
                        if (a.Title > b.Title) return  1;
                        return 0;
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(FirstSortingvalue == "AlphabeticallyZA")
                {
                    let FeaturedProduct = data2.sort(function(a,b)
                    {
                        if (a.Title > b.Title) return -1;
                        if (a.Title < b.Title) return  1;
                        return 0;
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(FirstSortingvalue == "Pricehightolow")
                {
                    let FeaturedProduct = data2.sort(function(a,b)
                    {
                        return Number(b.Price) - Number(a.Price);
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(FirstSortingvalue == "Procelowtohigh")
                {
                    let FeaturedProduct = data2.sort(function(a,b)
                    {
                        return Number(a.Price) - Number(b.Price);
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(FirstSortingvalue == "Dateoldtonew")
                {
                    let FeaturedProduct = data2.filter(function(element)
                    {
                        if(element.Dateoldtonew != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(FirstSortingvalue == "Datenewtoold")
                {
                    let FeaturedProduct = data2.filter(function(element)
                    {
                        if(element.Datenewtoold != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
            }
            // let FeaturedProduct = MiniMalist22ItemArray.filter(function(element)
            // {
            //     if(element.Featured != undefined)
            //     {
            //         return element;
            //     }
            // })
            // console.log("FeaturedProduct :",FeaturedProduct);
            // AppendData(FeaturedProduct,count);
        }
        if((FirstSortingvalue != "SortProduct") && (SecondSortingvalue == "SHOW") && (FilteringArray.length == 0) && ((value1 != "250") || (value2 != "800")))
        {
            
            
            FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
            {
                if((element.Price >=value1) && (element.Price <= value2))
                {
                    return element;
                }
            });
            
            if(FirstSortingvalue == "Featured")
            {
                let FeaturedProduct1 = FeaturedProduct.filter(function(element)
                {
                    if(element.Featured != undefined)
                    {
                        return element;
                    }
                })
                console.log("FeaturedProduct :",FeaturedProduct1);
                AppendData(FeaturedProduct1,count);
            }
            if(FirstSortingvalue == "BestSelling")
            {
                let FeaturedProduct1 = FeaturedProduct.filter(function(element)
                {
                    if(element.BestSelling != undefined)
                    {
                        return element;
                    }
                })
                console.log("FeaturedProduct :",FeaturedProduct1);
                AppendData(FeaturedProduct1,count);
            }
            if(FirstSortingvalue == "AlphabeticallyAZ")
            {
                let FeaturedProduct1 = FeaturedProduct.sort(function(a,b)
                {
                    if (a.Title < b.Title) return -1;
                    if (a.Title > b.Title) return  1;
                    return 0;
                })
                console.log("FeaturedProduct :",FeaturedProduct1);
                AppendData(FeaturedProduct1,count);
            }
            if(FirstSortingvalue == "AlphabeticallyZA")
            {
                let FeaturedProduct1 = FeaturedProduct.sort(function(a,b)
                {
                    if (a.Title > b.Title) return -1;
                    if (a.Title < b.Title) return  1;
                    return 0;
                })
                console.log("FeaturedProduct :",FeaturedProduct1);
                AppendData(FeaturedProduct1,count);
            }
            if(FirstSortingvalue == "Pricehightolow")
            {
                let FeaturedProduct1 = FeaturedProduct.sort(function(a,b)
                {
                    return Number(b.Price) - Number(a.Price);
                })
                console.log("FeaturedProduct1 :",FeaturedProduct1);
                AppendData(FeaturedProduct1,count);
            }
            if(FirstSortingvalue == "Procelowtohigh")
            {
                let FeaturedProduct1 = FeaturedProduct1.sort(function(a,b)
                {
                    return Number(a.Price) - Number(b.Price);
                })
                console.log("FeaturedProduct :",FeaturedProduct1);
                AppendData(FeaturedProduct1,count);
            }
            if(FirstSortingvalue == "Dateoldtonew")
            {
                let FeaturedProduct1 = FeaturedProduct.filter(function(element)
                {
                    if(element.Dateoldtonew != undefined)
                    {
                        return element;
                    }
                })
                console.log("FeaturedProduct :",FeaturedProduct1);
                AppendData(FeaturedProduct1,count);
            }
            if(FirstSortingvalue == "Datenewtoold")
            {
                let FeaturedProduct1 = FeaturedProduct.filter(function(element)
                {
                    if(element.Datenewtoold != undefined)
                    {
                        return element;
                    }
                })
                console.log("FeaturedProduct :",FeaturedProduct1);
                AppendData(FeaturedProduct1,count);
            }
            
            
        }
    }
    if(SecondSortingvalue == "SHOW")
    {
        console.log('SecondSortingvalue:', SecondSortingvalue)
    }
    else
    {
        console.log('SecondSortingvalue:', SecondSortingvalue)
    }
    if(ThirdSortingvalue == "SortProduct")
    {
        console.log('ThirdSortingvalue:', ThirdSortingvalue)
    }
    else
    {
        console.log('ThirdSortingvalue:', ThirdSortingvalue)
    }
}

function SecondFeltering()
{

    let MiniMalistDataForSorting = JSON.parse(localStorage.getItem("MiniMalistData"));
    console.log('MiniMalistDataForSorting:', MiniMalistDataForSorting);
    let FilteringArray = [];

    let value1 = localStorage.getItem("Min");
    console.log('value1:', value1)
    let value2 = localStorage.getItem("Max");
    console.log('value2:', value2)

    var parent = document.querySelector("#CollectionFilterBox");
    var item = parent.querySelectorAll('input[type ="checkbox"]');
    console.log('item:', item)
    OrderFood();
    var order = [];
    function OrderFood()
    {
        order = [];
        item.forEach(function(element)
        {
            if(element.checked)
            {
                let Data = element.value;
                order.push(Data);
                console.log(order);
            }
        });
        // GivePromise(order);
        console.log("order1 :",order);
        for(var i = 0; i<order.length; i++)
        {
            FilteringArray.push(order[i]);
        }
    }
    console.log("FilteringArray :",FilteringArray);

    var parent1 = document.querySelector("#VendorFilterBox");
    var item1 = parent1.querySelectorAll('input[type ="checkbox"]');
    console.log('item1:', item1)
    OrderFood1();
    var order1 = [];
    function OrderFood1()
    {
        order1 = [];
        item1.forEach(function(element)
        {
            if(element.checked)
            {
                let Data = element.value;
                order1.push(Data);
                console.log(order1);
            }
        });
        // GivePromise(order);
        console.log("order1 :",order1);
        for(var i = 0; i<order1.length; i++)
        {
            FilteringArray.push(order1[i]);
        }
    }
    console.log("FilteringArray :",FilteringArray);

    var parent2 = document.querySelector("#TagsFilterBox");
    var item2 = parent2.querySelectorAll('input[type ="checkbox"]');
    console.log('item2:', item2)
    OrderFood2();
    var order2 = [];
    function OrderFood2()
    {
        order2 = [];
        item2.forEach(function(element)
        {
            if(element.checked)
            {
                let Data = element.value;
                order2.push(Data);
                console.log(order2);
            }
        });
        // GivePromise(order);
        console.log("order2 :",order2);
        for(var i = 0; i<order2.length; i++)
        {
            FilteringArray.push(order2[i]);
        }
    }
    console.log("FilteringArray :",FilteringArray);

    var parent3 = document.querySelector("#DiscountFilterBox");
    var item3 = parent3.querySelectorAll('input[type ="checkbox"]');
    console.log('item3:', item3)
    OrderFood3();
    var order3 = [];
    function OrderFood3()
    {
        order3 = [];
        item3.forEach(function(element)
        {
            if(element.checked)
            {
                let Data = element.value;
                order3.push(Data);
                console.log(order3);
            }
        });
        // GivePromise(order);
        console.log("order3 :",order3);
        for(var i = 0; i<order3.length; i++)
        {
            FilteringArray.push(order3[i]);
        }
    }
    console.log("FilteringArray :",FilteringArray);

    let FirstSortingvalue = document.querySelector("#SelectSortProduct").value;
    let SecondSortingvalue = document.querySelector("#ShowItems").value;
    console.log('SecondSortingvalue5:', SecondSortingvalue)
    let ThirdSortingvalue = document.querySelector("#SelectSortProduct2").value;
    if(ThirdSortingvalue == "SortProduct")
    {
        console.log("FirstSortingvalue :",ThirdSortingvalue);
    }
    else
    {
        console.log("FirstSortingvalue :",ThirdSortingvalue);
        if((ThirdSortingvalue != "SortProduct") && (SecondSortingvalue == "SHOW") && (FilteringArray.length == 0) && (value1 == "250") && (value2 == "800"))
        {

            console.log('FirstSortingvalue55:', ThirdSortingvalue)
            if(ThirdSortingvalue == "Featured")
            {
                let FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                {
                    if(element.Featured != undefined)
                    {
                        return element;
                    }
                })
                console.log("FeaturedProduct :",FeaturedProduct);
                AppendData(FeaturedProduct,count);
            }
            if(ThirdSortingvalue == "BestSelling")
            {
                let FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                {
                    if(element.BestSelling != undefined)
                    {
                        return element;
                    }
                })
                console.log("FeaturedProduct :",FeaturedProduct);
                AppendData(FeaturedProduct,count);
            }
            if(ThirdSortingvalue == "AlphabeticallyAZ")
            {
                let FeaturedProduct = MiniMalist11ItemArray.sort(function(a,b)
                {
                    if (a.Title < b.Title) return -1;
                    if (a.Title > b.Title) return  1;
                    return 0;
                })
                console.log("FeaturedProduct :",FeaturedProduct);
                AppendData(FeaturedProduct,count);
            }
            if(ThirdSortingvalue == "AlphabeticallyZA")
            {
                let FeaturedProduct = MiniMalist11ItemArray.sort(function(a,b)
                {
                    if (a.Title > b.Title) return -1;
                    if (a.Title < b.Title) return  1;
                    return 0;
                })
                console.log("FeaturedProduct :",FeaturedProduct);
                AppendData(FeaturedProduct,count);
            }
            if(ThirdSortingvalue == "Pricehightolow")
            {
                let FeaturedProduct = MiniMalist11ItemArray.sort(function(a,b)
                {
                    return Number(b.Price) - Number(a.Price);
                })
                console.log("FeaturedProduct :",FeaturedProduct);
                AppendData(FeaturedProduct,count);
            }
            if(ThirdSortingvalue == "Procelowtohigh")
            {
                let FeaturedProduct = MiniMalist11ItemArray.sort(function(a,b)
                {
                    return Number(a.Price) - Number(b.Price);
                })
                console.log("FeaturedProduct :",FeaturedProduct);
                AppendData(FeaturedProduct,count);
            }
            if(ThirdSortingvalue == "Dateoldtonew")
            {
                let FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                {
                    if(element.Dateoldtonew != undefined)
                    {
                        return element;
                    }
                })
                console.log("FeaturedProduct :",FeaturedProduct);
                AppendData(FeaturedProduct,count);
            }
            if(ThirdSortingvalue == "Datenewtoold")
            {
                let FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                {
                    if(element.Datenewtoold != undefined)
                    {
                        return element;
                    }
                })
                console.log("FeaturedProduct :",FeaturedProduct);
                AppendData(FeaturedProduct,count);
            }
        }
        if((ThirdSortingvalue != "SortProduct") && (SecondSortingvalue != "SHOW") && (FilteringArray.length == 0) && (value1 == "250") && (value2 == "800"))
        {
            console.log('ThirdSortingvalue22:', ThirdSortingvalue)
            console.log('SecondSortingvalue11:', SecondSortingvalue)
            if((ThirdSortingvalue == "Featured"))
            {   
                console.log('SecondSortingvalue1111:', SecondSortingvalue)
                if(SecondSortingvalue == "6")
                {
                    let FeaturedProduct = MiniMalist6ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct6 :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "12")
                {
                    let FeaturedProduct = MiniMalist12ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct12 :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "18")
                {
                    let FeaturedProduct = MiniMalist18ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct18 :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "22")
                {
                    let FeaturedProduct = MiniMalist22ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct22 :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
            }
            if((ThirdSortingvalue == "BestSelling"))
            {   
                if(SecondSortingvalue == "6")
                {
                    let FeaturedProduct = MiniMalist6ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "12")
                {
                    let FeaturedProduct = MiniMalist12ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "18")
                {
                    let FeaturedProduct = MiniMalist18ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "22")
                {
                    let FeaturedProduct = MiniMalist22ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
            }
            if((ThirdSortingvalue == "AlphabeticallyAZ"))
            {   
                if(SecondSortingvalue == "6")
                {
                    let FeaturedProduct = MiniMalist6ItemArray.sort(function(a,b)
                    {
                        if (a.Title < b.Title) return -1;
                        if (a.Title > b.Title) return  1;
                        return 0;
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "12")
                {
                    let FeaturedProduct = MiniMalist12ItemArray.sort(function(a,b)
                    {
                        if (a.Title < b.Title) return -1;
                        if (a.Title > b.Title) return  1;
                        return 0;
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "18")
                {
                    let FeaturedProduct = MiniMalist18ItemArray.sort(function(a,b)
                    {
                        if (a.Title < b.Title) return -1;
                        if (a.Title > b.Title) return  1;
                        return 0;
                    })
                    console.log("FeaturedProductabcd :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "22")
                {
                    let FeaturedProduct = MiniMalist22ItemArray.sort(function(a,b)
                    {
                        if (a.Title < b.Title) return -1;
                        if (a.Title > b.Title) return  1;
                        return 0;
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
            }
            if((ThirdSortingvalue == "AlphabeticallyZA"))
            {   
                if(SecondSortingvalue == "6")
                {
                    let FeaturedProduct = MiniMalist6ItemArray.sort(function(a,b)
                    {
                        if (a.Title > b.Title) return -1;
                        if (a.Title < b.Title) return  1;
                        return 0;
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "12")
                {
                    let FeaturedProduct = MiniMalist12ItemArray.sort(function(a,b)
                    {
                        if (a.Title > b.Title) return -1;
                        if (a.Title < b.Title) return  1;
                        return 0;
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "18")
                {
                    let FeaturedProduct = MiniMalist18ItemArray.sort(function(a,b)
                    {
                        if (a.Title > b.Title) return -1;
                        if (a.Title < b.Title) return  1;
                        return 0;
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "22")
                {
                    let FeaturedProduct = MiniMalist22ItemArray.sort(function(a,b)
                    {
                        if (a.Title > b.Title) return -1;
                        if (a.Title < b.Title) return  1;
                        return 0;
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
            }
            if((ThirdSortingvalue == "Procelowtohigh"))
            {   
                if(SecondSortingvalue == "6")
                {
                    let FeaturedProduct = MiniMalist6ItemArray.sort(function(a,b)
                    {
                        return Number(a.Price) - Number(b.Price);
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "12")
                {
                    let FeaturedProduct = MiniMalist12ItemArray.sort(function(a,b)
                    {
                        return Number(a.Price) - Number(b.Price);
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "18")
                {
                    let FeaturedProduct = MiniMalist18ItemArray.sort(function(a,b)
                    {
                        return Number(a.Price) - Number(b.Price);
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "22")
                {
                    let FeaturedProduct = MiniMalist22ItemArray.sort(function(a,b)
                    {
                        return Number(a.Price) - Number(b.Price);
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
            }
            if((ThirdSortingvalue == "Pricehightolow"))
            {   
                if(SecondSortingvalue == "6")
                {
                    let FeaturedProduct = MiniMalist6ItemArray.sort(function(a,b)
                    {
                        return Number(b.Price) - Number(a.Price);
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "12")
                {
                    let FeaturedProduct = MiniMalist12ItemArray.sort(function(a,b)
                    {
                        return Number(b.Price) - Number(a.Price);
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "18")
                {
                    let FeaturedProduct = MiniMalist18ItemArray.sort(function(a,b)
                    {
                        return Number(b.Price) - Number(a.Price);
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "22")
                {
                    let FeaturedProduct = MiniMalist22ItemArray.sort(function(a,b)
                    {
                        return Number(b.Price) - Number(a.Price);
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
            }
            if((ThirdSortingvalue == "Dateoldtonew"))
            {   
                if(SecondSortingvalue == "6")
                {
                    let FeaturedProduct = MiniMalist6ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "12")
                {
                    let FeaturedProduct = MiniMalist12ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "18")
                {
                    let FeaturedProduct = MiniMalist18ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "22")
                {
                    let FeaturedProduct = MiniMalist22ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
            }
            if((ThirdSortingvalue == "Datenewtoold"))
            {   
                if(SecondSortingvalue == "6")
                {
                    let FeaturedProduct = MiniMalist6ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "12")
                {
                    let FeaturedProduct = MiniMalist12ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "18")
                {
                    let FeaturedProduct = MiniMalist18ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(SecondSortingvalue == "22")
                {
                    let FeaturedProduct = MiniMalist22ItemArray.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
            }
        }
        if((ThirdSortingvalue != "SortProduct") && (SecondSortingvalue == "SHOW") && (FilteringArray.length != 0) && (value1 == "250") && (value2 == "800"))
        {
            let data1 = [];
            let data = FilteringArray;
            console.log('data22:', data)
            
            for(var i = 0; i<data.length; i++)
            {
                if(data[i] == "5%10%")
                {
                    FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                    {
                        if((element.Saleoff >=1) && (element.Saleoff <= 5))
                        {
                            return element;
                        }
                    });
                    data1.push(FeaturedProduct);
                }
                else if(data[i] == "10%15%")
                {
                    FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                    {
                        if((element.Saleoff >=6) && (element.Saleoff <= 10))
                        {
                            return element;
                        }
                    });
                    data1.push(FeaturedProduct);
                }
                else if(data[i] == "15%20%")
                {
                    FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                    {
                        if((element.Saleoff >=11) && (element.Saleoff <= 15))
                        {
                            return element;
                        }
                    });
                    data1.push(FeaturedProduct);
                }
                else if(data[i] == "20%25%")
                {
                    FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                    {
                        if((element.Saleoff >=16) && (element.Saleoff <= 20))
                        {
                            return element;
                        }
                    });
                    data1.push(FeaturedProduct);
                }
                else if(data[i] == "25%30%")
                {
                    FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                    {
                        if((element.Saleoff >=21) && (element.Saleoff <= 22))
                        {
                            return element;
                        }
                    });
                    data1.push(FeaturedProduct);
                }
                else
                {
                    let FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                    {
                        if(element[data[i]] != undefined)
                        {
                            return element;
                        }
                    });
                    console.log("FeaturedProduct :",FeaturedProduct);
                    data1.push(FeaturedProduct);
                }
            }
            console.log("data1 :",data1);
            for(var j = 0; j<data1.length; j++)
            {
                let data2 = data1[j];
                console.log('data2:', data2)
                if(ThirdSortingvalue == "Featured")
                {
                    let FeaturedProduct = data2.filter(function(element)
                    {
                        if(element.Featured != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(ThirdSortingvalue == "BestSelling")
                {
                    let FeaturedProduct = data2.filter(function(element)
                    {
                        if(element.BestSelling != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(ThirdSortingvalue == "AlphabeticallyAZ")
                {
                    let FeaturedProduct = data2.sort(function(a,b)
                    {
                        if (a.Title < b.Title) return -1;
                        if (a.Title > b.Title) return  1;
                        return 0;
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(ThirdSortingvalue == "AlphabeticallyZA")
                {
                    let FeaturedProduct = data2.sort(function(a,b)
                    {
                        if (a.Title > b.Title) return -1;
                        if (a.Title < b.Title) return  1;
                        return 0;
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(ThirdSortingvalue == "Pricehightolow")
                {
                    let FeaturedProduct = data2.sort(function(a,b)
                    {
                        return Number(b.Price) - Number(a.Price);
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(ThirdSortingvalue == "Procelowtohigh")
                {
                    let FeaturedProduct = data2.sort(function(a,b)
                    {
                        return Number(a.Price) - Number(b.Price);
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(ThirdSortingvalue == "Dateoldtonew")
                {
                    let FeaturedProduct = data2.filter(function(element)
                    {
                        if(element.Dateoldtonew != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
                if(ThirdSortingvalue == "Datenewtoold")
                {
                    let FeaturedProduct = data2.filter(function(element)
                    {
                        if(element.Datenewtoold != undefined)
                        {
                            return element;
                        }
                    })
                    console.log("FeaturedProduct :",FeaturedProduct);
                    AppendData(FeaturedProduct,count);
                }
            }
            // let FeaturedProduct = MiniMalist22ItemArray.filter(function(element)
            // {
            //     if(element.Featured != undefined)
            //     {
            //         return element;
            //     }
            // })
            // console.log("FeaturedProduct :",FeaturedProduct);
            // AppendData(FeaturedProduct,count);
        }
        if((ThirdSortingvalue != "SortProduct") && (SecondSortingvalue == "SHOW") && (FilteringArray.length == 0) && ((value1 != "250") || (value2 != "800")))
        {
            
            
            FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
            {
                if((element.Price >=value1) && (element.Price <= value2))
                {
                    return element;
                }
            });
            
            if(ThirdSortingvalue == "Featured")
            {
                let FeaturedProduct1 = FeaturedProduct.filter(function(element)
                {
                    if(element.Featured != undefined)
                    {
                        return element;
                    }
                })
                console.log("FeaturedProduct :",FeaturedProduct1);
                AppendData(FeaturedProduct1,count);
            }
            if(ThirdSortingvalue == "BestSelling")
            {
                let FeaturedProduct1 = FeaturedProduct.filter(function(element)
                {
                    if(element.BestSelling != undefined)
                    {
                        return element;
                    }
                })
                console.log("FeaturedProduct :",FeaturedProduct1);
                AppendData(FeaturedProduct1,count);
            }
            if(ThirdSortingvalue == "AlphabeticallyAZ")
            {
                let FeaturedProduct1 = FeaturedProduct.sort(function(a,b)
                {
                    if (a.Title < b.Title) return -1;
                    if (a.Title > b.Title) return  1;
                    return 0;
                })
                console.log("FeaturedProduct :",FeaturedProduct1);
                AppendData(FeaturedProduct1,count);
            }
            if(ThirdSortingvalue == "AlphabeticallyZA")
            {
                let FeaturedProduct1 = FeaturedProduct.sort(function(a,b)
                {
                    if (a.Title > b.Title) return -1;
                    if (a.Title < b.Title) return  1;
                    return 0;
                })
                console.log("FeaturedProduct :",FeaturedProduct1);
                AppendData(FeaturedProduct1,count);
            }
            if(ThirdSortingvalue == "Pricehightolow")
            {
                let FeaturedProduct1 = FeaturedProduct.sort(function(a,b)
                {
                    return Number(b.Price) - Number(a.Price);
                })
                console.log("FeaturedProduct1 :",FeaturedProduct1);
                AppendData(FeaturedProduct1,count);
            }
            if(ThirdSortingvalue == "Procelowtohigh")
            {
                let FeaturedProduct1 = FeaturedProduct1.sort(function(a,b)
                {
                    return Number(a.Price) - Number(b.Price);
                })
                console.log("FeaturedProduct :",FeaturedProduct1);
                AppendData(FeaturedProduct1,count);
            }
            if(ThirdSortingvalue == "Dateoldtonew")
            {
                let FeaturedProduct1 = FeaturedProduct.filter(function(element)
                {
                    if(element.Dateoldtonew != undefined)
                    {
                        return element;
                    }
                })
                console.log("FeaturedProduct :",FeaturedProduct1);
                AppendData(FeaturedProduct1,count);
            }
            if(ThirdSortingvalue == "Datenewtoold")
            {
                let FeaturedProduct1 = FeaturedProduct.filter(function(element)
                {
                    if(element.Datenewtoold != undefined)
                    {
                        return element;
                    }
                })
                console.log("FeaturedProduct :",FeaturedProduct1);
                AppendData(FeaturedProduct1,count);
            }
            
            
        }
    }
    if(SecondSortingvalue == "SHOW")
    {
        console.log('SecondSortingvalue:', SecondSortingvalue)
    }
    else
    {
        console.log('SecondSortingvalue:', SecondSortingvalue)
    }
    if(FirstSortingvalue == "SortProduct")
    {
        console.log('ThirdSortingvalue:', FirstSortingvalue)
    }
    else
    {
        console.log('ThirdSortingvalue:', ThirdSortingvalue)
    }
}
function ShowSorting()
{
    console.log('PriceFilteringData:', PriceFilteringData)
    let FirstSortingvalue = document.querySelector("#SelectSortProduct").value;
    let SecondSortingvalue = document.querySelector("#ShowItems").value;
    console.log('SecondSortingvalue5:', SecondSortingvalue)
    let ThirdSortingvalue = document.querySelector("#SelectSortProduct2").value;
    console.log('ThirdSortingvalue:', ThirdSortingvalue)
    if(SecondSortingvalue == "SHOW")
    {
        console.log("FirstSortingvalue :",SecondSortingvalue);
    }
    else
    {
        if(SecondSortingvalue == "6")
        {
            AppendData(MiniMalist6ItemArray,0);
        }
        if(SecondSortingvalue == "12")
        {
            AppendData(MiniMalist12ItemArray,0);
        }
        if(SecondSortingvalue == "18")
        {
            AppendData(MiniMalist18ItemArray,0);
        }
        if(SecondSortingvalue == "22")
        {
            AppendData(MiniMalist22ItemArray,0);
        }
    }
}

function CollectionFiltering()
{
    let FilteringArray = [];
    var parent = document.querySelector("#CollectionFilterBox");
    var item = parent.querySelectorAll('input[type ="checkbox"]');
    console.log('item:', item)
    OrderFood();
    var order = [];
    function OrderFood()
    {
        order = [];
        item.forEach(function(element)
        {
            if(element.checked)
            {
                let Data = element.value;
                order.push(Data);
                console.log(order);
            }
        });
        // GivePromise(order);
        console.log("order1 :",order);
        for(var i = 0; i<order.length; i++)
        {
            FilteringArray.push(order[i]);
        }
    }
    console.log("FilteringArray :",FilteringArray);

    var parent1 = document.querySelector("#VendorFilterBox");
    var item1 = parent1.querySelectorAll('input[type ="checkbox"]');
    console.log('item1:', item1)
    OrderFood1();
    var order1 = [];
    function OrderFood1()
    {
        order1 = [];
        item1.forEach(function(element)
        {
            if(element.checked)
            {
                let Data = element.value;
                order1.push(Data);
                console.log(order1);
            }
        });
        // GivePromise(order);
        console.log("order1 :",order1);
        for(var i = 0; i<order1.length; i++)
        {
            FilteringArray.push(order1[i]);
        }
    }
    console.log("FilteringArray :",FilteringArray);

    var parent2 = document.querySelector("#TagsFilterBox");
    var item2 = parent2.querySelectorAll('input[type ="checkbox"]');
    console.log('item2:', item2)
    OrderFood2();
    var order2 = [];
    function OrderFood2()
    {
        order2 = [];
        item2.forEach(function(element)
        {
            if(element.checked)
            {
                let Data = element.value;
                order2.push(Data);
                console.log(order2);
            }
        });
        // GivePromise(order);
        console.log("order2 :",order2);
        for(var i = 0; i<order2.length; i++)
        {
            FilteringArray.push(order2[i]);
        }
    }
    console.log("FilteringArray :",FilteringArray);

    var parent3 = document.querySelector("#DiscountFilterBox");
    var item3 = parent3.querySelectorAll('input[type ="checkbox"]');
    console.log('item3:', item3)
    OrderFood3();
    var order3 = [];
    function OrderFood3()
    {
        order3 = [];
        item3.forEach(function(element)
        {
            if(element.checked)
            {
                let Data = element.value;
                order3.push(Data);
                console.log(order3);
            }
        });
        // GivePromise(order);
        console.log("order3 :",order3);
        for(var i = 0; i<order3.length; i++)
        {
            FilteringArray.push(order3[i]);
        }
    }
    

    
    
    console.log("FilteringArray :",FilteringArray);
    console.log('PriceFilteringData:', PriceFilteringData)
        if(PriceFilteringData == undefined)
        {
            let data1 = [];
            let data = FilteringArray;
            for(var i = 0; i<data.length; i++)
            {
                if(data[i] == "5%10%")
                {
                    // FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                    // {
                    //     if((element.Saleoff >=1) && (element.Saleoff <= 5))
                    //     {
                    //         return element;
                    //     }
                    // });
                    // data1.push(FeaturedProduct);
                }
                else if(data[i] == "10%15%")
                {
                    // FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                    // {
                    //     if((element.Saleoff >=6) && (element.Saleoff <= 10))
                    //     {
                    //         return element;
                    //     }
                    // });
                    // data1.push(FeaturedProduct);
                }
                else if(data[i] == "15%20%")
                {
                    // FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                    // {
                    //     if((element.Saleoff >=11) && (element.Saleoff <= 15))
                    //     {
                    //         return element;
                    //     }
                    // });
                    // data1.push(FeaturedProduct);
                }
                else if(data[i] == "20%25%")
                {
                    // FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                    // {
                    //     if((element.Saleoff >=16) && (element.Saleoff <= 20))
                    //     {
                    //         return element;
                    //     }
                    // });
                    // data1.push(FeaturedProduct);
                }
                else if(data[i] == "25%30%")
                {
                    // FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                    // {
                    //     if((element.Saleoff >=21) && (element.Saleoff <= 22))
                    //     {
                    //         return element;
                    //     }
                    // });
                    // data1.push(FeaturedProduct);
                }
                else
                {
                    let FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                    {
                        if(element[data[i]] != undefined)
                        {
                            return element;
                        }
                    });
                    console.log("FeaturedProduct :",FeaturedProduct);
                    data1.push(FeaturedProduct);
                }
            }
            console.log('data1:', data1)
            let array2 = [];
            for(var j = 0; j<data1.length; j++)
            {
                let array = data1[j];
                for(var k = 0; k<data.length; k++)
                {
                    if(data[k] == "5%10%")
                    {
                        FeaturedProduct = array.filter(function(element)
                        {
                            if((element.Saleoff >=1) && (element.Saleoff <= 5))
                            {
                                return element;
                            }
                        });
                        array2.push(FeaturedProduct);
                    }
                    if(data[k] == "10%15%")
                    {
                        FeaturedProduct = array.filter(function(element)
                        {
                            if((element.Saleoff >=6) && (element.Saleoff <= 10))
                            {
                                return element;
                            }
                        });
                        array2.push(FeaturedProduct);
                    }
                    if(data[k] == "15%20%")
                    {
                        FeaturedProduct = array.filter(function(element)
                        {
                            if((element.Saleoff >=11) && (element.Saleoff <= 15))
                            {
                                return element;
                            }
                        });
                        array2.push(FeaturedProduct);
                    }
                    if(data[k] == "20%25%")
                    {
                        FeaturedProduct = array.filter(function(element)
                        {
                            if((element.Saleoff >=16) && (element.Saleoff <= 20))
                            {
                                return element;
                            }
                        });
                        array2.push(FeaturedProduct);
                    }
                    if(data[k] == "25%30%")
                    {
                        FeaturedProduct = array.filter(function(element)
                        {
                            if((element.Saleoff >=21) && (element.Saleoff <= 22))
                            {
                                return element;
                            }
                        });
                        array2.push(FeaturedProduct);
                    }
                }
            }
            console.log("array2 :",array2);
            if(array2.length == 0)
            {
                let a = [];
                console.log(1);
                for(var l = 0; l<data1.length; l++)
                {
                    // console.log("array211 :",data1[l]);
                    // AppendData(data1[l]);
                    for(var m = 0; m<data1[l].length; m++)
                    {
                        a.push(data1[l][m]);
                    }
                }
                console.log('a:', a)   
                AppendData(a,count);
            }
            else
            {
                let a = []
                console.log(2);
                for(var l = 0; l<array2.length; l++)
                {
                    // console.log("array22 :",array2[l]);
                    // a.push(array2[l]);
                    for(var m = 0; m<array2[l].length; m++)
                    {
                        a.push(array2[l][m]);
                    }
                    // AppendData(array2[l]);
                }
                console.log('a:', a)   
                AppendData(a,count);
            }
            if(data1.length == 0)
            {
                var array4 = []
                for(var k = 0; k<FilteringArray.length; k++)
                {
                    if(FilteringArray[k] == "5%10%")
                    {
                        FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                        {
                            if((element.Saleoff >=1) && (element.Saleoff <= 5))
                            {
                                return element;
                            }
                        });
                        array4.push(FeaturedProduct);
                    }
                    if(FilteringArray[k] == "10%15%")
                    {
                        FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                        {
                            if((element.Saleoff >=6) && (element.Saleoff <= 10))
                            {
                                return element;
                            }
                        });
                        array4.push(FeaturedProduct);
                    }
                    if(FilteringArray[k] == "15%20%")
                    {
                        FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                        {
                            if((element.Saleoff >=11) && (element.Saleoff <= 15))
                            {
                                return element;
                            }
                        });
                        array4.push(FeaturedProduct);
                    }
                    if(FilteringArray[k] == "20%25%")
                    {
                        FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                        {
                            if((element.Saleoff >=16) && (element.Saleoff <= 20))
                            {
                                return element;
                            }
                        });
                        array4.push(FeaturedProduct);
                    }
                    if(FilteringArray[k] == "25%30%")
                    {
                        FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                        {
                            if((element.Saleoff >=21) && (element.Saleoff <= 22))
                            {
                                return element;
                            }
                        });
                        array4.push(FeaturedProduct);
                    }
                }
                console.log("array4 :",array4);
                let array5 = [];
                for(var i = 0; i<array4.length; i++)
                {
                    for(var j = 0; j<array4[i].length; j++)
                    {
                        array5.push(array4[i][j]);
                    }
                }
                console.log("array5 :",array5);
                AppendData(array5,count);
            }
            if(FilteringArray.length == 0)
            {
                AppendData(MiniMalist11ItemArray,count);
            }
        }
        else
        {
            let data1 = [];
            let data = FilteringArray;
            for(var i = 0; i<data.length; i++)
            {
                if(data[i] == "5%10%")
                {
                    // FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                    // {
                    //     if((element.Saleoff >=1) && (element.Saleoff <= 5))
                    //     {
                    //         return element;
                    //     }
                    // });
                    // data1.push(FeaturedProduct);
                }
                else if(data[i] == "10%15%")
                {
                    // FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                    // {
                    //     if((element.Saleoff >=6) && (element.Saleoff <= 10))
                    //     {
                    //         return element;
                    //     }
                    // });
                    // data1.push(FeaturedProduct);
                }
                else if(data[i] == "15%20%")
                {
                    // FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                    // {
                    //     if((element.Saleoff >=11) && (element.Saleoff <= 15))
                    //     {
                    //         return element;
                    //     }
                    // });
                    // data1.push(FeaturedProduct);
                }
                else if(data[i] == "20%25%")
                {
                    // FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                    // {
                    //     if((element.Saleoff >=16) && (element.Saleoff <= 20))
                    //     {
                    //         return element;
                    //     }
                    // });
                    // data1.push(FeaturedProduct);
                }
                else if(data[i] == "25%30%")
                {
                    // FeaturedProduct = MiniMalist11ItemArray.filter(function(element)
                    // {
                    //     if((element.Saleoff >=21) && (element.Saleoff <= 22))
                    //     {
                    //         return element;
                    //     }
                    // });
                    // data1.push(FeaturedProduct);
                }
                else
                {
                    let FeaturedProduct = PriceFilteringData.filter(function(element)
                    {
                        if(element[data[i]] != undefined)
                        {
                            return element;
                        }
                    });
                    console.log("FeaturedProduct :",FeaturedProduct);
                    data1.push(FeaturedProduct);
                }
            }
            console.log('data1:', data1)
            let array2 = [];
            for(var j = 0; j<data1.length; j++)
            {
                let array = data1[j];
                for(var k = 0; k<data.length; k++)
                {
                    if(data[k] == "5%10%")
                    {
                        FeaturedProduct = array.filter(function(element)
                        {
                            if((element.Saleoff >=1) && (element.Saleoff <= 5))
                            {
                                return element;
                            }
                        });
                        array2.push(FeaturedProduct);
                    }
                    if(data[k] == "10%15%")
                    {
                        FeaturedProduct = array.filter(function(element)
                        {
                            if((element.Saleoff >=6) && (element.Saleoff <= 10))
                            {
                                return element;
                            }
                        });
                        array2.push(FeaturedProduct);
                    }
                    if(data[k] == "15%20%")
                    {
                        FeaturedProduct = array.filter(function(element)
                        {
                            if((element.Saleoff >=11) && (element.Saleoff <= 15))
                            {
                                return element;
                            }
                        });
                        array2.push(FeaturedProduct);
                    }
                    if(data[k] == "20%25%")
                    {
                        FeaturedProduct = array.filter(function(element)
                        {
                            if((element.Saleoff >=16) && (element.Saleoff <= 20))
                            {
                                return element;
                            }
                        });
                        array2.push(FeaturedProduct);
                    }
                    if(data[k] == "25%30%")
                    {
                        FeaturedProduct = array.filter(function(element)
                        {
                            if((element.Saleoff >=21) && (element.Saleoff <= 22))
                            {
                                return element;
                            }
                        });
                        array2.push(FeaturedProduct);
                    }
                }
            }
            console.log("array2 :",array2);
            if(array2.length == 0)
            {
                let a = [];
                console.log(1);
                for(var l = 0; l<data1.length; l++)
                {
                    // console.log("array211 :",data1[l]);
                    // AppendData(data1[l]);
                    for(var m = 0; m<data1[l].length; m++)
                    {
                        a.push(data1[l][m]);
                    }
                }
                console.log('a:', a)   
                AppendData(a,count);
            }
            else
            {
                let a = []
                console.log(2);
                for(var l = 0; l<array2.length; l++)
                {
                    // console.log("array22 :",array2[l]);
                    // a.push(array2[l]);
                    for(var m = 0; m<array2[l].length; m++)
                    {
                        a.push(array2[l][m]);
                    }
                    // AppendData(array2[l]);
                }
                console.log('a:', a)   
                AppendData(a,count);
            }
            if(data1.length == 0)
            {
                var array4 = []
                for(var k = 0; k<FilteringArray.length; k++)
                {
                    if(FilteringArray[k] == "5%10%")
                    {
                        FeaturedProduct = PriceFilteringData.filter(function(element)
                        {
                            if((element.Saleoff >=1) && (element.Saleoff <= 5))
                            {
                                return element;
                            }
                        });
                        array4.push(FeaturedProduct);
                    }
                    if(FilteringArray[k] == "10%15%")
                    {
                        FeaturedProduct = PriceFilteringData.filter(function(element)
                        {
                            if((element.Saleoff >=6) && (element.Saleoff <= 10))
                            {
                                return element;
                            }
                        });
                        array4.push(FeaturedProduct);
                    }
                    if(FilteringArray[k] == "15%20%")
                    {
                        FeaturedProduct = PriceFilteringData.filter(function(element)
                        {
                            if((element.Saleoff >=11) && (element.Saleoff <= 15))
                            {
                                return element;
                            }
                        });
                        array4.push(FeaturedProduct);
                    }
                    if(FilteringArray[k] == "20%25%")
                    {
                        FeaturedProduct = PriceFilteringData.filter(function(element)
                        {
                            if((element.Saleoff >=16) && (element.Saleoff <= 20))
                            {
                                return element;
                            }
                        });
                        array4.push(FeaturedProduct);
                    }
                    if(FilteringArray[k] == "25%30%")
                    {
                        FeaturedProduct = PriceFilteringData.filter(function(element)
                        {
                            if((element.Saleoff >=21) && (element.Saleoff <= 22))
                            {
                                return element;
                            }
                        });
                        array4.push(FeaturedProduct);
                    }
                }
                console.log("array4 :",array4);
                let array5 = [];
                for(var i = 0; i<array4.length; i++)
                {
                    for(var j = 0; j<array4[i].length; j++)
                    {
                        array5.push(array4[i][j]);
                    }
                }
                console.log("array5 :",array5);
                AppendData(array5,count);
            }
            if(FilteringArray.length == 0)
            {
                AppendData(PriceFilteringData,count);
            }
        }
}
// let color = [1];
// AppendData(MiniMalist11ItemArray,count);
let url = `http://localhost:5200/ourproduct`;
// let url = "mongodb+srv://rahulr41180:Rahul12345@cluster0.jjbeq.mongodb.net/MongodbLoginSignUpDatabase?retryWrites=true&w=majority"
async function FetchApi(){
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data)
        // console.log(data.User)
        // appendData(data)
        // appendData(data.User)
        // AppendData(data,0);
    } catch (error) {
        console.log("error",error);
    }
}
FetchApi();
function AppendData(Data,count)
{

    document.querySelector("#GridContainer").innerHTML = "";

    Data.map(function(element,index)
    {
        let GridBox = document.createElement("div");
        GridBox.setAttribute("class","GridBox");

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


        document.querySelector("#GridContainer").append(GridBox)
        GridBox.append(SaleViewBox,PercentageOffBox,ImageBox,TitleBox,CompositionUnit,StarsBox,PriceStrickPriceBox,AddToCartQunatityBox)
        SaleViewBox.append(SaleIcon,ViewIcon)
        ViewIcon.append(ViewImage);
        ImageBox.append(GridImage);
        StarsBox.append(checked1,checked2,checked3,checked4,checked5,reviews);
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
        document.querySelector(".GridImage").src = element.Image.Image1;
        document.querySelector(".GridImage").addEventListener("click",function()
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
        // window.location.href = "index.html"
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

// ------------------------------------------------Filtering Start ---------------------------------------

// ------------------------------------------------Filtering For Collection Start -----------------------------
let arrow = false;
ShowCollectionFiltering()
document.querySelector("#UpDownArrowBox").addEventListener("click",function()
{
    document.querySelector("#UpDownArrowBox").innerHTML = "";
    if(arrow == true)
    {
        let UpArrow = document.createElement("i");
        UpArrow.setAttribute("class","arrow up");
        document.querySelector("#UpDownArrowBox").append(UpArrow);
        arrow = false;
        ShowCollectionFiltering()
    }
    else
    {
        let DownArrow = document.createElement("i");
        DownArrow.setAttribute("class","arrow down");
        document.querySelector("#UpDownArrowBox").append(DownArrow);
        arrow = true;
        ShowCollectionFiltering()
    }
})
function ShowCollectionFiltering()
{
    if(arrow == false)
    {
        document.querySelector("#CollectionFilterBox").style.padding = ".5vw"
        document.querySelector("#CollectionFilterBox").style.opacity = 1;
        // document.querySelector("#CollectionFilterBox").style.width = "97%";
        document.querySelector("#CollectionFilterBox").style.height = "19.5vw";

    }
    else
    {
        document.querySelector("#CollectionFilterBox").style.padding = "0vw";
        // document.querySelector("#CollectionFilterBox").style.width = "97%";
        
        document.querySelector("#CollectionFilterBox").style.opacity = 0;
        document.querySelector("#CollectionFilterBox").style.height = 0;

    }
    console.log("arrow :",arrow);
}

// -------------------------------------------Collection Filtering End -----------------------

// -------------------------------------------Vendor Filtering Start -----------------------


let arrow1 = false;
ShowVendorFiltering()
document.querySelector("#VendorUpDownArrowBox").addEventListener("click",function()
{
    document.querySelector("#VendorUpDownArrowBox").innerHTML = "";
    if(arrow1 == true)
    {
        let UpArrow = document.createElement("i");
        UpArrow.setAttribute("class","arrow up");
        document.querySelector("#VendorUpDownArrowBox").append(UpArrow);
        arrow1 = false;
        ShowVendorFiltering()
    }
    else
    {
        let DownArrow = document.createElement("i");
        DownArrow.setAttribute("class","arrow down");
        document.querySelector("#VendorUpDownArrowBox").append(DownArrow);
        arrow1 = true;
        ShowVendorFiltering()
    }
})
function ShowVendorFiltering()
{
    if(arrow1 == false)
    {
        document.querySelector("#VendorFilterBox").style.padding = ".5vw"
        document.querySelector("#VendorFilterBox").style.opacity = 1;
        // document.querySelector("#VendorFilterBox").style.width = "97%";
        document.querySelector("#VendorFilterBox").style.height = "19.5vw";

    }
    else
    {
        document.querySelector("#VendorFilterBox").style.padding = "0vw";
        // document.querySelector("#VendorFilterBox").style.width = "97%";
        
        document.querySelector("#VendorFilterBox").style.opacity = 0;
        document.querySelector("#VendorFilterBox").style.height = 0;

    }
    console.log("arrow :",arrow1);
}
// -------------------------------------------Vendor Filtering End -----------------------

let arrow2 = false;
ShowTagsFiltering()
document.querySelector("#TagsUpDownArrowBox").addEventListener("click",function()
{
    document.querySelector("#TagsUpDownArrowBox").innerHTML = "";
    if(arrow2 == true)
    {
        let UpArrow = document.createElement("i");
        UpArrow.setAttribute("class","arrow up");
        document.querySelector("#TagsUpDownArrowBox").append(UpArrow);
        arrow2 = false;
        ShowTagsFiltering()
    }
    else
    {
        let DownArrow = document.createElement("i");
        DownArrow.setAttribute("class","arrow down");
        document.querySelector("#TagsUpDownArrowBox").append(DownArrow);
        arrow2 = true;
        ShowTagsFiltering()
    }
})
function ShowTagsFiltering()
{
    if(arrow2 == false)
    {
        document.querySelector("#TagsFilterBox").style.padding = ".5vw"
        document.querySelector("#TagsFilterBox").style.opacity = 1;
        // document.querySelector("#TagsFilterBox").style.width = "97%";
        document.querySelector("#TagsFilterBox").style.height = "19.5vw";

    }
    else
    {
        document.querySelector("#TagsFilterBox").style.padding = "0vw";
        // document.querySelector("#TagsFilterBox").style.width = "97%";
        
        document.querySelector("#TagsFilterBox").style.opacity = 0;
        document.querySelector("#TagsFilterBox").style.height = 0;

    }
    console.log("arrow :",arrow2);
}




let arrow3 = false;
ShowDiscountFiltering()
document.querySelector("#DiscountUpDownArrowBox").addEventListener("click",function()
{
    document.querySelector("#DiscountUpDownArrowBox").innerHTML = "";
    if(arrow3 == true)
    {
        let UpArrow = document.createElement("i");
        UpArrow.setAttribute("class","arrow up");
        document.querySelector("#DiscountUpDownArrowBox").append(UpArrow);
        arrow3 = false;
        ShowDiscountFiltering()
    }
    else
    {
        let DownArrow = document.createElement("i");
        DownArrow.setAttribute("class","arrow down");
        document.querySelector("#DiscountUpDownArrowBox").append(DownArrow);
        arrow3 = true;
        ShowDiscountFiltering()
    }
})
function ShowDiscountFiltering()
{
    if(arrow3 == false)
    {
        document.querySelector("#DiscountFilterBox").style.padding = ".5vw"
        document.querySelector("#DiscountFilterBox").style.opacity = 1;
        // document.querySelector("#DiscountFilterBox").style.width = "97%";
        document.querySelector("#DiscountFilterBox").style.height = "10.5vw";

    }
    else
    {
        document.querySelector("#DiscountFilterBox").style.padding = "0vw";
        // document.querySelector("#DiscountFilterBox").style.width = "97%";
        
        document.querySelector("#DiscountFilterBox").style.opacity = 0;
        document.querySelector("#DiscountFilterBox").style.height = 0;

    }
    console.log("arrow :",arrow3);
}

let arrow4 = false;
ShowPriceFiltering()
document.querySelector("#PriceUpDownArrowBox").addEventListener("click",function()
{
    document.querySelector("#PriceUpDownArrowBox").innerHTML = "";
    if(arrow4 == true)
    {
        let UpArrow = document.createElement("i");
        UpArrow.setAttribute("class","arrow up");
        document.querySelector("#PriceUpDownArrowBox").append(UpArrow);
        arrow4 = false;
        ShowPriceFiltering()
    }
    else
    {
        let DownArrow = document.createElement("i");
        DownArrow.setAttribute("class","arrow down");
        document.querySelector("#PriceUpDownArrowBox").append(DownArrow);
        arrow4 = true;
        ShowPriceFiltering()
    }
})
function ShowPriceFiltering()
{
    if(arrow4 == false)
    {
        document.querySelector("#PriceFilterBox").style.padding = ".5vw"
        document.querySelector("#PriceFilterBox").style.opacity = 1;
        // document.querySelector("#PriceFilterBox").style.width = "97%";
        document.querySelector("#PriceFilterBox").style.height = "10.5vw";

    }
    else
    {
        document.querySelector("#PriceFilterBox").style.padding = "0vw";
        // document.querySelector("#PriceFilterBox").style.width = "97%";
        
        document.querySelector("#PriceFilterBox").style.opacity = 0;
        document.querySelector("#PriceFilterBox").style.height = 0;

    }
    console.log("arrow :",arrow4);
}

var array = [{i : 1},{i : 2},{i : 3},{i : 4},{i : 5},{i : 6},{i : 7},{i : 8},{i : 9},{i : 10},{i : 11},{i : 12}];
let RecentalyViewData = JSON.parse(localStorage.getItem("RecentalyViewProduct"));
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