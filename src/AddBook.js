import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddBook() {


    const [isLoading, setLoading] = useState(false);
    const navigation = useNavigate();
    const MyFormik = useFormik({
        initialValues: {
            title: "",
            author: "",
            published: "",
            book_added_date: "",
            staff: "",
            image: ""
        },
        validate: (values) => {
            let errors = {}

            if (!values.title) {
                errors.title = "Please enter the title"

            }

            if (!values.author) {
                errors.author = "Please enter the author name"
            }


            if (!values.published) {
                errors.published = "Please select the book published date"

            }
            if (!values.book_added_date) {
                errors.book_added_date = "Please select the date ( Today date )"

            }

            if (!values.staff) {
                errors.staff = "Please enter staff name"

            }
            if (!values.image) {
                errors.image = "Please enter book image URL "

            }

            return errors;

        },
        onSubmit: async (value) => {

            try {
                setLoading(true)
                await axios.post("https://63a149e3e3113e5a5c514a70.mockapi.io/books", value);
                navigation("/staff-dashboard")
            } catch (error) {
                console.log(error)
            }

        }
    });
    return (

        <div className="container mt-5">
            <form onSubmit={MyFormik.handleSubmit}>
                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <label>Title</label>
                        <input
                            name="title"
                            value={MyFormik.values.title}
                            onChange={MyFormik.handleChange}
                            type="text"
                            className={`form-control ${MyFormik.errors.title ? "is-invalid" : ""}`}

                        />
                        <span style={{ color: "crimson" }}>{MyFormik.errors.title}</span>
                    </div>

                    <div className="col-lg-6">
                        <label>Author</label>
                        <input
                            name="author"
                            value={MyFormik.values.author}
                            onChange={MyFormik.handleChange}
                            type="text"
                            className={`form-control ${MyFormik.errors.author ? "is-invalid" : ""}`}
                        />
                        <span style={{ color: "crimson" }}>{MyFormik.errors.author}</span>
                    </div>

                    <div className="col-lg-4 mt-3">
                        <label>Published On</label>
                        <input
                            name="published"
                            value={MyFormik.values.published}
                            onChange={MyFormik.handleChange}
                            type="date"
                            className={`form-control ${MyFormik.errors.published ? "is-invalid" : ""}`}
                        />

                        <span style={{ color: "crimson" }}>{MyFormik.errors.published}</span>
                    </div>
                    <div className="col-lg-4 mt-3">
                        <label>Book Added Date ( Today date )</label>
                        <input
                            name="book_added_date"
                            value={MyFormik.values.book_added_date}
                            onChange={MyFormik.handleChange}
                            type="date"
                            className={`form-control ${MyFormik.errors.book_added_date ? "is-invalid" : ""}`}
                        />

                        <span style={{ color: "crimson" }}>{MyFormik.errors.book_added_date}</span>
                    </div>
                    <div className="col-lg-4 mt-3">
                        <label>Staff Name</label>
                        <input
                            name="staff"
                            value={MyFormik.values.staff}
                            onChange={MyFormik.handleChange}
                            type="text"
                            className={`form-control ${MyFormik.errors.staff ? "is-invalid" : ""}`}
                        />

                        <span style={{ color: "crimson" }}>{MyFormik.errors.staff}</span>
                    </div>
                    <div className="col-lg-12 mt-3">
                        <label>Image URL</label>
                        <input
                            name="image"
                            value={MyFormik.values.image}
                            onChange={MyFormik.handleChange}
                            type="url"
                            className={`form-control ${MyFormik.errors.image ? "is-invalid" : ""}`}
                        />

                        <span style={{ color: "crimson" }}>{MyFormik.errors.image}</span>
                    </div>
                    <div className="col-lg-3 mt-3">
                        <input type={"submit"} value={isLoading ? "Adding..." : "Add"} className="btn btn-dark mt-2" disabled={isLoading} />
                    </div>
                </div>
            </form>

        </div>

    )
}

export default AddBook