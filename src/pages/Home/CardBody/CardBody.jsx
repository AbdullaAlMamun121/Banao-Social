import React from 'react';
import { MdOutlineLocationOn } from 'react-icons/md';
import { FaPen } from 'react-icons/fa';
import { BiErrorCircle, BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiOutlineEye} from 'react-icons/ai';
import { FaShareAlt } from 'react-icons/fa';
import './CardBody.css';
import userImage from '../../../assets/rectangle-1.png';
const CardBody = () => {
    return (
        <div className="container mx-auto row row-cols-1 row-cols-md-2 g-4 mt-5">
            {/* left side */}
            <div className="col col-md-8">
                <div className="card h-100">
                    {/* Large Device */}
                    <div className="large-device">
                        <img src="large-device-image.jpg" className="card-img-top" alt="Large Device Image" />
                        <div className="card-body">
                            <p>Article</p>
                            <div className='d-flex'>
                                <div className="flex-grow-1">
                                    <h5 className="card-title">What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                                </div>
                                <div className="col col-1 me-0">
                                    <BiDotsHorizontalRounded className="fs-4"></BiDotsHorizontalRounded>
                                </div>
                            </div>
                            <p className="card-text">
                                This is a longer card with supporting text below as a natural lead-in to additional content. This content is
                                a little bit longer.
                            </p>
                        </div>
                        {/* card footer section */}
                        <div className='d-flex align-items-center'>
                            <div className='d-flex flex-grow-1 mt-4'>
                                <div className='ms-3 mb-4 me-3'>
                                    <img  src={userImage} alt="user image" />
                                </div>
                                <div className='mt-2'>
                                    <h5>Jenifer lopez</h5>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div>
                                    <AiOutlineEye></AiOutlineEye>
                                    <span>1.4k views</span>
                                </div>
                                <div className='ps-5 pe-5'>
                                    <button className='border border-0 ps-2 pe-2'><FaShareAlt></FaShareAlt></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Small Device start */}
                    <div className="small-device">
                        <img src="small-device-image.jpg" className="card-img-top" alt="Small Device Image" />
                        <div className="card-body">
                            <p>Article</p>
                            <h5 className="card-title">Smaller Device Title</h5>
                            <p className="card-text">This is a card for smaller devices.</p>
                        </div>
                    </div>
                    {/* Small Device end */}


                </div>
            </div>
            {/* right side */}
            <div className="col col-md-4 d-none d-md-block d-lg-block">
                <div className="h-100">
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                        <MdOutlineLocationOn style={{ marginLeft: '25px' }} />
                        <input className='w-75 p-3' type='text' placeholder='Noida, India' style={{ border: 'none', borderBottom: '1px solid black' }} />
                        <FaPen style={{ marginLeft: '-15px' }} />
                    </span>
                </div>
                <div className='row ms-4' style={{ marginTop: "43px" }}>
                    <div className='col col-md-1'>
                        <BiErrorCircle></BiErrorCircle>
                    </div>
                    <div className='col col-md-11'>
                        <p>Your location will help us serve better and extend a personalised experience.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CardBody;