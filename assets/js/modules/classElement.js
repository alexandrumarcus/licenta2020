export class domElement {
	constructor(className, elementName) {
		this.className = className;
		this.elementName = elementName;
		this.elementName.innerHtml = "<div>hello</div>";
		this.elementName.onclick = this.onClick.bind(this);
	}

	log(){
		console.log('a');
		
	}

	onclick() {
		console.log('a');
	}
}