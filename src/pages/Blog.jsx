import React from "react";
import MainLayout from "../layouts/MainLayout";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Blog (){

    //state
    const [content, setContent]= useState([])

    //component did mount
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            console.info(res.data)
            setContent(res.data)
        })
        .catch((err)=>{
            console.error(err)
        })
    },[])

    return (
        <MainLayout>
            <h1>Blog Page  </h1>
            <div className="blog_wrapper">
                {content.map((item)=>{
                    return (
                        <span>
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>

                            <Link to={`/blog/${item.id}/${item.title}`}>Detail</Link>
                        </span>
                    )
                })}
            </div>
        </MainLayout>
    )
}