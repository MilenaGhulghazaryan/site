import Gallery from "../Gallery/gallery";
import Home from "../Home/home";
import Services from "../Services/services";

export const MenuArr = [
    { id: Math.random(), name: "Home", element: <Home />, path: '/' },
    { id: Math.random(), name: "Services", element: <Services />, path: '/services' },
    { id: Math.random(), name: "Gallery", element: <Gallery />, path: '/gallery' }
]