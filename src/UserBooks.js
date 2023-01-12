import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserBooks({ bookList, AddtoCart, cartList }) {

    return (

        <div className='row'>
            {
                bookList.map((data) => {
                    return (
                        <div className='col-lg-3' >
                            <div class="card shadow mb-4"  >
                                <img src={data.image} class="card-img-top" height={240} alt={data.title} />
                                <div class="card-body text-secondary">
                                    <h4 class="card-title">{data.title} </h4>
                                    <span>Author : {data.author}</span>
                                    <p>Published on : {data.published}</p>
                                    <a className='btn btn-dark btn-sm' href={`https://en.wikipedia.org/wiki/${data.title}`} target="_blank"
                                        rel="noreferrer">
                                        Brows
                                    </a>
                                    <button disabled={cartList.some(item => item.id === data.id)} className="btn btn-dark btn-sm mx-2" onClick={() => AddtoCart(data)}>{cartList.some(item => item.id === data.id) ? "Added to Favorite" : "Add to Favorite"}</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default UserBooks