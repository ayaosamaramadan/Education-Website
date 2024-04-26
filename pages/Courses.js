let HEAD = document.getElementById("heading");
      let DARK = document.getElementById("dark");
      let DEFULT = document.getElementById("defult");
      let F1 = document.getElementById("f1");
      let F2 = document.getElementById("f2");
      let F3 = document.getElementById("f3");
      let F4 = document.getElementById("f4");
      DARK.onclick = function () {
        document.body.style.cssText =
          "background-color:#000;background-image:linear-gradient(to right,rgba(41, 3, 3, 0.525),#073655);";

        DARK.style.cssText = "border: 2px solid white;";
        DEFULT.style.cssText = "border: 0px ";
        HEAD.style.cssText =
          " background-color:rgb(61, 108, 139);text-align: center;color: #fff;text-transform: uppercase;font-size: 3rem;";
        F1.style.cssText =
          "margin-left:90px;color:white;font-size:35px;font-weight:500;text-transform:uppercase;margin-top:10px;height:-100px;";
        F2.style.cssText =
          "margin-left:90px;color:white;font-size:35px;font-weight:500;text-transform:uppercase;margin-top:10px;height:-100px;";
        F3.style.cssText =
          "margin-left:90px;color:white;font-size:35px;font-weight:500;text-transform:uppercase;margin-top:10px;height:-100px;";
        F4.style.cssText =
          "margin-left:90px;color:white;font-size:35px;font-weight:500;text-transform:uppercase;margin-top:10px;height:-100px;";
      };

      DEFULT.onclick = function () {
        document.body.style.cssText =
          "background-color: blueviolet;background-image: linear-gradient(to right,rgba(41, 3, 3, 0.525),#2980b9);";
        DEFULT.style.cssText = "border: 2px solid white;";
        DARK.style.cssText = "border: 0px ";
        HEAD.style.cssText =
          " background-color: rgb(97, 61, 139);text-align: center;color: #fff;text-transform: uppercase;font-size: 3rem;";
        F1.style.cssText =
          "margin-left:90px; color:black;font-size:35px;font-weight:500;text-transform:uppercase;margin-top:10px;height:-100px;";
      };