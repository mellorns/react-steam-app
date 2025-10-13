// src/pages/UnderConstruction.jsx
import { useNavigate } from "react-router";
import "../../assets/styles/underConstuction.scss";

export default function UnderConstruction() {
    const navigate = useNavigate();

    return (
        <div className="under-construction">
            <div className="content">
                <h1>Page under development</h1>
                <p>
                    This section is still being prepared for launch. We are actively working to make
                    it better.
                </p>
                <button onClick={() => navigate(-1)}>⬅ GO back</button>
            </div>
        </div>
    );
}
