const DEFAULT_PAGE="../global_resources/documentations/index.html";
const frame=document.getElementById("documentations_frame");
let page=localStorage.getItem("documentations_page");
if(page===null){
	page=DEFAULT_PAGE;
}
frame.src=page;
