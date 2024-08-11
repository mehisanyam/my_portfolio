var cursor = document.querySe1ector(".cursor");
            var cursor2 = document.querySe1ector(".cursor2");
            document. addEventListener( "mousemove" , function(e){
                cursor.style.cssText=cursor2.style.cssText = "left: " + e.c1ientX + "px; top: " + e.clientY + "px;";});
