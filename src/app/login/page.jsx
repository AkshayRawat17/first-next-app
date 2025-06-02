// import Link from 'next/link'
// import React from 'react'

// async function getAPIData() {
//     let response = await fetch("https://fakestoreapi.com/products")
//     return await response.json()
// }

// export default async function page() {
//     let data = await getAPIData()
//     console.log(data)
//     return (
//         <>
//             <h2>This is Login Page</h2>
//             <br />
//             <Link href="/">Back to Home Page</Link>
//             <br />
//             <br />

//             <table>
//                 <thead>
//                     <tr>
//                         <th>Product Id</th>
//                         <th>Product Name</th>
//                         <th>Product Price</th>
//                         <th>Product Rating</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         data?.map((item, index) => {
//                             <tr key={index}>
//                                 <td>{item.id}</td>
//                                 <td>{item.title}</td>
//                                 <td>{item.price}</td>
//                                 <td>{item.rating}</td>
//                             </tr>
//                         })
//                     }
//                 </tbody>
//             </table>

//         </>
//     )
// }


import Link from 'next/link'
import React from 'react'

async function getAPIData() {
    let response = await fetch("https://fakestoreapi.com/products")
    return await response.json()
}

export default async function Page() {
    let data = await getAPIData()
    console.log(data)
    return (
        <>
            <h2>This is Login Page</h2>
            <Link href="/">Back to Home Page</Link>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>${item.price}</td>
                                <td>{item.rating?.rate}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
