import Link from 'next/link'

export const Navbar = () => {
    return (
        <div style={{display: 'flex', gap: '10px'}}>
            <div>
                <Link href="/">Home</Link>
            </div>
            <div>
                <Link href="/products">Products</Link>
            </div>
            <div>
                <Link href="/user">User</Link>
            </div>
            <div>
                <Link href="/cart">Cart</Link>
            </div>
        </div>
    )
}