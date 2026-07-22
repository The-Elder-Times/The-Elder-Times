function open_page(page)
{
	localStorage.setItem("documentations_page",page);
	parent.document.getElementById("documentations_iframe").src=page;
}
