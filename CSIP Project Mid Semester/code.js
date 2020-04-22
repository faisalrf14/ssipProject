
	
	var a=0;
	function atomsbm(){
	a= document.getElementById("atom").value;
	console.log(a);	
	}
	
	var t=0;
	function wghtsbm(){
	t= document.getElementById("wght").value;
	console.log(t);
	}
	
	var x=0;
	function myFunction(){
    x = Math.floor((Math.random() * 10) + 10);
	document.getElementById("bbs").value = x;
	document.getElementById("bbs").innerHTML = x + "%";
	console.log(x);
	}
	
	var total=0;
	var qq=t*x;
	var ee=qq/(a/100);
	
	function calc(){
	qq=t*x;
	ee=qq/a;
	
	total = ee*100;
	document.getElementById("hasil").value= total + "%";
	console.log(total);
	}

	function ref(){

		document.getElementById('atom').value= " "; 
		document.getElementById('wght').value = " ";
		document.getElementById('hasil').value = " ";
		document.getElementById("bbs").innerHTML = " ";

	}
	//end

	function loadH() {
				document.getElementById("tombol").style.opacity ="1";

                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        document.getElementById("hid").innerHTML =
                        this.responseText;
                    }
                };
                xhttp.open("GET", "hidrogen.txt", true);
                xhttp.send();
            }

    function loadLi() {
    			document.getElementById("tombol").style.opacity ="1";
                
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        document.getElementById("hid").innerHTML =
                        this.responseText;
                    }
                };
                xhttp.open("GET", "litium.txt", true);
                xhttp.send();
            }

    function loadNa() {
    			document.getElementById("tombol").style.opacity ="1";
                
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        document.getElementById("hid").innerHTML =
                        this.responseText;
                    }
                };
                xhttp.open("GET", "natrium.txt", true);
                xhttp.send();
            }

    function loadK() {
    			document.getElementById("tombol").style.opacity ="1";
                
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        document.getElementById("hid").innerHTML =
                        this.responseText;
                    }
                };
                xhttp.open("GET", "kalium.txt", true);
                xhttp.send();
            }

    function loadRb() {
    			document.getElementById("tombol").style.opacity ="1";
                
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        document.getElementById("hid").innerHTML =
                        this.responseText;
                    }
                };
                xhttp.open("GET", "rubidium.txt", true);
                xhttp.send();
            }

     function loadCs() {
     			document.getElementById("tombol").style.opacity ="1";
                
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        document.getElementById("hid").innerHTML =
                        this.responseText;
                    }
                };
                xhttp.open("GET", "cesium.txt", true);
                xhttp.send();
            }

    function loadFr() {
    			document.getElementById("tombol").style.opacity ="1";
                
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        document.getElementById("hid").innerHTML =
                        this.responseText;
                    }
                };
                xhttp.open("GET", "fransium.txt", true);
                xhttp.send();
            }

    function loadBe() {
    			document.getElementById("tombol").style.opacity ="1";
                
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        document.getElementById("hid").innerHTML =
                        this.responseText;
                    }
                };
                xhttp.open("GET", "berilium.txt", true);
                xhttp.send();
            }

    function tekan() {
     			document.getElementById("tombol").style.opacity = "0";

                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        document.getElementById("hid").innerHTML =
                        this.responseText;
                    }
                };
                xhttp.open("GET", "hapus.txt", true);
                xhttp.send();
            }
    