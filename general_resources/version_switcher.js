function decide_version(width_breakdown,mobile_version_path,desktop_version_path){
	if(window.innerWidth>=width_breakdown){
		location.replace(desktop_version_path);
	}else{
		location.replace(mobile_version_path);
	}
}

function switch_to_desktop(width_breakdown,desktop_version_path){
	function check(){
		if(window.innerWidth>=width_breakdown){
			location.replace(desktop_version_path);
		}
	}
	check();
	window.addEventListener("resize",check);
}

function switch_to_mobile(width_breakdown,mobile_version_path){
	function check(){
		if(window.innerWidth<width_breakdown){
			location.replace(mobile_version_path);
		}
	}
	check();
	window.addEventListener("resize",check);
}
