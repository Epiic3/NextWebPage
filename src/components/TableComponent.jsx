"use client"

function TableComponent({ data }) {
  return(
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((product) => {
              return(
                <tr key={product.id}>
                  <th>{product.id}</th>
                  <th>{product.product_name}</th>
                  <th>{product.price}</th>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>   
  )
}

export default TableComponent;