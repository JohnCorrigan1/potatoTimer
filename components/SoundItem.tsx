import { useRef } from "react";

const SoundItem: React.FC<{name: string, source: string}> = (props) => {

const soundRef = useRef<any>(null);

    const handleSound = () => {
        soundRef.current.play();
    }

    return (
        <div>
            <h1>{props.name}</h1>
            <button onClick={handleSound} className="btn btn-primary">Try Me</button>
            <audio ref={soundRef} src={props.source} />
        </div>
    )
}

export default SoundItem;
