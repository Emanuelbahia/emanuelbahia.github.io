import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import "./loading.css";

export default function Loading() {
  return (
    <div className='container-loading'>
        <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button> 
    </div>
  )
}
