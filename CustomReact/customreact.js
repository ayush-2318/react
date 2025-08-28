

function customRender(reactElement,mainConatainer){
    /*
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.Children;
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
    mainConatainer.appendChild(domElement);
    */
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
   for(const prop in reactElement.props){
    if(prop==='children') continue;
    domElement.setAttribute(prop,reactElement.props[prop]);
   }
    mainConatainer.appendChild(domElement);
}

const reactElement={
    type:'a',
    props: {
        href:"https://google.com",
        target:'_blank' 
    },
    children:'Click me to visit google'
}

const mainConatainer=document.querySelector("#root")

customRender(reactElement,mainConatainer)