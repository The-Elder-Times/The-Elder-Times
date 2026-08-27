function decide_version(mobile_version_path,desktop_version_path){
    if(window.innerWidth<window.innerHeight){
        location.replace(mobile_version_path);
    }else{
        location.replace(desktop_version_path);
    }
}
function switch_to_desktop(desktop_version_path){
    function check(){
        if(window.innerWidth>window.innerHeight){
            location.replace(desktop_version_path);
        }
    }
    check();
    window.addEventListener("resize",check);
}
function switch_to_mobile(mobile_version_path){
    function check(){
        if(window.innerWidth<window.innerHeight){
            location.replace(mobile_version_path);
        }
    }
    check();
    window.addEventListener("resize",check);
}