
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


var LoginName = JSON.parse(localStorage.getItem("MinimalistLoginName"))||[];

if(LoginName.length == 0)
{
    console.log(1);
    LoginName.push("Login");
    LoginName.push("Login");
}
var LogOut = JSON.parse(localStorage.getItem("MinimalistLogOut"))||[];
if(LogOut.length == 0)
{
    console.log(1);
    LogOut.push("SignUp");
    LogOut.push("SignUp");
}
var show = JSON.parse(localStorage.getItem("MinimalistShow"))||[];
if(show.length == 0)
{
    console.log(1);
    show.push("show");
    show.push("show");
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

var Showing = JSON.parse(localStorage.getItem("MinimalistShow"));

if((Showing[Showing.length-1] == "NotShow"))
{
    console.log(1);
    window.location.href = "account.html";
    // document.querySelector("#login-form-div").innerHTML = "";
}
else
{
    document.querySelector("form").addEventListener("submit",LogIn);
    localStorage.setItem("MinimalistLoginName",JSON.stringify(LoginName));
    localStorage.setItem("MinimalistLogOut",JSON.stringify(LogOut));
    localStorage.setItem("MinimalistShow",JSON.stringify(show));

    var Loginname = JSON.parse(localStorage.getItem("MinimalistLoginName"));

    var Loginname = JSON.parse(localStorage.getItem("MinimalistLoginName"));
    // document.querySelector(".Login").innerHTML = Loginname[Loginname.length-1];

    var LogOut = JSON.parse(localStorage.getItem("MinimalistLogOut"));
    // document.querySelector(".SignUp").innerHTML = LogOut[LogOut.length-1];

    function logout()
    {
        //console.log(1);
        if(LogOut[LogOut.length-1] == "LogOut")
        {
            //console.log(1);
            alert("You want to LogOut");
            LogOut[1] = ("SignUp");
            LoginName[1] = ("Login");
            show[1] = ("show");
            localStorage.setItem("MinimalistLogOut",JSON.stringify(LogOut));
            localStorage.setItem("MinimalistLoginName",JSON.stringify(LoginName));
            localStorage.setItem("MinimalistShow",JSON.stringify(show));
            window.location.href = "login.html";
        }
        else
        {
            console.log(1);
            
            //
            //alert("signup");
            window.location.href = "signup.html";
        }
    }

    function login()
    {
        if(Loginname[Loginname.length-1] != "Login")
        {
        
            window.location.href = "login.html";
        }
        else
        {
            window.location.href = "login.html";
        }
    }

    var SignUpData = JSON.parse(localStorage.getItem("MinimalistSignupData"));
    function LogIn(event)
    {
        event.preventDefault();

        let Email = document.querySelector("#email").value;
        let Password = document.querySelector("#password").value;

        CheckLogin(Email,Password,SignUpData);
    }

    var count = 0;
    function CheckLogin(Email,Password,SignUpData)
    {
        // console.log(1);
        console.log('SignUpData:', SignUpData)
        SignUpData.map(function(element,index)
        {
            if((Email == element.Email) && (Password == element.Password))
            {   
                count++;
                alert("Successfully Login");
                LoginName[1] = (element.Name);
                console.log('element.Name:', element.Name)
                LogOut[1] = ("LogOut");
                show[1] = ("NotShow");
                localStorage.setItem("MinimalistLogOut",JSON.stringify(LogOut));
                localStorage.setItem("MinimalistLoginName",JSON.stringify(LoginName));
                localStorage.setItem("MinimalistShow",JSON.stringify(show));
                //document.querySelector("#SignUp").
                window.location.href = "account.html";
            }
        });
        if(count == 0)
        {
            alert("Invalid Credentials Try Again");
        }
    }    
}
