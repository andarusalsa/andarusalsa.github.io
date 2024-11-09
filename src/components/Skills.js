import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Consistently honing skills with a passion for learning and continuous growth.</p>
                        <table className="table-skill">
                          <thead>
                            <tr >
                              <th>Skills</th>
                              <th>Tools and Technologies</th>
                              <th>Web Development</th>
                              <th>SDLC</th>
                            </tr>
                          </thead>
                          <tbody className="body-skill">
                            <tr>
                              <td>UI/UX Design</td>
                              <td>Figma</td>
                              <td>React</td>
                              <td>Agile</td>
                            </tr>
                            <tr>
                              <td>Product Design</td>
                              <td>Miro</td>
                              <td>JavaScript</td>
                            </tr>
                            <tr>
                              <td>FrontEnd Development</td>
                              <td>Trello</td>
                              <td>HTML</td>
                            </tr>
                            <tr>
                              <td>Product Development</td>
                              <td>GitHub</td>
                              <td>CSS</td>
                            </tr>
                            <tr>
                              <td>Project Mangement</td>
                              <td>Visual Studi Code</td>
                            </tr>
                            <tr>
                              <td>Usability Testing</td>
                              <td>Google Workspace & Colab</td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
