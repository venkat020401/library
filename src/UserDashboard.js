import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import UserBooks from './UserBooks'
import UserCart from './UserCart'

function UserDashboard({ bookList, setList }) {

    const [cartList, setCart] = useState([]);

    useEffect(() => {

        getUsers();

    }, []);

    let getUsers = async () => {
        try {
            const users = await axios.get("https://63a149e3e3113e5a5c514a70.mockapi.io/books");
            setList(users.data);
        }
        catch (error) {
            console.log(error)
        }
    }

    let AddtoCart = (product) => {
        setCart([...cartList, { ...product, quantity: 1 }]);
    }

    let removeCart = (product) => {
        let itemIndex = cartList.findIndex((item) => product.id === item.id);
        cartList.splice(itemIndex, 1);
        setCart([...cartList]);
    }

    return (
        <>
            <div class="container-fluid">
                <div class="card shadow mb-4 mt-2">
                    <div class="card-header d-sm-flex align-items-center justify-content-between mb-4 ">
                        <h6 class="m-0 font-weight-bold text-dark">Welcome.!!</h6>
                        <Link to={"/"} class="d-none d-sm-inline-block btn btn-sm btn-dark shadow-sm float-center"><i
                            class="fas fa-download fa-sm text-white-50"></i> Logout</Link>
                    </div>
                    <div class="card-body">
                        <div className='container-book mx-5'>
                            <div className='row'>

                                <div className='col-lg-10' >
                                    <UserBooks AddtoCart={AddtoCart} cartList={cartList} bookList={bookList} removeCart={removeCart} />
                                </div>

                                <div className='col-lg-2 shadow'>
                                    <h5 className='text-center my-2'>My 🖤 Favorites  </h5>

                                    <UserCart AddtoCart={AddtoCart} cartList={cartList} bookList={bookList} removeCart={removeCart} />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>



        </>
    )
}

export default UserDashboard