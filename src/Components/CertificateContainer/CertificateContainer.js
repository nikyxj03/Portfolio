import './CertificateContainer.css'
import uniqid from 'uniqid'

function CertificateContainer({certificate}){
    return(
        <div className='certificate'>
            <h3>{certificate.name}</h3>

            <p className='details' > Acquired date : {certificate.date}</p>
            <p className='details'> Validiity: {certificate.validity}</p>
        </div>
    )
}

export default CertificateContainer;