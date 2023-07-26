var a=[2,3,7,8,9,4,10];
var b=["cricket","volleyball","kabaddi"];
var c=[ { 
		id:1,
		name:"bike",
		price:150000,
		image:"image/bike1.jpg"
		},
		{id:2,
		name:"bike",
		price:250000,
		image:"image/bike2.jpg"
		},
		{id:3,
		name:"bike",
		price:100000,
		image:"image/bike4.jpg"
		},
		{id:4,
		name:"cycle",
		price:10000,
		image:"image/cycle1.jpg"
		},
		{id:5,
		name:"cycle",
		price:8000,
		image:"image/cycle2.jpg"
		}
		]
	document.write("first array values are:&nbsp;&nbsp;"+a+"<br><br>")	
	document.write("Using forEach method<br>");
	a.forEach(function(e){
		if(e%2!=0)
		{
			console.log(e);
			
			document.write("odd numbers from first array&nbsp;&nbsp;"+e+"<br>");
		}
		
	})
	document.write("<br>");
	var output=a.filter(function(e){
		return e%2==0;
		
	})
	console.log(output);
	document.write("Using filter method<br>");
	document.write("Even numbers from first array &nbsp;&nbsp;"+output+"<br><br><br>");
	
	
	document.write("Second array values are: &nbsp;"+b+"<br><br>");
	var output=b.map(function(e){
		return e.toUpperCase();
	})
	console.log(output);
	document.write("uisng map method toUpperCase:<br>");
	document.write(output+"<br><br>");
	
	
	
	var output=c.filter(function(e){
		return e.name=="bike";
		
	})
	console.log(output);
	 document.write("The bike price amount of object <br>");
	var price=output.map(function(e){
		
		document.write(e.price+"<br>")
		return price=400000;
	})
	console.log(price);
	document.write("The price amount now changed &nbsp;"+price);	
	
		
		
		
			