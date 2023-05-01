import React from "react";

const Advertisement = () => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src="adv1.jpg" alt="adv1" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">거울좀봐라</h2>
        <p>돈좀쓰자.</p>
        <div className="card-actions justify-end">
          <a
            href="https://www.gangnamunni.com/hospitals/322"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-primary">눌러</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
