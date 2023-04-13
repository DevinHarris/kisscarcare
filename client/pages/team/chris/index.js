import { Helmet } from 'react-helmet';
import Nav from '../../../components/Nav';
import Profiles from '../../../components/Profiles';

export default function ChrisProfile() {

    return (
        <>
            <Helmet>
                <title>Chris Bridges - Kiss Car Care</title>
            </Helmet>
            <Nav />
           <Profiles />
        </>
    )
}