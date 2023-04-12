import { getShoppingCart } from "../utilities/fakedb";

const jobLoader = async()=>{
    const loadedJob = await fetch('datas.json');
    const job = await loadedJob.json();

const storedCart = getShoppingCart();

const savedJob = [];

    for(const id in storedCart){
        const addedJob = job.find(jb => jb.id === id);
        if(addedJob){
            const quantity = storedCart[id]
            addedJob.quantity = quantity;
            savedJob.push(addedJob);
        }
    }
    return savedJob;
}

export default jobLoader