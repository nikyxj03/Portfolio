import './Certificates.css'
import uniqid from 'uniqid'
import { certificates } from '../../Portfolio';
import CertificateContainer from '../CertificateContainer/CertificateContainer';



function Certificates(){
    return(
        <div>
            <h2 className='title'>
                Certificates
            </h2>

            <div className = 'certificateGrid'>
                {certificates.map((certificate) => (
                    <CertificateContainer key = {uniqid()} certificate = {certificate}/> 
                ))}
            </div>

        </div>
    )
}

export default Certificates;