//6. useHover()
/*
React
Hooks
met this in an interview?
 17
Add to my list
Share

  2705 accepted / 12897 tried

ads via Carbon
Explore design possibilities with Figma. Build prototypes, and easily translate your work into code.
ads via Carbon
It is common to see conditional rendering based on hover state of some element.

We can achive it by CSS pseduo class :hover, but for more complex cases it might be better to have state controlled by script.

Now you are asked to create a useHover() hook.

function App() {
  const [ref, isHovered] = useHover()
  return <div ref={ref}>{isHovered ? 'hovered' : 'not hovered'}</div>
}


*/


import{ useRef,Ref,useEffect,useState} from 'react';
export function useHover<T extends HTMLElement>():[Ref<T>,boolean]{
    const [state,setState] =useState(false);
    const ref  =useRef<T>(null);
    useEffect(()=>{
        setState(false);
        const setIsHovered =()=>{
            setState(true);
        };
        const setIsNotHovered=()=>{
            setState(false);
        }
        ref.current?.addEventListener("mouseenter",setIsHovered);
    ref.current?.addEventListener("mouseleave",setIsNotHovered)   
return ()=>    {
    ref.current?.removeEventListener("mouseover",setIsHovered);
    ref.current?.removeEventListener("mouseleave",setIsNotHovered);

}
},[ref.current])
return
}
