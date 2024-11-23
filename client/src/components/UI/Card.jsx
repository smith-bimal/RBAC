/* eslint-disable react/prop-types */
const Card = ({ children }) => {
    return (
        <div className="rounded-2xl bg-white p-6">
            {children}
        </div>
    )
}

export default Card