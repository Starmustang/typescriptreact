import { useRef, useEffect, useState } from "react";
import { ImgHTMLAttributes } from "react";
 
type RandomFox = { 
    src: string
    onLazyLoad?: (img: HTMLImageElement) => void;
};

type ImageNative = ImgHTMLAttributes<HTMLImageElement>

type Props = RandomFox & ImageNative

export const RandomFox = ({
    src,
    onLazyLoad,
     ...imgProps
    }: Props): React.JSX.Element => {             
    const node = useRef<HTMLImageElement>(null);
    const [isLazyLoaded, setIsLazyLoaded] = useState(false);
    const [currentsrc, setcurrentSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=");

    useEffect(() => {        
        if (isLazyLoaded) {
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting || !node.current) {
                   return;
                }

                setcurrentSrc(src);
                observer.disconnect();
                setIsLazyLoaded(true)

                if (typeof onLazyLoad === "function") {
                    onLazyLoad(node.current);
                }
            })
        })

    //observe node
    if (node.current) {
        observer.observe(node.current);    
    }
    

    //desconectar
    return () =>{
        observer.disconnect
    }
    }, [src, onLazyLoad, isLazyLoaded]);
    
    return <img 
    ref={node} 
    src={currentsrc}
    {...imgProps}
    />
}