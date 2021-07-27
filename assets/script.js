const iconsLike = [...document.querySelectorAll(".far")];

iconsLike.forEach(icon => {

	icon.addEventListener("click", () => {
	
		if(icon.classList.contains("far")){
			icon.classList.remove("far");
			icon.classList.add("fas");
		}else{
			icon.classList.remove("fas");
			icon.classList.add("far");
		}	
	})
})

