import React, { useContext, useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./index.scss";
import { Helmet } from 'react-helmet-async';
import { SerachContext } from '../../context/SearchContext';
const Add = () => {
    const { handleSearch, search } = useContext(SerachContext)
    const [sortproperty, setSortproperty] = useState(null)
    const [data, setData] = useState([])
    async function Getfetch() {
        try {
            await fetch("http://localhost:3100/products")
                .then(res => res.json())
                .then(data => setData(data))
        } catch (error) {
            console.log(error.messsage)
        }
    }
    useEffect(() => {
        Getfetch()
    }, [])

    async function handleSubmit(values) {
        await fetch("http://localhost:3100/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
        await Getfetch()
    }
    async function deleteItem(id) {
        await fetch("http://localhost:3100/products/" + id, { method: "DELETE" })
        await Getfetch()
    }
    return (
        <>
            <Helmet>
                <title>Add</title>
            </Helmet>
            <section id='add'>
                <div className='add_container'>
                    <div className='add_content'>
                        <h2>Add Products</h2>
                        <div className='add_form'>
                            <Formik
                                initialValues={{ img: '', name: '', price: '' }}
                                validationSchema={Yup.object({
                                    img: Yup.string()
                                        .required('Required'),
                                    name: Yup.string()
                                        .required('Required'),
                                    price: Yup.number().required('Required'),
                                })}
                                onSubmit={(values, { setSubmitting, resetForm }) => {
                                    handleSubmit(values)
                                    resetForm()
                                    setSubmitting(false);
                                }}
                            >
                                <Form>
                                    <h3><label htmlFor="img">Img Url</label></h3>
                                    <Field name="img" type="text" />
                                    <ErrorMessage name="img" />
                                    <h3><label htmlFor="name">Name</label></h3>
                                    <Field name="name" type="text" />
                                    <ErrorMessage name="name" />

                                    <h3><label htmlFor="price">Price</label></h3>
                                    <Field name="price" type="text" />
                                    <ErrorMessage name="price" />

                                    <button type="submit">Submit</button>
                                </Form>
                            </Formik>
                        </div>
                        <div className='input_sort'>
                            <input type="text" onChange={handleSearch} placeholder='Search by Name'/>
                            <button  className="button-74" role="button" onClick={() => setSortproperty(null)}>Default</button>
                            <button  className="button-74" role="button" onClick={() => setSortproperty({ property: "price", asc: true })}>Min-Max</button>
                            <button  className="button-74" role="button"onClick={() => setSortproperty({ property: "price", asc: false })}>Max-Min</button>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Img</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data
                                    .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
                                    .sort((a, b) => {
                                        if (sortproperty && sortproperty.asc) {
                                            return (a[sortproperty.property] > b[sortproperty.property]) ? 1 : ((b[sortproperty.property] > a[sortproperty.property]) ? -1 : 0)
                                        }
                                        else if (sortproperty && sortproperty.asc === false) {
                                            return (a[sortproperty.property] < b[sortproperty.property]) ? 1 : ((b[sortproperty.property] < a[sortproperty.property]) ? -1 : 0)
                                        } else {
                                            return 0
                                        }
                                    })
                                    .map((x) => (
                                        <tr key={x._id}>
                                            <td><img src={x.img} alt="" /></td>
                                            <td>{x.name}</td>
                                            <td>{x.price}</td>
                                            <td><i className="fa-solid fa-trash" onClick={() => deleteItem(x._id)}></i></td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Add