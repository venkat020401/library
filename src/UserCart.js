import React from 'react'

function UserCart({ cartList, removeCart }) {
  return (
    <ol className="list-group list-group-numbered shadow">
      {
        cartList.map((data, index) => {
          return <li key={index} className="list-group-item d-flex p-2">
            <div >
              {data.title}
              <br />
              Author : {data.author}<br />
              <button className=" btn btn-dark btn-sm" onClick={() => removeCart(data)}>Remove</button>
              <a className='btn btn-dark btn-sm mx-2' href={`https://en.wikipedia.org/wiki/${data.title}`} target="_blank"
                rel="noreferrer">
                Brows
              </a>
            </div>
          </li >
        })
      }

    </ol >
  )
}

export default UserCart