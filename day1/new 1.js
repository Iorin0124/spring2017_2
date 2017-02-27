document.write("<br>らーにんぐ　じゃばーすくりぷとーん");

var sample = function(){
	console.log("これはjavascriptのサンプルです");
}();

var Cat = function(name){
	this.name = name;
	this.run = function(){
		console.log(this.name + "が走る");
	};
};

Cat .prototype.run = function(){
	console.log(this.name + "が走る");
};

var tama = new Cat("タマ");
tama.run();
console.log(tama.name);