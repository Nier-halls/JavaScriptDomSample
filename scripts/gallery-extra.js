addLoadEvent(prepareThumbnail)


function prepareThumbnail(){
	/*
	1.找到所有的a标签
	2.删除原有的textnode  removeChild
	2.创建img标签，并且设置css样式
	3.向a标签中添加img标签
	*/


	//step1
	let aNodeList = document.getElementsByTagName("a")

	let nodeLength = aNodeList.length
	for (var i = 0; i < nodeLength; i++) {
		let aNode = aNodeList[i]
		//创建img节点
		let imgNode = document.createElement("img")
		let picSrc = aNode.getAttribute("href")
		imgNode.setAttribute("src",picSrc)
		//设置alt 以及 css样式
		let title = aNode.getAttribute("title")
		imgNode.setAttribute("alt",title)
		imgNode.setAttribute("class","thumbnail")
		//移除节点a的 textnode  添加新创建的img节点
		let textNode = aNode.firstChild
		aNode.removeChild(textNode)
		aNode.appendChild(imgNode)
	}
}
