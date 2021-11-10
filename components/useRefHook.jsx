import { useRef } from 'react';
function UseRefHook() {
    const elementRef = useRef();
    const buttonRef = useRef()
    const myFunction = () => {
        console.log(elementRef.current)
        elementRef.current.textContent = `I'm using "useRef" Hooks.`
        elementRef.current.style.fontSize = "20px"
        buttonRef.current.style.backgroundColor = "green"
    };
    const myFunction2 = () => {
          console.log(elementRef.current)
        elementRef.current.textContent = `I'm using "useRef" Hooks-2.`
        elementRef.current.style.fontSize = "25px"
        buttonRef.current.style.backgroundColor = "red"
    };
    return (
        <>
            <div ref={elementRef}>
                I'm an element
        </div>
            <button ref={buttonRef} className="btn btn-lg" onClick={myFunction} onDoubleClick={myFunction2}>Click me</button>

        </>
    );
}
export default UseRefHook