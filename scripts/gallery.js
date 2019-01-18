function showPic(whichPic){
	console.log(whichPic.childNodes)
	console.log("invoke showPic")
	// console(this.childNodes);
	// console(GSON.stringfy(this))
	if (whichPic) {
		let source = whichPic.getAttribute("href")
		let galleryPlaceHolder = document.getElementById("placeholder")
		galleryPlaceHolder.setAttribute("src", source)

		let picTitle = whichPic.getAttribute("title")
		let descriptionNode = document.getElementById("description")
		descriptionNode.childNodes[0].nodeValue = picTitle
	}
}

function countBody(){
	let bodyElement = document.getElementsByTagName("body")[0]
}

function prepareGallery(){
	if (!document.getElementById) {
		console.error("unspport getElementById")
		return false
	}
	if (!document.getElementsByTagName) {
		console.error("unspport getElementsByTagName")
		return false
	}

	let galley = document.getElementById("imageGallery")
	if (!galley) {
		return
	}
	let nodeAList = galley.getElementsByTagName('a')
	for (let i = 0 ; i < nodeAList.length; i++) {
		let currentNodeA = nodeAList[i]
		currentNodeA.onclick = ()=>{
			showPic(currentNodeA)
			return false
		}
	}
}

function extra(){
	let nodeItem2 = document.getElementById("item2")
	if (nodeItem2) {
		nodeItem2.onclick = openGoogle
	}
}

function openGoogle(){
	popup("https://www.google.com")
	return false
}

function popup(url){
	window.open(url,"popup window","1123")
}

//挺有用的方法
function addLoadEvent(func){
	let currentOnload = window.onload
	if (currentOnload && typeof currentOnload == "function") {
		window.onload = ()=>{
			currentOnload()
			func()
		}
	}else{
		window.onload = func
	}
}

addLoadEvent(prepareGallery)
// addLoadEvent(extra)
// addLoadEvent(()=>{
// 	let elementP = document.createElement("p")
// 	elementP.appendChild(document.createTextNode("new insert txst node"))
// 	insertAfter(elementP, document.getElementById("imageGallery").getElementsByTagName("li")[0])
// })

// addLoadEvent(()=>{
// 	alert("hello world")
// })

// console.log("test")

//============================ util =============================

function insertAfter(newElement, targetElement){
	let parent = targetElement.parentNode
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement)
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling)
	}
}