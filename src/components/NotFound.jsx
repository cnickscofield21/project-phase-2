import {Link} from "react-router-dom";

function NotFound() {
    return (
        <div className="flex min-h-full items-center justify-center py-12 px-2 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <h2 className="prose text-left font-bold text-accent">Not Found !</h2>
                <p>
                    We can't seem to find what you are looking for.&nbsp;
                    <Link className="link link-accent" to="/" >Try Again?</Link>
                </p>
            </div>
        </div>
    )
}

export default NotFound;