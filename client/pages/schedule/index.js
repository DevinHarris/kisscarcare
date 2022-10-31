import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import axios from "axios";
import { useForm } from 'react-hook-form';
import AutoComplete from 'react-google-autocomplete';
import Layout from "../../components/Layout";
import styles from '../../styles/Schedule.module.css';

export default function SchedulePage() {
    const [schedule, setSchedule] = useState([]);
    const [vinData, setVinData] = useState(null)

    const { register, handleSubmit, reset } = useForm();
    const vinRef = useRef(null);

    const getVehicleInfo = async (e) => {

        e.preventDefault();

        const vinValue = vinRef.current;

        console.log(vinValue.value)
        
        try {
            const vehicleData = await axios.post('https://kisscarcare.herokuapp.com/', {
                vin: vinValue.value
            })

            setVinData(vehicleData.data.data);
        } catch (err) {
            console.log(err);
        }

        
    }

    return (
        <Layout title="Schedule your service - Kiss Car Care">
            <div className={styles.schedulePageCont}>
               <div className={styles.schedulePageHeader}>
                    <h1 className={styles.schedulePageHeading}>Schedule your detailing service</h1>
                    <p>First, tell us more about you and your car.</p>
               </div>

               <div className={styles.customerFormCont}>
                    <form className={styles.customerForm}>
                        <div className={styles.customerFormSection}>
                            <input className={styles.formInput} type="text" placeholder="First Name" {...register('firstName')}/>
                        </div>
                        <div className={styles.customerFormSection}>
                            <input className={styles.formInput}  type="text" placeholder="Last Name" {...register('firstName')}/>
                        </div>
                        <div className={styles.customerFormSection}>
                            <input className={styles.formInput}  type="email" placeholder="Email" {...register('email')}/>
                        </div>
                        <div className={styles.customerFormSection}>
                            <AutoComplete
                                apiKey="AIzaSyBEp62nHD_mPSr7wpVP_CAyCHnIy4v5Pik"
                                onPlaceSelected={(place) => console.log(place)} className={styles.formAddress} placeholder="Address"/>
                        </div>
                        <div className={styles.customerFormSection}>
                           <input type="text" placeholder="VIN" ref={vinRef} className={styles.formInputVin} />
                           <button className={styles.vehicleBtn} onClick={(e) => getVehicleInfo(e)}>Get Vehicle Information</button>
                        </div>
                           {
                                vinData ? (
                                    <div className={styles.customerFormSection}>
                                        <div className={styles.customerVehicleInfo}>
                                            <h3 className={styles.customerVehicleData}>Year: { vinData.year }</h3>
                                            <h3 className={styles.customerVehicleData}>Make: { vinData.make }</h3>
                                            <h3 className={styles.customerVehicleData}>Model: { vinData.model }</h3>
                                            <h3 className={styles.customerVehicleData}>Trim: { vinData.trim }</h3>
                                            <h3 className={styles.customerVehicleData}>Engine: { vinData.engine }</h3>
                                        </div>
                                    </div>
                                ) : null
                           }

                        <div className={styles.customerFormSection}>

                            <h2>Next, let's find a time that works for you.</h2>
                           <Link href="https://calendly.com/kisscarcare/">
                             <a className={styles.bookingBtn}>Continue Booking</a>
                           </Link>
                        </div>
                    </form>
               </div>
            </div>
        </Layout>
    )
}