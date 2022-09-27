import { colors } from "../../styles/theme";

export default function Button ({children, onClick}){
    return (
        <>
            <button onClick={onClick}>
                {children}
            </button>
            <style jsx>{`
                button {
                    background: ${colors.black};
                    border: 0px;
                    color: #fff;
                    border-radius: 9999px;
                    font-size: 16px;
                    font-weight: 800;
                    padding: 8px 24px;
                    margin-top: 20px;
                    transition: opacity .3s ease;
                }
                button:hover{
                    opacity: .7;
                }
            `}</style>
        </>
    )
}