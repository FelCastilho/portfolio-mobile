import './style.css'

import { FaReact, FaSass, FaFigma } from "react-icons/fa";
import { SiExpo } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { TbBrandCss3, TbBrandHtml5, TbBrandJavascript  } from "react-icons/tb";
import { LiaGitAlt } from "react-icons/lia";

export function Technology() {
    return (
        <section className="my-techs" id="techs">

            <div className="container-techs">

                <div className="container-text">

                    <div className="container-title">
                        <h1>Minhas <br /> tecnologias</h1>
                    </div>

                    <div className="container-hover"></div>
        
                </div>

                <div className="container-icons">

                    <div className="first-group">
                        <FaReact 
                            className='techs-icon'
                        />
                        <SiExpo
                            className='techs-icon'
                        />
                        <TbBrandTypescript 
                            className='techs-icon'
                        />
                    </div>
        
                    <div className="second-group">
                        <TbBrandHtml5 
                            className='techs-icon'
                        />
                        <TbBrandCss3 
                            className='techs-icon'
                        />
                        <TbBrandJavascript 
                            className='techs-icon'
                        />
                    </div>
        
                    <div className="third-group">
                        <FaSass 
                            className='techs-icon'
                        />
                        <FaFigma 
                            className='techs-icon'
                        />
                        <LiaGitAlt 
                            className='techs-icon'
                            />
                    </div>
        
                </div>

            </div>

        </section>
    )
}