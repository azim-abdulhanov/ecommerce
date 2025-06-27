import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">E-Shop</Link>
      <ul className="flex gap-4">
        <li><Link to="/cart" className="text-gray-700 hover:text-blue-600">Cart</Link></li>
        <li><Link to="/checkout" className="text-gray-700 hover:text-blue-600">Checkout</Link></li>
        <li><Link to="/profile" className="text-gray-700 hover:text-blue-600">Profile</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar