import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';


export default function CustomerInfo() {
    const [customerInfo, setCustomerInfo] = useState({});
    const router = useRouter();
    const { id } = router.query;
    
    useEffect(() => {
       
        if (!id) return;

        const getCustomerData = async () => {
            const res = await fetch(`http://localhost:5000/customer/${id}`);
            console.log(res);
        };

        getCustomerData();


    }, [id]);

    console.log(id);

    return (
        <div>Customer Page {id}</div>
    )
}