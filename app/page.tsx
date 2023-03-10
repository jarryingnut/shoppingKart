import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">SaddaGalla</h1>
            <p className="mb-5">Check out our latest collection</p>
            {/* <button className="btn btn-primary">Shop</button> */}
            <label htmlFor="my-drawer" className="btn btn-outline btn-info drawer-button rounded-none">Shop Now</label>
          </div>
        </div>
      </div>
    </>
  )
}
