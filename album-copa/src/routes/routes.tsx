import { createBrowserRouter } from "react-router-dom";

import Login from '../pages/Login/Login';
import Home from "../pages/Home/Home";

import Private from "./private";
import Layout from "./layout";
import AlbumTeam from "../pages/AlbumTeam/AlbumTeam";
import MeuAlbum from "../pages/MeuAlbum/MeuAlbum";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <Login></Login>
    },
    {
        element: (
            <Private>
                <Layout></Layout>
            </Private>
        ), children: [
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "home/album/:id",
                element: <AlbumTeam></AlbumTeam>
            },
            {
                path: "home/meu-album",
                element: <MeuAlbum></MeuAlbum>
            }
        ]
    }
])

export {router};