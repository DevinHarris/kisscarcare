import { useState, useEffect } from 'react';
import useSWR from 'swr';
import axios from 'axios'
import { useForm } from 'react-hook-form';
import Layout from '../../components/Layout';
import styles from '../../styles/Customers.module.css';

export default function CustomersPage() {
    const [customers, setCustomers] = useState([]);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
       const formReq = await axios.post('https://kisscarcare.herokuapp.com/customer/add', data);

       console.log(formReq);
       reset();
    };

    useEffect(() => {

        const fetchCustomers = async () => {
            const res = await fetch('https://kisscarcare.herokuapp.com/customers');
            const data = await res.json();
            
            setCustomers(data);
            console.log(data);
        }

        fetchCustomers();

    }, [])

    // const fetcher = (...args) => fetch(...args).then(res => res.json());
    // const { data, error } = useSWR('http://localhost:5000/customers', fetcher);

    return (
        <Layout title="Customers - Kiss Car Care">
            <div className={styles.CustomersPage}>
                <h1>Internal Customer List</h1>

                <div className={styles.formHeader}>
                    <h2>Customer Information</h2>
                </div>
               <div className={styles.customerFormCont}>
                <form className={styles.customerForm} onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="First Name" {...register('firstName')} />
                        <input type="text" placeholder="Last Name" {...register('lastName')} />
                        <input type="tel" placeholder="Phone Number" {...register('phoneNumber')} />
                        <input type="email" placeholder="Email" {...register('email')} />
                        <input type="text" placeholder="Address" {...register('address')} />
                        <input type="text" placeholder="City" {...register('city')} />
                        <input type="text" placeholder="Zipcode" {...register('zipCode')} />
                        <input type="text" placeholder="License Plate Number" {...register('licensePlate')} />
                        <button className={styles.formSubmitBtn}>Add new customer</button>
                        
                    </form>
               </div>
            </div>

            <div className={styles.customerListCont}>
                <h1>Customer List</h1>
                <div className={styles.customerList}>
                    <div className={styles.customerListHeader}>
                        <ul>
                            <li>First Name</li>
                            <li>Last Name</li>
                            <li>Phone Number</li>
                            <li>Address</li>
                            <li>Zipcode</li>
                            <li>Email</li>
                        </ul>
                    </div>
                    <div className={styles.customerListData}>
                        {
                            customers.map(customer => {
                                return (
                                    <>
                                        <span>{ customer.firstName }</span>
                                        <span>{ customer.lastName }</span>
                                        <span>{ customer.phoneNumber }</span>
                                        <span>{ customer.address }</span>
                                        <span>{ customer.zipode }</span>
                                        <span>{ customer.email }</span>
                                    </>
                                    
                                )
                            })
                        }
                    </div>
                </div>
            </div>           
        </Layout>
    )
}