import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import AlbumTeam from "./pages/AlbumTeam/AlbumTeam";


const router = createBrowserRouter ([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/album/:id",
        element: <AlbumTeam></AlbumTeam>
    },
])

export {router};