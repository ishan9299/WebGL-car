const ONE3D_CDN_PATH = "https://demo.one3d.in/ee_suv/";
const DIV_ID = "one3d";
const ONE3D_URL = ONE3D_CDN_PATH.concat("one3d/");
const ONE3D_MODEL_ID = "SUV";
const ONE3D_VARIANT_ID = "SUV";

console.log(ONE3D_URL);

let one3Dscript = document.createElement("script");
one3Dscript.src = "https://demo.one3d.in/ee_suv/one3d/assets/SUV/one3d_functions.js";
one3Dscript.type = "text/javascript";
one3Dscript.onload = function()
{
	let initOptions = {
		showDefaultLoader: true,
		color: "RedCrystalMetallic",
	};

	ONE3D.init(DIV_ID, ONE3D_URL, ONE3D_MODEL_ID, ONE3D_VARIANT_ID, initOptions)
		.then((successData) => {
			console.log("init success: ", successData);

			let registerClickActionOptions = {
				onEventClicked: (message) => {
					console.log(message)
				},
				onEventComplete: (message) => {
					console.log(message)
				},
			}

			ONE3D.registerClickAction(registerClickActionOptions);
			ONE3D.toggleHotspot(true)
		})
		.catch((error) => {
			console.log("init error: ", error);
		});
};
document.getElementsByTagName("head")[0].appendChild(one3Dscript);

let exteriorButton = document.getElementById("exterior");
let interiorButton = document.getElementById("interior");
let backSeatButton = document.getElementById("backseat");
let frontSeatButton = document.getElementById("frontseat");

exteriorButton.addEventListener("click", function(){
	ONE3D.exteriorView()
		.then((success) => {
			console.log(success);
		})
		.catch((error) => {
			console.log(error);
		});
	interiorButton.style.display = "block";
	exteriorButton.style.display = "none";
	backSeatButton.style.display = "none";
	frontSeatButton.style.display = "none";
})

interiorButton.addEventListener("click", function(){

	ONE3D.interiorView()
		.then((success) => {
			console.log(success);
		})
		.catch((error) => {
			console.log(error);
		});


	interiorButton.style.display = "none";
	exteriorButton.style.display = "block";
	backSeatButton.style.display = "block";

})

backSeatButton.addEventListener("click", function(){
	ONE3D.backseatView()
		.then((success) => {
			console.log(success)
		})
		.catch((error) => {
			console.log(error)
		});
	backSeatButton.style.display = "none";
	frontSeatButton.style.display = "block";
});

frontSeatButton.addEventListener("click", function(){
	ONE3D.frontseatView()
		.then((success) => {
			console.log(success)
		})
		.catch((error) => {
			console.log(error)
		});
	backSeatButton.style.display = "block";
	frontSeatButton.style.display = "none";
});

let colorSelect = document.getElementById("colorSelect");
colorSelect.addEventListener("change", function() {
	let selectedValue = document.getElementById("colorSelect").value;
	console.log("Selected option: " + selectedValue);

	ONE3D.changeColor(selectedValue);
});
