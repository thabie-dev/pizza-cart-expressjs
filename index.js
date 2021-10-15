const factoryCart = require('./pizza-cart')
const { request } = require('express');
const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const PORT =  process.env.PORT || 3018;

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

let counter = 0;
let cart = factoryCart()


app.get('/', function(req, res) {
	var data1 = cart.getShow()
	var data2 = cart.getSmall()
	var med = cart.getShow()
	var medi = cart.getMedium()
	var lar = cart.getShow()
	var larg = cart.getLarge()
	res.render('index', {
		data: data1, 
		data2: data2,
		medium: med,
		mdm:medi,
		lge:lar,
		lrg:larg
	});
});

app.post('/buy', function(req, res) {
	var data =req.body.add
	console.log(data)
	if(data ==='small'){
		cart.setShow()
		var data1 = cart.getShow()
		console.log(data1)
	}
	else if(data ==='medium'){
		cart.setShow()
		var med = cart.getShow()
		console.log(med)	
	}
	else if(data ==='large'){
		cart.setShow()
		var lar = cart.getShow()
		console.log(lar)	
	}
	else{
		
	}
	res.redirect('/');

});

// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});


