import { fonts, colors, breakpoints } from "../../styles/theme";
import { addOpacityToColor } from "../../styles/utils";

const backgroundColor = addOpacityToColor(colors.primary, 0.3)
console.log('bgc--->',backgroundColor)
export default function AppLayout ({children}){
    return (
        <>
            <div>
                <main>
                    {children}
                </main>
            </div>
            <style jsx>{`
                    div {
                        display: grid;
                        height: 100vh;
                        place-items: center;
                    }
                    main {
                        background: #fff;
                        border-radius: 10px;
                        box-shadow: 0 10px 25px rgba(0,0,0,.1);
                        width: 100%;
                        height: 100%;
                    }
                    @media (min-width: ${breakpoints.mobile}){
                        main{
                            width: 450px;
                            height: 90vh;

                        }
                    }   
                `}
            </style>
            <style jsx global>{`                
                html,
                body {
                    background-image:
                        radial-gradient(${backgroundColor} 1px, transparent 1px),
                        radial-gradient(${backgroundColor} 1px, transparent 1px);
                    background-position: 0 0, 25px 25px;
                    background-size: 50px 50px;
                    padding: 0;
                    margin: 0;
                    font-family: ${fonts.base}
                }
                * {
                    box-sizing: border-box;
                    
                }
                
                `}

            </style>
        </>
    )
}