import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <ul class="bg-red-500 justify-center py-14 select-none flex">
                <li>
                    <button class="py-2 px-4 shadow-md no-underline rounded-full bg-red-200 text-black font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"><Link to="/signin">Se connecter</Link></button>
                </li>
                <li>
                    <button class="py-2 px-4 shadow-md no-underline rounded-full bg-red-500 text-black font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2"><Link to="/signup">Créer un compte</Link></button>
                </li>
            </ul>
        </nav>
    )
}

export default Header
