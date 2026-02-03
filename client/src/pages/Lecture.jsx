import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Lecture() {
  const { id } = useParams();
  const [l, setL] = useState(null);

  useEffect(() => {
    fetch(`/api/lecture/${id}`).then(r => r.json()).then(setL);
  }, []);

  if (!l) return null;

  return (
    <div className="content">
      <iframe src={l.embedLink} width="100%" height="450" allowFullScreen />
      <div style={{ marginTop: 10 }}>
        {l.downloadLink && <a href={l.downloadLink}><button>Download</button></a>}
        {l.notesLink && <a href={l.notesLink}><button>Notes</button></a>}
        {l.dppLink && <a href={l.dppLink}><button>DPP</button></a>}
      </div>
    </div>
  );
}
