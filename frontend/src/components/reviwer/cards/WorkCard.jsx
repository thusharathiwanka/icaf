import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../config/config";
import { getUserToken } from "../../../auth/userAuth";

const ResearchPaperApproval = () => {
  const { id } = useParams();
  let [card, setCard] = useState([]);
  const [btnClick, setbtnClick] = useState(false);

  useEffect(async () => {
    const resCard = await fetch(`${BASE_URL}/publication/pending/${id}`, {
      headers: {
        authToken: getUserToken(),
      },
    });

    const data = await resCard.json();
    setCard(data.workshopcard);
    setbtnClick(true);
  }, []);

  const Approvehandle = async (id) => {
    const res = await fetch(`${BASE_URL}/publication/approve/${id}`, {
      method: "PATCH",
      headers: {
        authToken: getUserToken(),
      },
    });

    if (res.ok) {
      toast.success("Successfully Approved");
      setbtnClick(id);
    }
  };

  const Rejecthandle = async (id) => {
    const res = await fetch(`${BASE_URL}/publication/reject/${id}`, {
      method: "PATCH",
      headers: {
        authToken: getUserToken(),
      },
    });
    if (res.ok) {
      toast.success("Successfully Rejected");
      setbtnClick(id);
    }
  };
  return (
    <div>
      <h3>Workshop Request</h3>
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
                    <div className="cardbtn">Download</div>
                  </Link>
                </div>
              </td>
              <td>
                <div className="cardbtn">Approve</div>
              </td>

              <td>
                <div className="cardbtn">Dicline</div>
              </td>
            </tr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPaperApproval;
