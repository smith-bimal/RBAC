/* eslint-disable react/prop-types */
const Card = ({ children }) => {
    return (
        <div className="rounded-2xl bg-white md:p-6 p-4 overflow-hidden">
            {children}
        </div>
    )
}

export default Card