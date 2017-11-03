import _ from "lodash"
import "./style1.css"
import "./style2.css"
import "./some.less"

let component = () => {
	var element = document.createElement("div")
  
	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(["Hello", "webpack"], " ")
  
	return element
}
  
document.body.appendChild(component())