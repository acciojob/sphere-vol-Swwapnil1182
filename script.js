function volume_sphere() {
    //Write your code here
	const radius=parseFloat(document.getElementById("radius").value.trim())
	const volume=document.getElementById("volume")

		if (isNaN(radius) || radius < 0) {
		volume.value = "NaN";
		return;
	}
	const volres= (4 / 3) * Math.PI * Math.pow(radius, 3);

	volume.value=volres.toFixed(4)
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
