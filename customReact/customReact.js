function customElement(reactElements, mainContainer){
    // const domElement = document.createElement(reactElements.type)
    // domElement.setAttribute('href', reactElements.props.href)
    // domElement.setAttribute('target', reactElements.props.target)
    // domElement.innerHTML = reactElements.children

    // mainContainer.appendChild(domElement)


    const domElement = document.createElement(reactElements.type)
    domElement.innerHTML = reactElements.children
    for (const prop in reactElements.props) {
        domElement.setAttribute(prop, reactElements.props[prop])
    }

    mainContainer.appendChild(domElement)
}

const reactElements = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click here to visit google"
}

const mainContainer = document.getElementById('root')

customElement(reactElements, mainContainer)