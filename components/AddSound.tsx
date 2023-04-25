import { useState } from "react"
import { doc, setDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

const AddSound: React.FC = () => {

    const [name, setName] = useState('')
    const [url, setUrl] = useState('')

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value)
    }

    const handleAdd = async () => {
        await setDoc(doc(db, "sounds", name), {
            name: name,
            url: url
        })
        setName('')
        setUrl('')
    }

    return (
         <div className="flex flex-col w-full items-center justify-center gap-5 p-5 border h-56">
<input type="text" placeholder="Name" value={name} onChange={handleNameChange} className="input input-bordered input-primary w-full max-w-xs" />
<input type="text" placeholder="url" value={url} onChange={handleUrlChange} className="input input-bordered input-secondary w-full max-w-xs" />
             <button onClick={handleAdd} className="btn btn-primary">Add Sound</button>
        </div>

    )
}

export default AddSound
