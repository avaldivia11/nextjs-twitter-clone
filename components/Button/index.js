import { colors } from "../../styles/theme";

export default function Button ({children, onClick}){
    return (
        <>
            <button onClick={onClick}>
                {children}
            </button>
            <style jsx>{`
                button {
                    align-items: center;
                    background: ${colors.black};
                    border-radius: 9999px;
                    border: 0px;
                    color: #fff;
                    display: flex;
                    font-size: 16px;
                    font-weight: 800;
                    margin-top: 20px;
                    padding: 8px 24px;
                    transition: opacity .3s ease;
                }
                button > :global(svg){
                    margin-right: 10px;
                }
                button:hover{
                    opacity: .7;
                }
            `}</style>
        </>
    )
}