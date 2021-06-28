import React from "react";
import { Link } from "react-router-dom";

const ResearchPaperApproval = () => {
  return (
    <div>
      <h3>Researcher Paper Request</h3>
      <hr></hr>
      <div className="reviewer-research-card-container">
        <div className="reviewer-research-card">
          <div>
            <div>
              <span className="reviewer-research-date">Created Date</span>
            </div>
            <hr></hr>
            <span className="reviewer-research-date">Jan 19, 2020</span>
          </div>
          <header>
            <hr></hr>
            <h2>JavaScript Short Circuiting</h2>
          </header>

          <div>
            <tr>
              <td>
                <div>
                  <Link
                    to={{
                      pathname:
                        "https://cdn.scribbr.com/wp-content/uploads/2020/11/APA-7th-edition-tem...",
                    }}
                    target="blank"
                  >
                    <div className="downbtn">Download</div>
                  </Link>
                </div>
              </td>
              <td>
                <div className="downbtn">Approve</div>
              </td>

              <td>
                <div className="downbtn">Dicline</div>
              </td>
            </tr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPaperApproval;
