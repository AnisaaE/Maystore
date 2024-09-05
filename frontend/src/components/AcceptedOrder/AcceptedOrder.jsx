import {Link } from 'react-router-dom';
const AcceptedOrder = () => {
  
  return (
    <div className="container text-center d-flex flex-column align-items-center justify-content-center bg-light" style= {{height: '70vh'}}>
      <h2 className="mb-4 display-5">Благодарим Ви за поръчката!</h2>
      <p className='lead' >Вашата поръчка е приета и ще бъде обработена до 1-2 работни дни.</p>
      <img
                    src={require("../../assets/images/smileFace.png")}
                    alt="smileFace"
                    className="my-3"
                    style={{ width: "18vh", height: "18vh" }}
                  />
      {/* You can display more order details here if available */}

      <Link
        style={{ color: '#6606a5' }}
        to={'/'}
      >
        Обратно към началната страница
      </Link>
    </div>
  );
};

export default AcceptedOrder;