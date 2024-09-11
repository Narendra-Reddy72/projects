import React, { useState } from "react";
import axios from 'axios'
import '../../assets/styles/signup.css';

function BookForm(){
    const[title,setTitle] = useState('')
    const[author,setAuthor] = useState('');
    const[isbn,setIsbn] = useState('');
    const[publicationDate,setPublicationDate] = useState('');
    const[copiesAvailable,setCopiesAvailable] = useState('')
    const[genre,setGenre] = useState('');
    const[coverImage,setCoverImage] = useState('');


    const BookForm = async(e)=>{
        e.preventDefault()
        try{
            const payload = { title,author,isbn,publicationDate,copiesAvailable,genre,coverImage }
            const response = await axios.post('http://localhost:4500/api/book/create',payload)
            console.log(response.data.data)
        }catch(err){
            console.error(err)
        }
    }

    return(
        <div className="book-form-container">
            <form action="" className="book-form"onSubmit={BookForm}>
            <h1 className="book-form-title">Book Signup Form</h1>
            <table className="book-form-table">
            <tbody>
            <tr>
                    <td><label htmlFor="" className="book-form-label">Title:</label></td>
                    <td><input type="text" className="book-form-input" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Enter your name"/></td>
                </tr>
                <tr>
                    <td><label htmlFor="" className="book-form-label">Author:</label></td>
                    <td><input type="text" className="book-form-input" value={author} onChange={(e)=>setAuthor(e.target.value)} placeholder="Enter your Email"/></td>
                </tr>
                <tr>
                    <td><label htmlFor="" className="book-form-label">ISBN:</label></td>
                    <td><input type="number" className="book-form-input" value={isbn} onChange={(e)=>setIsbn(e.target.value)} placeholder="Enter your Role"/></td>
                </tr>
                <tr>
                    <td><label htmlFor="" className="book-form-label">PublicationDate:</label></td>
                    <td><input type="number" className="book-form-input" value={publicationDate} onChange={(e)=>setPublicationDate(e.target.value)} placeholder="Enter your password"/></td>
                </tr>
                    <td><label htmlFor="" className="book-form-label">CopiesAvailable:</label></td>
                    <td><input type="number" className="book-form-input" value={copiesAvailable} onChange={(e)=>setCopiesAvailable(e.target.value)} placeholder="Enter your name"/></td>
                <tr>
                    <td><label htmlFor="" className="book-form-label">Genre:</label></td>
                    <td><input type="text" className="book-form-input" value={genre} onChange={(e)=>setGenre(e.target.value)} placeholder="Enter your Email"/></td>
                </tr>
                <tr>
                <td><label htmlFor="" className="book-form-label">CoverImage:</label></td>
                <td><input type="image" src="" alt=""  value={coverImage} onChange={(e)=>setCoverImage(e.target.value)} placeholder="Insert imange"/></td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <button className="submit-button">CreateBook</button>
                    </td>
                </tr>
            </tbody>
            </table>
            </form>
        </div>
    )
}

export default BookForm;