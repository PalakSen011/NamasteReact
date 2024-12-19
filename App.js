const heading = React.createElement("h1", {id: 'heading'}, "hello world from react "); //this is an object.
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);//root.render:-takes the object converting into h1 tag
//  i .e ReactElemnt(Object)=>HTML(Browser Understands)