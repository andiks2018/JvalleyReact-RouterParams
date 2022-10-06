import React from "react";
import { Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export default function Home(){
    return(
        <MainLayout>
            <h1>Home page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nisi facilis consequatur! Tempore similique eos, ipsum, dolorum at exercitationem fuga eius commodi, voluptates recusandae consequuntur?</p>
        </MainLayout>
    )
}