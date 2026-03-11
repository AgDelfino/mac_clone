import useMacbookStore from "../store";
import clsx from "clsx";

const ProductViewer = () => {
    const {color, setColor, scale, setScale} = useMacbookStore()

    return (
        <section id="product-viewer">
            <h2>Take a closer look.</h2>
            <div className="controls">
                <p className="info">MacBook Pro {scale === 0.06 ? '14"' : '16"'} {color === '#adb5bd' ? 'Silver' : 'Space Black'}</p>
                <div className="flex flex-center gap-5 mt-5">
                    <div className="color-control">
                       <div 
                            onClick={() => setColor('#adb5bd')} 
                            className={clsx('bg-neutral-300', color === '#adb5bd' && 'active')}/>
                        <div    
                            onClick={() => setColor('#2e2c2e')} 
                            className={clsx('bg-neutral-900', color === '#2e2c2e' && 'active')}/>
                    </div>
                    <div className="size-control">
                        <div    
                            onClick={() => setScale(0.06)} 
                            className={clsx(scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white' )}>
                                14"
                            </div>
                        <div    
                            onClick={() => setScale(0.08)} 
                            className={clsx(scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white' )}>
                                16"
                            </div>
                    </div>
                </div>
            </div>
            <p>RENDERING CANVAS</p>
        </section>
    )
}

export default ProductViewer;