window.addEventListener("DOMContentLoaded", () => {
	const DEFAULT_PAGE="../global_resources/documentations/main_page.html";
	const frame=document.getElementById("documentations_iframe");
	let page=localStorage.getItem("documentations_page");
	if(page===null){
		page=DEFAULT_PAGE;
	}
	frame.src=page;
});
