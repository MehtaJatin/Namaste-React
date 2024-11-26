const rootDiv = document.createElement("div");
const textNode = document.createTextNode("hello");
rootDiv.id = "root";
rootDiv.appendChild(textNode);


const heading = React.createElement("h1", {id: "heading1", color:"red"}, "Hello World from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root.render([heading, heading]);
root1.render([heading]);


console.log(rootDiv);



