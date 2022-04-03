
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