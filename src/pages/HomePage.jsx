import logo from "../assets/img/logo.avif"

export default function HomePage() {
    return (
        <div>

            <h1 className="text-center">Home Page</h1>
            <p className="text-center">Bevenenuto nel nostro store</p>

            <img
                src={logo}
                alt="Logo"
                className="img-fluid w-100 rounded shadow"

            />
        </div>


    )


}